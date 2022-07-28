/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  productionBrowserSourceMaps: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://138.201.204.24:${process.env.API_PORT}/api/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
