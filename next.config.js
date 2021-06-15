module.exports = {
  webpack: (config, {isServer}) => {

    if (!isServer) {
      config.node = { fs: 'empty' }
    }

    return config
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
          }
        ],
      },
    ]
  },
}
