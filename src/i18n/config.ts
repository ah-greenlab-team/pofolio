/** Cấu hình đa ngôn ngữ. Tiếng Việt là mặc định, tiếng Anh là bản dịch. */

export const locales = ["vi", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "vi";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Một giá trị có hai phiên bản ngôn ngữ. */
export type Localized<T = string> = Record<Locale, T>;

/** Lấy đúng bản dịch theo ngôn ngữ đang hiển thị. */
export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export const localeNames: Record<Locale, string> = {
  vi: "Tiếng Việt",
  en: "English",
};

/** Nhãn ngắn hiện trên nút chuyển ngôn ngữ. */
export const localeShort: Record<Locale, string> = {
  vi: "VI",
  en: "EN",
};

/** Mã locale dùng cho thẻ <html lang> và định dạng ngày. */
export const htmlLang: Record<Locale, string> = {
  vi: "vi",
  en: "en",
};
