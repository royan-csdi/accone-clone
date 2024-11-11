/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.acc.co.id",
      },
      {
        hostname: "netimg.acc.co.id",
      },
      {
        hostname: "cdn.setirkanan.co.id",
      },
    ],
  },
};

export default nextConfig;
