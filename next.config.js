// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
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

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  // silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
// TODO: Remove `process.env.VERCEL !== '1'` part when Sentry/Vercel errors are fixed
module.exports =
    process.env.NODE_ENV === 'production' && process.env.VERCEL !== '1'
        ? withSentryConfig(moduleExports, sentryWebpackPluginOptions)
        : moduleExports;
