/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';


const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  reactStrictMode: true,
    transpilePackages: ['three'],
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'github.com',
            port: '',
            pathname: '/juanvs23/**',
          },
        ],
      },
}

export default withNextIntl(nextConfig);
