import { storage, ref, listAll, getDownloadURL, uploadBytesResumable, deleteObject } from '../config/firebase';
import imageCompression from 'browser-image-compression';

// Cache for image URLs to avoid unnecessary Firebase calls
const urlCache = new Map();

const compressImage = async (file) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };
  
  try {
    return await imageCompression(file, options);
  } catch (error) {
    console.error('Error compressing image:', error);
    return file; // Return original file if compression fails
  }
};

export const uploadImage = async (file, category, onProgress) => {
  try {
    // Compress image before upload
    const compressedFile = await compressImage(file);
    
    // Create a reference to the file location
    const timestamp = Date.now();
    const fileName = `${timestamp}_${file.name}`;
    const imageRef = ref(storage, `gallery/${category}/${fileName}`);

    // Upload the file with progress monitoring
    const uploadTask = uploadBytesResumable(imageRef, compressedFile);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (onProgress) onProgress(progress);
        },
        (error) => {
          reject(error);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(url);
        }
      );
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const deleteImage = async (imagePath) => {
  try {
    const imageRef = ref(storage, imagePath);
    await deleteObject(imageRef);
    urlCache.delete(imagePath);
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
};

export const getGalleryImages = async () => {
  try {
    const galleryRef = ref(storage, 'gallery');
    const result = await listAll(galleryRef);
    
    const images = await Promise.all(
      result.items.map(async (item) => {
        // Check cache first
        if (urlCache.has(item.fullPath)) {
          return urlCache.get(item.fullPath);
        }

        const url = await getDownloadURL(item);
        const category = item.fullPath.split('/')[1] || 'uncategorized'; // Assumes structure: gallery/category/image.jpg
        
        const imageData = {
          id: item.name,
          src: url,
          alt: item.name.split('.')[0].replace(/_/g, ' '),
          category: category,
        };

        // Cache the result
        urlCache.set(item.fullPath, imageData);
        
        return imageData;
      })
    );

    return images;
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
}; 