/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "googleusercontent.com" },
      {
        protocol: "https",
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
      },
      { protocol: "https", hostname: "cdn.openai.com" },
    ],
  },
  // ... other configurations
};

module.exports = nextConfig;
