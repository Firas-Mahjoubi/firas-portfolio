/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Configure allowed image qualities
    qualities: [75, 85, 90, 95, 100],
    // You can add other image configs here if needed
  }
};

export default nextConfig;
