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
  // TODO: thay bằng nơi làm việc thật của bạn
  {
    period: "3/2025 — nay",
    title: "Android Developer",
    org: "Tên công ty",
    description:
      "Mô tả ngắn về công việc bạn đang làm: sản phẩm phụ trách, công nghệ sử dụng và kết quả nổi bật.",
  },
  {
    period: "10/2020 — 3/2025",
    title: "Kỹ sư Công nghệ thông tin",
    org: "Trường Đại học Mở Hà Nội",
    description:
      "Tốt nghiệp chuyên ngành Công nghệ thông tin. Trong thời gian học, tôi tập trung vào lập trình di động và bắt đầu xây dựng các ứng dụng Android đầu tiên.",
  },
];
