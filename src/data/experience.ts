/** Kỹ năng và kinh nghiệm. Trường dạng { vi, en } hiển thị theo ngôn ngữ đang chọn. */

import type { Localized } from "@/i18n/config";

export type SkillGroup = { title: Localized; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: { vi: "Ngôn ngữ & UI", en: "Languages & UI" },
    items: ["Kotlin", "Java", "Jetpack Compose", "XML Layout", "Material 3", "Flutter"],
  },
  {
    title: { vi: "Android & Kiến trúc", en: "Android & Architecture" },
    items: ["MVVM", "Coroutines & Flow", "Hilt", "Room", "WorkManager", "Navigation"],
  },
  {
    title: { vi: "Backend & Công cụ", en: "Backend & Tooling" },
    items: ["Retrofit", "Firebase", "Gradle", "Git", "CI/CD", "Play Console"],
  },
  {
    title: { vi: "Kỹ năng khác", en: "Other skills" },
    items: ["Business Analysis", "Quality Control", "Team Development"],
  },
];

export type TimelineItem = {
  period: Localized;
  title: Localized;
  org: Localized;
  /** Tuỳ chọn: hình thức làm việc. */
  type?: Localized;
  location?: Localized;
  description: Localized;
};

export const timeline: TimelineItem[] = [
  {
    period: { vi: "8/2025 — nay", en: "Aug 2025 — present" },
    title: { vi: "Android Developer", en: "Android Developer" },
    org: { vi: "Amobear Vietnam", en: "Amobear Vietnam" },
    type: { vi: "Toàn thời gian", en: "Full-time" },
    location: { vi: "Định Công, Hà Nội", en: "Dinh Cong, Hanoi" },
    // TODO: bổ sung sản phẩm bạn đang phụ trách và kết quả nổi bật
    description: {
      vi: "Phát triển ứng dụng Android cho các sản phẩm của công ty, sử dụng Kotlin và Jetpack Compose.",
      en: "Building Android apps for the company's products with Kotlin and Jetpack Compose.",
    },
  },
  {
    period: { vi: "5/2024 — 5/2025", en: "May 2024 — May 2025" },
    title: {
      vi: "Android Developer — Business Analysis",
      en: "Android Developer — Business Analysis",
    },
    org: { vi: "Medi Pharm Việt Nam", en: "Medi Pharm Vietnam" },
    type: { vi: "Toàn thời gian", en: "Full-time" },
    location: { vi: "Việt Nam", en: "Vietnam" },
    description: {
      vi: "Mô tả ứng dụng và xác định các chức năng cần xây dựng. Tham gia trực tiếp vào quá trình phát triển và dựng nền tảng ứng dụng cho Android.",
      en: "Described the application and defined the features it needed. Took part in development directly and helped build the Android platform for the product.",
    },
  },
  {
    period: { vi: "4/2022 — 9/2022", en: "Apr 2022 — Sep 2022" },
    title: { vi: "Android Developer", en: "Android Developer" },
    org: { vi: "Công ty TNHH MTG Technology", en: "MTG Technology Co., Ltd." },
    type: { vi: "Bán thời gian", en: "Part-time" },
    location: { vi: "Hà Nội", en: "Hanoi" },
    description: {
      vi: "Tham gia phát triển ứng dụng Android cùng nhóm, phụ trách kiểm thử chất lượng và phối hợp trong quá trình xây dựng sản phẩm.",
      en: "Worked with the team on Android development, covering quality control and day-to-day collaboration on the product.",
    },
  },
  {
    period: { vi: "10/2020 — 3/2025", en: "Oct 2020 — Mar 2025" },
    title: {
      vi: "Kỹ sư Công nghệ thông tin",
      en: "Bachelor of Engineering, Information Technology",
    },
    org: { vi: "Trường Đại học Mở Hà Nội", en: "Hanoi Open University" },
    description: {
      vi: "Tốt nghiệp chuyên ngành Công nghệ thông tin. Trong thời gian học, tôi tập trung vào lập trình di động và bắt đầu xây dựng các ứng dụng Android đầu tiên.",
      en: "Graduated in Information Technology. During my studies I focused on mobile development and built my first Android apps.",
    },
  },
];
