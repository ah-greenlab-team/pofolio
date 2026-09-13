# Website Portfolio

Website cá nhân của một Android developer — giới thiệu bản thân và showcase các ứng dụng đã xây dựng.

Xây bằng **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4**. Toàn bộ trang được
render tĩnh nên tải nhanh và deploy được lên bất kỳ hosting nào.

## Chạy dự án

```bash
npm run dev      # chạy dev server tại http://localhost:3000
npm run build    # build production
npm start        # chạy bản đã build
npm run lint     # kiểm tra lint
```

## Sửa nội dung ở đâu

Toàn bộ nội dung nằm tách khỏi giao diện — bạn chỉ cần sửa mấy file dữ liệu, không cần đụng vào component.

| Muốn đổi | Sửa file |
| --- | --- |
| Tên, chức danh, giới thiệu, email, link mạng xã hội | `src/data/site.ts` |
| Danh sách ứng dụng / dự án | `src/data/projects.ts` |
| Kỹ năng và kinh nghiệm làm việc | `src/data/experience.ts` |
| Bài viết blog | thêm file `.md` vào `content/blog/` |
| Màu sắc, theme sáng/tối | biến CSS ở đầu `src/app/globals.css` |

### Thêm một ứng dụng mới

Mở `src/data/projects.ts` và thêm một object vào mảng `projects`:

```ts
{
  slug: "ten-app",            // quyết định URL: /projects/ten-app
  title: "Tên App",
  summary: "Mô tả ngắn hiện trên card.",
  description: ["Đoạn mô tả chi tiết thứ nhất.", "Đoạn thứ hai."],
  tech: ["Kotlin", "Jetpack Compose", "Room"],
  year: "2026",
  status: "live",             // "live" | "wip" | "archived"
  featured: true,             // true = hiện ở trang chủ
  demoUrl: "https://play.google.com/store/apps/details?id=...",  // tuỳ chọn
  demoLabel: "Xem tài liệu",  // tuỳ chọn, mặc định "Tải trên Google Play"
  repoUrl: "https://github.com/...",  // tuỳ chọn
  image: "/projects/ten-app.png",     // tuỳ chọn, xem public/projects/
  highlights: ["Điểm nổi bật 1", "Điểm nổi bật 2"],
}
```

Trang chi tiết tại `/projects/ten-app` được tạo tự động.

### Thêm bài viết blog

Tạo file mới trong `content/blog/`, ví dụ `content/blog/bai-viet-moi.md`:

```markdown
---
title: "Tiêu đề bài viết"
description: "Mô tả ngắn hiện ở trang danh sách."
date: "2026-01-15"
tags: ["Android", "Jetpack Compose"]
---

Nội dung viết bằng Markdown. Hỗ trợ heading, danh sách, bảng,
code block, blockquote và link.
```

Tên file chính là URL: bài trên sẽ nằm ở `/blog/bai-viet-moi`.

## Deploy lên Vercel

1. Đẩy code lên GitHub:

   ```bash
   git add -A
   git commit -m "Khởi tạo website portfolio"
   git remote add origin https://github.com/<tên-bạn>/<tên-repo>.git
   git push -u origin main
   ```

2. Vào [vercel.com/new](https://vercel.com/new), chọn repo vừa đẩy lên rồi bấm **Deploy**.
   Vercel tự nhận diện Next.js, không cần cấu hình gì thêm.

3. Sau khi có domain thật, cập nhật `url` trong `src/data/site.ts` để thẻ SEO,
   `sitemap.xml` và `robots.txt` trỏ đúng địa chỉ.

Từ lần sau, mỗi lần `git push` là Vercel tự deploy lại.

## Cấu trúc thư mục

```
content/blog/          bài viết Markdown
public/projects/       ảnh screenshot của các app
src/app/               các route (trang chủ, /projects, /blog, sitemap, robots)
src/components/        component dùng chung (Header, Footer, ProjectCard, ...)
src/data/              nội dung của site — sửa ở đây
src/lib/blog.ts        đọc và render file Markdown
```

## Tính năng có sẵn

- Giao diện sáng/tối, tự theo cài đặt hệ thống và ghi nhớ lựa chọn của người xem
- Responsive từ điện thoại tới desktop
- SEO: thẻ Open Graph, `sitemap.xml`, `robots.txt` sinh tự động
- Blog viết bằng Markdown, hỗ trợ bảng và code block
- Trang 404 riêng, link "bỏ qua tới nội dung" cho người dùng bàn phím
- Tôn trọng `prefers-reduced-motion`
