import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Icon,
  useToast,
  InputGroup,
  InputLeftElement,
  Flex,
  Divider,
  Alert,
  AlertIcon,
  Badge,
  Select
} from '@chakra-ui/react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaAnchor,
  FaClock,
  FaExclamationTriangle
} from 'react-icons/fa';
import { MdEmergency } from 'react-icons/md';
import { submitForm } from '../services/formService';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vesselName: '',
    vesselLength: '',
    marina: '',
    serviceType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitForm('contact', formData);
      setIsSubmitted(true);
      toast({
        title: 'Message sent!',
        description: "We've received your inquiry and will contact you within 24 hours.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        vesselName: '',
        vesselLength: '',
        marina: '',
        serviceType: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please call us directly.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.secondary" color="white">
        <Container maxW="1200px" py={20} textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Contact Ocean Life
          </Heading>
          <Text fontSize="xl" maxW="800px" mx="auto">
            Ready to transform your yacht ownership experience? 
            Get in touch for a demo or immediate assistance.
          </Text>
        </Container>
      </Box>

      {/* Emergency Alert */}
      <Box bg="red.50" borderBottom="2px" borderColor="red.200">
        <Container maxW="1200px" py={4}>
          <HStack spacing={3} justify="center">
            <Icon as={MdEmergency} color="red.600" boxSize={6} />
            <Text fontWeight="bold" color="red.800">
              24/7 Emergency Support: 
            </Text>
            <Button
              as="a"
              href="tel:+17278884016"
              size="sm"
              colorScheme="red"
              leftIcon={<FaPhone />}
            >
              (727) 888-4016
            </Button>
          </HStack>
        </Container>
      </Box>

      {/* Contact Info & Form Section */}
      <Box py={16}>
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {/* Contact Information */}
            <Box>
              <Heading as="h2" size="xl" color="brand.primary" mb={6}>
                Get Started Today
              </Heading>
              <Text color="gray.600" fontSize="lg" mb={8}>
                Join Tampa Bay yacht owners who have already transformed their ownership 
                experience with Ocean Life's revolutionary platform. Schedule a demo or 
                discuss your yacht management needs.
              </Text>

              <VStack spacing={6} align="start" mb={8}>
                <HStack spacing={4}>
                  <Flex
                    w={10}
                    h={10}
                    align={'center'}
                    justify={'center'}
                    rounded={'full'}
                    bg="brand.primary"
                    color="white"
                  >
                    <Icon as={FaPhone} />
                  </Flex>
                  <Box>
                    <Text fontWeight="bold">General Inquiries</Text>
                    <Text color="gray.600">(727) 788-4016</Text>
                  </Box>
                </HStack>

                <HStack spacing={4}>
                  <Flex
                    w={10}
                    h={10}
                    align={'center'}
                    justify={'center'}
                    rounded={'full'}
                    bg="red.500"
                    color="white"
                  >
                    <Icon as={FaExclamationTriangle} />
                  </Flex>
                  <Box>
                    <Text fontWeight="bold">24/7 Emergency Line</Text>
                    <Text color="gray.600">(727) 888-4016</Text>
                  </Box>
                </HStack>

                <HStack spacing={4}>
                  <Flex
                    w={10}
                    h={10}
                    align={'center'}
                    justify={'center'}
                    rounded={'full'}
                    bg="brand.primary"
                    color="white"
                  >
                    <Icon as={FaEnvelope} />
                  </Flex>
                  <Box>
                    <Text fontWeight="bold">Email</Text>
                    <Text color="gray.600">info@oceanlifeyachtservices.com</Text>
                  </Box>
                </HStack>

                <HStack spacing={4}>
                  <Flex
                    w={10}
                    h={10}
                    align={'center'}
                    justify={'center'}
                    rounded={'full'}
                    bg="brand.primary"
                    color="white"
                  >
                    <Icon as={FaMapMarkerAlt} />
                  </Flex>
                  <Box>
                    <Text fontWeight="bold">Main Office</Text>
                    <Text color="gray.600">Westshore Yacht Club</Text>
                    <Text color="gray.600">Tampa Bay, FL</Text>
                  </Box>
                </HStack>

                <HStack spacing={4}>
                  <Flex
                    w={10}
                    h={10}
                    align={'center'}
                    justify={'center'}
                    rounded={'full'}
                    bg="brand.primary"
                    color="white"
                  >
                    <Icon as={FaClock} />
                  </Flex>
                  <Box>
                    <Text fontWeight="bold">Business Hours</Text>
                    <Text color="gray.600">Mon-Fri: 8am-6pm</Text>
                    <Text color="gray.600">Sat-Sun: 9am-5pm</Text>
                    <Badge colorScheme="green" mt={1}>24/7 Emergency Support</Badge>
                  </Box>
                </HStack>
              </VStack>

              <Divider my={8} />

              <Box>
                <Heading as="h3" size="md" color="brand.secondary" mb={4}>
                  Service Areas
                </Heading>
                <SimpleGrid columns={2} spacing={2}>
                  {[
                    "Westshore Yacht Club",
                    "Davis Island Yacht Club",
                    "Tampa Yacht & Country Club",
                    "St. Petersburg Yacht Club",
                    "Clearwater",
                    "Sarasota Bay"
                  ].map((area) => (
                    <Text key={area} color="gray.600" fontSize="sm">
                      • {area}
                    </Text>
                  ))}
                </SimpleGrid>
              </Box>
            </Box>

            {/* Contact Form */}
            <Box bg="white" p={8} borderRadius="lg" boxShadow="xl" borderTop="4px" borderColor="brand.primary">
              <Heading as="h2" size="lg" color="brand.primary" mb={6}>
                Request a Demo
              </Heading>

              {isSubmitted ? (
                <Alert status="success" borderRadius="md">
                  <AlertIcon />
                  Thank you for your interest! Our team will contact you within 24 hours to schedule your personalized demo.
                </Alert>
              ) : (
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4}>
                    <FormControl id="contact-name" isRequired>
                      <FormLabel htmlFor="contact-name">Your Name</FormLabel>
                      <InputGroup>
                        <InputLeftElement pointerEvents="none">
                          <Icon as={FaUser} color="gray.300" />
                        </InputLeftElement>
                        <Input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Captain John Smith"
                          focusBorderColor="brand.primary"
                          autoComplete="name"
                        />
                      </InputGroup>
                    </FormControl>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                      <FormControl id="contact-email" isRequired>
                        <FormLabel htmlFor="contact-email">Email</FormLabel>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <Icon as={FaEnvelope} color="gray.300" />
                          </InputLeftElement>
                          <Input
                            id="contact-email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="captain@yacht.com"
                            focusBorderColor="brand.primary"
                            autoComplete="email"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl id="contact-phone" isRequired>
                        <FormLabel htmlFor="contact-phone">Phone</FormLabel>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <Icon as={FaPhone} color="gray.300" />
                          </InputLeftElement>
                          <Input
                            id="contact-phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(813) 555-0123"
                            focusBorderColor="brand.primary"
                            autoComplete="tel"
                          />
                        </InputGroup>
                      </FormControl>
                    </SimpleGrid>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                      <FormControl id="vessel-name">
                        <FormLabel htmlFor="vessel-name">Vessel Name</FormLabel>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none">
                            <Icon as={FaAnchor} color="gray.300" />
                          </InputLeftElement>
                          <Input
                            id="vessel-name"
                            type="text"
                            name="vesselName"
                            value={formData.vesselName}
                            onChange={handleChange}
                            placeholder="Sea Dreams"
                            focusBorderColor="brand.primary"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl id="vessel-length">
                        <FormLabel htmlFor="vessel-length">Vessel Length</FormLabel>
                        <Input
                          id="vessel-length"
                          type="text"
                          name="vesselLength"
                          value={formData.vesselLength}
                          onChange={handleChange}
                          placeholder="54'"
                          focusBorderColor="brand.primary"
                        />
                      </FormControl>
                    </SimpleGrid>

                    <FormControl id="marina">
                      <FormLabel htmlFor="marina">Current Marina</FormLabel>
                      <Select
                        id="marina"
                        name="marina"
                        value={formData.marina}
                        onChange={handleChange}
                        placeholder="Select your marina"
                        focusBorderColor="brand.primary"
                      >
                        <option value="westshore">Westshore Yacht Club</option>
                        <option value="davis">Davis Island Yacht Club</option>
                        <option value="tampa">Tampa Yacht & Country Club</option>
                        <option value="stpete">St. Petersburg Yacht Club</option>
                        <option value="clearwater">Clearwater Marina</option>
                        <option value="other">Other</option>
                      </Select>
                    </FormControl>

                    <FormControl id="service-type" isRequired>
                      <FormLabel htmlFor="service-type">I'm Interested In</FormLabel>
                      <Select
                        id="service-type"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        placeholder="Select service type"
                        focusBorderColor="brand.primary"
                      >
                        <option value="platform-demo">Platform Demo</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="emergency">Emergency Services</option>
                        <option value="maintenance">Maintenance Services</option>
                        <option value="full-management">Full Management Package</option>
                        <option value="other">Other</option>
                      </Select>
                    </FormControl>

                    <FormControl id="contact-message">
                      <FormLabel htmlFor="contact-message">Additional Information</FormLabel>
                      <Textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your yacht and management needs..."
                        focusBorderColor="brand.primary"
                        rows={4}
                        autoComplete="off"
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      colorScheme="brand"
                      bg="brand.primary"
                      size="lg"
                      width="full"
                      isLoading={isSubmitting}
                      loadingText="Sending..."
                      _hover={{ bg: 'brand.primaryDark' }}
                    >
                      Request Demo
                    </Button>

                    <Text fontSize="xs" color="gray.500" textAlign="center">
                      By submitting this form, you agree to be contacted by Ocean Life Yacht Services 
                      regarding your yacht management needs.
                    </Text>
                  </VStack>
                </form>
              )}
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box py={8} bg="gray.50">
        <Container maxW="1200px">
          <Heading as="h3" size="lg" color="brand.primary" mb={6} textAlign="center">
            Westshore Yacht Club Location
          </Heading>
          <Box
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            h="400px"
            position="relative"
          >
            <iframe
              title="Ocean Life Yacht Services Location"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCf_ZqP6tXBot4oocjLRm8LDyHC6X3jDU4&q=Westshore+Yacht+Club,Tampa,FL&maptype=satellite"
              allowFullScreen
            />
          </Box>
          <Text mt={4} textAlign="center" color="gray.600">
            Westshore Yacht Club • Tampa Bay, Florida
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactPage;