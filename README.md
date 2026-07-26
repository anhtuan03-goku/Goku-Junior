# PulseBlog - Modern Knowledge & Insights Hub

A modern web application built with clean semantic structure, English UI, SEO optimization, and browser state persistence.

---

## 📌 Bài Tập 1

- Tạo 1 repo cá nhân.
- Thực hiện ≥ 5 commit với message rõ ràng.
- Đảm bảo lịch sử commit sạch, mỗi commit một việc.
- Push lên remote.

---

## 📌 Bài Tập 2: Quy Trình Giả Lập Conflict & Tự Xử Lý Conflict

Mô phỏng quy trình làm việc thực tế với 2 nhánh tính năng (feature branches) cùng chỉnh sửa một tệp tin, chủ động xử lý xung đột (Merge Conflict) để giữ nguyên toàn bộ mã nguồn mà không làm mất bất kỳ tính năng nào.

### 📋 Các Bước Đã Thực Hiện:

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

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build
```
