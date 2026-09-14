/**
 * Thông tin cá nhân & cấu hình chung của site.
 * Những trường có dạng { vi, en } sẽ hiển thị theo ngôn ngữ người xem chọn.
 */

import type { Localized } from "@/i18n/config";

export const site = {
  name: "Đỗ Mạnh Hùng",
  role: {
    vi: "Android Developer",
    en: "Android Developer",
  } satisfies Localized,
  tagline: {
    vi: "Tôi xây dựng ứng dụng Android bằng Kotlin & Jetpack Compose — từ bản thiết kế đầu tiên đến khi lên Google Play.",
    en: "I build Android apps with Kotlin & Jetpack Compose — from the first wireframe to the day they ship on Google Play.",
  } satisfies Localized,
  bio: {
    vi: [
      "Xin chào, tôi là Android developer. Tôi thích làm những ứng dụng chạy mượt, khởi động nhanh và hoạt động tốt kể cả khi mất mạng.",
      "Công việc hằng ngày của tôi xoay quanh Kotlin, Jetpack Compose và kiến trúc MVVM. Ngoài giờ làm, tôi xây các app nhỏ để thử nghiệm API mới của Android và giải quyết những vấn đề mình gặp phải. Tất cả đều được liệt kê ở trang Ứng dụng.",
    ],
    en: [
      "Hi, I'm an Android developer. I care about apps that feel smooth, start fast, and keep working when the network drops.",
      "My day-to-day revolves around Kotlin, Jetpack Compose and MVVM. Outside of work I build small apps to try out new Android APIs and scratch my own itches — they are all listed on the Apps page.",
    ],
  } satisfies Localized<string[]>,
  email: "domanhhungit1@gmail.com",
  phone: "0886053265",
  birthDate: "30/07/2002",
  location: {
    vi: "Hà Nội, Việt Nam",
    en: "Hanoi, Vietnam",
  } satisfies Localized,
  availableForWork: true,
  url: "https://example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/kyata002" },
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/dev?id=8921047804864964854",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/m%E1%BA%A1nh-h%C3%B9ng-%C4%91%E1%BB%97/",
    },
  ],
};
