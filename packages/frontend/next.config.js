/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: 
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:3001/api/:path*'
            : '/api/',
      },
    ]
  }
}

module.exports = nextConfig
