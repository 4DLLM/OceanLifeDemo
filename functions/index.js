/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

require("dotenv").config();
const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");

admin.initializeApp();

// Initialize SendGrid with your API key
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (!SENDGRID_API_KEY) {
  console.error("SENDGRID_API_KEY is not set in environment variables!");
}
sgMail.setApiKey(SENDGRID_API_KEY);

// Log environment variables (without exposing sensitive data)
console.log("Checking environment variables:");
console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL ? "Set" : "Not set");
console.log("SENDGRID_FROM_EMAIL:", process.env.SENDGRID_FROM_EMAIL ? "Set" : "Not set");
console.log("SENDGRID_API_KEY:", SENDGRID_API_KEY ? "Set" : "Not set");

// Test function to send a simple email
exports.testEmail = onRequest(async (req, res) => {
  try {
    const msg = {
      to: process.env.ADMIN_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: "Test Email",
      text: "This is a test email from Firebase Functions",
      html: "This is a test email from Firebase Functions",
    };

    console.log("Attempting to send test email with config:", {
      to: msg.to,
      from: msg.from,
      subject: msg.subject,
    });

    const [response] = await sgMail.send(msg);
    console.log("Test email sent successfully:", response.statusCode);
    res.json({success: true, statusCode: response.statusCode});
  } catch (error) {
    console.error("Error sending test email:", error);
    if (error.response) {
      console.error("SendGrid API error:", error.response.body);
    }
    res.status(500).json({
      error: error.message,
      details: error.response ? error.response.body : null,
    });
  }
});

exports.handleFormSubmission = onDocumentCreated({
  document: "formSubmissions/{docId}",
  region: "us-central1",
  invoker: "public",
}, async (event) => {
  console.log("Function triggered for document:", event.params.docId);

  const snap = event.data;
  if (!snap) {
    console.error("No data associated with the event");
    return null;
  }

  const submission = snap.data();
  if (!submission) {
    console.error("No submission data found");
    return null;
  }

  const {formType, ...formData} = submission;

  // Email templates
  const emailTemplates = {
    application: {
      subject: "New Puppy Application Received",
      adminBody: `
        New puppy application received from ${formData.firstName} ${formData.lastName}
        
        Contact Information:
        Email: ${formData.email}
        Phone: ${formData.phone}
        
        View the full application in your Firebase Console.
      `,
      userBody: `
        Dear ${formData.firstName},

        Thank you for submitting your application for an Ohio Goldendoodles puppy! 
        
        We have received your application and will review it within 2-3 business days. 
        We'll contact you at ${formData.email} or ${formData.phone} to discuss next steps.

        If you have any questions in the meantime, please don't hesitate to reach out.

        Best regards,
        Ohio Goldendoodles Team
      `,
    },
    contact: {
      subject: "New Contact Form Submission",
      adminBody: `
        New contact form submission from ${formData.name}
        
        Email: ${formData.email}
        Phone: ${formData.phone}
        Subject: ${formData.subject}
        Message: ${formData.message}
      `,
      userBody: `
        Dear ${formData.name},

        Thank you for contacting Ohio Goldendoodles! 
        
        We have received your message and will get back to you as soon as possible.

        Best regards,
        Ohio Goldendoodles Team
      `,
    },
  };

  const template = emailTemplates[formType];
  if (!template) {
    console.error("Invalid form type:", formType);
    await snap.ref.update({
      status: "error",
      error: "Invalid form type",
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    return null;
  }

  try {
    // Prepare email messages following SendGrid's recommended pattern
    const adminMsg = {
      to: process.env.ADMIN_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: template.subject,
      text: template.adminBody.trim(),
      html: template.adminBody.trim().replace(/\n/g, "<br>"),
    };

    const userMsg = {
      to: formData.email,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: "Thank you for contacting Ohio Goldendoodles",
      text: template.userBody.trim(),
      html: template.userBody.trim().replace(/\n/g, "<br>"),
    };

    // Send both emails using SendGrid's recommended pattern
    const [adminResponse, userResponse] = await Promise.all([
      sgMail.send(adminMsg).then(([response]) => response),
      sgMail.send(userMsg).then(([response]) => response),
    ]);

    console.log("Emails sent successfully");
    console.log("Admin email status code:", adminResponse.statusCode);
    console.log("User email status code:", userResponse.statusCode);

    // Update submission status
    await snap.ref.update({
      status: "processed",
      adminEmailId: adminResponse.headers["x-message-id"],
      userEmailId: userResponse.headers["x-message-id"],
      processedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return {success: true};
  } catch (error) {
    console.error("Error sending emails:", error);

    // Update submission with error details
    await snap.ref.update({
      status: "error",
      error: error.message,
      errorDetails: {
        code: error.code,
        response: error.response && error.response.body,
      },
      errorTimestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    throw new Error(`Error processing submission: ${error.message}`);
  }
});
