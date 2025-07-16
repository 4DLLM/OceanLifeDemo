import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Flex,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  IconButton,
  VStack,
  Tag,
  HStack,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { getImagePath } from '../utils/paths';

// Gallery images for Ocean Life Yacht Services
const GALLERY_IMAGES = [
  {
    id: 1,
    src: getImagePath('/images/gallery/imgi_6_yacht-management-4-1.webp'),
    alt: 'Luxury yacht at marina',
    category: 'vessels',
  },
  {
    id: 2,
    src: getImagePath('/images/gallery/imgi_7_yacht-management-1.webp'),
    alt: 'Yacht maintenance service',
    category: 'maintenance',
  },
  {
    id: 3,
    src: getImagePath('/images/gallery/imgi_8_yacht-management-4.webp'),
    alt: 'Professional yacht cleaning',
    category: 'maintenance',
  },
  {
    id: 4,
    src: getImagePath('/images/gallery/imgi_9_yacht-management-2.webp'),
    alt: 'Engine room inspection',
    category: 'maintenance',
  },
  {
    id: 5,
    src: getImagePath('/images/gallery/imgi_10_yacht-management-3.webp'),
    alt: 'Yacht interior detailing',
    category: 'detailing',
  },
  {
    id: 6,
    src: getImagePath('/images/gallery/imgi_11_yacht-management-5.webp'),
    alt: 'Premium yacht services',
    category: 'vessels',
  },
  {
    id: 7,
    src: getImagePath('/images/gallery/imgi_2_seg1-image.webp'),
    alt: 'Yacht at sunset',
    category: 'vessels',
  },
  {
    id: 8,
    src: getImagePath('/images/gallery/imgi_3_seg2-image.webp'),
    alt: 'Professional crew services',
    category: 'crew',
  },
  {
    id: 9,
    src: getImagePath('/images/gallery/imgi_4_seg3-image.webp'),
    alt: 'Yacht delivery service',
    category: 'delivery',
  },
  {
    id: 10,
    src: getImagePath('/images/gallery/imgi_5_seg4-image.webp'),
    alt: 'Luxury yacht experience',
    category: 'vessels',
  }
];

const GalleryPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredImages, setFilteredImages] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  // Apply the filter on component mount and when activeFilter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredImages(GALLERY_IMAGES);
    } else {
      setFilteredImages(GALLERY_IMAGES.filter(img => img.category === activeFilter));
    }
  }, [activeFilter]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  const handlePrevious = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.secondary" color="white">
        <Container maxW="1200px" py={20} textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Service Gallery
          </Heading>
          <Text fontSize="xl" maxW="800px" mx="auto">
            Browse photos of our professional yacht management services and vessels we maintain
          </Text>
        </Container>
      </Box>

      {/* Gallery Filter Section */}
      <Box py={8} bg="gray.50">
        <Container maxW="1200px" px={4}>
          <Wrap spacing={2} justify="center" mb={2}>
            <WrapItem>
              <Button
                onClick={() => setActiveFilter('all')}
                bg={activeFilter === 'all' ? '#7B513C' : 'transparent'}
                color={activeFilter === 'all' ? 'white' : 'gray.600'}
                _hover={{
                  bg: activeFilter === 'all' ? '#6B4535' : 'gray.100'
                }}
                borderWidth="1px"
                borderColor={activeFilter === 'all' ? '#7B513C' : 'gray.200'}
                size={{ base: "sm", md: "md" }}
              >
                All Photos
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={() => setActiveFilter('vessels')}
                bg={activeFilter === 'vessels' ? '#1a73ab' : 'transparent'}
                color={activeFilter === 'vessels' ? 'white' : 'gray.600'}
                _hover={{
                  bg: activeFilter === 'vessels' ? '#00537d' : 'gray.100'
                }}
                borderWidth="1px"
                borderColor={activeFilter === 'vessels' ? '#1a73ab' : 'gray.200'}
                size={{ base: "sm", md: "md" }}
              >
                Vessels
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={() => setActiveFilter('maintenance')}
                bg={activeFilter === 'maintenance' ? '#1a73ab' : 'transparent'}
                color={activeFilter === 'maintenance' ? 'white' : 'gray.600'}
                _hover={{
                  bg: activeFilter === 'maintenance' ? '#00537d' : 'gray.100'
                }}
                borderWidth="1px"
                borderColor={activeFilter === 'maintenance' ? '#1a73ab' : 'gray.200'}
                size={{ base: "sm", md: "md" }}
              >
                Maintenance
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={() => setActiveFilter('detailing')}
                bg={activeFilter === 'detailing' ? '#1a73ab' : 'transparent'}
                color={activeFilter === 'detailing' ? 'white' : 'gray.600'}
                _hover={{
                  bg: activeFilter === 'detailing' ? '#00537d' : 'gray.100'
                }}
                borderWidth="1px"
                borderColor={activeFilter === 'detailing' ? '#1a73ab' : 'gray.200'}
                size={{ base: "sm", md: "md" }}
              >
                Detailing
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                onClick={() => setActiveFilter('crew')}
                bg={activeFilter === 'crew' ? '#1a73ab' : 'transparent'}
                color={activeFilter === 'crew' ? 'white' : 'gray.600'}
                _hover={{
                  bg: activeFilter === 'crew' ? '#00537d' : 'gray.100'
                }}
                borderWidth="1px"
                borderColor={activeFilter === 'crew' ? '#1a73ab' : 'gray.200'}
                size={{ base: "sm", md: "md" }}
              >
                Crew Services
              </Button>
            </WrapItem>
          </Wrap>
          <Text textAlign="center" color="gray.600" mt={2} fontSize={{ base: "sm", md: "md" }}>
            Showing {filteredImages.length} photos
          </Text>
        </Container>
      </Box>

      {/* Gallery Grid */}
      <Box py={12}>
        <Container maxW="1200px" px={4}>
          <SimpleGrid 
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }} 
            spacing={{ base: 4, md: 6 }}
          >
            {filteredImages.map((image) => (
              <Box
                key={image.id}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                transition="all 0.2s"
                _hover={{ transform: 'scale(1.02)', boxShadow: 'lg' }}
                cursor="pointer"
                onClick={() => handleImageClick(image)}
                bg="white"
                width="100%"
              >
                <Box position="relative" paddingBottom="100%">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    objectFit="cover"
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    transition="transform 0.3s ease"
                    _groupHover={{ transform: 'scale(1.05)' }}
                  />
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Image Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent bg="transparent" boxShadow="none" maxW={{ base: '90%', md: '80%' }}>
          <ModalCloseButton color="white" />
          <ModalBody p={0} position="relative">
            {selectedImage && (
              <Box position="relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  w="100%"
                  maxH="80vh"
                  objectFit="contain"
                  borderRadius="md"
                />
                <Flex
                  position="absolute"
                  top="50%"
                  left={0}
                  right={0}
                  transform="translateY(-50%)"
                  justify="space-between"
                  px={2}
                >
                  <IconButton
                    aria-label="Previous image"
                    icon={<ChevronLeftIcon />}
                    onClick={handlePrevious}
                    colorScheme="blackAlpha"
                    rounded="full"
                    size="lg"
                  />
                  <IconButton
                    aria-label="Next image"
                    icon={<ChevronRightIcon />}
                    onClick={handleNext}
                    colorScheme="blackAlpha"
                    rounded="full"
                    size="lg"
                  />
                </Flex>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Call to Action */}
      <Box bg="brand.primary" color="white" py={16}>
        <Container maxW="1200px" textAlign="center">
          <VStack spacing={6}>
            <Heading as="h2" size="xl">
              Ready to Experience Premium Yacht Management?
            </Heading>
            <Text fontSize="lg" maxW="800px">
              Schedule a consultation to see how Ocean Life can transform your yacht ownership experience
            </Text>
            <Button
              as="a"
              href="/contact"
              colorScheme="brand"
              bg="white"
              color="brand.primary"
              size="lg"
              fontWeight="bold"
              _hover={{ bg: 'gray.100' }}
            >
              Schedule Consultation
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default GalleryPage;