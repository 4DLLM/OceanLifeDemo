import { useState, useCallback } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  useToast,
  Progress,
  Select,
  Image,
  SimpleGrid,
  IconButton,
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { DeleteIcon } from '@chakra-ui/icons';
import { uploadImage, deleteImage } from '../services/galleryService';

const AdminImageUpload = () => {
  const [files, setFiles] = useState([]);
  const [category, setCategory] = useState('puppies');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const toast = useToast();

  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
    }));
    setFiles(prev => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp']
    },
    maxSize: 5242880, // 5MB
  });

  const handleUpload = async () => {
    if (files.length === 0) {
      toast({
        title: 'No files selected',
        status: 'warning',
        duration: 3000,
      });
      return;
    }

    setUploading(true);
    setProgress(0);

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        await uploadImage(file.file, category, (progress) => {
          setProgress((progress / files.length) + (i * (100 / files.length)));
        });
      }

      toast({
        title: 'Upload complete',
        status: 'success',
        duration: 5000,
      });
      setFiles([]);
      setProgress(0);
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: 'Upload failed',
        description: error.message,
        status: 'error',
        duration: 5000,
      });
    } finally {
      setUploading(false);
    }
  };

  const removeFile = (index) => {
    setFiles(prev => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  return (
    <VStack spacing={6} w="100%" p={6}>
      <FormControl>
        <FormLabel>Category</FormLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={uploading}
        >
          <option value="puppies">Puppies</option>
          <option value="adults">Adult Dogs</option>
          <option value="litters">Litters</option>
          <option value="customers">Happy Customers</option>
        </Select>
      </FormControl>

      <Box
        {...getRootProps()}
        w="100%"
        h="200px"
        border="2px dashed"
        borderColor={isDragActive ? "brand.primary" : "gray.300"}
        borderRadius="md"
        p={4}
        textAlign="center"
        cursor="pointer"
        bg={isDragActive ? "gray.50" : "white"}
        _hover={{ bg: "gray.50" }}
      >
        <input {...getInputProps()} />
        <VStack spacing={2} h="100%" justify="center">
          <Text>
            {isDragActive
              ? "Drop the files here..."
              : "Drag 'n' drop images here, or click to select"}
          </Text>
          <Text fontSize="sm" color="gray.500">
            Maximum file size: 5MB
          </Text>
        </VStack>
      </Box>

      {files.length > 0 && (
        <SimpleGrid columns={4} spacing={4} w="100%">
          {files.map((file, index) => (
            <Box key={file.name} position="relative">
              <Image
                src={file.preview}
                alt={file.name}
                boxSize="100px"
                objectFit="cover"
                borderRadius="md"
              />
              <IconButton
                icon={<DeleteIcon />}
                size="sm"
                position="absolute"
                top={-2}
                right={-2}
                colorScheme="red"
                rounded="full"
                onClick={() => removeFile(index)}
                disabled={uploading}
              />
            </Box>
          ))}
        </SimpleGrid>
      )}

      {uploading && <Progress value={progress} w="100%" colorScheme="brand" />}

      <Button
        colorScheme="brand"
        onClick={handleUpload}
        isLoading={uploading}
        loadingText="Uploading..."
        disabled={files.length === 0}
        w="full"
      >
        Upload {files.length} {files.length === 1 ? 'Image' : 'Images'}
      </Button>
    </VStack>
  );
};

export default AdminImageUpload; 