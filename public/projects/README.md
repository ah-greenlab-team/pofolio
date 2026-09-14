Thư mục chứa hình ảnh của các ứng dụng.

## Icon app (đang dùng)

Ảnh vuông, khai báo bằng trường `icon` trong `src/data/projects.ts`:

    icon: "/projects/ten-app.png"

Icon sẽ hiện ở giữa nền gradient trên card, và cạnh tiêu đề ở trang chi tiết.
Kích thước khuyến nghị: 512×512. Các icon hiện có được tải từ Google Play.

## Ảnh bìa (tuỳ chọn)

Nếu muốn dùng ảnh chụp màn hình thay cho nền gradient, khai báo thêm `image`:

    image: "/projects/ten-app-cover.png"

Khi có `image`, ảnh này sẽ phủ kín card thay cho gradient + icon.
Tỉ lệ khuyến nghị: 16:9 (ví dụ 1600×900).
