/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/roadmap/:path*',
        destination: '/audit',
        permanent: true,
      },
      {
        source: '/build',
        destination: '/audit',
        permanent: true,
      },
      {
        source: '/custom',
        destination: '/audit',
        permanent: true,
      },
      {
        source: '/webinar',
        destination: '/audit',
        permanent: true,
      }
    ]
  },
}

export default nextConfig
