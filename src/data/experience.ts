/** Kỹ năng và kinh nghiệm — sửa trực tiếp trong file này. */

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Ngôn ngữ & UI",
    items: ["Kotlin", "Java", "Jetpack Compose", "XML Layout", "Material 3"],
  },
  {
    title: "Android & Kiến trúc",
    items: ["MVVM", "Coroutines & Flow", "Hilt", "Room", "WorkManager", "Navigation"],
  },
  {
    title: "Backend & Công cụ",
    items: ["Retrofit", "Firebase", "Gradle", "Git", "CI/CD", "Play Console"],
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "2024 — nay",
    title: "Android Developer",
    org: "Công ty ABC",
    description:
      "Phát triển và bảo trì ứng dụng Android có hàng trăm nghìn lượt cài đặt. Phụ trách chuyển dần giao diện cũ sang Jetpack Compose và tối ưu thời gian khởi động.",
  },
  {
    period: "2022 — 2024",
    title: "Junior Android Developer",
    org: "Công ty XYZ",
    description:
      "Xây dựng tính năng cho app thương mại điện tử: giỏ hàng, thanh toán, thông báo đẩy. Viết unit test và UI test cho các luồng chính.",
  },
  {
    period: "2018 — 2022",
    title: "Cử nhân Công nghệ thông tin",
    org: "Đại học DEF",
    description:
      "Chuyên ngành Kỹ thuật phần mềm. Đồ án tốt nghiệp là ứng dụng Android hỗ trợ học từ vựng theo phương pháp lặp lại ngắt quãng.",
  },
];
