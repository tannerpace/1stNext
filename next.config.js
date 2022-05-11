//some examples https://github.com/vercel/next.js/blob/canary/packages/next/server/config-shared.ts#L137

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */
  env: {
    description: 'app-description-its-a-blog',
  },
}

module.exports = {
  ...nextConfig,
}