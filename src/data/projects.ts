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
  /** Icon app vuông đặt trong /public, ví dụ "/app-icons/app.png". */
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
    icon: "/app-icons/ah-vpn.png",
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
    icon: "/app-icons/wifi-nearby.png",
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
    downloads: "500+",
    demoUrl: "https://play.google.com/store/apps/details?id=com.ahgreenlab.shimeji",
    icon: "/app-icons/shimeji-pet.jpg",
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
    downloads: "100+",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.findbluetooth.device.radar",
    icon: "/app-icons/bluetooth-device-finder.png",
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
  {
    slug: "edge-light",
    title: "Edge Light: Notification Color",
    summary: {
      vi: "Biến viền màn hình thành đèn báo, mỗi ứng dụng một màu riêng để biết ai nhắn mà không cần mở máy.",
      en: "Turns the screen edge into a notification light, with a different colour per app so you know who messaged without waking the phone.",
    },
    description: {
      vi: [
        "Khi có tin nhắn, cuộc gọi hay lúc cắm sạc, một dải màu chạy quanh viền màn hình. Điểm tôi tập trung nhất — và cũng là thứ phần lớn app cùng loại bỏ qua — là cho phép gán màu riêng cho từng ứng dụng: xanh lá là WhatsApp, cam là Shopee, xanh dương là Zalo. Người dùng tự chọn màu hoặc để app lấy màu từ icon của ứng dụng đó.",
        "App có 20 hiệu ứng chuyển động, 12 kiểu viền và 39 bộ màu dựng sẵn, cộng thêm trình chỉnh palette bốn điểm màu cho ai muốn tự pha. Toàn bộ cấu hình lưu được thành Scene để đổi bằng một chạm — viền xanh mỏng chạy chậm cho ban đêm, viền lửa dày cho lúc chơi game.",
        "Phần tôi dành nhiều công nhất lại là lúc đèn tắt: giờ yên lặng, ngưỡng pin tự ngắt, chỉ sáng khi màn hình đã tắt, và app tự ước lượng mức hao pin theo phần trăm mỗi ngày để người dùng biết trước khi bật. App cũng không xin quyền Internet, nên không có gì được gửi đi đâu cả.",
      ],
      en: [
        "When a message, a call or the charger arrives, a band of colour runs around the edge of the display. The part I focused on most — and the part most edge lighting apps skip — is per-app colours: green for WhatsApp, orange for Shopee, blue for Zalo. You pick the colours, or let the app read them from each app icon.",
        "There are 20 animations, 12 border shapes and 39 colour themes, plus a custom palette editor with four colour stops. Any combination can be saved as a Scene and switched in one tap — a thin, slow, deep blue border for the night, a thick fire animation for gaming.",
        "Most of my effort actually went into knowing when to stay off: quiet hours, a battery guard that pauses below a level you set, an only-while-the-screen-is-off mode, and an estimate of the battery cost in percent per day shown before you commit. The app requests no internet permission at all, so nothing leaves the device.",
      ],
    },
    tech: ["Kotlin", "Overlay Window", "NotificationListenerService", "Material You"],
    year: "2026",
    status: "live",
    downloads: "100+",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.ahgreenlab.edgelighting.borderlight",
    icon: "/app-icons/edge-light.png",
    highlights: {
      vi: [
        "Gán màu riêng cho từng ứng dụng, hoặc lấy màu từ icon",
        "20 hiệu ứng, 12 kiểu viền, 39 bộ màu và palette tự pha",
        "Scene lưu trọn cấu hình, đổi bằng một chạm",
        "Giờ yên lặng, ngưỡng pin và ước lượng hao pin mỗi ngày",
        "Vẽ đúng theo tai thỏ, nốt ruồi hay màn hình cong",
        "Không xin quyền Internet",
      ],
      en: [
        "A colour per app, or read from the app icon",
        "20 animations, 12 border shapes, 39 themes and a custom palette",
        "Scenes save a whole look and switch in one tap",
        "Quiet hours, battery guard and a daily battery estimate",
        "Drawn to the real shape of a notch, punch hole or curved edge",
        "Requests no internet permission",
      ],
    },
  },
  {
    slug: "astralune",
    title: "Astralune — Tarot & Astrology",
    summary: {
      vi: "Tarot, chiêm tinh và thần số học gộp trong một app: rút bài hằng ngày, xem tử vi, dựng bản đồ sao từ ngày giờ nơi sinh.",
      en: "Tarot, astrology and numerology in one app: a daily card, today's horoscope, and a natal chart built from your birth date, time and place.",
    },
    description: {
      vi: [
        "Astralune gom ba mảng vốn thường nằm rải rác ở nhiều app — tarot, chiêm tinh và thần số học — vào một giao diện tĩnh lặng, không cần tạo tài khoản. Người dùng xáo bài rút lá của ngày, trải ba lá quá khứ — hiện tại — tương lai, và tra đủ 78 lá với nghĩa xuôi lẫn nghĩa ngược.",
        "Phần chiêm tinh có tử vi ngày, tuần, tháng cho cả 12 cung, kèm bầu trời hôm nay: pha Mặt Trăng, vị trí các hành tinh và những hành tinh đang nghịch hành. Bản đồ sao được tính từ ngày, giờ và nơi sinh, ra đủ hành tinh, cung nhà và các góc chiếu.",
        "Thần số học tính đường đời, biểu đạt, linh hồn, nhân cách, số sinh nhật, số trưởng thành, nợ nghiệp, các đỉnh cao và thử thách, cùng số năm — tháng — ngày cá nhân. Có thể thêm hồ sơ cho người thân để xem riêng từng người. Mọi thông tin ngày sinh chỉ nằm trên máy, không tài khoản, không đăng nhập.",
      ],
      en: [
        "Astralune brings together three things usually scattered across separate apps — tarot, astrology and numerology — in one calm interface that needs no account. You shuffle and draw the card of the day, lay a past–present–future spread, and browse all 78 cards with both upright and reversed meanings.",
        "The astrology side covers daily, weekly and monthly horoscopes for all twelve signs, plus today's sky: the Moon phase, planet positions and which planets are in retrograde. The natal chart is calculated from birth date, time and place, with planets, houses and aspects.",
        "Numerology computes life path, expression, soul urge and personality numbers, the birthday and maturity numbers, karmic debt, pinnacles and challenges, and personal year, month and day. Profiles can be added for family and friends so each person gets their own reading. Birth details stay on the device — no account, no sign-in.",
      ],
    },
    tech: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "In-app Purchases"],
    year: "2026",
    status: "live",
    demoUrl: "https://play.google.com/store/apps/details?id=com.astralune.tarot.astrology",
    icon: "/app-icons/astralune.png",
    highlights: {
      vi: [
        "Đủ 78 lá tarot với nghĩa xuôi và nghĩa ngược, có lịch sử rút bài",
        "Bản đồ sao tính từ ngày, giờ và nơi sinh",
        "Thần số học đầy đủ: đường đời, nợ nghiệp, đỉnh cao và thử thách",
        "Nhiều hồ sơ cho người thân, mỗi người một kết quả riêng",
        "Bốn ngôn ngữ: Anh, Tây Ban Nha, Bồ Đào Nha, Việt",
        "Dữ liệu ngày sinh chỉ lưu trên máy",
      ],
      en: [
        "All 78 tarot cards with upright and reversed meanings, plus draw history",
        "Natal chart calculated from birth date, time and place",
        "Full numerology: life path, karmic debt, pinnacles and challenges",
        "Multiple profiles so family and friends each get their own reading",
        "Four languages: English, Spanish, Portuguese and Vietnamese",
        "Birth details never leave the device",
      ],
    },
  },
  {
    slug: "ahaha-insect-prank",
    title: "AHaha Insect Prank Face Filter",
    summary: {
      vi: "App camera hiệu ứng: côn trùng 3D bò trên mặt, bộ lọc khuôn mặt vui nhộn và Time Warp Scan, quay lại rồi lưu video.",
      en: "A camera effects app: 3D insects crawling across your face, funny face filters and Time Warp Scan, with recording and saving built in.",
    },
    description: {
      vi: [
        "AHaha xoay quanh một ý đơn giản: bắt lại phản ứng thật của người đối diện. Những con côn trùng 3D được gắn theo khuôn mặt và bò qua màn hình như thật, xem trước trực tiếp qua camera trước khi bấm quay. Đây là mô phỏng hình ảnh, không có con vật thật nào.",
        "Ngoài bộ lọc côn trùng còn có các hiệu ứng khuôn mặt vui nhộn và Time Warp Scan — vạch quét chạy qua khung hình, người dùng giữ nguyên tư thế hoặc cử động để tạo ra hình méo theo ý mình. Kết quả phụ thuộc vào nhịp tay và cách di chuyển nên mỗi lần quay lại ra một kiểu khác.",
        "Phần quay dựng sẵn trong app: đổi camera trước sau, xem trước hiệu ứng, chọn nhạc nền hoặc thu tiếng qua micro, phát lại và tua để xem kỹ trước khi lưu về máy.",
      ],
      en: [
        "AHaha is built around one simple idea: catching a genuine reaction. The 3D insects track the face and crawl across the screen convincingly, previewed live through the camera before you hit record. The effects are visual simulations — no real creatures involved.",
        "Beyond the insect filters there are funny face effects and Time Warp Scan, where a scan line sweeps the frame and you either hold a pose or move to stretch the result. Because the outcome depends on your timing and movement, every take comes out differently.",
        "Recording is built in: switch between front and rear camera, preview the effect, pick a music track or capture your voice through the microphone, then play back and scrub through the clip before saving it to the device.",
      ],
    },
    tech: ["Kotlin", "CameraX", "Face Detection", "OpenGL ES", "MediaRecorder"],
    year: "2026",
    status: "live",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.insect.prank.face.filter.camera",
    icon: "/app-icons/ahaha-insect-prank.png",
    highlights: {
      vi: [
        "Côn trùng 3D bám theo khuôn mặt theo thời gian thực",
        "Time Warp Scan với vạch quét tạo hình méo",
        "Xem trước hiệu ứng trực tiếp trước khi quay",
        "Nhạc nền hoặc thu tiếng qua micro",
        "Phát lại, tua và lưu video về máy",
      ],
      en: [
        "3D insects tracked to the face in real time",
        "Time Warp Scan with a sweeping scan line",
        "Live preview of every effect before recording",
        "Background music or voice captured through the microphone",
        "Play back, scrub and save clips to the device",
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
