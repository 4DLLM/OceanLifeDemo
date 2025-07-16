import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Flex,
  Image,
  Icon,
  VStack,
  HStack
} from '@chakra-ui/react';
import { FaPaw, FaHeartbeat, FaCertificate, FaDog } from 'react-icons/fa';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack align={'center'} textAlign={'center'} p={6}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'brand.primary'}
        mb={3}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize="xl" mb={2}>
        {title}
      </Text>
      <Text color={'gray.600'} fontSize="md">
        {text}
      </Text>
    </Stack>
  );
};

const AboutPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.secondary" color="white">
        <Container maxW="1200px" py={20} textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            About Ohio Goldendoodles
          </Heading>
          <Text fontSize="xl" maxW="800px" mx="auto">
            Family-owned and dedicated to raising exceptional Goldendoodle puppies 
            with health, temperament, and your family in mind.
          </Text>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box py={16}>
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box order={{ base: 2, md: 1 }}>
              <Heading as="h2" size="xl" color="brand.primary" mb={6}>
                Our Story
              </Heading>
              <Text color="gray.600" fontSize="lg" mb={4}>
                At Ohio Goldendoodles, we are dedicated to ethical breeding, superior temperament, 
                and exceptional health in every puppy we raise. Our mission is to provide families 
                with well-socialized, loving companions that bring joy for years to come.
              </Text>
              <Text color="gray.600" fontSize="lg" mb={4}>
                When choosing a breeder, experience and dedication to quality matter. As responsible 
                breeders, we prioritize education, health, and lifelong support for each of our puppy 
                families. We selectively breed only the finest Goldendoodles, ensuring outstanding 
                genetics, temperament, and coat quality.
              </Text>
              <Text color="gray.600" fontSize="lg">
                Bringing a Goldendoodle into your family is a lifetime commitment. We deeply care about 
                where our puppies go, and we encourage families to fully consider the responsibility of 
                pet ownership before making their decision. We are here to guide you in choosing the right 
                fit for your home, lifestyle, and expectations.
              </Text>
            </Box>
            <Flex justify="center" align="center" order={{ base: 1, md: 2 }}>
              <Image
                rounded="md"
                alt="Family with goldendoodle"
                src="/images/gallery/family-photo.jpg"
                objectFit="cover"
                boxShadow="lg"
                w="full"
                h="400px"
              />
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Our Values Section */}
      <Box py={16} bg="gray.50">
        <Container maxW="1200px">
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl" color="brand.primary">
              Our Values
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="800px">
              These core values guide everything we do at Ohio Goldendoodles.
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <Feature
              icon={<Icon as={FaHeartbeat} w={10} h={10} />}
              title="Health"
              text="We prioritize health through genetic testing, veterinary care, and careful breeding practices."
            />
            <Feature
              icon={<Icon as={FaDog} w={10} h={10} />}
              title="Temperament"
              text="We breed for the friendly, intelligent, and adaptable temperament that makes Goldendoodles perfect family companions."
            />
            <Feature
              icon={<Icon as={FaPaw} w={10} h={10} />}
              title="Socialization"
              text="Our puppies receive extensive socialization from birth to prepare them for successful transitions to their forever homes."
            />
            <Feature
              icon={<Icon as={FaCertificate} w={10} h={10} />}
              title="Integrity"
              text="We're committed to transparent practices, honest communication, and ongoing support for families."
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Health & Wellness Section */}
      <Box py={16}>
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Box>
              <Image
                rounded="xl"
                alt="Bodybuilder holding an adorable Goldendoodle puppy"
                src="/images/gallery/HealthDoodles.png"
                objectFit="cover"
                boxShadow="lg"
                w="full"
                h="400px"
              />
            </Box>
            <Stack spacing={6}>
              <Heading 
                as="h2" 
                size="xl" 
                color="#C4A484"
                mb={2}
              >
                Health & Wellness
              </Heading>
              <Text fontSize="lg" color="gray.700" lineHeight="tall">
                We take veterinary care and health screening seriously. Every puppy receives comprehensive care and attention.
              </Text>
              <Box>
                <Heading 
                  as="h3" 
                  size="lg" 
                  color="#7B513C" 
                  mb={4}
                >
                  Health Testing
                </Heading>
                <Text color="gray.600" fontSize="md" mb={6}>
                  All of our breeding dogs undergo comprehensive health testing including OFA hip and elbow evaluations, cardiac exams, and genetic testing for breed-specific conditions. We only breed dogs that meet or exceed these health standards.
                </Text>
                <Heading 
                  as="h3" 
                  size="lg" 
                  color="#7B513C" 
                  mb={4}
                >
                  Puppy Care
                </Heading>
                <Text color="gray.600" fontSize="md" mb={6}>
                  Every puppy receives a comprehensive vet check-up, age-appropriate vaccinations, preventative deworming treatments, and a detailed health record & genetic background. Our puppies are raised in a clean, stimulating environment, ensuring they develop into confident and well-adjusted family companions.
                </Text>
                <Heading 
                  as="h3" 
                  size="lg" 
                  color="#7B513C" 
                  mb={4}
                >
                  Adoption Process
                </Heading>
                <Text color="gray.600" fontSize="md">
                  Our adoption process begins with an application, followed by a deposit to secure your spot on our waiting list. When puppies are 5-6 weeks old, families have the opportunity to meet and select their future companion. At 8 weeks old, puppies are ready to go home, bringing love and happiness to their new families.
                </Text>
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={16} bg="gray.50">
        <Container maxW="1200px">
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl" color="brand.primary">
              Frequently Asked Questions
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="800px">
              Learn more about our breeding practices and puppies.
            </Text>
          </VStack>
          
          <VStack spacing={8} align="stretch">
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" color="brand.secondary" mb={2}>
                How often do you have puppies available?
              </Heading>
              <Text color="gray.600">
                We typically have 4-6 litters per year. The best way to stay informed about upcoming 
                litters is to join our waiting list by completing our application form.
              </Text>
            </Box>
            
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" color="brand.secondary" mb={2}>
                What health guarantee do you offer?
              </Heading>
              <Text color="gray.600">
                We provide a 2-year genetic health guarantee with all of our puppies. This covers 
                congenital conditions that would impact your puppy's quality of life. Details are 
                provided in our puppy contract.
              </Text>
            </Box>
            
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" color="brand.secondary" mb={2}>
                What generations of Goldendoodles do you breed?
              </Heading>
              <Text color="gray.600">
                We primarily breed F1B's, occasionally we will have F1 litters. Each has different coat and temperament 
                characteristics which we're happy to discuss based on your family's preferences. If you'd like, you can 
                read more about the different types of goldendoodles here.
              </Text>
            </Box>
            
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" color="brand.secondary" mb={2}>
                What is your adoption process?
              </Heading>
              <Text color="gray.600">
                Begins with an application, followed up by a phone call or text. From there we schedule a meeting at 
                the puppy palace where further details are provided.
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage; 