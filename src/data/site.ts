/**
 * Thông tin cá nhân & cấu hình chung của site.
 * Sửa file này để đổi tên, mô tả, link mạng xã hội.
 */

export const site = {
  name: "Đỗ Mạnh Hùng",
  role: "Android Developer",
  tagline:
    "Tôi xây dựng ứng dụng Android bằng Kotlin & Jetpack Compose — từ bản thiết kế đầu tiên đến khi lên Google Play.",
  bio: [
    "Xin chào, tôi là Android developer. Tôi thích làm những ứng dụng chạy mượt, khởi động nhanh và hoạt động tốt kể cả khi mất mạng.",
    "Công việc hằng ngày của tôi xoay quanh Kotlin, Jetpack Compose và kiến trúc MVVM. Ngoài giờ làm, tôi xây các app nhỏ để thử nghiệm API mới của Android và giải quyết những vấn đề mình gặp phải. Tất cả đều được liệt kê ở trang Ứng dụng.",
  ],
  email: "domanhhungit1@gmail.com",
  phone: "0886053265",
  birthDate: "30/07/2002",
  location: "Hà Nội, Việt Nam",
  availableForWork: true,
  url: "https://example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/kyata002" },
    { label: "Google Play", href: "https://play.google.com/store/apps/dev?id=8921047804864964854" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/m%E1%BA%A1nh-h%C3%B9ng-%C4%91%E1%BB%97/" },
  ],
} as const;

export const nav = [
  { label: "Trang chủ", href: "/" },
  { label: "Ứng dụng", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Liên hệ", href: "/#contact" },
] as const;
