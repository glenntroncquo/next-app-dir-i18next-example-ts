/** @type {import('next').NextConfig} */
const locales = ["nl", "en", "fr", "pt"];

const aliases = [
  ["/appointment", "/afspraak"],
  ["/booking", "/afspraak"],
  ["/services", "/diensten"],
  ["/services/keratine", "/diensten/keratine-behandeling"],
  ["/services/botox", "/diensten/haarbotox"],
  ["/services/ritual-led", "/diensten/ritual-nutrition"],
  ["/services/ritual", "/diensten/ritual-nutrition"],
  ["/about", "/over-ons"],
  ["/wie-is-wie", "/over-ons"],
  ["/privacy-policy", "/privacy"],
  ["/privacybeleid", "/privacy"],
  ["/cookie-policy", "/cookiebeleid"],
  ["/terms", "/voorwaarden"],
  ["/terms-of-service", "/voorwaarden"],
];

function buildRedirects() {
  const rules = [];
  for (const [from, to] of aliases) {
    rules.push({ source: from, destination: to, permanent: true });
    for (const lng of locales) {
      rules.push({
        source: `/${lng}${from}`,
        destination: to,
        permanent: true,
      });
    }
  }
  for (const lng of locales) {
    rules.push({ source: `/${lng}`, destination: "/", permanent: true });
    rules.push({
      source: `/${lng}/:path*`,
      destination: "/:path*",
      permanent: true,
    });
  }
  return rules;
}

const nextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [75, 80, 85, 90],
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
    return buildRedirects();
  },
};

module.exports = nextConfig;
