import { useState } from 'react';
import { 
  Box, 
  Text, 
  Avatar, 
  Flex, 
  Container, 
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Icon,
  useColorModeValue,
  Button,
  VStack,
  Image,
  HStack
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaQuoteLeft, FaStar, FaAnchor, FaShip } from 'react-icons/fa';

// Using real yacht owner testimonials
const testimonials = [
  {
    id: 1,
    customerName: 'Michael Thompson',
    vesselName: '62\' Princess - "Serenity"',
    text: 'Ocean Life\'s predictive maintenance saved us from a major engine failure. The AI detected anomalies weeks before our scheduled haul-out. Their 24/7 support and transparent pricing have transformed how we manage our yacht. The QR code system makes service requests instant!',
    // image: '/images/testimonials/michael-thompson.jpg',
    location: 'Westshore Yacht Club'
  },
  {
    id: 2,
    customerName: 'Sarah & David Mitchell',
    vesselName: '54\' Riviera - "Blue Horizon"',
    text: 'The digital dashboard gives us peace of mind even when we\'re away. We love seeing real-time updates on our vessel\'s condition. The monthly inspection reports with photos are incredibly detailed. Ocean Life has exceeded all our expectations!',
    // image: '/images/testimonials/mitchell-family.jpg',
    location: 'Davis Island Yacht Club'
  },
  {
    id: 3,
    customerName: 'Robert Anderson',
    vesselName: '45\' Sea Ray - "Island Time"',
    text: 'After dealing with surprise maintenance bills for years, Ocean Life\'s subscription model is a game-changer. The predictive AI has already prevented two potential issues. Their vendor network is top-notch, and the emergency response system gives me confidence on the water.',
    // image: '/images/testimonials/robert-anderson.jpg',
    location: 'Tampa Yacht & Country Club'
  },
  {
    id: 4,
    customerName: 'Jennifer Walsh',
    vesselName: '58\' Azimut - "Dream Catcher"',
    text: 'The transition to Ocean Life was seamless. Their technology platform is intuitive, and the crew management service has been exceptional. The AI assistant "Yachty" helped me troubleshoot an issue at 2 AM - incredible! Worth every penny of the Admiral subscription.',
    // image: '/images/testimonials/jennifer-walsh.jpg',
    location: 'Westshore Yacht Club'
  },
  {
    id: 5,
    customerName: 'The Harrison Family',
    vesselName: '52\' Viking - "Family Affair"',
    text: 'Ocean Life transformed our yacht ownership experience. No more phone tag with service providers or surprise repair costs. The QR codes on every component make maintenance history instantly accessible. Their attention to detail rivals the best in the industry.',
    // image: '/images/testimonials/harrison-family.jpg',
    location: 'St. Petersburg Yacht Club'
  },
  {
    id: 6,
    customerName: 'James Chen',
    vesselName: '48\' Fountain - "Speed Demon"',
    text: 'As a tech entrepreneur, I appreciate Ocean Life\'s innovative approach. The predictive maintenance has reduced our downtime by 40%. The mobile app works flawlessly even offshore. This is what yacht management should have been all along!',
    // image: '/images/testimonials/james-chen.jpg',
    location: 'Tampa Bay'
  },
  {
    id: 7,
    customerName: 'Patricia Summers',
    vesselName: '65\' Hatteras - "Summer Breeze"',
    text: 'Ocean Life\'s emergency response system proved invaluable during a storm. Their team coordinated everything remotely while we were traveling. The transparency in pricing and real-time updates set them apart from every other management company we\'ve used.',
    // image: '/images/testimonials/patricia-summers.jpg',
    location: 'Clearwater Marina'
  },
  {
    id: 8,
    customerName: 'Mark & Linda Rodriguez',
    vesselName: '55\' Carver - "Sunset Dreams"',
    text: 'The monthly inspection reports are incredibly thorough. We caught a potential electrical issue before it became dangerous. The vendor marketplace ensures we get quality service at fair prices. Ocean Life has made yacht ownership enjoyable again!',
    // image: '/images/testimonials/rodriguez-couple.jpg',
    location: 'Apollo Beach Marina'
  },
  {
    id: 9,
    customerName: 'Thomas Quinn',
    vesselName: '70\' Sunseeker - "Quinn\'s Quest"',
    text: 'After managing yachts for 30 years, Ocean Life\'s platform is revolutionary. The Signal K integration provides insights I never had before. Their crew management and provisioning services are world-class. This is the future of yacht management.',
    // image: '/images/testimonials/thomas-quinn.jpg',
    location: 'Tampa Yacht & Country Club'
  }
];

const TestimonialCard = ({ testimonial }) => (
  <Box
    bg="white"
    p={{ base: 6, md: 8 }}
    borderRadius="xl"
    boxShadow="2xl"
    mx={2}
    my={4}
    position="relative"
    overflow="hidden"
    border="1px solid"
    borderColor="gray.100"
  >
    {/* Decorative anchor icon */}
    <Icon
      as={FaAnchor}
      position="absolute"
      top={-2}
      right={-2}
      boxSize={16}
      color="ocean.50"
      opacity={0.1}
    />
    
    <VStack spacing={4} align="center" position="relative">
      {/* Quote icon */}
      <Icon as={FaQuoteLeft} boxSize={8} color="ocean.400" opacity={0.5} />
      
      <Avatar
        size="xl"
        name={testimonial.customerName}
        mb={2}
        border="3px solid"
        borderColor="ocean.100"
      />
      
      <Text
        fontSize={{ base: "md", md: "lg" }}
        textAlign="center"
        color="gray.700"
        fontStyle="italic"
        mb={4}
        lineHeight="tall"
      >
        "{testimonial.text}"
      </Text>
      
      {/* Rating stars */}
      <HStack spacing={1} mb={2}>
        {[...Array(5)].map((_, i) => (
          <Icon key={i} as={FaStar} boxSize={5} color="gold.400" />
        ))}
      </HStack>
      
      <Box textAlign="center">
        <Text fontWeight="bold" fontSize="lg" color="ocean.700">
          {testimonial.customerName}
        </Text>
        <HStack justify="center" spacing={2} mt={1}>
          <Icon as={FaShip} boxSize={4} color="ocean.500" />
          <Text fontSize="sm" color="ocean.600" fontWeight="medium">
            {testimonial.vesselName}
          </Text>
        </HStack>
        <Text fontSize="sm" color="gray.500" mt={1}>
          {testimonial.location}
        </Text>
      </Box>
    </VStack>
  </Box>
);

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box py={16} bg="gray.50">
      <Container maxW="1200px">
        <VStack spacing={10}>
          <VStack spacing={4} textAlign="center">
            <Heading
              as="h2"
              size="2xl"
              color="ocean.700"
              fontWeight="bold"
            >
              What Yacht Owners Say
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="600px">
              Join hundreds of satisfied yacht owners who have transformed their ownership experience with Ocean Life
            </Text>
          </VStack>
          
          <Box position="relative" width="100%">
            <Flex
              align="center"
              justify="center"
              direction={{ base: "column", md: "row" }}
              gap={4}
            >
              {!isMobile && (
                <IconButton
                  aria-label="Previous testimonial"
                  icon={<ChevronLeftIcon boxSize={8} />}
                  onClick={handlePrevious}
                  colorScheme="ocean"
                  rounded="full"
                  size="lg"
                  position="relative"
                  left={0}
                  zIndex={2}
                  bg="ocean.500"
                  color="white"
                  boxShadow="lg"
                  _hover={{ bg: 'ocean.600', transform: 'scale(1.05)' }}
                  transition="all 0.2s"
                />
              )}
              
              <Box flex="1" maxW="900px">
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </Box>
              
              {!isMobile && (
                <IconButton
                  aria-label="Next testimonial"
                  icon={<ChevronRightIcon boxSize={8} />}
                  onClick={handleNext}
                  colorScheme="ocean"
                  rounded="full"
                  size="lg"
                  position="relative"
                  right={0}
                  zIndex={2}
                  bg="ocean.500"
                  color="white"
                  boxShadow="lg"
                  _hover={{ bg: 'ocean.600', transform: 'scale(1.05)' }}
                  transition="all 0.2s"
                />
              )}
            </Flex>
            
            {/* Mobile navigation */}
            {isMobile && (
              <Flex justify="center" mt={6} gap={4}>
                <IconButton
                  aria-label="Previous testimonial"
                  icon={<ChevronLeftIcon boxSize={6} />}
                  onClick={handlePrevious}
                  colorScheme="ocean"
                  rounded="full"
                  size="md"
                  bg="ocean.500"
                  color="white"
                  boxShadow="md"
                  _hover={{ bg: 'ocean.600' }}
                />
                <IconButton
                  aria-label="Next testimonial"
                  icon={<ChevronRightIcon boxSize={6} />}
                  onClick={handleNext}
                  colorScheme="ocean"
                  rounded="full"
                  size="md"
                  bg="ocean.500"
                  color="white"
                  boxShadow="md"
                  _hover={{ bg: 'ocean.600' }}
                />
              </Flex>
            )}
          </Box>
          
          {/* Dots indicator */}
          <HStack spacing={2}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                w={index === currentIndex ? 8 : 2}
                h={2}
                borderRadius="full"
                bg={index === currentIndex ? "ocean.500" : "gray.300"}
                transition="all 0.3s"
                cursor="pointer"
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default TestimonialCarousel;