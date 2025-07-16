import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const submitForm = async (formType, formData) => {
  try {
    // Save to Firestore
    const submissionsRef = collection(db, 'formSubmissions');
    
    const submission = {
      ...formData,
      formType,
      timestamp: serverTimestamp(),
      status: 'pending',
    };

    const docRef = await addDoc(submissionsRef, submission);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}; 