# Invoice Desktop

Invoice Desktop là ứng dụng quản lý hóa đơn xây dựng bằng [Tauri](https://tauri.app/). Dự án đóng gói sẵn giao diện web (thư mục `resources/fe`), một chương trình backend viết bằng Go (`resources/bin/backend.exe`) và MongoDB cài kèm (`resources/mongodb`). Khi khởi chạy, ứng dụng sẽ tự động bật MongoDB và backend ở chế độ nền rồi hiển thị giao diện người dùng.

## Yêu cầu

- [Rust](https://www.rust-lang.org/) >= 1.77
- [Node.js](https://nodejs.org/) và trình quản lý gói (npm hoặc yarn)
- [Tauri CLI](https://tauri.app/) phiên bản 2.5 trở lên (`npm install -g @tauri-apps/cli`)

## Chạy ứng dụng ở chế độ phát triển

```bash
cargo tauri dev
```

Lệnh trên biên dịch mã nguồn và mở cửa sổ ứng dụng. Trong quá trình khởi tạo, MongoDB và backend sẽ được chạy nền.

## Đóng gói bản phát hành

```bash
cargo tauri build
```

File cài đặt cho Windows sẽ được tạo trong `target/release/bundle`.

### Tương thích Windows 7

Ứng dụng kèm manifest hỗ trợ Windows 7. Khi đóng gói trên hệ điều hành khác,
hãy chỉ định toolchain Windows:

```bash
cargo tauri build --target x86_64-pc-windows-msvc
```

Để hạn chế phần mềm diệt virus nhận nhầm, hãy ký số file thực thi sau khi đóng
gói.

## Cấu trúc thư mục

- `src/` - mã nguồn Rust khởi chạy ứng dụng và chạy các tiến trình nền
- `resources/fe` - giao diện web đã được biên dịch
- `resources/bin/backend.exe` - backend viết bằng Go
- `resources/mongodb` - các file thực thi MongoDB đi kèm
- `icons/` - biểu tượng ứng dụng

## Giấy phép

Dự án được phát hành theo giấy phép MIT.
