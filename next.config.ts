import type { NextConfig } from "next";
import { defaultLocale } from "./src/i18n/config";

/**
 * Chỉ khớp đường dẫn KHÔNG chứa dấu chấm, để redirect không nuốt mất
 * file tĩnh trong /public (ví dụ /projects/icon.png).
 */
const NO_DOT = "((?!.*\\.).*)";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Trang gốc đưa về ngôn ngữ mặc định.
      { source: "/", destination: `/${defaultLocale}`, permanent: false },

      // Giữ cho các đường dẫn cũ (trước khi có i18n) vẫn hoạt động.
      {
        source: "/projects",
        destination: `/${defaultLocale}/projects`,
        permanent: false,
      },
      {
        source: `/projects/:path${NO_DOT}`,
        destination: `/${defaultLocale}/projects/:path`,
        permanent: false,
      },
      { source: "/blog", destination: `/${defaultLocale}/blog`, permanent: false },
      {
        source: `/blog/:path${NO_DOT}`,
        destination: `/${defaultLocale}/blog/:path`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
