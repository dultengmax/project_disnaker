/** @type {import('next').NextConfig} */
const nextConfig = {
  
        images: {
          remotePatterns: [
            {
              hostname: 'images.unsplash.com',

            },
            {
              hostname: 'plus.unsplash.com',

            },
            {
              hostname: 'assets.aceternity.com',

            },
            {
              hostname: 'youtube.com',

            },
          ],
        },
      
};

export default nextConfig;
