/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: [
    //     'https://'
    // ]
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.thecocktaildb.com',
            port: '',
            pathname: '',
          },
        ],
      },
}

module.exports = nextConfig
