// Get the base URL for the app
export const BASE_URL = import.meta.env.BASE_URL || '/';

// Utility function to get the correct asset path
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Return the path with the base URL
  return `${BASE_URL}${cleanPath}`;
};

// Helper specifically for images
export const getImagePath = (imagePath) => {
  // If the path already includes the base URL, return as is
  if (imagePath.startsWith(BASE_URL)) {
    return imagePath;
  }
  
  // Remove leading slash and prepend base URL
  const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
  return `${BASE_URL}${cleanPath}`;
};