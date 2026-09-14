import type { Locale } from "./config";

/** Toàn bộ chuỗi giao diện. Thêm ngôn ngữ mới thì bổ sung một khoá ở đây. */
export const dictionaries = {
  vi: {
    nav: {
      home: "Trang chủ",
      projects: "Ứng dụng",
      blog: "Blog",
      contact: "Liên hệ",
      openMenu: "Mở menu",
      closeMenu: "Đóng menu",
      skipToContent: "Bỏ qua tới nội dung chính",
    },
    theme: {
      toLight: "Chuyển sang giao diện sáng",
      toDark: "Chuyển sang giao diện tối",
    },
    language: {
      switchTo: "Chuyển sang tiếng Anh",
    },
    hero: {
      available: "Đang nhận dự án mới",
      viewProjects: "Xem ứng dụng",
      contactMe: "Liên hệ với tôi",
    },
    home: {
      projectsEyebrow: "Sản phẩm",
      projectsTitle: "Ứng dụng tôi đã xây",
      projectsDescription:
        "Một vài ứng dụng tiêu biểu đang có mặt trên Google Play. Mỗi app đều có trang chi tiết mô tả bài toán và cách tôi giải quyết.",
      viewAllProjects: "Xem tất cả ứng dụng",
      aboutEyebrow: "Giới thiệu",
      aboutTitle: "Đôi lời về tôi",
      timelineEyebrow: "Hành trình",
      timelineTitle: "Kinh nghiệm & học vấn",
      blogEyebrow: "Blog",
      blogTitle: "Bài viết gần đây",
      blogDescription: "Ghi chép về những thứ tôi học được trong lúc làm sản phẩm.",
      contactEyebrow: "Liên hệ",
      contactTitle: "Cùng xây thứ gì đó",
      contactDescription:
        "Nếu bạn có dự án phù hợp hoặc chỉ muốn trao đổi về công nghệ, cứ gửi cho tôi một email.",
    },
    facts: {
      birthDate: "Ngày sinh",
      location: "Địa điểm",
      email: "Email",
      phone: "Điện thoại",
    },
    projects: {
      eyebrow: "Sản phẩm",
      title: "Ứng dụng",
      description:
        "Các ứng dụng Android tôi đã phát hành trên Google Play. Bấm vào từng app để xem bài toán tôi giải quyết và cách tôi xây dựng nó.",
      backToAll: "Tất cả ứng dụng",
      downloads: "lượt tải",
      downloadsOnPlay: "lượt tải trên Google Play",
      defaultDemoLabel: "Tải trên Google Play",
      sourceCode: "Mã nguồn",
      tech: "Công nghệ",
      highlights: "Điểm nổi bật",
      status: {
        live: "Đang chạy",
        wip: "Đang phát triển",
        archived: "Lưu trữ",
      },
    },
    blog: {
      eyebrow: "Viết lách",
      title: "Blog",
      description:
        "Ghi chép về lập trình, sản phẩm và những thứ tôi học được dọc đường.",
      empty: "Chưa có bài viết nào.",
      backToAll: "Tất cả bài viết",
      originallyOn: "Bài viết này được đăng lần đầu trên",
    },
    footer: {
      builtWith: "Xây bằng Next.js & Tailwind CSS.",
    },
    notFound: {
      title: "Không tìm thấy trang",
      description: "Trang bạn tìm không tồn tại hoặc đã được chuyển đi nơi khác.",
      backHome: "Về trang chủ",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Apps",
      blog: "Blog",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      skipToContent: "Skip to main content",
    },
    theme: {
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme",
    },
    language: {
      switchTo: "Chuyển sang tiếng Việt",
    },
    hero: {
      available: "Available for new projects",
      viewProjects: "View apps",
      contactMe: "Get in touch",
    },
    home: {
      projectsEyebrow: "Work",
      projectsTitle: "Apps I have built",
      projectsDescription:
        "A few of the apps I have published on Google Play. Each one has its own page describing the problem and how I solved it.",
      viewAllProjects: "View all apps",
      aboutEyebrow: "About",
      aboutTitle: "A little about me",
      timelineEyebrow: "Journey",
      timelineTitle: "Experience & education",
      blogEyebrow: "Blog",
      blogTitle: "Recent writing",
      blogDescription: "Notes on what I learn while building products.",
      contactEyebrow: "Contact",
      contactTitle: "Let's build something",
      contactDescription:
        "If you have a project in mind, or simply want to talk shop, send me an email.",
    },
    facts: {
      birthDate: "Date of birth",
      location: "Location",
      email: "Email",
      phone: "Phone",
    },
    projects: {
      eyebrow: "Work",
      title: "Apps",
      description:
        "The Android apps I have shipped to Google Play. Open any of them to see the problem it solves and how I built it.",
      backToAll: "All apps",
      downloads: "downloads",
      downloadsOnPlay: "downloads on Google Play",
      defaultDemoLabel: "Get it on Google Play",
      sourceCode: "Source code",
      tech: "Built with",
      highlights: "Highlights",
      status: {
        live: "Live",
        wip: "In progress",
        archived: "Archived",
      },
    },
    blog: {
      eyebrow: "Writing",
      title: "Blog",
      description:
        "Notes on Android development, shipping products, and what I pick up along the way.",
      empty: "No posts yet.",
      backToAll: "All posts",
      originallyOn: "This post was originally published on",
    },
    footer: {
      builtWith: "Built with Next.js & Tailwind CSS.",
    },
    notFound: {
      title: "Page not found",
      description: "The page you are looking for does not exist or has moved.",
      backHome: "Back to home",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
