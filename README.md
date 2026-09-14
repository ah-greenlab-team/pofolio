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
| Chữ trên giao diện (menu, nút, tiêu đề mục) | `src/i18n/dictionaries.ts` |
| Bài viết blog | thêm `.md` vào `content/blog/vi/` và `content/blog/en/` |
| Màu sắc, theme sáng/tối | biến CSS ở đầu `src/app/globals.css` |

## Song ngữ Việt — Anh

Site có hai ngôn ngữ, tiếng Việt là mặc định:

- `/vi` — bản tiếng Việt, `/` tự chuyển về đây
- `/en` — bản tiếng Anh

Nút **VI / EN** trên thanh điều hướng giữ nguyên trang đang xem, ví dụ
`/en/projects/ah-vpn` đổi sang `/vi/projects/ah-vpn`.

Trong `src/data/*`, những trường có dạng `{ vi: "...", en: "..." }` sẽ tự hiển thị
theo ngôn ngữ người xem chọn. Khi thêm nội dung mới, nhớ điền cả hai:

```ts
summary: {
  vi: "Mô tả tiếng Việt.",
  en: "English description.",
},
```

Chữ cố định trên giao diện (menu, nút bấm, tiêu đề mục) nằm trong
`src/i18n/dictionaries.ts`. Muốn thêm ngôn ngữ thứ ba thì bổ sung mã vào
`src/i18n/config.ts`, thêm một khối từ điển, rồi tạo thư mục blog tương ứng.

### Thêm một ứng dụng mới

Mở `src/data/projects.ts` và thêm một object vào mảng `projects`:

```ts
{
  slug: "ten-app",            // quyết định URL: /vi/projects/ten-app
  title: "Tên App",           // tên app giữ nguyên ở cả hai ngôn ngữ
  summary: {
    vi: "Mô tả ngắn hiện trên card.",
    en: "Short description shown on the card.",
  },
  description: {
    vi: ["Đoạn thứ nhất.", "Đoạn thứ hai."],
    en: ["First paragraph.", "Second paragraph."],
  },
  tech: ["Kotlin", "Jetpack Compose", "Room"],
  year: "2026",
  status: "live",             // "live" | "wip" | "archived"
  featured: true,             // true = hiện ở trang chủ
  demoUrl: "https://play.google.com/store/apps/details?id=...",  // tuỳ chọn
  repoUrl: "https://github.com/...",  // tuỳ chọn
  downloads: "10K+",                  // tuỳ chọn, số lượt tải trên Play
  icon: "/app-icons/ten-app.png",     // tuỳ chọn, icon vuông 512×512
  highlights: {
    vi: ["Điểm nổi bật 1", "Điểm nổi bật 2"],
    en: ["Highlight 1", "Highlight 2"],
  },
}
```

Trang chi tiết tại `/vi/projects/ten-app` và `/en/projects/ten-app` được tạo tự động.

> Ảnh của app phải đặt trong `public/app-icons/`, **không** đặt trong
> `public/projects/` — đường dẫn `/projects/...` đang có redirect sang bản
> tiếng Việt nên file tĩnh nằm ở đó sẽ bị redirect và hỏng ảnh khi deploy.

### Thêm bài viết blog

Tạo file mới trong `content/blog/vi/` (và bản dịch trong `content/blog/en/` nếu có),
ví dụ `content/blog/vi/bai-viet-moi.md`:

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

Tên file chính là URL: bài trên sẽ nằm ở `/vi/blog/bai-viet-moi`. Nếu muốn dẫn về
bản gốc (ví dụ bài đăng trên LinkedIn), thêm `source: "https://..."` vào frontmatter.

Hai ngôn ngữ dùng chung tên file. Bài chỉ có ở một ngôn ngữ thì chỉ hiện ở ngôn ngữ đó.

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
content/blog/vi/       bài viết tiếng Việt
content/blog/en/       bài viết tiếng Anh
public/app-icons/       icon và ảnh của các app
src/app/[lang]/        các route theo ngôn ngữ (trang chủ, /projects, /blog)
src/app/sitemap.ts     sitemap cho cả hai ngôn ngữ
src/components/        component dùng chung (Header, Footer, ProjectCard, ...)
src/data/              nội dung của site — sửa ở đây
src/i18n/              cấu hình ngôn ngữ và từ điển giao diện
src/lib/blog.ts        đọc và render file Markdown
```

## Tính năng có sẵn

- Song ngữ Việt — Anh, nút chuyển giữ nguyên trang đang xem
- Giao diện sáng/tối, tự theo cài đặt hệ thống và ghi nhớ lựa chọn của người xem
- Responsive từ điện thoại tới desktop
- SEO: thẻ Open Graph, `hreflang` cho hai ngôn ngữ, `sitemap.xml` và `robots.txt` sinh tự động
- Blog viết bằng Markdown, hỗ trợ bảng và code block
- Trang 404 riêng, link "bỏ qua tới nội dung" cho người dùng bàn phím
- Tôn trọng `prefers-reduced-motion`
