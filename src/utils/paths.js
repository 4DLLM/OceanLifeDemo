// Utility function to get the correct asset path
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // In development, use root path
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production (GitHub Pages), use the base path
  return `/OceanLifeDemo/${cleanPath}`;
};

// Helper specifically for images
export const getImagePath = (imagePath) => {
  return getAssetPath(imagePath);
};