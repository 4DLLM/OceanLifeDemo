import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Badge,
  Button,
  Flex,
  Icon,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaAnchor, FaMapMarkerAlt, FaRuler, FaCalendarAlt } from 'react-icons/fa';
import { MdSpeed, MdWaves } from 'react-icons/md';
import { getImagePath } from '../utils/paths';

const VesselCard = ({ vessel, onClick }) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl', cursor: 'pointer' }}
      onClick={() => onClick(vessel)}
    >
      <Box position="relative">
        <Image
          src={vessel.image}
          alt={vessel.name}
          h="250px"
          w="100%"
          objectFit="cover"
        />
        <Badge
          position="absolute"
          top={2}
          right={2}
          colorScheme={vessel.status === 'Active' ? 'green' : 'blue'}
          fontSize="sm"
          px={2}
          py={1}
        >
          {vessel.status}
        </Badge>
      </Box>
      <Box p={6}>
        <VStack align="start" spacing={2}>
          <Heading as="h3" size="md" color="brand.primary">
            {vessel.name}
          </Heading>
          <Text fontSize="sm" color="gray.600">
            {vessel.make} • {vessel.length}
          </Text>
          <HStack spacing={4} fontSize="sm" color="gray.500">
            <HStack spacing={1}>
              <Icon as={FaMapMarkerAlt} />
              <Text>{vessel.location}</Text>
            </HStack>
            <HStack spacing={1}>
              <Icon as={FaCalendarAlt} />
              <Text>Since {vessel.memberSince}</Text>
            </HStack>
          </HStack>
          <Text fontSize="sm" color="gray.700" noOfLines={2}>
            {vessel.description}
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

const FleetPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedVessel, setSelectedVessel] = useState(null);

  const handleVesselClick = (vessel) => {
    setSelectedVessel(vessel);
    onOpen();
  };

  const fleetVessels = [
    {
      id: 1,
      name: "Miss Sip",
      make: "Riviera",
      length: "54'",
      image: getImagePath("images/gallery/imgi_6_yacht-management-4-1.webp"),
      location: "Westshore Yacht Club",
      status: "Active",
      memberSince: "2023",
      description: "Luxury motor yacht with state-of-the-art navigation and entertainment systems.",
      details: {
        engines: "Twin Volvo Penta IPS",
        cruisingSpeed: "28 knots",
        range: "400 nautical miles",
        staterooms: "3",
        crew: "2"
      }
    },
    {
      id: 2,
      name: "Sea Dreams",
      make: "Princess",
      length: "62'",
      image: getImagePath("images/gallery/imgi_7_yacht-management-1.webp"),
      location: "Tampa Bay",
      status: "Active",
      memberSince: "2022",
      description: "Elegant flybridge yacht perfect for entertaining and extended cruising.",
      details: {
        engines: "Twin CAT C12",
        cruisingSpeed: "25 knots",
        range: "500 nautical miles",
        staterooms: "4",
        crew: "3"
      }
    },
    {
      id: 3,
      name: "Aqua Life",
      make: "Sea Ray",
      length: "48'",
      image: getImagePath("images/gallery/imgi_8_yacht-management-4.webp"),
      location: "Davis Island Yacht Club",
      status: "Active",
      memberSince: "2023",
      description: "Sport yacht combining performance with luxury amenities.",
      details: {
        engines: "Twin MerCruiser 8.2L",
        cruisingSpeed: "30 knots",
        range: "350 nautical miles",
        staterooms: "2",
        crew: "1"
      }
    },
    {
      id: 4,
      name: "Tampa Pride",
      make: "Hatteras",
      length: "58'",
      image: getImagePath("images/gallery/imgi_9_yacht-management-2.webp"),
      location: "St. Petersburg",
      status: "In Service",
      memberSince: "2021",
      description: "Classic motor yacht with timeless design and modern upgrades.",
      details: {
        engines: "Twin Detroit Diesel",
        cruisingSpeed: "22 knots",
        range: "600 nautical miles",
        staterooms: "3",
        crew: "2"
      }
    },
    {
      id: 5,
      name: "Blue Horizon",
      make: "Viking",
      length: "65'",
      image: getImagePath("images/gallery/imgi_10_yacht-management-3.webp"),
      location: "Clearwater",
      status: "Active",
      memberSince: "2023",
      description: "Sport fishing yacht with tournament-ready equipment and luxury accommodations.",
      details: {
        engines: "Twin MAN V12",
        cruisingSpeed: "32 knots",
        range: "450 nautical miles",
        staterooms: "4",
        crew: "2"
      }
    },
    {
      id: 6,
      name: "Sunset Seeker",
      make: "Azimut",
      length: "52'",
      image: getImagePath("images/gallery/imgi_11_yacht-management-5.webp"),
      location: "Tampa Yacht & Country Club",
      status: "Active",
      memberSince: "2024",
      description: "Italian-designed yacht with contemporary styling and innovative features.",
      details: {
        engines: "Twin Volvo Penta IPS",
        cruisingSpeed: "26 knots",
        range: "380 nautical miles",
        staterooms: "3",
        crew: "2"
      }
    }
  ];

  const fleetStats = [
    { label: "Managed Vessels", value: "150+", helpText: "Active in our program" },
    { label: "Average Length", value: "55ft", helpText: "Across our fleet" },
    { label: "Total Value", value: "$125M", helpText: "Under management" },
    { label: "Avg. Savings", value: "40%", helpText: "Annual maintenance costs" }
  ];

  const successStories = [
    {
      title: "50% Reduction in Maintenance Costs",
      vessel: "65' Viking Sport Fishing",
      description: "Our predictive AI identified a developing cooling system issue 3 weeks before failure, saving $45,000 in engine repairs.",
      icon: "💰"
    },
    {
      title: "Emergency Response Success",
      vessel: "52' Sea Ray Sundancer",
      description: "When severe weather hit unexpectedly, our 24/7 monitoring team helped secure the vessel remotely, preventing major damage.",
      icon: "🚨"
    },
    {
      title: "Zero Downtime Season",
      vessel: "58' Princess Flybridge",
      description: "Predictive maintenance kept this charter yacht operational for an entire season without any unexpected repairs.",
      icon: "✅"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.secondary" color="white">
        <Container maxW="1200px" py={20} textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Our Managed Fleet
          </Heading>
          <Text fontSize="xl" maxW="800px" mx="auto">
            Discover the prestigious vessels under Ocean Life's revolutionary management platform. 
            Each yacht benefits from our AI-powered predictive maintenance and 24/7 monitoring.
          </Text>
        </Container>
      </Box>

      {/* Fleet Statistics */}
      <Box py={12} bg="gray.50">
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
            {fleetStats.map((stat) => (
              <Stat key={stat.label} textAlign="center">
                <StatLabel color="gray.600">{stat.label}</StatLabel>
                <StatNumber fontSize="3xl" color="brand.primary">{stat.value}</StatNumber>
                <StatHelpText>{stat.helpText}</StatHelpText>
              </Stat>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Fleet Gallery */}
      <Box py={16}>
        <Container maxW="1200px">
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl" color="brand.primary">
              Featured Vessels
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="800px">
              A selection of yachts currently benefiting from Ocean Life's comprehensive management services
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {fleetVessels.map((vessel) => (
              <VesselCard
                key={vessel.id}
                vessel={vessel}
                onClick={handleVesselClick}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Success Stories Section */}
      <Box py={16} bg="gray.50">
        <Container maxW="1200px">
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl" color="brand.primary">
              Success Stories
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="800px">
              Real results from real yacht owners using our platform
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {successStories.map((story, index) => (
              <Box
                key={index}
                bg="white"
                p={6}
                borderRadius="lg"
                boxShadow="md"
                borderLeft="4px"
                borderColor="brand.primary"
              >
                <Text fontSize="4xl" mb={4}>{story.icon}</Text>
                <Heading as="h3" size="md" mb={2} color="brand.primary">
                  {story.title}
                </Heading>
                <Text fontSize="sm" color="gray.600" mb={2}>
                  {story.vessel}
                </Text>
                <Text color="gray.700">
                  {story.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="brand.primary" color="white" py={16}>
        <Container maxW="1200px" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Join Our Growing Fleet
          </Heading>
          <Text fontSize="lg" mb={8} maxW="700px" mx="auto">
            Experience the peace of mind that comes with Ocean Life's revolutionary 
            yacht management platform. See why Tampa Bay's yacht owners are making the switch.
          </Text>
          <Button
            size="lg"
            bg="white"
            color="brand.primary"
            _hover={{ bg: 'gray.100' }}
          >
            Add Your Vessel
          </Button>
        </Container>
      </Box>

      {/* Vessel Detail Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedVessel?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedVessel && (
              <VStack align="start" spacing={4}>
                <Image
                  src={selectedVessel.image}
                  alt={selectedVessel.name}
                  w="100%"
                  h="300px"
                  objectFit="cover"
                  borderRadius="md"
                />
                <Text fontSize="lg" color="gray.700">
                  {selectedVessel.description}
                </Text>
                <SimpleGrid columns={2} spacing={4} w="100%">
                  <Box>
                    <Text fontWeight="bold" color="gray.600">Make & Model</Text>
                    <Text>{selectedVessel.make}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold" color="gray.600">Length</Text>
                    <Text>{selectedVessel.length}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold" color="gray.600">Engines</Text>
                    <Text>{selectedVessel.details.engines}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold" color="gray.600">Cruising Speed</Text>
                    <Text>{selectedVessel.details.cruisingSpeed}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold" color="gray.600">Range</Text>
                    <Text>{selectedVessel.details.range}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold" color="gray.600">Staterooms</Text>
                    <Text>{selectedVessel.details.staterooms}</Text>
                  </Box>
                </SimpleGrid>
                <Box w="100%" pt={4} borderTop="1px" borderColor="gray.200">
                  <Text fontWeight="bold" color="gray.600" mb={2}>Ocean Life Services</Text>
                  <Text color="gray.700">
                    This vessel is equipped with our full suite of services including 
                    AI predictive maintenance, 24/7 monitoring, QR code service activation, 
                    and emergency response integration.
                  </Text>
                </Box>
              </VStack>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="brand" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default FleetPage;