/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: { domains: ['avatars.githubusercontent.com','platform-lookaside.fbsbx.com','lh3.googleusercontent.com'] },
  env: {
    BASE_URL: process.env.BASE_URL,
    MONOGODB_URI: process.env.MONOGODB_URI,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    FACEBOOK_ID: process.env.FACEBOOK_ID,
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
   DATABASE_URL: process.env.DATABASE_URL,
   NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
};
