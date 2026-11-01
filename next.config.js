/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // the garden model's scripts, posters and photos: cache for a week, refresh in the background
  async headers() {
    return [
      {
        source: '/maket/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' }],
      },
    ]
  },
}

module.exports = nextConfig
