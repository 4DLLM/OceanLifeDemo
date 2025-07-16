import { 
  Box, 
  Heading, 
  Text, 
  Button, 
  Container, 
  Stack, 
  Image, 
  SimpleGrid,
  Flex,
  Icon,
  useColorModeValue,
  VStack,
  Badge
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaAnchor, FaShieldAlt, FaMobileAlt, FaChartLine, FaClock, FaCloud } from 'react-icons/fa';
import { MdSecurity, MdSmartphone } from 'react-icons/md';
import { IoMdBoat } from 'react-icons/io';
import TestimonialCarousel from '../components/TestimonialCarousel';
import GoogleReviews from '../components/GoogleReviews';
import LiveDashboardDemo from '../components/platform/LiveDashboardDemo';
import PricingCalculator from '../components/platform/PricingCalculator';
import QRCodeDemo from '../components/platform/QRCodeDemo';
import { getImagePath } from '../utils/paths';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack align={'center'} textAlign={'center'}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'brand.primary'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize="xl">{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

const HomePage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        bg="brand.secondary" 
        position="relative"
        h={{base: "90vh", md: "85vh"}}
        overflow="hidden"
        width="100%"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage={`url('${getImagePath('/images/gallery/imgi_14_oceanlife-home-BG_result.webp')}')`}
          bgPosition="center"
          bgSize="cover"
          opacity={0.4}
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'rgba(0,0,0,0.5)',
            zIndex: 1
          }}
        />
        <Container maxW="1200px" h="100%" position="relative" px={{ base: 4, md: 8 }}>
          <Flex
            direction="column"
            align={{ base: "center", md: "flex-start" }}
            justify="center"
            h="100%"
            textAlign={{ base: "center", md: "left" }}
            color="white"
            zIndex={2}
          >
            <Badge 
              colorScheme="blue" 
              mb={4} 
              px={3} 
              py={1}
              fontSize="sm"
              bg="rgba(255,255,255,0.9)"
              color="brand.primary"
            >
              Tampa Bay's First AI-Powered Yacht Management Platform
            </Badge>
            <Heading 
              as="h1" 
              size="2xl" 
              mb={4}
              fontWeight={700}
              lineHeight={1.2}
            >
              The Future of <br />
              Yacht Management
            </Heading>
            <Text 
              fontSize={{ base: "lg", md: "xl" }}
              mb={6} 
              maxW="600px"
              textShadow="0 1px 2px rgba(0,0,0,0.3)"
            >
              Revolutionary AI-powered predictive maintenance, 24/7 digital monitoring, 
              and transparent subscription pricing. Experience yacht ownership without the worries.
            </Text>
            <Stack 
              direction={{ base: 'column', sm: 'row' }} 
              spacing={4}
              width={{ base: "100%", sm: "auto" }}
            >
              <Button
                as={RouterLink}
                to="/platform"
                colorScheme="brand"
                bg="white"
                color="brand.primary"
                size="lg"
                fontWeight="bold"
                _hover={{ bg: 'gray.100' }}
                leftIcon={<MdSmartphone />}
              >
                See Platform Demo
              </Button>
              <Button
                as={RouterLink}
                to="/contact"
                colorScheme="brand"
                bg="brand.primary"
                size="lg"
                fontWeight="bold"
                _hover={{ bg: 'brand.primaryDark' }}
              >
                Get Started Today
              </Button>
            </Stack>
            <Text mt={4} fontSize="sm" opacity={0.9}>
              Proud Partner of Westshore Yacht Club
            </Text>
          </Flex>
        </Container>
      </Box>

      {/* Market Stats Section */}
      <Box py={8} bg="white" borderBottom="1px" borderColor="gray.200">
        <Container maxW={'1200px'}>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} textAlign="center">
            <Box>
              <Text fontSize="3xl" fontWeight="bold" color="brand.primary">$1.9B</Text>
              <Text color="gray.600">Market by 2029</Text>
            </Box>
            <Box>
              <Text fontSize="3xl" fontWeight="bold" color="brand.primary">100K+</Text>
              <Text color="gray.600">Tampa Bay Vessels</Text>
            </Box>
            <Box>
              <Text fontSize="3xl" fontWeight="bold" color="brand.primary">24/7</Text>
              <Text color="gray.600">Emergency Response</Text>
            </Box>
            <Box>
              <Text fontSize="3xl" fontWeight="bold" color="brand.primary">50%</Text>
              <Text color="gray.600">Maintenance Savings</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Revolutionary Features Section */}
      <Box py={16} bg="gray.50">
        <Container maxW={'1200px'}>
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl" color="brand.primary">
              Revolutionary Platform Features
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="800px">
              Industry-first technology that transforms yacht ownership from burden to luxury experience
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
              icon={<Icon as={FaChartLine} w={10} h={10} />}
              title={'AI Predictive Maintenance'}
              text={
                'Advanced algorithms predict failures before they occur, automatically ordering parts and scheduling service to save you 50% on maintenance costs.'
              }
            />
            <Feature
              icon={<Icon as={FaMobileAlt} w={10} h={10} />}
              title={'Digital Dashboard & QR Codes'}
              text={
                'Real-time vessel monitoring, instant QR code service activation, and complete maintenance history at your fingertips 24/7.'
              }
            />
            <Feature
              icon={<Icon as={FaClock} w={10} h={10} />}
              title={'24/7 Emergency Response'}
              text={
                'One-touch Coast Guard connectivity, automated distress signals, and immediate dispatch of nearest qualified technicians anytime.'
              }
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Live Dashboard Demo Section */}
      <LiveDashboardDemo />

      {/* Platform Preview Section */}
      <Box py={16}>
        <Container maxW={'1200px'}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Stack spacing={4} order={{ base: 2, md: 1 }}>
              <Heading as="h2" size="xl" color="brand.primary">
                Meet "Yachty" - Your AI Assistant
              </Heading>
              <Text color={'gray.600'} fontSize={'lg'}>
                The industry's first conversational AI specifically trained for yacht management. 
                Ask questions, get instant diagnostics, and receive proactive maintenance alerts.
              </Text>
              <Stack spacing={4} mt={6}>
                <VStack align="start" spacing={3}>
                  <Box display="flex" alignItems="start">
                    <Icon as={FaShieldAlt} color="brand.primary" boxSize={5} mt={1} mr={3} />
                    <Box>
                      <Text fontWeight="semibold">Natural Language Understanding</Text>
                      <Text fontSize="sm" color="gray.600">Ask questions in plain English - no technical jargon required</Text>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="start">
                    <Icon as={FaChartLine} color="brand.primary" boxSize={5} mt={1} mr={3} />
                    <Box>
                      <Text fontWeight="semibold">Instant Diagnostics & Insights</Text>
                      <Text fontSize="sm" color="gray.600">Get real-time analysis of engine performance and system health</Text>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="start">
                    <Icon as={FaClock} color="brand.primary" boxSize={5} mt={1} mr={3} />
                    <Box>
                      <Text fontWeight="semibold">Proactive Maintenance Scheduling</Text>
                      <Text fontSize="sm" color="gray.600">AI schedules services before problems occur, saving time and money</Text>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="start">
                    <Icon as={FaCloud} color="brand.primary" boxSize={5} mt={1} mr={3} />
                    <Box>
                      <Text fontWeight="semibold">Always Available, Always Learning</Text>
                      <Text fontSize="sm" color="gray.600">24/7 support that learns your vessel's unique needs over time</Text>
                    </Box>
                  </Box>
                </VStack>
              </Stack>
              <Button
                as={RouterLink}
                to="/platform"
                alignSelf="flex-start"
                colorScheme="brand"
                bg="brand.primary"
                _hover={{ bg: 'brand.primaryDark' }}
                size="md"
                mt={4}
              >
                Explore Platform Features
              </Button>
            </Stack>
            <Box order={{ base: 1, md: 2 }} display="flex" justifyContent="center">
              <Image
                alt={'Yachty AI Assistant Chat Interface'}
                src={getImagePath('/images/gallery/YachtyPhoneAppComncept.png')}
                objectFit={'contain'}
                maxH={{ base: '400px', md: '600px' }}
                w={'auto'}
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* QR Code Demo Section */}
      <QRCodeDemo />

      {/* Pricing Calculator Section */}
      <PricingCalculator />

      {/* Testimonials Section */}
      <Box py={16} bg="white">
        <Container maxW={'1200px'}>
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl" color="brand.primary">
              Trusted by Tampa Bay Yacht Owners
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="800px">
              See why yacht owners are switching to Ocean Life's revolutionary platform
            </Text>
          </VStack>
          <TestimonialCarousel />
        </Container>
      </Box>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* CTA Section */}
      <Box bg="brand.primary" color="white" py={16}>
        <Container maxW={'1200px'}>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 8, md: 10 }}
            align={'center'}
            justify={'center'}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Stack flex={1} spacing={4}>
              <Heading as="h2" size="xl">
                Ready to Transform Your Yacht Experience?
              </Heading>
              <Text fontSize="lg">
                Join the revolution. Experience predictive maintenance, transparent pricing, 
                and 24/7 digital access to your vessel.
              </Text>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                <Button
                  as={RouterLink}
                  to="/contact"
                  colorScheme="brand"
                  bg="white"
                  color="brand.primary"
                  size="lg"
                  fontWeight="bold"
                  _hover={{ bg: 'gray.100' }}
                >
                  Schedule Demo
                </Button>
                <Button
                  as={RouterLink}
                  to="/services"
                  colorScheme="brand"
                  variant="outline"
                  borderColor="white"
                  size="lg"
                  fontWeight="bold"
                  _hover={{ bg: 'whiteAlpha.200' }}
                >
                  Explore Services
                </Button>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              display={{ base: 'none', md: 'flex' }}
            >
              <Box position="relative">
                <Icon
                  as={IoMdBoat}
                  w={'300px'}
                  h={'200px'}
                  color="whiteAlpha.300"
                />
                <Badge
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  colorScheme="orange"
                  px={4}
                  py={2}
                  fontSize="lg"
                >
                  QR Code Ready
                </Badge>
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;