/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  async redirects() {
    return [
      // Core page redirects - redirect to Dutch (nl) as default
      {
        source: "/appointment",
        destination: "/nl/booking",
        permanent: true, // 301 redirect
      },
      {
        source: "/services",
        destination: "/nl/services",
        permanent: true,
      },
      {
        source: "/wie-is-wie",
        destination: "/nl/about",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
