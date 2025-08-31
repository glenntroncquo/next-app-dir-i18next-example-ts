// Simple utility to get Cloudflare CDN URLs for images
export const getImageUrl = (path: string): string => {
  const cdnUrl = process.env.NEXT_PUBLIC_CLOUDFLARE_URL;

  if (!cdnUrl) {
    // Fallback to local path if no CDN URL is set
    return path;
  }

  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${cdnUrl}/${cleanPath}`;
};