/**
 * Danh sách ứng dụng / dự án.
 * Thêm một object mới vào mảng `projects` là có ngay card ở trang chủ
 * và một trang chi tiết tại /<lang>/projects/<slug>.
 *
 * LƯU Ý: trường `tech` của các app dưới đây được suy ra từ mô tả trên
 * Google Play. Hãy kiểm tra lại và sửa cho đúng với stack thật bạn dùng.
 */

import type { Localized } from "@/i18n/config";

export type Project = {
  slug: string;
  /** Tên app giữ nguyên ở cả hai ngôn ngữ. */
  title: string;
  summary: Localized;
  description: Localized<string[]>;
  tech: string[];
  year: string;
  status: "live" | "wip" | "archived";
  featured?: boolean;
  /** Số lượt cài đặt hiển thị trên Google Play, ví dụ "10K+". */
  downloads?: string;
  /** Link tải app — thường là Google Play. */
  demoUrl?: string;
  /** Nhãn của nút tải. Bỏ trống sẽ dùng nhãn mặc định theo ngôn ngữ. */
  demoLabel?: Localized;
  repoUrl?: string;
  /** Icon app vuông đặt trong /public, ví dụ "/projects/app.png". */
  icon?: string;
  /** Ảnh bìa 16:9 đặt trong /public. Nếu có, sẽ thay cho nền icon làm mờ. */
  image?: string;
  highlights?: Localized<string[]>;
};

export const projects: Project[] = [
  {
    slug: "ah-vpn",
    title: "AH VPN — Fast VPN Secure Proxy",
    summary: {
      vi: "Ứng dụng VPN kết nối một chạm, không cần đăng ký, với hệ thống máy chủ trải khắp Mỹ, châu Âu và châu Á.",
      en: "A one-tap VPN with no sign-up required, backed by servers across the US, Europe and Asia.",
    },
    description: {
      vi: [
        "AH VPN được xây dựng quanh một mục tiêu duy nhất: người dùng mở app lên, chạm một lần là có kết nối an toàn. Không đăng ký tài khoản, không cấu hình phức tạp — hệ thống tự chọn máy chủ tốt nhất đang sẵn sàng.",
        "App hỗ trợ mạng WiFi, 4G, 5G và LTE với băng thông không giới hạn, đồng thời tích hợp mua hàng trong ứng dụng cho gói nâng cao. Đây là sản phẩm có lượng cài đặt lớn nhất của tôi trên Google Play.",
      ],
      en: [
        "AH VPN is built around a single goal: open the app, tap once, and you are connected. No account, no configuration — the app picks the best available server for you.",
        "It works across WiFi, 4G, 5G and LTE with unlimited bandwidth, and includes in-app purchases for the premium tier. This is my most installed app on Google Play.",
      ],
    },
    tech: ["Kotlin", "Android VpnService", "In-app Purchases", "AdMob"],
    year: "2026",
    status: "live",
    featured: true,
    downloads: "10K+",
    demoUrl:
      "https://play.google.com/store/apps/details?id=ahgreen.fast.unlimited.vpn.unblockproxy.securevpn",
    icon: "/projects/ah-vpn.png",
    highlights: {
      vi: [
        "Kết nối một chạm, không cần tài khoản",
        "Máy chủ ở Mỹ, Anh, châu Âu, Nhật, Singapore, Ấn Độ, Hồng Kông, Úc",
        "Tự động chọn máy chủ tốt nhất",
        "Băng thông không giới hạn",
      ],
      en: [
        "One-tap connection, no account needed",
        "Servers in the US, UK, Europe, Japan, Singapore, India, Hong Kong and Australia",
        "Automatically picks the fastest server",
        "Unlimited bandwidth",
      ],
    },
  },
  {
    slug: "wifi-nearby",
    title: "WiFi Nearby — WiFi Hotspot Map",
    summary: {
      vi: "Bản đồ tương tác giúp tìm điểm phát WiFi xung quanh, kèm trình quét mạng và tự động kết nối lại.",
      en: "An interactive map of nearby WiFi hotspots, with a network scanner and automatic reconnection.",
    },
    description: {
      vi: [
        "WiFi Nearby hiển thị các điểm phát WiFi quanh vị trí người dùng trên một bản đồ thời gian thực, giúp họ tìm được kết nối ổn định khi đang di chuyển — ở quán cà phê, sân bay, khách sạn hay nơi công cộng.",
        "Ngoài bản đồ, app có trình quét mạng hiển thị cường độ tín hiệu và thông tin SSID/BSSID để người dùng cân nhắc trước khi kết nối, cùng danh sách yêu thích, lịch sử kết nối và thông báo khi đi ngang một điểm phát khả dụng.",
      ],
      en: [
        "WiFi Nearby plots the hotspots around you on a live map, so you can find a stable connection while travelling — in a cafe, an airport, a hotel or any public space.",
        "Beyond the map, the app scans networks and shows signal strength alongside SSID/BSSID details so you can judge a network before joining it. It also keeps favourites, a connection history, and notifies you when you walk past an available hotspot.",
      ],
    },
    tech: ["Kotlin", "WifiManager", "Google Maps SDK", "Location Services"],
    year: "2026",
    status: "live",
    featured: true,
    downloads: "10K+",
    demoUrl: "https://play.google.com/store/apps/details?id=com.ahgreen.wifi",
    icon: "/projects/wifi-nearby.png",
    highlights: {
      vi: [
        "Bản đồ điểm phát WiFi theo thời gian thực",
        "Quét mạng kèm cường độ tín hiệu và SSID/BSSID",
        "Tự động kết nối lại mạng đã tin cậy",
        "Danh sách yêu thích, lịch sử và chế độ tối",
      ],
      en: [
        "Live map of nearby WiFi hotspots",
        "Network scanner with signal strength and SSID/BSSID",
        "Auto-reconnect to trusted networks",
        "Favourites, connection history and dark mode",
      ],
    },
  },
  {
    slug: "shimeji-pet",
    title: "Shimeji Pet — Anime Pet",
    summary: {
      vi: "Thú cưng anime chạy nhảy ngay trên màn hình điện thoại, có hệ thống trồng cây, cho ăn và gacha sưu tầm.",
      en: "Anime pets that roam across your phone screen, with a planting, feeding and gacha collection system.",
    },
    description: {
      vi: [
        "Shimeji Pet đưa những nhân vật anime nhỏ lên lớp overlay phía trên mọi ứng dụng: chúng đi lại, leo trèo, phản ứng khi người dùng chạm hoặc kéo thả. Có thể bật cùng lúc tới sáu nhân vật mà vẫn giữ được hiệu năng mượt và ít hao pin.",
        "Phần gameplay gồm hệ thống trồng cây — thu hoạch quả — cho thú cưng ăn để tăng cấp và mở khoá hành vi mới, cùng cơ chế gacha để sưu tầm nhân vật hiếm. Người dùng tuỳ chỉnh được kích thước, tốc độ di chuyển và số lượng thú cưng.",
      ],
      en: [
        "Shimeji Pet puts small anime characters on an overlay above every other app: they walk, climb, and react when you tap or drag them. You can run up to six at once while keeping animation smooth and battery use low.",
        "The gameplay layer adds trees to plant, fruit to harvest and pets to feed — they gain XP, level up and unlock new behaviours — plus a gacha system for collecting rarer characters. Size, movement speed and pet count are all adjustable.",
      ],
    },
    tech: ["Kotlin", "Overlay Window", "Animation", "AdMob"],
    year: "2026",
    status: "live",
    featured: true,
    downloads: "100+",
    demoUrl: "https://play.google.com/store/apps/details?id=com.ahgreenlab.shimeji",
    icon: "/projects/shimeji-pet.jpg",
    highlights: {
      vi: [
        "Hiển thị overlay trên mọi ứng dụng",
        "Tối đa 6 nhân vật cùng lúc, tương tác chạm và kéo thả",
        "Hệ thống trồng cây, cho ăn và lên cấp",
        "Gacha sưu tầm nhân vật hiếm",
      ],
      en: [
        "Runs as an overlay on top of any app",
        "Up to six pets at once, with tap and drag interaction",
        "Planting, feeding and levelling system",
        "Gacha collection for rare characters",
      ],
    },
  },
  {
    slug: "bluetooth-device-finder",
    title: "Bluetooth Device Finder: Radar",
    summary: {
      vi: "Biến điện thoại thành radar dò tín hiệu để tìm tai nghe, đồng hồ hay loa Bluetooth bị thất lạc.",
      en: "Turns your phone into a signal radar that leads you to misplaced earbuds, watches or Bluetooth speakers.",
    },
    description: {
      vi: [
        "Ứng dụng quét toàn bộ thiết bị Bluetooth và BLE đang phát sóng xung quanh, sắp xếp theo cường độ tín hiệu rồi dẫn người dùng tới thiết bị cần tìm qua bốn bước: quét — chọn — đi theo — tìm thấy. Thanh đo tín hiệu cập nhật liên tục theo các mức Yếu → Trung bình → Mạnh → Rất gần.",
        "Điểm tôi tâm đắc nhất là phần xử lý tín hiệu: giá trị RSSI thô rất nhiễu, nên tôi làm thêm lớp làm mượt để thanh đo tăng giảm ổn định thay vì nhảy loạn. Tính năng dò hướng sử dụng la bàn của điện thoại để ước lượng phía nào tín hiệu mạnh nhất — là phép đo thật, không phải mũi tên trang trí.",
      ],
      en: [
        "The app scans every Bluetooth and BLE device broadcasting nearby, sorts them by signal strength, then walks you to the one you want in four steps: scan, select, follow, found. The meter updates continuously through Weak, Medium, Strong and Very close.",
        "The part I am most pleased with is the signal processing. Raw RSSI readings are noisy, so I added a smoothing layer that lets the meter rise and fall steadily instead of jumping around. The direction finder uses the phone compass to estimate where the signal is strongest, which is a real measurement rather than a decorative arrow.",
      ],
    },
    tech: ["Kotlin", "Bluetooth LE", "RSSI Signal Processing", "SensorManager"],
    year: "2026",
    status: "live",
    downloads: "50+",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.findbluetooth.device.radar",
    icon: "/projects/bluetooth-device-finder.png",
    highlights: {
      vi: [
        "Radar hiển thị thiết bị theo cường độ tín hiệu",
        "Làm mượt RSSI để chỉ số không nhảy loạn",
        "Dò hướng bằng la bàn của thiết bị",
        "Hoạt động hoàn toàn offline, không thu thập dữ liệu",
      ],
      en: [
        "Radar view ordered by signal strength",
        "RSSI smoothing so readings stay steady",
        "Direction finding using the device compass",
        "Fully offline, collects no data",
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
