import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Radio,
  RadioGroup,
  Select,
  Stack,
  CheckboxGroup,
  Checkbox,
  useToast,
  Progress,
  Flex,
  Divider,
  Alert,
  AlertIcon,
  VStack,
  HStack,
  FormHelperText,
  FormErrorMessage,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { FaCheck, FaDog, FaHeart, FaHome, FaInfoCircle } from 'react-icons/fa';
import { submitForm } from '../services/formService';

const ApplicationPage = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toast = useToast();
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // Form data state
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',

    // Household Information
    homeType: '',
    ownRent: '',
    yard: '',
    fenced: '',
    adults: '',
    children: '',
    otherPets: '',

    // Puppy Preferences
    sizePreference: '',
    timeframe: '',
    primaryPurpose: '',
    primaryPurposeOther: '',
    trainingPlans: '',

    // Additional Questions
    questions: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle checkbox group changes
  const handleCheckboxChange = (name, values) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: values,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate final step fields
    const finalStepFields = getCurrentStepFields(4);
    const missingFields = finalStepFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      toast({
        title: 'Required Fields Missing',
        description: 'Please fill in all required fields before submitting.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await submitForm('application', formData);
      setIsSubmitted(true);
      toast({
        title: 'Application Submitted!',
        description: "We've received your puppy application and will review it soon.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: 'Submission Error',
        description: 'There was an error submitting your application. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Next step
  const nextStep = () => {
    // Validate current step before proceeding
    const currentStepFields = getCurrentStepFields(step);
    const missingFields = currentStepFields.filter(field => {
      if (field === 'landlordContact' && formData.ownRent !== 'rent') return false;
      if (field === 'fenced' && formData.yard !== 'yes') return false;
      if (field === 'childrenAges' && (!formData.children || formData.children === '0')) return false;
      if (field === 'petDetails' && formData.otherPets !== 'yes') return false;
      return !formData[field];
    });

    if (missingFields.length > 0) {
      toast({
        title: 'Required Fields Missing',
        description: 'Please fill in all required fields before proceeding.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newStep = step + 1;
    setStep(newStep);
    setProgress(newStep === 2 ? 50 : newStep === 3 ? 75 : 100);
  };

  // Helper function to get required fields for each step
  const getCurrentStepFields = (currentStep) => {
    switch (currentStep) {
      case 1:
        return ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zip'];
      case 2:
        return ['homeType', 'ownRent', 'yard', 'adults', 'otherPets'];
      case 3:
        return ['sizePreference', 'timeframe', 'primaryPurpose', 'trainingPlans'];
      case 4:
        return ['questions'];
      default:
        return [];
    }
  };

  // Previous step
  const prevStep = () => {
    const newStep = step - 1;
    setStep(newStep);
    setProgress(newStep === 1 ? 25 : newStep === 2 ? 50 : 75);
  };

  // Render different forms based on current step
  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <Box>
            <Heading as="h3" size="md" color="brand.secondary" mb={6}>
              Personal Information
            </Heading>
            <Stack spacing={4}>
              <HStack spacing={4}>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    focusBorderColor="brand.primary"
                  />
                </FormControl>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    focusBorderColor="brand.primary"
                  />
                </FormControl>
              </HStack>

              <HStack spacing={4}>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    focusBorderColor="brand.primary"
                  />
                </FormControl>
                <FormControl id="phone" isRequired>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    focusBorderColor="brand.primary"
                  />
                </FormControl>
              </HStack>

              <FormControl id="address" isRequired>
                <FormLabel>Street Address</FormLabel>
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  focusBorderColor="brand.primary"
                />
              </FormControl>

              <HStack spacing={4}>
                <FormControl id="city" isRequired>
                  <FormLabel>City</FormLabel>
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    focusBorderColor="brand.primary"
                  />
                </FormControl>
                <FormControl id="state" isRequired>
                  <FormLabel>State</FormLabel>
                  <Select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Select state"
                    focusBorderColor="brand.primary"
                  >
                    <option value="OH">Ohio</option>
                    <option value="KY">Kentucky</option>
                    <option value="IN">Indiana</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="MI">Michigan</option>
                    <option value="WV">West Virginia</option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>
                <FormControl id="zip" isRequired>
                  <FormLabel>ZIP Code</FormLabel>
                  <Input
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    focusBorderColor="brand.primary"
                  />
                </FormControl>
              </HStack>
            </Stack>
          </Box>
        );

      case 2:
        return (
          <Box>
            <Heading as="h3" size="md" color="brand.secondary" mb={6}>
              Household Information
            </Heading>
            <Stack spacing={4}>
              <FormControl id="homeType" isRequired>
                <FormLabel>Type of Home</FormLabel>
                <RadioGroup
                  name="homeType"
                  value={formData.homeType}
                  onChange={(value) => handleChange({ target: { name: 'homeType', value } })}
                >
                  <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                    <Radio value="house">House</Radio>
                    <Radio value="apartment">Apartment</Radio>
                    <Radio value="condo">Condo</Radio>
                    <Radio value="other">Other</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl id="ownRent" isRequired>
                <FormLabel>Do you own or rent?</FormLabel>
                <RadioGroup
                  name="ownRent"
                  value={formData.ownRent}
                  onChange={(value) => handleChange({ target: { name: 'ownRent', value } })}
                >
                  <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                    <Radio value="own">Own</Radio>
                    <Radio value="rent">Rent</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl id="yard" isRequired>
                <FormLabel>Do you have a yard?</FormLabel>
                <RadioGroup
                  name="yard"
                  value={formData.yard}
                  onChange={(value) => handleChange({ target: { name: 'yard', value } })}
                >
                  <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              {formData.yard === 'yes' && (
                <FormControl id="fenced">
                  <FormLabel>Is your yard fenced?</FormLabel>
                  <RadioGroup
                    name="fenced"
                    value={formData.fenced}
                    onChange={(value) => handleChange({ target: { name: 'fenced', value } })}
                  >
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                      <Radio value="partial">Partially</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              )}

              <HStack spacing={4}>
                <FormControl id="adults" isRequired>
                  <FormLabel>Number of Adults in Household</FormLabel>
                  <Select
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    focusBorderColor="brand.primary"
                    placeholder="Select"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                  </Select>
                </FormControl>

                <FormControl id="children">
                  <FormLabel>Number of Children in Household</FormLabel>
                  <Select
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    focusBorderColor="brand.primary"
                    placeholder="Select"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                  </Select>
                </FormControl>
              </HStack>

              <FormControl id="otherPets" isRequired>
                <FormLabel>Do you have other pets?</FormLabel>
                <RadioGroup
                  name="otherPets"
                  value={formData.otherPets}
                  onChange={(value) => handleChange({ target: { name: 'otherPets', value } })}
                >
                  <Stack direction="row" spacing={6}>
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            </Stack>
          </Box>
        );

      case 3:
        return (
          <Box>
            <Heading as="h3" size="md" color="brand.secondary" mb={6}>
              Puppy Preferences
            </Heading>
            <Stack spacing={4}>
              <FormControl id="sizePreference" isRequired>
                <FormLabel>Size Preference</FormLabel>
                <RadioGroup
                  name="sizePreference"
                  value={formData.sizePreference}
                  onChange={(value) => handleChange({ target: { name: 'sizePreference', value } })}
                >
                  <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                    <Radio value="mini">Mini (15-25 lbs)</Radio>
                    <Radio value="medium">Medium (25-45 lbs)</Radio>
                    <Radio value="standard">Standard (45-65+ lbs)</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl id="timeframe" isRequired>
                <FormLabel>When are you looking to bring home a puppy?</FormLabel>
                <Select
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleChange}
                  focusBorderColor="brand.primary"
                  placeholder="Select timeframe"
                >
                  <option value="asap">As soon as possible</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="flexible">Flexible/No specific timeline</option>
                </Select>
              </FormControl>

              <FormControl id="primaryPurpose" isRequired>
                <FormLabel>Primary purpose for your Goldendoodle</FormLabel>
                <RadioGroup
                  name="primaryPurpose"
                  value={formData.primaryPurpose}
                  onChange={(value) => handleChange({ target: { name: 'primaryPurpose', value } })}
                >
                  <Stack spacing={3}>
                    <Radio value="familyCompanion">Family Companion</Radio>
                    <Radio value="therapyDog">Therapy Dog</Radio>
                    <Radio value="serviceDog">Service Dog</Radio>
                    <Radio value="other">Other</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              {formData.primaryPurpose === 'other' && (
                <FormControl id="primaryPurposeOther" isRequired>
                  <FormLabel>Please specify your primary purpose</FormLabel>
                  <Textarea
                    name="primaryPurposeOther"
                    value={formData.primaryPurposeOther}
                    onChange={handleChange}
                    focusBorderColor="brand.primary"
                    placeholder="Please describe your primary purpose for getting a Goldendoodle"
                  />
                </FormControl>
              )}

              <FormControl id="trainingPlans" isRequired>
                <FormLabel>What are your training plans for your puppy?</FormLabel>
                <Textarea
                  name="trainingPlans"
                  value={formData.trainingPlans}
                  onChange={handleChange}
                  focusBorderColor="brand.primary"
                  placeholder="Please describe your training approach, classes you plan to attend, etc."
                />
              </FormControl>
            </Stack>
          </Box>
        );

      case 4:
        return (
          <Box>
            <Heading as="h3" size="md" color="brand.secondary" mb={6}>
              Additional Questions
            </Heading>
            <Stack spacing={4}>
              <FormControl id="questions" isRequired>
                <FormLabel>Do you have any questions for us?</FormLabel>
                <Textarea
                  name="questions"
                  value={formData.questions}
                  onChange={handleChange}
                  focusBorderColor="brand.primary"
                  placeholder="Any additional questions, comments, or information you'd like to share"
                  minHeight="150px"
                />
              </FormControl>

              <Alert status="info" borderRadius="md">
                <AlertIcon />
                <Box>
                  <Text fontWeight="bold">Next Steps:</Text>
                  <Text>
                    After submitting your application, we'll review it and contact you within 2-3 business days.
                    If approved, you'll be invited to place a deposit to secure your place on our waiting list.
                  </Text>
                </Box>
              </Alert>
            </Stack>
          </Box>
        );

      default:
        return null;
    }
  };

  // Success Message after submission
  const SuccessMessage = () => (
    <Box textAlign="center" py={10} px={6}>
      <Icon boxSize={'50px'} color={'green.500'} mb={6}>
        <FaCheck />
      </Icon>
      <Heading as="h2" size="xl" mt={6} mb={2} color="brand.primary">
        Application Submitted!
      </Heading>
      <Text fontSize="lg" color={'gray.600'}>
        Thank you for applying to adopt one of our Goldendoodle puppies. We'll review your application and contact you within 2-3 business days. If you have any questions in the meantime, please feel free to contact us.
      </Text>
      <Button
        colorScheme="brand"
        bg="brand.primary"
        color="white"
        _hover={{ bg: 'brand.primaryDark' }}
        size="lg"
        mt={8}
        as="a"
        href="/"
      >
        Return to Home
      </Button>
    </Box>
  );

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.secondary" color="white">
        <Container maxW="1200px" py={20} textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Puppy Application
          </Heading>
          <Text fontSize="xl" maxW="800px" mx="auto">
            Take the first step in bringing home your Ohio Goldendoodle
          </Text>
        </Container>
      </Box>

      {/* Application Section */}
      <Box py={12}>
        <Container maxW="900px">
          {!isSubmitted ? (
            <>
              {/* Pricing Information */}
              <Box mb={10} p={6} borderRadius="md" bg="gray.50" boxShadow="md">
                <Heading as="h2" size="lg" color="brand.primary" mb={4}>
                  Investment in a Quality Companion
                </Heading>
                <Text mb={4}>
                  Owning a premium Goldendoodle means welcoming a loving, intelligent, and well-socialized puppy into your home. 
                  We prioritize health, genetics, and temperament, ensuring you receive a remarkable lifelong companion.
                </Text>
                <Box p={4} bg="white" borderRadius="md" boxShadow="sm" mb={4}>
                  <Heading as="h3" size="md" color="brand.secondary" mb={2}>
                    Puppy Price: $2,800
                  </Heading>
                  <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mb={2}>
                    <Flex align="center">
                      <Icon as={FaCheck} color="brand.primary" mr={2} />
                      <Text><strong>Deposit:</strong> A $300 non-refundable deposit secures your spot in the selection process.</Text>
                    </Flex>
                    <Flex align="center">
                      <Icon as={FaCheck} color="brand.primary" mr={2} />
                      <Text><strong>Balance Due:</strong> The remaining $2,500 is due at pick-up.</Text>
                    </Flex>
                  </Stack>
                </Box>
                <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
                  <Heading as="h3" size="md" color="brand.secondary" mb={2}>
                    What's Included
                  </Heading>
                  <Stack spacing={2}>
                    <Flex align="center">
                      <Icon as={FaCheck} color="brand.primary" mr={2} />
                      <Text>Health Guarantee – Comprehensive vet check, first vaccinations, and deworming.</Text>
                    </Flex>
                    <Flex align="center">
                      <Icon as={FaCheck} color="brand.primary" mr={2} />
                      <Text>Socialization & Training Foundations – Early socialization, enrichment, and exposure to household environments.</Text>
                    </Flex>
                    <Flex align="center">
                      <Icon as={FaCheck} color="brand.primary" mr={2} />
                      <Text>Puppy Starter Kit – Includes a sample of high-quality food, a blanket with mom's scent, and training resources.</Text>
                    </Flex>
                  </Stack>
                </Box>
              </Box>
              
              {/* Progress Indicator */}
              <Box mb={8}>
                <Flex justify="space-between" mb={2}>
                  <Text fontWeight="bold">Step {step} of 4</Text>
                  <Text>{progress}% Complete</Text>
                </Flex>
                <Progress value={progress} size="sm" colorScheme="brand" borderRadius="full" />
              </Box>

              {/* Application Form */}
              <form onSubmit={handleSubmit}>
                <Box
                  p={8}
                  borderWidth="1px"
                  borderRadius="lg"
                  borderColor={borderColor}
                  bg={bgColor}
                  boxShadow="md"
                >
                  {renderForm()}
                  <Flex justify="space-between" mt={8}>
                    {step > 1 && (
                      <Button
                        type="button"
                        onClick={prevStep}
                        colorScheme="gray"
                        variant="outline"
                      >
                        Previous
                      </Button>
                    )}
                    {step < 4 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        colorScheme="brand"
                        bg="brand.primary"
                        _hover={{ bg: 'brand.secondary' }}
                        ml={step === 1 ? 'auto' : 0}
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        colorScheme="brand"
                        isLoading={isSubmitting}
                        loadingText="Submitting"
                        bg="brand.primary"
                        _hover={{ bg: 'brand.secondary' }}
                        ml={step === 1 ? 'auto' : 0}
                      >
                        Submit Application
                      </Button>
                    )}
                  </Flex>
                </Box>
              </form>
            </>
          ) : (
            <SuccessMessage />
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default ApplicationPage; 