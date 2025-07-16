import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  VStack,
  Image,
  Flex,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box>
      <Container maxW="1200px" py={20}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="center"
          textAlign={{ base: 'center', md: 'left' }}
          gap={10}
        >
          <VStack spacing={6} align={{ base: 'center', md: 'flex-start' }}>
            <Heading as="h1" size="4xl" color="brand.primary">
              404
            </Heading>
            <Heading as="h2" size="xl" color="gray.700">
              Page Not Found
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="500px">
              Oops! Looks like our puppies have hidden this page. The page you're looking for doesn't exist or has been moved.
            </Text>
            <Button
              as={RouterLink}
              to="/"
              colorScheme="brand"
              bg="brand.primary"
              size="lg"
              mt={4}
              _hover={{ bg: 'brand.primaryDark' }}
            >
              Back to Home
            </Button>
          </VStack>

          <Box
            maxW={{ base: '300px', md: '400px' }}
            mt={{ base: 10, md: 0 }}
          >
            <Image
              src="/src/assets/images/gallery/sad-puppy.jpg"
              alt="Sad puppy"
              borderRadius="lg"
              fallback={
                <Flex
                  bg="gray.100"
                  borderRadius="lg"
                  h="300px"
                  w="100%"
                  align="center"
                  justify="center"
                >
                  <Text color="gray.500">Puppy image not available</Text>
                </Flex>
              }
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default NotFoundPage; 