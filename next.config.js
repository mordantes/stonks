/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_URL: 'http://localhost:3000/auth/register',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/prices',
        permanent: true,
      },
    ]
  },
}
