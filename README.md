# Chương: DEV-002 Git Flow

Tài liệu thực hành và hoàn thành các bài tập thuộc Chương **DEV-002 Git Flow** trong dự án PulseBlog.

---

## 📌 Bài Tập 1: Tạo Repo, Clean Commits & Push Remote

- Tạo 1 repo cá nhân tại `E:\daotaoGOKU`.
- Thực hiện ≥ 5 commit với message rõ ràng tuân thủ quy chuẩn **Conventional Commits**.
- Đảm bảo lịch sử commit sạch, mỗi commit giải quyết duy nhất 1 nhiệm vụ.
- Đã liên kết và push thành công lên GitHub remote `https://github.com/anhtuan03-goku/Goku-Junior.git`.

---

## 📌 Bài Tập 2: Quy Trình Giả Lập Conflict & Tự Xử Lý Conflict

Mô phỏng quy trình làm việc thực tế với 2 nhánh tính năng (feature branches) cùng chỉnh sửa một tệp tin, chủ động xử lý xung đột (Merge Conflict) để giữ nguyên toàn bộ mã nguồn mà không làm mất bất kỳ tính năng nào.

### 📋 Các Bước Đã Thực Hiện Chi Tiết:

1. **Khởi tạo Nhánh Tính Năng 1 (`feature/trending-badge`)**:
   - Lệnh: `git checkout -b feature/trending-badge`
   - Sửa tệp `src/components/Header.jsx`: Bổ sung danh mục các thẻ Trending topics (`#Technology`, `#WebDesign`, `#Insights`).
   - Commit: `feat: add trending category badges to Header component`

2. **Khởi tạo Nhánh Tính Năng 2 (`feature/rating-metrics`) từ `main`**:
   - Lệnh: `git checkout main && git checkout -b feature/rating-metrics`
   - Sửa cùng tệp `src/components/Header.jsx`: Bổ sung thông số Đánh giá cộng đồng (`Rating: 4.9/5`).
   - Commit: `feat: add community rating metrics to Header component`

3. **Gộp Nhánh 1 vào `main`**:
   - Lệnh: `git checkout main && git merge feature/trending-badge`
   - Kết quả: Fast-forward merge thành công.

4. **Gộp Nhánh 2 vào `main` (Phát sinh Xung đột - Conflict)**:
   - Lệnh: `git merge feature/rating-metrics`
   - Kết quả: `CONFLICT (content): Merge conflict in src/components/Header.jsx`.

5. **Giải Quyết Conflict Trực Tiếp & Đảm Bảo Không Mất Code**:
   - Mở tệp `src/components/Header.jsx` và chủ động kết hợp cả 2 khối mã nguồn của Nhánh 1 (Trending Topics) và Nhánh 2 (Rating Metrics).
   - Lệnh lưu kết quả: `git add src/components/Header.jsx`
   - Lệnh commit hoàn tất gộp: `git commit -m "fix: resolve merge conflict between feature/trending-badge and feature/rating-metrics"`

6. **Đẩy Toàn Bộ Lịch Sử Lên Remote**:
   - Lệnh: `git push -u origin main`

---

## 📌 Bài Tập 3: Quy Trình PR End-To-End, Code Review & Merge

### 🔷 3.1. Mô Phỏng PR Tự Động Qua CLI & Phản Hồi Code Review:
1. **Tạo nhánh & Commit**: Tạo nhánh `feature/dark-mode-toggle` thực hiện tính năng chuyển đổi giao diện Sáng/Tối.
2. **Code Review**: Mô phỏng ý kiến phản hồi của Mentor (Yêu cầu thêm `aria-label` và lưu cấu hình vào `localStorage`).
3. **Sửa đổi**: Thực hiện commit sửa lỗi `refactor(navbar): address mentor review feedback for theme persistence and accessibility`.
4. **Merge & Cleanup**: Merge PR vào `main` và xóa nhánh tính năng sau khi gộp thành công.

---

### 🔷 3.2. Extra Exercise: Thực Hành Tạo PR Thủ Công Trên Giao Diện Web & Deploy GitHub Pages

Nhánh `feature/github-pages-deploy` đã được **Publish (Push)**
Tạo và duyệt PR thủ công trên trình duyệt web theo các bước dưới đây:

#### 🌐 Bước 1: Tạo Pull Request Thủ Công Trên Web GitHub
1. Tạo PR
2. Kiểm tra cấu hình gộp nhánh:
   - **base: `main`** ⬅ **compare: `feature/github-pages-deploy`**
3. Điền tiêu đề và mô tả PR:
   - **Title**: `feat(deploy): configure Vite base path and GitHub Actions workflow for GitHub Pages`
   - **Description**: Bổ sung tệp `.github/workflows/deploy.yml` và cấu hình `base: './'` trong `vite.config.js` để hỗ trợ tự động deploy website.
4. Nhấn nút **Create pull request**.

#### 🔀 Bước 2: Duyệt & Merge Pull Request Trên Web
1. Xem lại toàn bộ thay đổi trong tab **Files changed**.
2. Nhấn nút **Merge pull request** ➔ chọn **Confirm merge**.
3. (Tùy chọn) Nhấn nút **Delete branch** ngay trên giao diện web để dọn dẹp nhánh sau khi gộp.

#### 🚀 Bước 3: Kích Hoạt & Truy Cập Website GitHub Pages
1. Vào mục **Settings** ⚙️ của Repository trên GitHub ➔ Chọn tab **Pages** ở danh sách bên trái.
2. Tại mục **Build and deployment**:
   - Source: Chọn **GitHub Actions**.
3. Đợi khoảng 1-2 phút để GitHub Actions chạy tự động công việc deploy.
4. Truy cập trang web đã được xuất bản công khai tại địa chỉ:
   👉 **`https://anhtuan03-goku.github.io/Goku-Junior/`**

---

## 🛠️ Hướng Dẫn Chạy Môi Trường Cục Bộ

```bash
# Cài đặt dependencies
npm install

# Khởi chạy dev server
npm run dev

# Đóng gói sản phẩm
npm run build
```
