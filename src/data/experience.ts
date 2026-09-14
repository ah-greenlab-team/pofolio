/** Kỹ năng và kinh nghiệm — sửa trực tiếp trong file này. */

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Ngôn ngữ & UI",
    items: ["Kotlin", "Java", "Jetpack Compose", "XML Layout", "Material 3", "Flutter"],
  },
  {
    title: "Android & Kiến trúc",
    items: ["MVVM", "Coroutines & Flow", "Hilt", "Room", "WorkManager", "Navigation"],
  },
  {
    title: "Backend & Công cụ",
    items: ["Retrofit", "Firebase", "Gradle", "Git", "CI/CD", "Play Console"],
  },
  {
    title: "Kỹ năng khác",
    items: ["Business Analysis", "Quality Control", "Team Development"],
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  /** Tuỳ chọn: hình thức làm việc, ví dụ "Toàn thời gian". */
  type?: string;
  location?: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "8/2025 — nay",
    title: "Android Developer",
    org: "Amobear Vietnam",
    type: "Toàn thời gian",
    location: "Định Công, Hà Nội",
    // TODO: bổ sung sản phẩm bạn đang phụ trách và kết quả nổi bật
    description:
      "Phát triển ứng dụng Android cho các sản phẩm của công ty, sử dụng Kotlin và Jetpack Compose.",
  },
  {
    period: "5/2024 — 5/2025",
    title: "Android Developer — Business Analysis",
    org: "Medi Pharm Việt Nam",
    type: "Toàn thời gian",
    location: "Việt Nam",
    description:
      "Mô tả ứng dụng và xác định các chức năng cần xây dựng. Tham gia trực tiếp vào quá trình phát triển và dựng nền tảng ứng dụng cho Android.",
  },
  {
    period: "4/2022 — 9/2022",
    title: "Android Developer",
    org: "Công ty TNHH MTG Technology",
    type: "Bán thời gian",
    location: "Hà Nội",
    description:
      "Tham gia phát triển ứng dụng Android cùng nhóm, phụ trách kiểm thử chất lượng và phối hợp trong quá trình xây dựng sản phẩm.",
  },
  {
    period: "10/2020 — 3/2025",
    title: "Kỹ sư Công nghệ thông tin",
    org: "Trường Đại học Mở Hà Nội",
    description:
      "Tốt nghiệp chuyên ngành Công nghệ thông tin. Trong thời gian học, tôi tập trung vào lập trình di động và bắt đầu xây dựng các ứng dụng Android đầu tiên.",
  },
];
