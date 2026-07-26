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

Mô phỏng quy trình làm việc thực tế với 2 nhánh tính năng cùng chỉnh sửa tệp `src/components/Header.jsx`, chủ động xử lý xung đột (Merge Conflict) để giữ nguyên toàn bộ mã nguồn mà không làm mất bất kỳ tính năng nào.

### 📋 Các Bước Đã Thực Hiện:
1. **Khởi tạo Nhánh 1 (`feature/trending-badge`)**: Thêm danh mục thẻ Trending Topics vào `Header.jsx`.
2. **Khởi tạo Nhánh 2 (`feature/rating-metrics`) từ `main`**: Thêm chỉ số Đánh giá cộng đồng vào cùng tệp `Header.jsx`.
3. **Gộp Nhánh 1 vào `main`**: Thực hiện merge thành công.
4. **Gộp Nhánh 2 vào `main`**: Phát sinh xung đột `CONFLICT (content): Merge conflict in src/components/Header.jsx`.
5. **Giải Quyết Conflict Trực Tiếp**: Kết hợp cả 2 khối tính năng (Trending Topics + Rating Metrics), đảm bảo 100% không làm mất bất kỳ dòng code nào.
6. **Publish Các Nhánh Lên Remote**: Đã push các nhánh `feature/trending-badge` và `feature/rating-metrics` lên GitHub.

---

## 📌 Bài Tập 3: Quy Trình PR End-To-End, Code Review & Merge

Hoàn thành quy trình Pull Request (PR) chuẩn end-to-end từ việc tạo nhánh, viết commit chuẩn, phản hồi code review của Mentor, merge và dọn dẹp nhánh.

### 📋 Các Bước Đã Thực Hiện:

#### 1. Tạo Nhánh Tính Năng Mới & Commit Ban Đầu:
- Lệnh: `git checkout -b feature/dark-mode-toggle`
- Thực hiện tính năng nút chuyển đổi giao diện Sáng/Tối tại `src/components/Navbar.jsx`.
- Commit chuẩn Conventional Commits:
  ```bash
  git commit -m "feat(navbar): add theme toggle button for switching dark and light mode"
  git push -u origin feature/dark-mode-toggle
  ```

#### 2. Mô Phỏng Code Review / Phản Hồi Từ Mentor:
- **Nội dung Feedback từ Mentor**:
  > - **Accessibility**: Cần bổ sung thuộc tính `aria-label="Toggle color theme"` cho nút chuyển theme để hỗ trợ đọc màn hình.
  > - **Persistence**: Lưu trạng thái theme đã chọn vào `localStorage` thông qua `useLocalStorage` hook để không bị mất khi F5 trang.

#### 3. Xử Lý Phản Hồi Của Mentor & Cập Nhật Mã Nguồn:
- Bổ sung `aria-label`, tooltip và lưu trạng thái `isDarkMode` vào `localStorage` trong `src/App.jsx` & `src/components/Navbar.jsx`.
- Commit cập nhật theo phản hồi của Mentor:
  ```bash
  git commit -m "refactor(navbar): address mentor review feedback for theme persistence and accessibility"
  git push origin feature/dark-mode-toggle
  ```

#### 4. Gộp PR (Merge) & Dọn Dẹp Nhánh (Cleanup):
- Chuyển về nhánh `main` và hợp nhất PR:
  ```bash
  git checkout main
  git merge --no-ff feature/dark-mode-toggle -m "merge: pull request #1 from feature/dark-mode-toggle"
  ```
- Xóa nhánh tính năng đã gộp cục bộ (Locally) và trên Remote (Remotely):
  ```bash
  git branch -d feature/dark-mode-toggle
  git push origin --delete feature/dark-mode-toggle
  ```

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
