/** @type {import('next').NextConfig} */
const nextConfig = {
  //Para que Next confie en una fuente de imagen externa
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },

    ]
  }

}

module.exports = nextConfig
