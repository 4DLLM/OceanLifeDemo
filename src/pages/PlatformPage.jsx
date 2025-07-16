import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Button,
  Badge,
  Icon,
  useColorModeValue,
  HStack,
  List,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Flex,
  Stack
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  FaRobot, 
  FaChartLine, 
  FaQrcode, 
  FaMobileAlt,
  FaShieldAlt,
  FaClock,
  FaCloud,
  FaTools,
  FaBell,
  FaWater,
  FaCheckCircle,
  FaDollarSign,
  FaUserShield
} from 'react-icons/fa';
import { 
  MdDashboard, 
  MdNotifications, 
  MdSecurity,
  MdAnalytics,
  MdSupport,
  MdCloudSync
} from 'react-icons/md';
import { IoMdBoat } from 'react-icons/io';

const FeatureCard = ({ icon, title, description, features, colorScheme }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
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
    >
      <VStack align="start" spacing={4}>
        <HStack>
          <Icon as={icon} w={10} h={10} color={`${colorScheme}.500`} />
          <Heading size="md">{title}</Heading>
        </HStack>
        <Text color="gray.600">{description}</Text>
        {features && (
          <List spacing={2}>
            {features.map((feature, index) => (
              <ListItem key={index} fontSize="sm">
                <ListIcon as={FaCheckCircle} color="green.500" />
                {feature}
              </ListItem>
            ))}
          </List>
        )}
      </VStack>
    </Box>
  );
};

const PlatformPage = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  const platformFeatures = [
    {
      icon: FaRobot,
      title: 'Yachty AI Assistant',
      description: 'Your 24/7 intelligent yacht management companion',
      colorScheme: 'blue',
      features: [
        'Natural language processing',
        'Predictive maintenance alerts',
        'Voice command integration',
        'Multi-language support',
        'Learning from your preferences'
      ]
    },
    {
      icon: FaChartLine,
      title: 'Predictive Analytics',
      description: 'AI-powered insights that prevent problems before they occur',
      colorScheme: 'purple',
      features: [
        'Failure prediction algorithms',
        'Cost optimization recommendations',
        'Usage pattern analysis',
        'Maintenance scheduling AI',
        'Parts inventory forecasting'
      ]
    },
    {
      icon: FaQrcode,
      title: 'QR Code System',
      description: 'Instant service activation with component-specific QR codes',
      colorScheme: 'orange',
      features: [
        'One-scan service requests',
        'Component history access',
        'Digital documentation',
        'Automated work orders',
        'Photo/video attachments'
      ]
    },
    {
      icon: MdDashboard,
      title: 'Real-Time Dashboard',
      description: 'Complete vessel visibility from anywhere in the world',
      colorScheme: 'teal',
      features: [
        'Live system monitoring',
        'GPS tracking & geofencing',
        'Weather integration',
        'Fuel & fluid levels',
        'Engine performance metrics'
      ]
    },
    {
      icon: FaShieldAlt,
      title: 'Emergency Response',
        description: '24/7 emergency support with instant Coast Guard connectivity',
      colorScheme: 'red',
      features: [
        'One-touch distress signals',
        'Automated location broadcast',
        'Emergency protocols',
        'Nearest technician dispatch',
        'Crisis management guidance'
      ]
    },
    {
      icon: MdCloudSync,
      title: 'Offline Capability',
      description: 'Full functionality even without internet connection',
      colorScheme: 'cyan',
      features: [
        'Offline data storage',
        'Automatic sync when connected',
        'Critical features always available',
        'Background synchronization',
        'Conflict resolution'
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
              INDUSTRY-FIRST TECHNOLOGY
            </Badge>
            <Heading as="h1" size="2xl" fontWeight="bold">
              The Most Advanced Yacht Management Platform
            </Heading>
            <Text fontSize="xl" maxW="800px" opacity={0.9}>
              Combining AI intelligence, real-time monitoring, and predictive analytics 
              to transform how you manage and maintain your yacht.
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
                Schedule Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                color="white"
                borderColor="white"
                _hover={{ bg: 'whiteAlpha.200' }}
                onClick={() => {
                  const element = document.getElementById('platform-features');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Features
              </Button>
            </HStack>
          </VStack>
        </Container>
        <Box
          position="absolute"
          top="-50%"
          right="-10%"
          opacity={0.1}
        >
          <Icon as={IoMdBoat} w="800px" h="800px" />
        </Box>
      </Box>

      {/* Platform Overview */}
      <Box py={16} bg={bgColor}>
        <Container maxW="1200px">
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl">
              Three Powerful Applications, One Unified Platform
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="800px">
              Our ecosystem connects yacht owners, service technicians, and management teams 
              through purpose-built applications that work seamlessly together.
            </Text>
          </VStack>

          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList justifyContent="center" mb={8}>
              <Tab>Owner Dashboard</Tab>
              <Tab>Technician App</Tab>
              <Tab>Admin Portal</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Box bg={cardBg} p={8} rounded="lg" shadow="lg">
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center">
                    <VStack align="start" spacing={4}>
                      <Badge colorScheme="blue" fontSize="sm">YACHT OWNERS</Badge>
                      <Heading size="lg">Your Yacht at Your Fingertips</Heading>
                      <Text color="gray.600">
                        Monitor every aspect of your vessel in real-time, communicate with 
                        your service team, and access critical information instantly.
                      </Text>
                      <List spacing={3}>
                        <ListItem>
                          <ListIcon as={MdDashboard} color="blue.500" />
                          Real-time vessel monitoring dashboard
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdNotifications} color="blue.500" />
                          Smart alerts and notifications
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FaTools} color="blue.500" />
                          One-touch service requests
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FaDollarSign} color="blue.500" />
                          Transparent billing and invoices
                        </ListItem>
                      </List>
                    </VStack>
                    <Image
                      src="/images/gallery/OwnerDashboard.png"
                      alt="Owner Dashboard"
                      rounded="md"
                      shadow="md"
                      objectFit="contain"
                      maxH="400px"
                      w="100%"
                    />
                  </SimpleGrid>
                </Box>
              </TabPanel>

              <TabPanel>
                <Box bg={cardBg} p={8} rounded="lg" shadow="lg">
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center">
                    <VStack align="start" spacing={4}>
                      <Badge colorScheme="green" fontSize="sm">SERVICE TECHNICIANS</Badge>
                      <Heading size="lg">Streamlined Field Operations</Heading>
                      <Text color="gray.600">
                        Purpose-built mobile app for technicians to manage inspections, 
                        service requests, and documentation efficiently.
                      </Text>
                      <List spacing={3}>
                        <ListItem>
                          <ListIcon as={FaQrcode} color="green.500" />
                          QR code scanning for instant access
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FaMobileAlt} color="green.500" />
                          Offline-capable mobile app
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FaTools} color="green.500" />
                          Digital inspection checklists
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FaClock} color="green.500" />
                          Time tracking and reporting
                        </ListItem>
                      </List>
                    </VStack>
                    <Image
                      src="/images/gallery/TechnicianAP.png"
                      alt="Technician App"
                      rounded="md"
                      shadow="md"
                      objectFit="contain"
                      maxH="400px"
                      w="100%"
                    />
                  </SimpleGrid>
                </Box>
              </TabPanel>

              <TabPanel>
                <Box bg={cardBg} p={8} rounded="lg" shadow="lg">
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center">
                    <VStack align="start" spacing={4}>
                      <Badge colorScheme="purple" fontSize="sm">MANAGEMENT TEAMS</Badge>
                      <Heading size="lg">Complete Business Control</Heading>
                      <Text color="gray.600">
                        Comprehensive administrative portal for managing operations, 
                        vendor networks, and business analytics.
                      </Text>
                      <List spacing={3}>
                        <ListItem>
                          <ListIcon as={MdAnalytics} color="purple.500" />
                          Business intelligence dashboard
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FaUserShield} color="purple.500" />
                          Vendor management system
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FaDollarSign} color="purple.500" />
                          Financial reporting and analytics
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdSupport} color="purple.500" />
                          Customer success monitoring
                        </ListItem>
                      </List>
                    </VStack>
                    <Image
                      src="/images/gallery/AdminPortal.png"
                      alt="Admin Portal"
                      rounded="md"
                      shadow="md"
                      objectFit="contain"
                      maxH="400px"
                      w="100%"
                    />
                  </SimpleGrid>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>

      {/* Platform Features Grid */}
      <Box id="platform-features" py={16}>
        <Container maxW="1200px">
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl">
              Revolutionary Features That Define the Future
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="800px">
              Every feature is designed to save time, reduce costs, and provide 
              peace of mind for yacht owners.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {platformFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Technology Stack */}
      <Box py={16} bg={bgColor}>
        <Container maxW="1200px">
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl">
              Built on Cutting-Edge Technology
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="800px">
              Our platform leverages the latest technologies to deliver 
              unmatched performance and reliability.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {[
              { icon: FaCloud, title: 'Cloud Native', desc: 'AWS infrastructure for unlimited scalability' },
              { icon: MdSecurity, title: 'Bank-Level Security', desc: 'AES-256 encryption and SOC 2 compliance' },
              { icon: FaWater, title: 'Marine Standards', desc: 'Signal K and NMEA 2000 compatibility' },
              { icon: FaBell, title: 'Real-Time Updates', desc: 'WebSocket connections for instant data' }
            ].map((tech, index) => (
              <Box
                key={index}
                bg={cardBg}
                p={6}
                rounded="lg"
                textAlign="center"
                shadow="md"
                transition="all 0.3s"
                _hover={{ shadow: 'lg', transform: 'translateY(-2px)' }}
              >
                <Icon as={tech.icon} w={12} h={12} color="blue.500" mb={4} />
                <Text fontWeight="bold" mb={2}>{tech.title}</Text>
                <Text fontSize="sm" color="gray.600">{tech.desc}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Integration Partners */}
      <Box py={16}>
        <Container maxW="1200px">
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl">
              Seamless Integrations
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="800px">
              Our platform connects with industry-leading services and standards 
              to provide a comprehensive yacht management ecosystem.
            </Text>
          </VStack>

          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="semibold">
                    Marine Electronics Integration
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  <Box>
                    <Text fontWeight="semibold" mb={2}>Signal K Protocol</Text>
                    <Text fontSize="sm" color="gray.600">
                      Full bi-directional communication with all Signal K compatible devices, 
                      enabling real-time data streaming from engines, sensors, and navigation systems.
                    </Text>
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" mb={2}>NMEA 2000 Support</Text>
                    <Text fontSize="sm" color="gray.600">
                      Universal compatibility with NMEA 2000 marine electronics, including 
                      GPS, depth sounders, wind instruments, and engine monitors.
                    </Text>
                  </Box>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="semibold">
                    Emergency & Safety Systems
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  <Box>
                    <Text fontWeight="semibold" mb={2}>Coast Guard Integration</Text>
                    <Text fontSize="sm" color="gray.600">
                      Direct API connection for automated distress signals and emergency 
                      response coordination with maritime authorities.
                    </Text>
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" mb={2}>EPIRB/AIS Systems</Text>
                    <Text fontSize="sm" color="gray.600">
                      Integration with Emergency Position Indicating Radio Beacons and 
                      Automatic Identification Systems for enhanced safety.
                    </Text>
                  </Box>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="semibold">
                    Business Systems
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  <Box>
                    <Text fontWeight="semibold" mb={2}>Insurance Partners</Text>
                    <Text fontSize="sm" color="gray.600">
                      Direct integration with marine insurance providers for streamlined 
                      claims processing and premium discounts for platform users.
                    </Text>
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" mb={2}>Financial Systems</Text>
                    <Text fontSize="sm" color="gray.600">
                      QuickBooks and ServiceFusion integration for seamless accounting, 
                      invoicing, and financial reporting.
                    </Text>
                  </Box>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="brand.primary" color="white" py={20}>
        <Container maxW="1200px">
          <VStack spacing={6} textAlign="center">
            <Heading as="h2" size="xl">
              Experience the Future of Yacht Management
            </Heading>
            <Text fontSize="lg" maxW="600px" opacity={0.9}>
              Join forward-thinking yacht owners who are already saving time and money 
              with our revolutionary platform.
            </Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Button
                as={RouterLink}
                to="/contact"
                size="lg"
                bg="white"
                color="brand.primary"
                _hover={{ bg: 'gray.100' }}
              >
                Schedule Platform Demo
              </Button>
              <Button
                as={RouterLink}
                to="/services"
                size="lg"
                bg="white"
                color="brand.primary"
                _hover={{ bg: 'gray.100' }}
              >
                View Our Services
              </Button>
            </Stack>
            <Text fontSize="sm" opacity={0.8} pt={4}>
              No credit card required • 30-day money-back guarantee • Cancel anytime
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default PlatformPage;