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
   - Khởi tạo Hero Section tại tệp [Header.jsx](src/components/Header.jsx) bằng thẻ ngữ nghĩa `<section aria-labelledby="hero-main-title">`.
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
     - [Navbar.jsx](src/components/Navbar.jsx): Thanh điều hướng, bộ lọc tìm kiếm và chuyển đổi giao diện Sáng/Tối.
     - [Header.jsx](src/components/Header.jsx): Hero banner truyền tải thông tin & thống kê bài viết.
     - [PostCard.jsx](src/components/PostCard.jsx): Card hiển thị bài viết với thẻ `<article>` chuẩn SEO.
     - [PostDetailModal.jsx](src/components/PostDetailModal.jsx): Hộp thoại đọc chi tiết bài viết và bình luận.
     - [CreatePostModal.jsx](src/components/CreatePostModal.jsx): Form tạo bài viết mới.

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
---

# Chương: DEV-FE-004 · React Fundamentals

Tài liệu thực hành và hoàn thành các bài tập thuộc Chương **DEV-FE-004 · React Fundamentals** trong dự án PulseBlog.

---

## 📌 Tổng Quan Yêu Cầu Của Chương

Dự án PulseBlog được xây dựng và củng cố vững chắc nền tảng React với 5 tiêu chí cốt lõi:
1. **Chia UI thành component hợp lý, props rõ ràng**
2. **State immutable; thêm/sửa/xóa hoạt động ổn định**
3. **Render danh sách có key; controlled form thêm/sửa**
4. **Lifting state up khi cần chia sẻ dữ liệu**
5. **Giải thích được luồng dữ liệu & lý do re-render**

---

## 📌 Chi Tiết Đáp Án & Giải Pháp Kỹ Thuật Đã Triển Khai

### 🔷 1. Chia UI Thành Component Hợp Lý, Props Rõ Ràng

Ứng dụng được phân rã theo nguyên tắc **Single Responsibility Principle (SRP)**, chia tách rõ rệt giữa **Container (Stateful)** Component và các **Presentational (Dumb/UI)** Components:

| Component | Đường dẫn tệp | Vai trò & Trách nhiệm | Props nhận vào |
| :--- | :--- | :--- | :--- |
| **App** | [App.jsx](src/App.jsx) | **Root/Container**: Quản lý state tập trung (`allPosts`, `savedPosts`, `searchQuery`, `activeTab`, v.v.), tích hợp API service và LocalStorage hooks. | *(Root component)* |
| **Navbar** | [Navbar.jsx](src/components/Navbar.jsx) | Thanh điều hướng đầu trang, chứa ô tìm kiếm thời gian thực, bộ lọc tab (`All` vs `Saved`), nút tạo bài viết và chuyển đổi Dark/Light mode. | `activeTab`, `setActiveTab`, `searchQuery`, `setSearchQuery`, `savedCount`, `onOpenCreateModal`, `isDarkMode`, `onToggleTheme` |
| **Header** | [Header.jsx](src/components/Header.jsx) | Hero Section hiển thị banner thương hiệu, danh mục chủ đề nổi bật và các thẻ thống kê tổng quan (Total Articles, Saved, Active Contributors). | `totalPosts`, `savedCount`, `totalUsers`, `isDarkMode` |
| **PostCard** | [PostCard.jsx](src/components/PostCard.jsx) | Thẻ card biểu diễn từng bài viết với Semantic HTML `<article>`, gồm badge tác giả, tiêu đề, tóm tắt nội dung, nút bookmark, nút sửa và nút xóa. | `post`, `isSaved`, `onToggleSave`, `onSelectPost`, `onEditPost`, `onDeletePost`, `isDarkMode` |
| **PostDetailModal** | [PostDetailModal.jsx](src/components/PostDetailModal.jsx) | Hộp thoại chi tiết bài viết, fetch & hiển thị danh sách bình luận (comments), hỗ trợ bookmark, sửa và xóa ngay trong modal. | `post`, `onClose`, `isSaved`, `onToggleSave`, `onEditPost`, `onDeletePost`, `isDarkMode` |
| **CreatePostModal** | [CreatePostModal.jsx](src/components/CreatePostModal.jsx) | Form Modal tương tác hỗ trợ cả **Tạo mới** và **Chỉnh sửa** bài viết với validation dữ liệu trước khi gửi. | `isOpen`, `onClose`, `onCreatePost`, `onUpdatePost`, `editingPost`, `isDarkMode` |

---

### 🔷 2. State Immutable; Thêm / Sửa / Xóa Hoạt Động Ổn Định

Trong React, **Immutability (Tính bất biến)** là nguyên tắc tối thượng: không được thay đổi trực tiếp (`mutation`) giá trị trong bộ nhớ của state cũ (không dùng `.push()`, `.splice()`, không gán `state.prop = ...`). Thay vào đó, ta luôn tạo một đối tượng hoặc mảng mới bằng toán tử Spread (`...`) và các hàm thuần túy (`.map()`, `.filter()`). Điều này cho phép React so sánh tham chiếu (`shallow comparison`) để phát hiện thay đổi và kích hoạt re-render chính xác.

#### ➕ Thao tác Thêm Mới (Create):
Triển khai trong [App.jsx](src/App.jsx):
```javascript
const handleCreatePost = (newPost) => {
  setCustomPosts((prev) => [newPost, ...prev]);
};
```
- **Kỹ thuật**: Sử dụng cú pháp Spread `[newPost, ...prev]` để tạo một mảng hoàn toàn mới có `newPost` ở đầu mảng và giữ nguyên toàn bộ các phần tử cũ.

#### ✏️ Thao tác Sửa (Update):
Triển khai trong [App.jsx](src/App.jsx):
```javascript
const handleUpdatePost = (updatedPost) => {
  // Cập nhật mảng customPosts một cách bất biến
  setCustomPosts((prev) =>
    prev.map((p) => (p.id === updatedPost.id ? { ...p, ...updatedPost } : p))
  );
  // Cập nhật trong savedPosts nếu bài viết đang nằm trong danh sách đã lưu
  setSavedPosts((prev) =>
    prev.map((p) => (p.id === updatedPost.id ? { ...p, ...updatedPost } : p))
  );
  // Cập nhật trong apiPosts nếu là bài viết từ API
  setApiPosts((prev) =>
    prev.map((p) => (p.id === updatedPost.id ? { ...p, ...updatedPost } : p))
  );
  // Cập nhật selectedPost nếu đang mở xem chi tiết bài viết này
  if (selectedPost && selectedPost.id === updatedPost.id) {
    setSelectedPost((prev) => ({ ...prev, ...updatedPost }));
  }
};
```
- **Kỹ thuật**: Hàm `.map()` trả về một mảng mới. Khi duyệt đến phần tử khớp `id === updatedPost.id`, ta dùng `{ ...p, ...updatedPost }` để tạo ra một object mới kế thừa các thuộc tính và ghi đè thuộc tính được sửa. Các phần tử còn lại giữ nguyên tham chiếu.

#### 🗑️ Thao tác Xóa (Delete):
Triển khai trong [App.jsx](src/App.jsx):
```javascript
const handleDeletePost = (postId) => {
  if (window.confirm('Are you sure you want to delete this article?')) {
    setCustomPosts((prev) => prev.filter((p) => p.id !== postId));
    setSavedPosts((prev) => prev.filter((p) => p.id !== postId));
    setDeletedPostIds((prev) => (prev.includes(postId) ? prev : [...prev, postId]));
    if (selectedPost && selectedPost.id === postId) {
      setSelectedPost(null);
    }
  }
};
```
- **Kỹ thuật**: Dùng `.filter()` trả về một mảng mới loại bỏ bài viết có `id === postId`. Danh sách `deletedPostIds` được lưu vào `localStorage` đảm bảo trạng thái xóa được duy trì ngay cả khi tải lại trang.

#### 🔖 Thao tác Toggle Bookmark (Lưu / Bỏ lưu):
Triển khai trong [App.jsx](src/App.jsx):
```javascript
const handleToggleSave = (postToToggle) => {
  setSavedPosts((prevSaved) => {
    const isAlreadySaved = prevSaved.some((p) => p.id === postToToggle.id);
    if (isAlreadySaved) {
      return prevSaved.filter((p) => p.id !== postToToggle.id);
    } else {
      return [postToToggle, ...prevSaved];
    }
  });
};
```

---

### 🔷 3. Render Danh Sách Có Key; Controlled Form Thêm / Sửa

#### 🔑 Vai Trò Của Key Trong Render Danh Sách:
- Khi render danh sách trong [App.jsx](src/App.jsx):
  ```jsx
  {filteredPosts.map((post) => (
    <PostCard
      key={post.id}
      post={post}
      isSaved={isPostSaved(post.id)}
      onToggleSave={handleToggleSave}
      onSelectPost={(p) => setSelectedPost(p)}
      onEditPost={handleOpenEditModal}
      onDeletePost={handleDeletePost}
      isDarkMode={isDarkMode}
    />
  ))}
  ```
- Tương tự với danh sách bình luận trong [PostDetailModal.jsx](src/components/PostDetailModal.jsx):
  ```jsx
  {comments.map((comment) => (
    <div key={comment.id} className="...">
      ...
    </div>
  ))}
  ```
- **Tại sao không dùng `key={index}`?**:
  - `key` giúp thuật toán **Reconciliation** của React phân biệt danh tính của từng phần tử qua các lần re-render.
  - Nếu dùng `index`, khi thêm phần tử mới lên đầu mảng, xóa phần tử ở giữa, hoặc tìm kiếm lọc bớt bài viết, index của các phần tử sẽ bị dịch chuyển. React sẽ nhầm lẫn giữa DOM node cũ và dữ liệu mới, dẫn đến lỗi mất focus, reset state của component con hoặc re-render toàn bộ danh sách gây suy giảm hiệu năng nghiêm trọng.
  - Sử dụng `post.id` duy nhất và cố định giúp React chỉ thêm, sửa hoặc xóa đúng DOM node tương ứng một cách tối ưu nhất.

#### 📝 Controlled Form Thêm & Sửa Bài Viết:
Triển khai trong [CreatePostModal.jsx](src/components/CreatePostModal.jsx):
- Form được quản lý hoàn toàn bằng React State:
  ```javascript
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [authorName, setAuthorName] = useState('');
  ```
- Ràng buộc hai chiều giữa State và Input:
  ```jsx
  <input
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Enter a compelling article headline..."
  />
  <textarea
    rows={5}
    value={body}
    onChange={(e) => setBody(e.target.value)}
    placeholder="Write your article content here..."
  />
  ```
- **Hỗ trợ cả Thêm Mới và Chỉnh Sửa linh hoạt**:
  - Khi mở form ở chế độ **Sửa** (`editingPost !== null`), `useEffect` sẽ nạp sẵn dữ liệu cũ của bài viết vào các input:
    ```javascript
    useEffect(() => {
      if (editingPost) {
        setTitle(editingPost.title || '');
        setBody(editingPost.body || '');
        setAuthorName(editingPost.authorName || '');
      } else {
        setTitle('');
        setBody('');
        setAuthorName('');
      }
      setError('');
      setSuccess(false);
    }, [editingPost, isOpen]);
    ```
  - Form thực hiện validation trước khi gửi (`!title.trim() || !body.trim()`), thông báo lỗi bằng visual badge, tự động kích hoạt callback `onCreatePost` hoặc `onUpdatePost`, và tự reset sau khi hoàn tất.

---

### 🔷 4. Lifting State Up Khi Cần Chia Sẻ Dữ Liệu

#### ❓ Vấn Đề Khi Chưa Nâng State:
- `Navbar` cần biết số lượng bài viết đã bookmark (`savedCount`) và cập nhật từ khóa tìm kiếm (`searchQuery`).
- `Header` cần hiển thị tổng số bài viết (`totalPosts`) và số bài lưu (`savedCount`).
- `PostCard` và `PostDetailModal` cần biết bài viết này đã được lưu hay chưa (`isSaved`), đồng thời cần kích hoạt hành động mở chi tiết, sửa hoặc xóa bài viết.
- `CreatePostModal` cần đưa bài viết mới tạo hoặc bài viết vừa chỉnh sửa vào kho dữ liệu chung.
- Nếu mỗi component giữ một bản sao state riêng, dữ liệu sẽ bị phân mảnh, không đồng bộ và không thể giao tiếp trực tiếp giữa các component anh em (sibling components).

#### 💡 Giải Pháp Lifting State Up (Nâng State Lên Cha Chung Gần Nhất):
Toàn bộ các state chia sẻ được nâng lên component cha cao nhất: [App.jsx](src/App.jsx):
```javascript
// State dữ liệu bài viết & danh mục
const [apiPosts, setApiPosts] = useState([]);
const [customPosts, setCustomPosts] = useLocalStorage('pulse_blog_custom_posts', []);
const [savedPosts, setSavedPosts] = useLocalStorage('pulse_blog_saved_posts', []);
const [deletedPostIds, setDeletedPostIds] = useLocalStorage('pulse_blog_deleted_posts', []);

// State điều khiển UI & Modal
const [activeTab, setActiveTab] = useState('all');
const [searchQuery, setSearchQuery] = useState('');
const [selectedPost, setSelectedPost] = useState(null);
const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
const [editingPost, setEditingPost] = useState(null);
const [isDarkMode, setIsDarkMode] = useLocalStorage('pulse_blog_dark_mode', true);
```
- Component cha đóng vai trò là "nguồn chân lý duy nhất" (**Single Source of Truth**).
- Dữ liệu được truyền xuống các component con qua **Props** (`searchQuery`, `savedCount`, `totalPosts`, `post`, `isSaved`).
- Các component con kích hoạt thay đổi bằng cách gọi các hàm **Callback** được cha truyền xuống (`onCreatePost`, `onUpdatePost`, `onDeletePost`, `onToggleSave`, `setSearchQuery`, `setActiveTab`, `onSelectPost`, `onEditPost`).

---

### 🔷 5. Giải Thích Luồng Dữ Liệu & Lý Do Re-render

#### 🌊 Luồng Dữ Liệu Một Chiều (Unidirectional Data Flow):
```
                       [ App Component ] (Single Source of Truth)
                         |           |           |
            (Props Down) |           |           | (Props Down)
                         v           v           v
                    [ Navbar ]   [ Header ]  [ PostCard ]
                         |                       |
                         +------- (Events Up) ---+
                            (Callback Handlers)
```
- **Top-to-Bottom**: Dữ liệu và trạng thái đi một chiều duy nhất từ cha xuống con thông qua Props.
- **Bottom-to-Top**: Tương tác của người dùng tại component con (như click nút Bookmark, gõ ô tìm kiếm, submit form) không làm thay đổi trực tiếp props, mà gọi hàm callback để kích hoạt hàm dispatch state ở component cha.

#### 🔄 Lý Do Dẫn Đến Re-render Trong React:
1. **Khi State Của Component Thay Đổi**:
   - Khi một hàm cập nhật state được thực thi (ví dụ: `setSearchQuery("react")`), React sẽ đối chiếu giá trị cũ và mới bằng thuật toán `Object.is()`.
   - Nếu giá trị khác nhau, component sở hữu state đó được đánh dấu dơ (dirty) và React sẽ lên lịch re-render component này.
2. **Khi Props Của Component Con Nhận Giá Trị Mới**:
   - Khi component cha re-render, nó sinh ra cây JSX mới với các giá trị props mới truyền xuống cho component con, khiến component con cũng re-render tương ứng.
3. **Khi Component Cha Re-render**:
   - Theo cơ chế mặc định của React, khi component cha re-render, toàn bộ cây component con bên trong nó cũng sẽ re-render theo, trừ khi được tối ưu bằng `React.memo`.

#### ⚡ Tối Ưu Hóa Re-render & Hiệu Năng Trong Dự Án:
- **Sử dụng `useMemo` tránh tính toán lại không cần thiết**:
  ```javascript
  // 1. Chỉ tạo map tác giả khi danh sách users từ API thay đổi
  const userMap = useMemo(() => {
    const map = {};
    users.forEach((u) => { map[u.id] = u.name; });
    return map;
  }, [users]);

  // 2. Chỉ tính toán danh sách bài viết gộp khi các nguồn dữ liệu thay đổi
  const allPosts = useMemo(() => { ... }, [apiPosts, customPosts, userMap, deletedPostIds]);

  // 3. Chỉ tính toán lọc bài viết khi nội dung bài viết, tab hoặc từ khóa thay đổi
  const filteredPosts = useMemo(() => {
    let source = activeTab === 'saved' ? savedPosts : allPosts;
    if (!searchQuery.trim()) return source;
    const query = searchQuery.toLowerCase();
    return source.filter((post) => ...);
  }, [allPosts, savedPosts, activeTab, searchQuery]);
  ```
  - Khi người dùng thực hiện các tương tác không ảnh hưởng đến dữ liệu hiển thị (ví dụ: đổi theme Dark/Light, mở/đóng modal xem chi tiết), `filteredPosts` không cần duyệt qua mảng hàng trăm bài viết để lọc lại từ đầu, giúp ứng dụng duy trì tốc độ phản hồi tức thì (60fps).

---

## 🛠️ Hướng Dẫn Chạy Môi Trường Cục Bộ

```bash
# Cài đặt dependencies
npm install

# Khởi chạy dev server
npm run dev

# Kiểm tra cú pháp và linter
npm run lint

# Đóng gói sản phẩm
npm run build
```

---

## 🌐 GitHub Pages

👉 **https://anhtuan03-goku.github.io/Goku-Junior/**

