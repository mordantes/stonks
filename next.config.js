/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_URL: 'http://localhost:3000/auth/register',
  },
  // i18n: {
  //   locales: ['en', 'ru'],
  //   localeDetection: true,
  //   defaultLocale: 'ru'
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/prices',
  //       destination: '/prices?page=0',
  //       permanent: false
  //     }
  //   ]
  // }
}
