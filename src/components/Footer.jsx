import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  SimpleGrid,
  useColorModeValue,
  Heading,
  Flex,
  Icon,
  Button,
  Badge,
  VStack
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaAnchor
} from 'react-icons/fa';
import { MdEmergency, MdSpeed, MdSecurity } from 'react-icons/md';
import { IoMdBoat } from 'react-icons/io';

const ListHeader = ({ children }) => {
  return (
    <Heading
      as="h4" 
      fontSize="lg" 
      fontWeight="bold" 
      mb={3} 
      color="brand.primary"
    >
      {children}
    </Heading>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.900', 'gray.900')}
      color={useColorModeValue('gray.300', 'gray.200')}
    >
      {/* Emergency Banner */}
      <Box bg="red.600" color="white" py={3}>
        <Container maxW="1200px">
          <Flex justify="center" align="center" wrap="wrap" gap={4}>
            <Flex align="center">
              <Icon as={MdEmergency} mr={2} />
              <Text fontWeight="bold">24/7 Emergency Support:</Text>
            </Flex>
            <Button
              as="a"
              href="tel:+17278884016"
              size="sm"
              colorScheme="whiteAlpha"
              variant="outline"
              leftIcon={<FaPhoneAlt />}
            >
              (727) 888-4016
            </Button>
          </Flex>
        </Container>
      </Box>

      <Container as={Stack} maxW={'1200px'} py={12}>
        <SimpleGrid
          templateColumns={{ base: '1fr', sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          {/* Company Info */}
          <Stack spacing={4}>
            <Box>
              <Flex align="center" mb={2}>
                <Icon as={IoMdBoat} boxSize={8} color="brand.primary" mr={2} />
                <Box>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    Ocean Life
                  </Text>
                  <Text fontSize="sm" color="gray.400" mt={-1}>
                    Yacht Services
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Text fontSize={'sm'} color="gray.400">
              Revolutionary AI-powered yacht management platform transforming vessel ownership 
              through predictive maintenance, 24/7 monitoring, and transparent pricing.
            </Text>
            <VStack align="start" spacing={2}>
              <Badge colorScheme="green" px={2}>
                <Flex align="center">
                  <Icon as={MdSecurity} mr={1} />
                  Licensed & Insured
                </Flex>
              </Badge>
              <Badge colorScheme="blue" px={2}>
                <Flex align="center">
                  <Icon as={MdSpeed} mr={1} />
                  AI-Powered Platform
                </Flex>
              </Badge>
            </VStack>
            <Stack direction={'row'} spacing={4}>
              <Link href={'https://www.facebook.com/oceanlifeyachtservices'} isExternal>
                <Icon as={FaFacebook} w={6} h={6} color="gray.400" _hover={{ color: 'brand.primary' }} />
              </Link>
              <Link href={'https://www.instagram.com/oceanlifeyachtservices'} isExternal>
                <Icon as={FaInstagram} w={6} h={6} color="gray.400" _hover={{ color: 'brand.primary' }} />
              </Link>
              <Link href={'https://www.linkedin.com/company/oceanlifeyachtservices'} isExternal>
                <Icon as={FaLinkedin} w={6} h={6} color="gray.400" _hover={{ color: 'brand.primary' }} />
              </Link>
            </Stack>
          </Stack>

          {/* Quick Links */}
          <Stack align={'flex-start'}>
            <ListHeader>Quick Links</ListHeader>
            <Link as={RouterLink} to={'/'} color="gray.400" _hover={{ color: 'white' }}>Home</Link>
            <Link as={RouterLink} to={'/services'} color="gray.400" _hover={{ color: 'white' }}>Services</Link>
            <Link as={RouterLink} to={'/platform'} color="gray.400" _hover={{ color: 'white' }}>
              Platform <Badge ml={1} colorScheme="orange" fontSize="2xs">NEW</Badge>
            </Link>
            <Link as={RouterLink} to={'/fleet'} color="gray.400" _hover={{ color: 'white' }}>Our Fleet</Link>
            <Link as={RouterLink} to={'/contact'} color="gray.400" _hover={{ color: 'white' }}>Contact</Link>
          </Stack>

          {/* Services */}
          <Stack align={'flex-start'}>
            <ListHeader>Services</ListHeader>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }}>AI Predictive Maintenance</Link>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }}>24/7 Digital Monitoring</Link>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }}>Emergency Response</Link>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }}>Crew Management</Link>
            <Link href="#" color="gray.400" _hover={{ color: 'white' }}>QR Service Activation</Link>
          </Stack>

          {/* Contact Info */}
          <Stack align={'flex-start'}>
            <ListHeader>Contact Us</ListHeader>
            <VStack align="start" spacing={3}>
              <Flex align="center">
                <Icon as={FaMapMarkerAlt} mr={2} color="brand.primary" />
                <Box>
                  <Text color="gray.300">Westshore Yacht Club</Text>
                  <Text fontSize="sm" color="gray.500">Tampa Bay, FL</Text>
                </Box>
              </Flex>
              <Flex align="center">
                <Icon as={FaPhoneAlt} mr={2} color="brand.primary" />
                <Link href="tel:+17277884016" color="gray.300" _hover={{ color: 'white' }}>
                  (727) 788-4016
                </Link>
              </Flex>
              <Flex align="center">
                <Icon as={FaEnvelope} mr={2} color="brand.primary" />
                <Link 
                  href="mailto:info@oceanlifeyachtservices.com" 
                  color="gray.300" 
                  _hover={{ color: 'white' }}
                  fontSize="sm"
                >
                  info@oceanlifeyachtservices.com
                </Link>
              </Flex>
            </VStack>
          </Stack>
        </SimpleGrid>

        {/* Service Areas */}
        <Box mt={12} pt={8} borderTop="1px" borderColor="gray.700">
          <Text fontSize="sm" fontWeight="bold" color="gray.400" mb={3}>
            Serving Tampa Bay's Premier Marinas:
          </Text>
          <Flex wrap="wrap" gap={4}>
            {[
              "Westshore Yacht Club",
              "Davis Island Yacht Club", 
              "Tampa Yacht & Country Club",
              "St. Petersburg Yacht Club",
              "Clearwater",
              "Sarasota Bay"
            ].map((location) => (
              <Text key={location} fontSize="sm" color="gray.500">
                {location} •
              </Text>
            ))}
          </Flex>
        </Box>
      </Container>

      {/* Bottom Bar */}
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={'gray.700'}
        bg="black"
      >
        <Container
          as={Stack}
          maxW={'1200px'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text fontSize="sm" color="gray.500">
            © {new Date().getFullYear()} Ocean Life Yacht Services. All rights reserved.
          </Text>
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'} fontSize="sm" color="gray.500" _hover={{ color: 'white' }}>
              Privacy Policy
            </Link>
            <Link href={'#'} fontSize="sm" color="gray.500" _hover={{ color: 'white' }}>
              Terms of Service
            </Link>
            <Link href={'#'} fontSize="sm" color="gray.500" _hover={{ color: 'white' }}>
              Platform Agreement
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;