const dev = process.env.NODE_ENV !== 'production'

// everything the site loads is its own; the only outside call is the contact form's POST
const csp = [
  "default-src 'self'",
  // Next emits inline bootstrap scripts and the JSON-LD blocks; webpack's dev runtime needs eval
  `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${dev ? ' ws:' : ''}`,
  "worker-src 'self' blob:",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  // preview builds can go to their own folder so they never overwrite the running dev server's .next
  distDir: process.env.NEXT_DIST_DIR || '.next',
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      // the garden model's scripts, posters and photos: cache for a week, refresh in the background
      {
        source: '/maket/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' }],
      },
    ]
  },
  async redirects() {
    return [
      // one address for search engines: the bare domain goes to www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'emrecaneren.com' }],
        destination: 'https://www.emrecaneren.com/:path*',
        permanent: true,
      },
      // the old site's botox article was removed (regulation); send its links to the bruxism treatment page
      {
        source: '/dis-sagligi-rehberi/masseter-cene-botoksu-dis-sikma',
        destination: '/tedaviler/dis-sikma-bruksizm-tedavisi',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
