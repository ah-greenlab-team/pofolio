---
title: "Chuyển dần từ XML sang Jetpack Compose mà không dừng phát triển tính năng"
description: "Kinh nghiệm migrate một app 80 màn hình sang Compose trong sáu tháng, vẫn ra bản cập nhật đều đặn mỗi hai tuần."
date: "2025-06-02"
tags: ["Android", "Jetpack Compose"]
---

App tôi đang làm có khoảng 80 màn hình viết bằng XML. Viết lại toàn bộ trong một nhánh riêng là điều không thể — team vẫn phải ra tính năng mới mỗi hai tuần. Đây là cách chúng tôi làm.

## Bắt đầu từ màn hình lá, không phải màn hình chính

Màn hình đầu tiên nên là thứ ít rủi ro nhất: một trang cài đặt, một màn hình trống, một dialog. Mục tiêu của bước này không phải là cải thiện sản phẩm mà là để cả team quen với Compose và dựng được bộ component dùng chung đầu tiên.

## Dùng `ComposeView` để trộn dần

Không cần chuyển cả màn hình cùng lúc. `ComposeView` cho phép nhúng một phần Compose vào layout XML sẵn có:

```kotlin
findViewById<ComposeView>(R.id.header).setContent {
    AppTheme {
        UserHeader(state = viewModel.headerState.collectAsStateWithLifecycle().value)
    }
}
```

Nhờ vậy chúng tôi chuyển được từng khối một, mỗi PR nhỏ gọn và dễ review.

## Dựng design system trước khi chuyển màn hình phức tạp

Sai lầm của chúng tôi ở tháng đầu là chuyển màn hình theo thứ tự có sẵn, dẫn tới mỗi người tự viết một kiểu button. Sau đó chúng tôi dừng lại hai tuần để dựng bộ component chung — màu, kiểu chữ, khoảng cách, button, text field — rồi mọi thứ sau đó nhanh hơn hẳn.

> Migrate không phải cuộc đua. Thứ quyết định thành công là bạn có dừng lại đúng lúc để xây nền hay không.

## Kết quả sau sáu tháng

Khoảng 70% màn hình đã sang Compose, số dòng code giao diện giảm gần một phần ba, và quan trọng nhất là không có bản phát hành nào bị lùi lịch. Phần XML còn lại là những màn hình phức tạp nhất — chúng tôi sẽ chuyển khi có lý do chính đáng, không chuyển chỉ vì muốn chuyển.
