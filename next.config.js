const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_SERVER
} = require('next/constants')

/**
 * @type {import('next').NextConfig}
 */
const DEV_CONFIG = {
  // ...defaultConfig,
  reactStrictMode: true,
  poweredByHeader: true,
  redirects: async () => {
    return [

    ]
  },
  rewrites: async () => {
    return [

    ]
  },
  basePath: "/dev",
  devIndicators: {
    buildActivity: true
  }
}

/**
 * @type {import('next').NextConfig}
 */
const PROD_CONFIG = {
  // ...defaultConfig,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true, //Etags allow for caching on web browser causing faster uploads.
  redirects: async () => {
    return [

    ]
  },
  rewrites: async () => {
    return [

    ]
  },
  basePath: "/app",
  generateBuildId: async () => {
    return "build-id"// updgrade your build id on every build.
  },
  swcMinify: true,
  optimizeFonts: true,
  crossOrigin: 'use-credentials'
}

module.exports = (phase, { defaultConfig }) => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      return DEV_CONFIG;
    case PHASE_PRODUCTION_SERVER:
      return PROD_CONFIG;
    default:
      return defaultConfig;
  }
};
