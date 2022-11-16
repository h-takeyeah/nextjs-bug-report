const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/**
 * @param {string} phase 
 * @param {any} _
 */
module.exports = (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */
  const sharedConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: true
    }
  }

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    /** @type {import('next').NextConfig} */
    const devConfig = {
      ...sharedConfig
    }
    return devConfig
  } else {
    /** @type {import('next').NextConfig} */
    const prodConfig = {
      ...sharedConfig,
      output: 'standalone' // turbopack currently does not support `output: 'standalone'`
    }
    return prodConfig
  }
}
