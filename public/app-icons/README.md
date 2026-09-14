Thư mục chứa hình ảnh của các ứng dụng.

Lưu ý: thư mục này KHÔNG được đặt tên là `projects`, vì `/projects/...` đang có
redirect sang bản tiếng Việt — file tĩnh nằm ở đó sẽ bị redirect và hỏng ảnh.

## Icon app (đang dùng)

Ảnh vuông, khai báo bằng trường `icon` trong `src/data/projects.ts`:

    icon: "/app-icons/ten-app.png"

Icon sẽ hiện ở giữa nền là chính nó được phóng to và làm mờ, và cạnh tiêu đề ở
trang chi tiết. Kích thước khuyến nghị: 512x512. Các icon hiện có tải từ Google Play.

## Anh bia (tuy chon)

Neu muon dung anh chup man hinh thay cho nen icon lam mo, khai bao them `image`:

    image: "/app-icons/ten-app-cover.png"

Khi co `image`, anh nay se phu kin card thay cho nen icon.
Ti le khuyen nghi: 16:9 (vi du 1600x900).
