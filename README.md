# 🚀 Bài Tập 1: React.js Blog App + Tailwind CSS & LocalStorage

Một ứng dụng Web Blog cá nhân hiện đại được xây dựng bằng **React.js (Vite)**, **Tailwind CSS v4**, kết nối API **JSONPlaceholder** và quản lý trạng thái lưu trữ trên **LocalStorage**.

---

## 🌟 Tính Năng Nổi Bật

- ⚡ **Kết nối RESTful API**: Tải tự động danh sách bài viết từ `https://jsonplaceholder.typicode.com/posts` và thông tin tác giả từ `users`.
- 🔍 **Tìm kiếm thời gian thực**: Lọc bài viết tức thì theo tiêu đề, nội dung hoặc tên tác giả.
- 🔖 **Lưu bài viết (Bookmark & LocalStorage)**: Cho phép lưu/bỏ lưu các bài viết yêu thích vào `localStorage` của trình duyệt, không mất dữ liệu khi F5.
- ✍️ **Tạo bài viết mới**: Cho phép người dùng viết bài mới và tự động lưu giữ trong `localStorage`.
- 💬 **Xem chi tiết & Bình luận**: Modal hiển thị chi tiết bài viết kèm danh sách bình luận được tải từ API `/posts/:id/comments`.
- 🎨 **Giao diện Glassmorphism**: Thiết kế Dark Mode cao cấp với bảng màu Tailwind CSS, hiệu ứng mượt mà và chuyển đổi linh hoạt.

---

## 📜 Lịch Sử Commit Chỉnh Chu (Clean Commit History)

Dự án tuân thủ nghiêm ngặt chuẩn **Conventional Commits**, mỗi commit giải quyết duy nhất 1 nhiệm vụ rõ ràng:

| Commit Hash | Loại (Type) | Mô Tả (Commit Message) |
| :--- | :--- | :--- |
| `b777527` | `chore` | Initialized React project with Vite, Tailwind CSS, and Git configuration |
| `57e85c3` | `feat` | Added API service layer for JSONPlaceholder posts, users, and comments |
| `628fce1` | `feat` | Built modern UI layout, Navbar search, Header hero, and PostCard components |
| `82d6f4d` | `feat` | Implemented LocalStorage bookmarking and custom post creation |
| *(Mới nhất)* | `docs` | Completed README.md documentation for assignment 1 |

---

## 🛠️ Hướng Dẫn Cài Đặt & Chạy Cục Bộ

### 1. Yêu cầu hệ thống
- Node.js (phiên bản v18.x trở lên)
- npm / yarn / pnpm

### 2. Cài đặt các gói phụ thuộc
```bash
npm install
```

### 3. Chạy môi trường phát triển (Dev Server)
```bash
npm run dev
```
Trình duyệt sẽ tự động mở hoặc truy cập địa chỉ: `http://localhost:5173`

### 4. Đóng gói sản phẩm (Production Build)
```bash
npm run build
```

---

## 📤 Hướng Dẫn Push Up Remote GitHub

Để đẩy repository này lên tài khoản GitHub cá nhân của bạn, hãy thực hiện 3 bước sau:

1. **Tạo Repository mới trên GitHub**:
   - Truy cập [https://github.com/new](https://github.com/new)
   - Đặt tên Repository (ví dụ: `goku-react-blog-baitap1`).
   - Chọn **Public** (hoặc Private) và **KHÔNG** tích chọn "Initialize with README".

2. **Kết nối và Push**:
```bash
# Thay thế URL bên dưới bằng URL repository GitHub của bạn
git remote add origin https://github.com/anhtuan03-goku/goku-react-blog-baitap1.git

# Đẩy tất cả commit và nhánh main lên remote
git push -u origin main
```

---

*Thực hiện bởi **anhtuan03-goku** — Bài tập 1.*
