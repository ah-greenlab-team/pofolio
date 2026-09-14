/**
 * Danh sách ứng dụng / dự án.
 * Thêm một object mới vào mảng `projects` là có ngay card ở trang chủ
 * và một trang chi tiết tại /projects/<slug>.
 *
 * LƯU Ý: trường `tech` của các app dưới đây được suy ra từ mô tả trên
 * Google Play. Hãy kiểm tra lại và sửa cho đúng với stack thật bạn dùng.
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
  /** Số lượt cài đặt hiển thị trên Google Play, ví dụ "10K+". */
  downloads?: string;
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
    slug: "ah-vpn",
    title: "AH VPN — Fast VPN Secure Proxy",
    summary:
      "Ứng dụng VPN kết nối một chạm, không cần đăng ký, với hệ thống máy chủ trải khắp Mỹ, châu Âu và châu Á.",
    description: [
      "AH VPN được xây dựng quanh một mục tiêu duy nhất: người dùng mở app lên, chạm một lần là có kết nối an toàn. Không đăng ký tài khoản, không cấu hình phức tạp — hệ thống tự chọn máy chủ tốt nhất đang sẵn sàng.",
      "App hỗ trợ mạng WiFi, 4G, 5G và LTE với băng thông không giới hạn, đồng thời tích hợp mua hàng trong ứng dụng cho gói nâng cao. Đây là sản phẩm có lượng cài đặt lớn nhất của tôi trên Google Play.",
    ],
    tech: ["Kotlin", "Android VpnService", "In-app Purchases", "AdMob"],
    year: "2026",
    status: "live",
    featured: true,
    downloads: "10K+",
    demoUrl:
      "https://play.google.com/store/apps/details?id=ahgreen.fast.unlimited.vpn.unblockproxy.securevpn",
    highlights: [
      "Kết nối một chạm, không cần tài khoản",
      "Máy chủ ở Mỹ, Anh, châu Âu, Nhật, Singapore, Ấn Độ, Hồng Kông, Úc",
      "Tự động chọn máy chủ tốt nhất",
      "Băng thông không giới hạn",
    ],
  },
  {
    slug: "wifi-nearby",
    title: "WiFi Nearby — WiFi Hotspot Map",
    summary:
      "Bản đồ tương tác giúp tìm điểm phát WiFi xung quanh, kèm trình quét mạng và tự động kết nối lại.",
    description: [
      "WiFi Nearby hiển thị các điểm phát WiFi quanh vị trí người dùng trên một bản đồ thời gian thực, giúp họ tìm được kết nối ổn định khi đang di chuyển — ở quán cà phê, sân bay, khách sạn hay nơi công cộng.",
      "Ngoài bản đồ, app có trình quét mạng hiển thị cường độ tín hiệu và thông tin SSID/BSSID để người dùng cân nhắc trước khi kết nối, cùng danh sách yêu thích, lịch sử kết nối và thông báo khi đi ngang một điểm phát khả dụng.",
    ],
    tech: ["Kotlin", "WifiManager", "Google Maps SDK", "Location Services"],
    year: "2026",
    status: "live",
    featured: true,
    downloads: "10K+",
    demoUrl: "https://play.google.com/store/apps/details?id=com.ahgreen.wifi",
    highlights: [
      "Bản đồ điểm phát WiFi theo thời gian thực",
      "Quét mạng kèm cường độ tín hiệu và SSID/BSSID",
      "Tự động kết nối lại mạng đã tin cậy",
      "Danh sách yêu thích, lịch sử và chế độ tối",
    ],
  },
  {
    slug: "shimeji-pet",
    title: "Shimeji Pet — Anime Pet",
    summary:
      "Thú cưng anime chạy nhảy ngay trên màn hình điện thoại, có hệ thống trồng cây, cho ăn và gacha sưu tầm.",
    description: [
      "Shimeji Pet đưa những nhân vật anime nhỏ lên lớp overlay phía trên mọi ứng dụng: chúng đi lại, leo trèo, phản ứng khi người dùng chạm hoặc kéo thả. Có thể bật cùng lúc tới sáu nhân vật mà vẫn giữ được hiệu năng mượt và ít hao pin.",
      "Phần gameplay gồm hệ thống trồng cây — thu hoạch quả — cho thú cưng ăn để tăng cấp và mở khoá hành vi mới, cùng cơ chế gacha để sưu tầm nhân vật hiếm. Người dùng tuỳ chỉnh được kích thước, tốc độ di chuyển và số lượng thú cưng.",
    ],
    tech: ["Kotlin", "Overlay Window", "Animation", "AdMob"],
    year: "2026",
    status: "live",
    featured: true,
    downloads: "100+",
    demoUrl: "https://play.google.com/store/apps/details?id=com.ahgreenlab.shimeji",
    highlights: [
      "Hiển thị overlay trên mọi ứng dụng",
      "Tối đa 6 nhân vật cùng lúc, tương tác chạm và kéo thả",
      "Hệ thống trồng cây, cho ăn và lên cấp",
      "Gacha sưu tầm nhân vật hiếm",
    ],
  },
  {
    slug: "bluetooth-device-finder",
    title: "Bluetooth Device Finder: Radar",
    summary:
      "Biến điện thoại thành radar dò tín hiệu để tìm tai nghe, đồng hồ hay loa Bluetooth bị thất lạc.",
    description: [
      "Ứng dụng quét toàn bộ thiết bị Bluetooth và BLE đang phát sóng xung quanh, sắp xếp theo cường độ tín hiệu rồi dẫn người dùng tới thiết bị cần tìm qua bốn bước: quét — chọn — đi theo — tìm thấy. Thanh đo tín hiệu cập nhật liên tục theo các mức Yếu → Trung bình → Mạnh → Rất gần.",
      "Điểm tôi tâm đắc nhất là phần xử lý tín hiệu: giá trị RSSI thô rất nhiễu, nên tôi làm thêm lớp làm mượt để thanh đo tăng giảm ổn định thay vì nhảy loạn. Tính năng dò hướng sử dụng la bàn của điện thoại để ước lượng phía nào tín hiệu mạnh nhất — là phép đo thật, không phải mũi tên trang trí.",
    ],
    tech: ["Kotlin", "Bluetooth LE", "Xử lý tín hiệu RSSI", "SensorManager"],
    year: "2026",
    status: "live",
    downloads: "50+",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.findbluetooth.device.radar",
    highlights: [
      "Radar hiển thị thiết bị theo cường độ tín hiệu",
      "Làm mượt RSSI để chỉ số không nhảy loạn",
      "Dò hướng bằng la bàn của thiết bị",
      "Hoạt động hoàn toàn offline, không thu thập dữ liệu",
    ],
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
