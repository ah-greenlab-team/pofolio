import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";
import { htmlLang, isLocale, locales, pick } from "@/i18n/config";
import "../globals.css";

const sans = Inter({ variable: "--font-sans", subsets: ["latin", "vietnamese"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

type Params = { params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const role = pick(site.role, lang);
  const tagline = pick(site.tagline, lang);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — ${role}`,
      template: `%s — ${site.name}`,
    },
    description: tagline,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(
        locales.map((l) => [htmlLang[l], `/${l}`]),
      ),
    },
    openGraph: {
      title: `${site.name} — ${role}`,
      description: tagline,
      url: `${site.url}/${lang}`,
      siteName: site.name,
      locale: lang === "vi" ? "vi_VN" : "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

/** Đặt theme trước khi trang vẽ để tránh nhấp nháy màu. */
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem("theme");
    var dark = t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default async function RootLayout({
  children,
  params,
}: Params & { children: React.ReactNode }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <html lang={htmlLang[lang]} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${sans.variable} ${mono.variable} font-sans`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
        >
          {dict.nav.skipToContent}
        </a>
        <Header locale={lang} />
        <main id="main">{children}</main>
        <Footer locale={lang} />
      </body>
    </html>
  );
}
