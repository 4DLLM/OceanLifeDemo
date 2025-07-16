import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box>
      <Container maxW="1200px" py={20}>
        <VStack spacing={6} align="center" textAlign="center">
          <Heading as="h1" size="4xl" color="brand.primary">
            404
          </Heading>
          <Heading as="h2" size="xl" color="gray.700">
            Page Not Found
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="500px">
            The page you're looking for doesn't exist or has been moved.
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
      </Container>
    </Box>
  );
};

export default NotFoundPage;