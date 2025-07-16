import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Icon,
  useColorModeValue,
  Button,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  Flex
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  FaAnchor, 
  FaTools, 
  FaShip, 
  FaUsers,
  FaTruck,
  FaCog,
  FaSprayCan,
  FaClipboardCheck,
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaChartLine
} from 'react-icons/fa';
import { MdCheckCircle, MdSmartphone, MdSecurity } from 'react-icons/md';
import { IoMdBoat } from 'react-icons/io';

const ServiceCard = ({ icon, title, description, features, isDigital = false }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const iconBgColor = isDigital ? 'purple.100' : 'blue.100';
  const iconColor = isDigital ? 'purple.600' : 'blue.600';
  
  return (
    <Box
      bg={bgColor}
      p={6}
      rounded="lg"
      shadow="md"
      border="1px"
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
      h="full"
    >
      <VStack align="start" spacing={4} h="full">
        <HStack>
          <Box
            bg={iconBgColor}
            p={3}
            rounded="lg"
            color={iconColor}
          >
            <Icon as={icon} w={8} h={8} />
          </Box>
          {isDigital && (
            <Badge colorScheme="purple" fontSize="xs">
              PLATFORM POWERED
            </Badge>
          )}
        </HStack>
        <VStack align="start" spacing={2} flex={1}>
          <Heading size="md">{title}</Heading>
          <Text color="gray.600" fontSize="sm">
            {description}
          </Text>
          {features && (
            <List spacing={2} mt={2}>
              {features.map((feature, index) => (
                <ListItem key={index} fontSize="sm">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {feature}
                </ListItem>
              ))}
            </List>
          )}
        </VStack>
      </VStack>
    </Box>
  );
};

const ServicesPage = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const sectionBg = useColorModeValue('white', 'gray.800');

  const traditionalServices = [
    {
      icon: FaClipboardCheck,
      title: 'Yacht Operations & Administration',
      description: 'Complete vessel management with our advanced digital platform tracking every detail.',
      features: [
        'Digital crew management system',
        'AI-powered financial administration',
        'Real-time vessel condition monitoring',
        'Automated compliance tracking'
      ],
      isDigital: true
    },
    {
      icon: FaTools,
      title: 'Expert Yacht & Boat Repair',
      description: 'Beyond surface-level repairs with predictive maintenance preventing issues before they occur.',
      features: [
        'AI diagnostics for early detection',
        'QR code instant service requests',
        'Digital work order tracking',
        'Photo documentation system'
      ],
      isDigital: true
    },
    {
      icon: FaSprayCan,
      title: 'Yacht & Boat Cleaning Services',
      description: 'Premium cleaning services scheduled and tracked through our digital platform.',
      features: [
        'Automated scheduling system',
        'Eco-friendly product tracking',
        'Before/after photo documentation',
        'Service history database'
      ],
      isDigital: true
    },
    {
      icon: FaUsers,
      title: 'Exclusive Crew Services',
      description: 'Vetted professionals managed through our comprehensive crew platform.',
      features: [
        'Digital crew profiles & ratings',
        'Automated background checks',
        'Performance tracking metrics',
        'Instant crew communication'
      ],
      isDigital: true
    },
    {
      icon: FaTruck,
      title: 'Yacht Delivery & Relocation',
      description: 'Safe vessel transport with real-time GPS tracking and updates.',
      features: [
        'Live location tracking',
        'Weather routing optimization',
        'Digital inspection reports',
        'Automated ETA updates'
      ],
      isDigital: true
    },
    {
      icon: FaCog,
      title: 'Engine Maintenance Services',
      description: 'Predictive engine care powered by AI analysis and sensor data.',
      features: [
        'Predictive failure analysis',
        'Automated parts ordering',
        'Digital service records',
        'Performance optimization'
      ],
      isDigital: true
    }
  ];

  const subscriptionTiers = [
    {
      name: 'Essential',
      price: '$299',
      description: 'Perfect for yacht owners who want basic digital monitoring',
      features: [
        'Basic vessel monitoring dashboard',
        'Monthly digital inspections',
        'Email alerts and notifications',
        'Maintenance history tracking',
        'Business hours support'
      ]
    },
    {
      name: 'Professional',
      price: '$599',
      description: 'Comprehensive management with AI-powered insights',
      features: [
        'Everything in Essential',
        'AI predictive maintenance',
        'Yachty AI assistant',
        '16/7 priority support',
        'Weather integration',
        'Emergency response protocols',
        'QR code service activation'
      ],
      popular: true
    },
    {
      name: 'Admiral',
      price: '$999',
      description: 'Ultimate yacht management with concierge service',
      features: [
        'Everything in Professional',
        '24/7 concierge support',
        'Dedicated account manager',
        'Premium vendor network',
        'Insurance integration',
        'Custom reporting',
        'Fleet management tools'
      ]
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg="brand.secondary"
        color="white"
        py={20}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="1200px" position="relative" zIndex={1}>
          <VStack spacing={6} textAlign="center">
            <Badge
              colorScheme="orange"
              fontSize="md"
              px={3}
              py={1}
              bg="rgba(255,255,255,0.9)"
              color="brand.primary"
            >
              TRADITIONAL EXCELLENCE + DIGITAL INNOVATION
            </Badge>
            <Heading as="h1" size="2xl" fontWeight="bold">
              Comprehensive Yacht Services
            </Heading>
            <Text fontSize="xl" maxW="800px" opacity={0.9}>
              Premium yacht management services enhanced by revolutionary AI technology, 
              predictive maintenance, and 24/7 digital access.
            </Text>
            <HStack spacing={4} pt={4}>
              <Button
                as={RouterLink}
                to="/contact"
                size="lg"
                bg="white"
                color="brand.primary"
                _hover={{ bg: 'gray.100' }}
              >
                Get Started
              </Button>
              <Button
                as={RouterLink}
                to="/platform"
                size="lg"
                variant="outline"
                color="white"
                borderColor="white"
                leftIcon={<MdSmartphone />}
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                See Platform
              </Button>
            </HStack>
          </VStack>
        </Container>
        <Box
          position="absolute"
          bottom="-50%"
          left="-10%"
          opacity={0.1}
        >
          <Icon as={IoMdBoat} w="600px" h="600px" />
        </Box>
      </Box>

      {/* Services Grid */}
      <Box py={16}>
        <Container maxW="1200px">
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl">
              Full-Service Yacht Management
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="800px">
              Every traditional service enhanced with cutting-edge technology 
              for superior results and complete transparency.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {traditionalServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box py={16} bg={bgColor}>
        <Container maxW="1200px">
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl">
              How Our Platform-Powered Services Work
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="800px">
              Experience the seamless integration of traditional yacht services 
              with revolutionary technology.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            <VStack
              bg={sectionBg}
              p={6}
              rounded="lg"
              shadow="md"
              spacing={4}
              align="center"
              textAlign="center"
            >
              <Box
                bg="blue.100"
                p={4}
                rounded="full"
                color="blue.600"
              >
                <Text fontSize="2xl" fontWeight="bold">1</Text>
              </Box>
              <Text fontWeight="semibold">Sign Up & Onboard</Text>
              <Text fontSize="sm" color="gray.600">
                Choose your plan and we'll install QR codes and sensors on your yacht
              </Text>
            </VStack>

            <VStack
              bg={sectionBg}
              p={6}
              rounded="lg"
              shadow="md"
              spacing={4}
              align="center"
              textAlign="center"
            >
              <Box
                bg="blue.100"
                p={4}
                rounded="full"
                color="blue.600"
              >
                <Text fontSize="2xl" fontWeight="bold">2</Text>
              </Box>
              <Text fontWeight="semibold">Monitor & Predict</Text>
              <Text fontSize="sm" color="gray.600">
                AI continuously monitors your vessel and predicts maintenance needs
              </Text>
            </VStack>

            <VStack
              bg={sectionBg}
              p={6}
              rounded="lg"
              shadow="md"
              spacing={4}
              align="center"
              textAlign="center"
            >
              <Box
                bg="blue.100"
                p={4}
                rounded="full"
                color="blue.600"
              >
                <Text fontSize="2xl" fontWeight="bold">3</Text>
              </Box>
              <Text fontWeight="semibold">Instant Service</Text>
              <Text fontSize="sm" color="gray.600">
                Scan QR codes or use the app to request service in seconds
              </Text>
            </VStack>

            <VStack
              bg={sectionBg}
              p={6}
              rounded="lg"
              shadow="md"
              spacing={4}
              align="center"
              textAlign="center"
            >
              <Box
                bg="blue.100"
                p={4}
                rounded="full"
                color="blue.600"
              >
                <Text fontSize="2xl" fontWeight="bold">4</Text>
              </Box>
              <Text fontWeight="semibold">Track & Optimize</Text>
              <Text fontSize="sm" color="gray.600">
                View real-time updates and optimize your yacht's performance
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Subscription Plans */}
      <Box py={16}>
        <Container maxW="1200px">
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl">
              Transparent Subscription Pricing
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="800px">
              No hidden fees. No hourly charges. Just predictable monthly pricing 
              that saves you money.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {subscriptionTiers.map((tier) => (
              <Box
                key={tier.name}
                bg={sectionBg}
                p={8}
                rounded="lg"
                shadow={tier.popular ? '2xl' : 'lg'}
                border="2px"
                borderColor={tier.popular ? 'blue.500' : 'gray.200'}
                position="relative"
                transform={tier.popular ? 'scale(1.05)' : 'scale(1)'}
              >
                {tier.popular && (
                  <Badge
                    position="absolute"
                    top="-12px"
                    left="50%"
                    transform="translateX(-50%)"
                    colorScheme="orange"
                    px={3}
                    py={1}
                    fontSize="sm"
                  >
                    MOST POPULAR
                  </Badge>
                )}
                <VStack spacing={4} align="stretch">
                  <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                    {tier.name}
                  </Text>
                  <HStack justify="center">
                    <Text fontSize="4xl" fontWeight="bold" color="blue.600">
                      {tier.price}
                    </Text>
                    <Text fontSize="lg" color="gray.500">
                      /month
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    {tier.description}
                  </Text>
                  <List spacing={2}>
                    {tier.features.map((feature, index) => (
                      <ListItem key={index} fontSize="sm">
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        {feature}
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    as={RouterLink}
                    to="/contact"
                    colorScheme="blue"
                    size="lg"
                    w="full"
                    mt={4}
                  >
                    Choose {tier.name}
                  </Button>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={16} bg={bgColor}>
        <Container maxW="800px">
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl">
              Frequently Asked Questions
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Everything you need to know about our services and platform
            </Text>
          </VStack>

          <Accordion allowMultiple>
            <AccordionItem>
              <h3>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="semibold">
                    How does the AI predictive maintenance work?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4}>
                Our AI analyzes data from your yacht's sensors, maintenance history, and 
                manufacturer specifications to predict when components are likely to fail. 
                This allows us to schedule preventive maintenance before problems occur, 
                saving you from costly repairs and unexpected downtime.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h3>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="semibold">
                    What if I don't have internet on my yacht?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4}>
                Our platform is designed with offline-first functionality. All critical 
                features work without internet connection, and data automatically syncs 
                when you reconnect. You can monitor your vessel, request services, and 
                access documentation even in the middle of the ocean.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h3>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="semibold">
                    How quickly can technicians respond to service requests?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4}>
                For emergency services, we guarantee response within 30 minutes 24/7. 
                For routine maintenance, our AI schedules services at optimal times to 
                prevent issues. Most non-emergency services are completed within 24-48 hours.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h3>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="semibold">
                    Can I switch plans or cancel anytime?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4}>
                Absolutely! You can upgrade, downgrade, or cancel your subscription at any 
                time with no penalties. We also offer a 30-day money-back guarantee if 
                you're not completely satisfied with our services.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h3>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="semibold">
                    Do you service all types of yachts?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4}>
                Yes! We service all types and sizes of yachts, from 30-foot cruisers to 
                200-foot superyachts. Our platform adapts to your specific vessel's needs, 
                and our technician network includes specialists for every type of yacht 
                and system.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="brand.primary" color="white" py={16}>
        <Container maxW="1200px">
          <VStack spacing={6} textAlign="center">
            <Heading as="h2" size="xl">
              Ready to Experience the Future?
            </Heading>
            <Text fontSize="lg" maxW="600px" opacity={0.9}>
              Join yacht owners who are saving time and money with our 
              revolutionary platform-powered services.
            </Text>
            <HStack spacing={4}>
              <Button
                as={RouterLink}
                to="/contact"
                size="lg"
                bg="white"
                color="brand.primary"
                _hover={{ bg: 'gray.100' }}
              >
                Get Started Today
              </Button>
              <Button
                as={RouterLink}
                to="/platform"
                size="lg"
                variant="outline"
                borderColor="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                Explore Platform
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;