/** @type {import('next').NextConfig} */
const nextConfig = {
  //Para que next pueda usar como fuente de la imgaen un sitio remoto
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
