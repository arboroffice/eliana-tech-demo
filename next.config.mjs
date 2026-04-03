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
        source: '/watch',
        destination: '/webinar',
        permanent: true,
      },
      {
        source: '/vsl',
        destination: '/webinar',
        permanent: true,
      }
    ]
  },
}

export default nextConfig
