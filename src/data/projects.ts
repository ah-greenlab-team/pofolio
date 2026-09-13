/**
 * Danh sách ứng dụng / dự án.
 * Thêm một object mới vào mảng `projects` là có ngay card ở trang chủ
 * và một trang chi tiết tại /projects/<slug>.
 */

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  tech: string[];
  year: string;
  status: "live" | "wip" | "archived";
  featured?: boolean;
  /** Link tải app — thường là Google Play. */
  demoUrl?: string;
  /** Nhãn của nút tải. Mặc định: "Tải trên Google Play". */
  demoLabel?: string;
  repoUrl?: string;
  /** Ảnh đặt trong /public, ví dụ "/projects/app.png". Bỏ trống sẽ hiện ảnh gradient mặc định. */
  image?: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    slug: "habit-loop",
    title: "HabitLoop",
    summary:
      "Ứng dụng theo dõi thói quen với widget màn hình chính, nhắc nhở thông minh và biểu đồ chuỗi ngày.",
    description: [
      "HabitLoop ra đời vì tôi cần một app theo dõi thói quen đủ nhẹ để mở lên là đánh dấu xong trong hai giây. Toàn bộ giao diện viết bằng Jetpack Compose, dữ liệu lưu cục bộ bằng Room nên app chạy hoàn toàn offline.",
      "Phần nhắc nhở dùng WorkManager kết hợp AlarmManager để đảm bảo thông báo vẫn đến đúng giờ kể cả khi hệ thống đang ở chế độ tiết kiệm pin. Widget màn hình chính được dựng bằng Glance.",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "WorkManager", "Glance"],
    year: "2025",
    status: "live",
    featured: true,
    demoUrl: "https://play.google.com/store/apps/details?id=com.example.habitloop",
    repoUrl: "https://github.com/ah-greenlab-team/habitloop",
    highlights: [
      "Hoạt động hoàn toàn offline",
      "Widget màn hình chính viết bằng Glance",
      "Nhắc nhở đúng giờ kể cả khi tiết kiệm pin",
    ],
  },
  {
    slug: "snap-note",
    title: "SnapNote",
    summary:
      "App ghi chú nhanh, hỗ trợ quick tile và chia sẻ từ ứng dụng khác, đồng bộ qua Firebase.",
    description: [
      "SnapNote giúp lưu lại ý tưởng trong vài giây: kéo thanh thông báo, chạm quick settings tile, gõ, xong. Người dùng cũng có thể chia sẻ văn bản hoặc ảnh từ bất kỳ app nào vào thẳng SnapNote.",
      "Dữ liệu lưu cục bộ trước rồi đồng bộ nền lên Firestore, nên thao tác ghi chú không bao giờ phải chờ mạng. Xung đột khi sửa trên nhiều thiết bị được giải quyết theo thời điểm chỉnh sửa sau cùng.",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Coroutines", "DataStore"],
    year: "2025",
    status: "live",
    featured: true,
    demoUrl: "https://play.google.com/store/apps/details?id=com.example.snapnote",
    repoUrl: "https://github.com/ah-greenlab-team/snapnote",
    highlights: [
      "Quick settings tile để ghi chú tức thì",
      "Nhận nội dung chia sẻ từ app khác",
      "Ghi cục bộ trước, đồng bộ nền sau",
    ],
  },
  {
    slug: "fit-track",
    title: "FitTrack",
    summary:
      "Ứng dụng ghi lại buổi tập, đọc dữ liệu bước chân và nhịp tim từ Health Connect.",
    description: [
      "FitTrack tập trung vào việc ghi buổi tập thật nhanh giữa các hiệp: chọn bài, nhập số lần, chuyển hiệp — tất cả trong một màn hình duy nhất, không phải điều hướng qua lại.",
      "App đọc dữ liệu bước chân và nhịp tim thông qua Health Connect, đồng thời có phiên bản Wear OS đồng hành để điều khiển ngay trên đồng hồ.",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Health Connect", "Wear OS", "Room"],
    year: "2024",
    status: "wip",
    featured: true,
    repoUrl: "https://github.com/ah-greenlab-team/fittrack",
    highlights: [
      "Ghi cả buổi tập trong một màn hình",
      "Tích hợp Health Connect",
      "Có app đồng hành trên Wear OS",
    ],
  },
  {
    slug: "compose-charts",
    title: "ComposeCharts",
    summary:
      "Thư viện biểu đồ nhẹ cho Jetpack Compose, không phụ thuộc bên thứ ba.",
    description: [
      "Một thư viện nhỏ tôi tách ra từ dự án cá nhân: vẽ biểu đồ đường, cột và tròn bằng Canvas API của Compose, hỗ trợ animation và chạm để xem chi tiết.",
      "Mục tiêu là giữ thư viện dưới 60KB và không kéo theo dependency nào, để dự án nào cũng thêm vào được mà không lo phình APK.",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Canvas API", "Maven Central"],
    year: "2024",
    status: "live",
    demoUrl: "https://github.com/ah-greenlab-team/compose-charts#readme",
    demoLabel: "Xem tài liệu",
    repoUrl: "https://github.com/ah-greenlab-team/compose-charts",
    highlights: ["Dưới 60KB", "Không dependency", "Animation và tương tác chạm"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const statusLabel: Record<Project["status"], string> = {
  live: "Đang chạy",
  wip: "Đang phát triển",
  archived: "Lưu trữ",
};
