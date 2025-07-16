import React, { useState } from 'react';
import QRCodeSVG from '../QRCodeSVG';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Button,
  Badge,
  Icon,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  Flex,
  List,
  ListItem,
  ListIcon,
  Code,
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import { 
  FaQrcode, 
  FaHistory, 
  FaTools, 
  FaFileAlt,
  FaMobileAlt,
  FaClock,
  FaCheckCircle
} from 'react-icons/fa';
import { MdCheckCircle, MdWarning, MdBuild } from 'react-icons/md';

const QRFeature = ({ icon, title, description }) => {
  return (
    <HStack align="start" spacing={4}>
      <Box
        bg="blue.100"
        p={3}
        rounded="lg"
        color="blue.600"
      >
        <Icon as={icon} w={6} h={6} />
      </Box>
      <VStack align="start" spacing={1} flex={1}>
        <Text fontWeight="semibold">{title}</Text>
        <Text fontSize="sm" color="gray.600">{description}</Text>
      </VStack>
    </HStack>
  );
};

const QRCodeDisplay = ({ componentName, serialNumber }) => {
  const qrBg = useColorModeValue('white', 'gray.800');
  
  return (
    <Box
      bg={qrBg}
      p={6}
      rounded="lg"
      shadow="lg"
      border="2px"
      borderColor="blue.500"
      textAlign="center"
    >
      <VStack spacing={4}>
        <Box
          bg="white"
          p={4}
          rounded="md"
          border="1px"
          borderColor="gray.200"
        >
          <QRCodeSVG size={200} />
        </Box>
        <VStack spacing={1}>
          <Text fontWeight="bold" fontSize="lg">{componentName}</Text>
          <Text fontSize="sm" color="gray.500">Serial: {serialNumber}</Text>
        </VStack>
        <Badge colorScheme="green" fontSize="sm">
          Active • Last Serviced: 2 weeks ago
        </Badge>
      </VStack>
    </Box>
  );
};

const ServiceRequestModal = ({ isOpen, onClose, component }) => {
  const [step, setStep] = useState(1);
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <HStack>
            <Icon as={FaQrcode} color="blue.500" />
            <Text>QR Service Request - {component}</Text>
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {step === 1 && (
            <VStack spacing={4} align="stretch">
              <Alert status="success">
                <AlertIcon />
                QR Code scanned successfully! Component identified.
              </Alert>
              
              <Box bg="gray.50" p={4} rounded="md">
                <Text fontWeight="semibold" mb={2}>Component Details:</Text>
                <SimpleGrid columns={2} spacing={2} fontSize="sm">
                  <Text>Type:</Text>
                  <Text fontWeight="medium">{component}</Text>
                  <Text>Serial:</Text>
                  <Text fontWeight="medium">VP-70112038904</Text>
                  <Text>Hours:</Text>
                  <Text fontWeight="medium">386</Text>
                  <Text>Last Service:</Text>
                  <Text fontWeight="medium">2 weeks ago</Text>
                </SimpleGrid>
              </Box>
              
              <Text fontWeight="semibold">What service do you need?</Text>
              <SimpleGrid columns={2} spacing={3}>
                <Button
                  leftIcon={<MdWarning />}
                  variant="outline"
                  onClick={() => setStep(2)}
                >
                  Report Issue
                </Button>
                <Button
                  leftIcon={<MdBuild />}
                  variant="outline"
                  onClick={() => setStep(2)}
                >
                  Schedule Maintenance
                </Button>
                <Button
                  leftIcon={<FaHistory />}
                  variant="outline"
                >
                  View History
                </Button>
                <Button
                  leftIcon={<FaFileAlt />}
                  variant="outline"
                >
                  Access Manual
                </Button>
              </SimpleGrid>
            </VStack>
          )}
          
          {step === 2 && (
            <VStack spacing={4} align="stretch">
              <Alert status="info">
                <AlertIcon />
                Service request created! A technician will be assigned within 30 minutes.
              </Alert>
              
              <Box bg="green.50" p={4} rounded="md" borderColor="green.200" borderWidth="1px">
                <HStack justify="space-between" mb={2}>
                  <Text fontWeight="semibold">Request #OL-2024-1847</Text>
                  <Badge colorScheme="green">Confirmed</Badge>
                </HStack>
                <Text fontSize="sm" color="gray.600">
                  Estimated arrival: Today, 2:00 PM - 4:00 PM
                </Text>
              </Box>
              
              <Text fontWeight="semibold">What happens next:</Text>
              <List spacing={2}>
                <ListItem fontSize="sm">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Technician reviews component history
                </ListItem>
                <ListItem fontSize="sm">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Parts ordered if needed (pre-approved)
                </ListItem>
                <ListItem fontSize="sm">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  You receive SMS updates throughout
                </ListItem>
                <ListItem fontSize="sm">
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Digital report sent upon completion
                </ListItem>
              </List>
              
              <Button colorScheme="blue" size="lg" onClick={onClose}>
                Track Service Status
              </Button>
            </VStack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const QRCodeDemo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedComponent, setSelectedComponent] = useState('Port Engine');
  
  const handleQRClick = (component) => {
    setSelectedComponent(component);
    onOpen();
  };

  return (
    <Box py={20} bg={useColorModeValue('blue.50', 'gray.900')}>
      <Container maxW="1400px">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
          {/* Left Content */}
          <VStack align="start" spacing={6}>
            <Badge colorScheme="purple" fontSize="md" px={3} py={1}>
              REVOLUTIONARY FEATURE
            </Badge>
            <Heading as="h2" size="xl">
              Instant Service with QR Code Magic
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Every component on your yacht gets a unique QR code. 
              Simply scan to instantly request service, view maintenance history, 
              or access troubleshooting guides. No phone calls, no waiting.
            </Text>
            
            <VStack spacing={4} align="stretch" w="full">
              <QRFeature
                icon={FaQrcode}
                title="Scan Any Component"
                description="QR codes on engines, pumps, electronics, and more"
              />
              <QRFeature
                icon={FaClock}
                title="Instant Service Request"
                description="Service ordered in seconds, technician dispatched immediately"
              />
              <QRFeature
                icon={FaHistory}
                title="Complete History"
                description="View all past services, parts replaced, and costs"
              />
              <QRFeature
                icon={FaFileAlt}
                title="Access Documentation"
                description="Manuals, wiring diagrams, and troubleshooting guides"
              />
            </VStack>
            
            <HStack spacing={4}>
              <Button
                colorScheme="blue"
                size="lg"
                leftIcon={<FaMobileAlt />}
              >
                See Mobile Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                leftIcon={<FaQrcode />}
                onClick={() => handleQRClick('Demo Component')}
              >
                Try QR Scanner
              </Button>
            </HStack>
          </VStack>

          {/* Right Content - Interactive Demo */}
          <Box>
            <Box
              bg={useColorModeValue('white', 'gray.800')}
              p={8}
              rounded="xl"
              shadow="2xl"
            >
              <Text fontWeight="semibold" mb={6} textAlign="center">
                Click any QR code to see it in action:
              </Text>
              
              <SimpleGrid columns={2} spacing={6}>
                <Box
                  cursor="pointer"
                  transition="all 0.3s"
                  _hover={{ transform: 'scale(1.05)' }}
                  onClick={() => handleQRClick('Port Engine')}
                >
                  <QRCodeDisplay
                    componentName="Port Engine"
                    serialNumber="VP-70112038904"
                  />
                </Box>
                
                <Box
                  cursor="pointer"
                  transition="all 0.3s"
                  _hover={{ transform: 'scale(1.05)' }}
                  onClick={() => handleQRClick('Bilge Pump #1')}
                >
                  <QRCodeDisplay
                    componentName="Bilge Pump #1"
                    serialNumber="BP-2023-0847"
                  />
                </Box>
                
                <Box
                  cursor="pointer"
                  transition="all 0.3s"
                  _hover={{ transform: 'scale(1.05)' }}
                  onClick={() => handleQRClick('Generator')}
                >
                  <QRCodeDisplay
                    componentName="Generator"
                    serialNumber="C220060720"
                  />
                </Box>
                
                <Box
                  cursor="pointer"
                  transition="all 0.3s"
                  _hover={{ transform: 'scale(1.05)' }}
                  onClick={() => handleQRClick('A/C Unit')}
                >
                  <QRCodeDisplay
                    componentName="A/C Unit"
                    serialNumber="24297919"
                  />
                </Box>
              </SimpleGrid>
              
              <Alert status="info" mt={6} rounded="md">
                <AlertIcon />
                <Text fontSize="sm">
                  In production, technicians use our mobile app to scan physical QR codes 
                  placed on actual components throughout your yacht.
                </Text>
              </Alert>
            </Box>
          </Box>
        </SimpleGrid>

        {/* Bottom CTA */}
        <Box
          mt={12}
          bg={useColorModeValue('gray.800', 'gray.700')}
          color="white"
          p={8}
          rounded="xl"
          textAlign="center"
        >
          <Heading size="lg" mb={4}>
            Ready to Experience the Future?
          </Heading>
          <Text fontSize="lg" mb={6} opacity={0.9}>
            QR codes are just one of many revolutionary features in our platform. 
            Schedule a demo to see everything in action.
          </Text>
          <Button
            colorScheme="blue"
            size="lg"
            bg="white"
            color="gray.800"
            _hover={{ bg: 'gray.100' }}
          >
            Schedule Platform Demo
          </Button>
        </Box>
      </Container>

      {/* Service Request Modal */}
      <ServiceRequestModal
        isOpen={isOpen}
        onClose={onClose}
        component={selectedComponent}
      />
    </Box>
  );
};

export default QRCodeDemo;