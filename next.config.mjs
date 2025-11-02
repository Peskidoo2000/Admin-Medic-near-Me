/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/auth/:path*',
        destination: 'https://betahealth.qandqmanagement.co.uk/auth/:path*',
      },
    ];
  },
};

export default nextConfig;
