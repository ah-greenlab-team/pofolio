---
title: "Ba thay đổi giúp app Android của tôi khởi động nhanh hơn một nửa"
description: "Cold start từ 1.8s xuống còn 0.9s nhờ dọn lại Application.onCreate, dùng Baseline Profile và bỏ splash screen tự chế."
date: "2025-08-14"
tags: ["Android", "Hiệu năng"]
---

App của tôi có cold start 1.8 giây — đủ chậm để người dùng thấy màn hình trắng trước khi nội dung hiện ra. Dưới đây là ba thay đổi mang lại hiệu quả rõ nhất.

## 1. Dọn sạch `Application.onCreate()`

Đây là thủ phạm phổ biến nhất. Mọi thư viện đều khuyên khởi tạo trong `onCreate()`, và sau vài năm thì hàm này phình ra thành một danh sách dài chạy tuần tự trên main thread.

Giải pháp là khởi tạo lười — chỉ dựng thứ gì khi thật sự cần đến:

```kotlin
class App : Application() {
    // Chỉ khởi tạo khi màn hình đầu tiên gọi tới
    val analytics by lazy { Analytics.create(this) }

    override fun onCreate() {
        super.onCreate()
        // Chỉ giữ lại những gì bắt buộc phải có ngay
        crashReporter.install(this)
    }
}
```

Với các thư viện bắt buộc chạy sớm, `androidx.startup` cho phép gom chúng lại và khai báo thứ tự phụ thuộc rõ ràng.

## 2. Thêm Baseline Profile

Baseline Profile cho biết trước những đoạn code nào sẽ chạy lúc khởi động, để ART biên dịch sẵn thay vì diễn giải trong lần chạy đầu. Đây là thay đổi tốn ít công nhất nhưng hiệu quả đáng kể — chỉ cần thêm module `baselineprofile` và viết một bài test mô phỏng luồng khởi động.

Điểm cần lưu ý: phải đo trên bản release, cài bằng `--no-streaming`, vì bản debug không dùng profile.

## 3. Bỏ splash screen tự chế

Tôi từng có một `SplashActivity` riêng hiển thị logo trong 1,5 giây. Nó vừa cộng thêm thời gian, vừa tạo ra một activity thừa phải khởi tạo.

API `SplashScreen` của Android 12 xử lý việc này ở tầng hệ thống: icon hiện ra ngay khi người dùng chạm, và biến mất đúng lúc màn hình đầu tiên sẵn sàng vẽ.

| Thay đổi | Cold start |
| --- | --- |
| Ban đầu | 1.8s |
| Sau bước 1 | 1.3s |
| Sau cả ba bước | 0.9s |

Tất cả số liệu trên đo bằng Macrobenchmark trên thiết bị tầm trung, lặp 10 lần. Không có kỹ thuật nào ở đây là cao siêu — điều quan trọng là đo trước khi sửa, và chỉ sửa thứ thật sự tốn thời gian.
