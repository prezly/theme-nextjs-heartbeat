module.exports = {
  images: {
    domains: ['cdn.uc.assets.prezly.com'],
  },
  eslint: {
    dirs: ['components', 'modules', 'pages', 'utils'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
          },
          {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN',
          },
          {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
          },
          {
              key: 'Content-Security-Policy',
              value: 'upgrade-insecure-requests; report-uri https://prezly.report-uri.com/r/d/csp/enforce;',
          },
        ],
      },
    ]
  },
}
