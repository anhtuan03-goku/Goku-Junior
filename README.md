# Chương: DEV-002 Git Flow

Tài liệu thực hành và hoàn thành các bài tập thuộc Chương **DEV-002 Git Flow** trong dự án PulseBlog.

---

## 📌 Bài Tập 1: Tạo Repo, Clean Commits & Push Remote

- Tạo 1 repo cá nhân tại `E:\daotaoGOKU`.
- Thực hiện ≥ 5 commit với message rõ ràng tuân thủ quy chuẩn **Conventional Commits**.
- Đảm bảo lịch sử commit sạch, mỗi commit giải quyết duy nhất 1 nhiệm vụ.
- Đã liên kết và push thành công lên GitHub remote `https://github.com/anhtuan03-goku/DEV-002-Git-Flow.git`.

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

Nhánh `feature/github-pages-deploy` đã được **Publish (Push)**.
Tạo và duyệt PR thủ công trên trình duyệt web theo các bước dưới đây:

#### 🌐 Bước 1: Tạo Pull Request Thủ Công Trên Web GitHub
1. Tạo PR
2. Kiểm tra cấu hình gộp nhánh:
   - **base: `main`** ⬅ **compare: `feature/github-pages-deploy`**
3. Điền tiêu đề và mô tả PR:
   - **Title**: `feat(deploy): configure Vite base path and GitHub Actions workflow for GitHub Pages`
   - **Description**: Bổ sung tệp `.github/workflows/deploy.yml` và cấu hình `base: '/Goku-Junior/'` trong `vite.config.js` để hỗ trợ tự động deploy website.
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
---

# Chương: DEV-FE-002 Semantic Web & Tailwind CSS

Tài liệu thực hành và hoàn thành các bài tập thuộc Chương **DEV-FE-002 Semantic Web & Tailwind CSS** trong dự án PulseBlog.

---

## 📌 Bài Tập 1: Dựng Hero Section Bằng Tailwind CSS (Mobile-First & SEO)

### 📋 Đáp Án & Giải Pháp Đã Triển Khai:

1. **Cấu trúc Semantic Web & SEO**:
   - Khởi tạo Hero Section tại tệp [Header.jsx](file:///E:/daotaoGOKU/src/components/Header.jsx) bằng thẻ ngữ nghĩa `<section aria-labelledby="hero-main-title">`.
   - Tiêu đề chính sử dụng duy nhất thẻ `<h1 id="hero-main-title">` cho toàn trang, kết hợp các đoạn văn bản `<p>` và danh mục chủ đề (`#Technology`, `#WebDesign`, `#Insights`).
   - Các nút bấm và thành phần tương tác đều thiết lập thuộc tính `cursor-pointer` giúp tối ưu trải nghiệm người dùng (UX).

2. **Thiết kế Responsive Mobile-First**:
   - Typography linh hoạt: `text-2xl sm:text-4xl md:text-5xl` (tăng kích thước từ Mobile lên Tablet và Desktop).
   - Bố cục thống kê Responsive: `grid grid-cols-1 sm:grid-cols-3` (1 cột trên Mobile, 3 cột trên Tablet/Desktop).
   - Padding & Margin thích ứng: `p-6 sm:p-10 md:p-12`.

---

## 📌 Bài Tập 2: Dựng Trang Nhỏ Từ Figma Bằng Tailwind CSS (Component Hóa & SEO)

*https://www.figma.com/design/wYC2N60tg2FWZc25zEcmAb*

### 📋 Đáp Án & Giải Pháp Đã Triển Khai Trong Dự Án:

1. **Component Hóa Hợp Lý**:
   - Ứng dụng được chia nhỏ thành các React components tập trung và tái sử dụng tốt:
     - [Navbar.jsx](file:///E:/daotaoGOKU/src/components/Navbar.jsx): Thanh điều hướng, bộ lọc tìm kiếm và chuyển đổi giao diện Sáng/Tối.
     - [Header.jsx](file:///E:/daotaoGOKU/src/components/Header.jsx): Hero banner truyền tải thông tin & thống kê bài viết.
     - [PostCard.jsx](file:///E:/daotaoGOKU/src/components/PostCard.jsx): Card hiển thị bài viết với thẻ `<article>` chuẩn SEO.
     - [PostDetailModal.jsx](file:///E:/daotaoGOKU/src/components/PostDetailModal.jsx): Hộp thoại đọc chi tiết bài viết và bình luận.
     - [CreatePostModal.jsx](file:///E:/daotaoGOKU/src/components/CreatePostModal.jsx): Form tạo bài viết mới.

2. **Tối Ưu Class & Tailwind Utilities**:
   - Sử dụng các utility classes trong `src/index.css` (`.glass-card-dark`, `.glass-card-light`, `.glass-nav-dark`, `.glass-nav-light`) để tối giản lượng code Tailwind trùng lặp.
   - Tất cả các nút (`button`) đều được gán `type="button"`, `cursor-pointer` và hiệu ứng hover mượt mà (`hover:-translate-y-0.5`, `transition-all`).

3. **Responsive 3 Breakpoints (`sm`, `md`, `lg`)**:
   - **Mobile (`<640px`)**: Bố cục 1 cột, thanh tìm kiếm rút gọn, menu responsive.
   - **Tablet (`sm: 640px` - `md: 768px`)**: Grid bài viết 2 cột (`md:grid-cols-2`), hiển thị đầy đủ danh mục tìm kiếm.
   - **Desktop (`lg: 1024px`+)**: Grid bài viết 3 cột (`lg:grid-cols-3`), container cố định `max-w-7xl` căn giữa màn hình.

4. **Chuẩn SEO HTML5**:
   - Phân cấp Heading rõ ràng: `<h1>` (Title chính) ➔ `<h2>` (Tiêu đề Section) ➔ `<h3>` (Tiêu đề bài viết PostCard & Modal).
   - Đầy đủ thuộc tính `aria-label`, `role="dialog"`, `aria-modal="true"`.

---

## 🛠️ Hướng Dẫn Chạy Môi Trường Cục Bộ

```bash
# Cài đặt dependencies
npm install

# Khởi chạy dev server
npm run dev

# Đóng gói sản phẩm
npm run build

#GitHub Pages
*https://anhtuan03-goku.github.io/Goku-Junior/*
```
