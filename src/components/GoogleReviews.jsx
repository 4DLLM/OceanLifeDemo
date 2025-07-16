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
  Flex,
  Badge,
  Avatar,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react';
import { FaStar, FaGoogle, FaHeart, FaQuoteLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const reviews = [
  {
    id: 1,
    name: "Robert Troke",
    reviewCount: "1 review",
    timeAgo: "2 weeks ago",
    text: "I've owned large boats for two decades and currently own an 68ft Lazzara. Ocean Life Yacht Services has impressed me from the top down. They make me feel as if they were my partner in the management of my vessel. A specific thumbs up for Brandon one of their service techs.",
    likes: 1,
    isNew: true,
    rating: 5
  },
  {
    id: 2,
    name: "Graham Potter",
    reviewCount: "8 reviews • 17 photos",
    timeAgo: "a year ago",
    text: "Ocean Life Yacht management offers top of the line solutions for yacht owners. As a Captain, making sure things are working properly is crucial! It's about time a business came along and offered a full-encompassing service like this.",
    likes: 1,
    rating: 5,
    ownerResponse: "Thank you Captain for your expert guidance into your needs. It sure makes the job easier. Glad we could get you on the way with no down time."
  },
  {
    id: 3,
    name: "Sophia Ianaeva",
    reviewCount: "Local Guide • 12 reviews • 4 photos",
    timeAgo: "5 months ago",
    text: "Ocean Life Yacht Services provides outstanding yacht servicing with exceptional professionalism and attention to detail. Their team is highly skilled, efficient, and goes above and beyond to ensure everything is perfect. I highly recommend them for reliable and top-quality service!👌🏼",
    likes: 1,
    rating: 5,
    isLocalGuide: true
  },
  {
    id: 4,
    name: "Richard Rhyne",
    reviewCount: "5 reviews • 2 photos",
    timeAgo: "3 months ago",
    text: "Brandon and Gram did a fantastic job helping me prepare my yacht for sale. I would recommend them to family and friends.",
    likes: 1,
    rating: 5
  },
  {
    id: 5,
    name: "Matúš Vasilenko",
    reviewCount: "Local Guide • 19 reviews • 29 photos",
    timeAgo: "3 months ago",
    text: "Amazing Company for boat owners that like to get things without headaches !!! Reliable services, great management!! You won't regret having this company mainting your vessel!",
    likes: 1,
    rating: 5,
    isLocalGuide: true
  },
  {
    id: 6,
    name: "Tom Longfellow",
    reviewCount: "4 reviews • 1 photo",
    timeAgo: "a year ago",
    text: "I've had opportunity to see Brandon R complete several install, maintenance and service jobs with great competence, expertise and competence. always great to see application of 'let's get this done'. he's dedicated to that and I can't recommend him enough based on my observation and experience with his work.",
    likes: 1,
    rating: 5
  },
  {
    id: 7,
    name: "Jeff Schrier",
    reviewCount: "Local Guide • 23 reviews",
    timeAgo: "a year ago",
    text: "I've used concierge yacht / oceanlife a number of times with a number of my clients always the best communication, and the best taking care of all my customers. Five stars!! Kevin and his team are top-notch.",
    likes: 1,
    rating: 5,
    isLocalGuide: true
  },
  {
    id: 8,
    name: "Victor Offutt",
    reviewCount: "5 reviews • 1 photo",
    timeAgo: "a year ago",
    text: "Game changer for us. I was tired of not getting things done and not being able to fully enjoy our retirement plans. With the OL membership I jump on the service app and simply schedule what we need and it's just done and when they say it will be done. Truly a great yacht management company.",
    likes: 1,
    rating: 5
  },
  {
    id: 9,
    name: "Larry Brutlag",
    reviewCount: "Local Guide • 52 reviews • 3 photos",
    timeAgo: "a year ago",
    text: "Great people. Great service. Highly recommended. If you want to keep it beautiful it is a must call.",
    likes: 1,
    rating: 5,
    isLocalGuide: true
  }
];

const ReviewCard = ({ review }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
  return (
    <Box
      bg={bg}
      p={6}
      rounded="lg"
      shadow="md"
      borderWidth="1px"
      borderColor={borderColor}
      position="relative"
      _hover={{ shadow: 'lg', transform: 'translateY(-2px)' }}
      transition="all 0.2s"
    >
      {review.isNew && (
        <Badge
          position="absolute"
          top={2}
          right={2}
          colorScheme="green"
          fontSize="xs"
        >
          NEW
        </Badge>
      )}
      
      <VStack align="start" spacing={3}>
        <HStack justify="space-between" width="full">
          <HStack spacing={3}>
            <Avatar name={review.name} size="sm" />
            <VStack align="start" spacing={0}>
              <HStack>
                <Text fontWeight="bold" fontSize="sm">{review.name}</Text>
                {review.isLocalGuide && (
                  <Badge colorScheme="blue" fontSize="xs">
                    <Icon as={MdVerified} mr={1} />
                    Local Guide
                  </Badge>
                )}
              </HStack>
              <Text fontSize="xs" color="gray.500">{review.reviewCount}</Text>
            </VStack>
          </HStack>
        </HStack>
        
        <HStack>
          {[...Array(5)].map((_, i) => (
            <Icon key={i} as={FaStar} color="gold.400" boxSize={3} />
          ))}
          <Text fontSize="xs" color="gray.500">{review.timeAgo}</Text>
        </HStack>
        
        <Text fontSize="sm" color="gray.700" lineHeight="tall">
          {review.text}
        </Text>
        
        {review.ownerResponse && (
          <Box bg="gray.50" p={3} rounded="md" width="full">
            <Text fontSize="xs" fontWeight="bold" mb={1}>Response from Ocean Life</Text>
            <Text fontSize="xs" color="gray.600">{review.ownerResponse}</Text>
          </Box>
        )}
        
        <HStack>
          <Icon as={FaHeart} color="red.400" boxSize={3} />
          <Text fontSize="xs" color="gray.500">{review.likes}</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

const GoogleReviews = () => {
  const sectionBg = useColorModeValue('gray.50', 'gray.900');
  
  return (
    <Box py={16} bg={sectionBg}>
      <Container maxW="1200px">
        <VStack spacing={8}>
          {/* Header */}
          <VStack spacing={4} textAlign="center">
            <HStack>
              <Icon as={FaGoogle} boxSize={8} color="#4285F4" />
              <Heading as="h2" size="xl" color="brand.primary">
                Google Reviews
              </Heading>
            </HStack>
            
            <HStack spacing={4}>
              <HStack>
                <Text fontSize="3xl" fontWeight="bold">5.0</Text>
                <HStack spacing={0}>
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} as={FaStar} color="gold.400" boxSize={5} />
                  ))}
                </HStack>
              </HStack>
              <Text color="gray.600">Based on 9 reviews</Text>
            </HStack>
            
            <Text fontSize="lg" color="gray.600" maxW="800px">
              See what real yacht owners are saying about Ocean Life Yacht Services
            </Text>
          </VStack>
          
          {/* Reviews Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} width="full">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </SimpleGrid>
          
          {/* CTA */}
          <HStack spacing={4}>
            <Button
              as={Link}
              href="https://www.google.com/search?q=Ocean+Life+Yacht+Services+Tampa"
              isExternal
              colorScheme="blue"
              leftIcon={<FaGoogle />}
              rightIcon={<FaExternalLinkAlt />}
              size="lg"
            >
              Write a Review
            </Button>
            <Button
              as={Link}
              href="https://www.google.com/search?q=Ocean+Life+Yacht+Services+Tampa"
              isExternal
              variant="outline"
              colorScheme="blue"
              rightIcon={<FaExternalLinkAlt />}
              size="lg"
            >
              View All Reviews
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default GoogleReviews;