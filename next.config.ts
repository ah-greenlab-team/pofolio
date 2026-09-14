import type { NextConfig } from "next";
import { defaultLocale } from "./src/i18n/config";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Trang gốc đưa về ngôn ngữ mặc định.
      { source: "/", destination: `/${defaultLocale}`, permanent: false },
      // Giữ cho các đường dẫn cũ (trước khi có i18n) vẫn hoạt động.
      {
        source: "/projects/:path*",
        destination: `/${defaultLocale}/projects/:path*`,
        permanent: false,
      },
      {
        source: "/blog/:path*",
        destination: `/${defaultLocale}/blog/:path*`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
