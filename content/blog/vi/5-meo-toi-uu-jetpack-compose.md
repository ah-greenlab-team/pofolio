---
title: "5 mẹo tối ưu Jetpack Compose từ góc nhìn một Junior Android Developer"
description: "Tránh recomposition thừa, dùng remember đúng chỗ, đặt key cho LazyColumn, xử lý side-effect và state hoisting — những gì tôi rút ra sau một thời gian vật lộn với Compose."
date: "2026-02-03"
tags: ["Android", "Jetpack Compose", "Kotlin"]
source: "https://www.linkedin.com/posts/m%E1%BA%A1nh-h%C3%B9ng-%C4%91%E1%BB%97_androiddev-jetpackcompose-kotlin-share-7424282767477100544-hGrK/"
---

Sau một thời gian "vật lộn" với Jetpack Compose, tôi tổng hợp lại 5 kinh nghiệm thực tế giúp code mượt hơn, ít recomposition thừa và giảm lag rõ rệt khi UI phức tạp.

## 1. Tránh recomposition thừa

- Chỉ đọc state thật sự cần thiết trong Composable
- Dùng `derivedStateOf` để cache giá trị tính toán
- Tách state nhỏ để recomposition diễn ra cục bộ

Hiệu quả thấy rõ nhất khi màn hình có nhiều thành phần UI.

## 2. Dùng `remember` đúng chỗ

Nên dùng `remember` cho:

- `mutableStateOf` cục bộ
- Giá trị tính toán
- Object không đổi (`Paint`, `CoroutineScope`, …)

Không nên dùng `remember` cho giá trị thay đổi liên tục — ví dụ thời gian hiện tại.

Dùng sai `remember` có thể gây ra những bug rất khó debug.

## 3. Luôn dùng `key` trong LazyColumn / LazyRow

- Thêm `key = { it.id }` cho mỗi item
- Giữ state của item đúng khi thêm, xoá hoặc sắp xếp lại danh sách
- Tránh animation lỗi và UI nhảy lung tung

## 4. Side-effect chuẩn với `LaunchedEffect` và `DisposableEffect`

Side-effect chỉ nên chạy khi key thay đổi, không phải mỗi lần recomposition.

- `LaunchedEffect(key)` — gọi network, ghi log, chạy animation
- `DisposableEffect` — setup và cleanup (listener, lifecycle)

Đây cũng là chỗ tôi từng dính bug recomposition nhiều nhất.

## 5. State hoisting

- Đưa state lên Composable cha cao nhất có thể
- Composable con giữ trạng thái stateless
- Truyền xuống hai thứ: `value` và `onChange`

Lợi ích thu được:

- Dễ test hơn
- Dễ tái sử dụng hơn
- Ít bug liên quan tới callback hơn

---

Còn bạn thì sao? Bạn hay gặp lỗi recomposition thừa, hay hay quên `key` trong `LazyColumn` hơn?
