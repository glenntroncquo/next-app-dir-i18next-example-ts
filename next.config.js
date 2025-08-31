/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  // experimental: {
  //   // Required: for next 13
  //   appDir: true
  // }
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-8b9194a017634e559563eb04c14827ba.r2.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/webp", "image/avif"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
