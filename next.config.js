/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  unstable_runtimeJS: true,
  async redirects() {
    const isDev = process.env.NODE_ENV === "development";
    return isDev
      ? [{ source: "/test", destination: "/404", permanent: true }]
      : [];
  },
};
