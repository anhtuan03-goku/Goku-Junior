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

  // 3. Chỉ tính toán lọc bài viết khi nội dung bài viết, tab hoặc từ khóa debounced thay đổi
  const debouncedSearchQuery = useDebounce(searchQuery, 250);

  const filteredPosts = useMemo(() => {
    let source = activeTab === 'saved' ? savedPosts : allPosts;
    if (!debouncedSearchQuery.trim()) return source;
    const query = debouncedSearchQuery.toLowerCase();
    return source.filter((post) => ...);
  }, [allPosts, savedPosts, activeTab, debouncedSearchQuery]);
  ```
  - Khi người dùng thực hiện các tương tác không ảnh hưởng đến dữ liệu hiển thị (ví dụ: đổi theme Dark/Light, mở/đóng modal xem chi tiết), `filteredPosts` không cần duyệt qua mảng hàng trăm bài viết để lọc lại từ đầu, giúp ứng dụng duy trì tốc độ phản hồi tức thì (60fps).

---
---

# Chương: DEV-FE-005 · Codebase Overview

Tài liệu thực hành và phân tích toàn diện thuộc Chương **DEV-FE-005 · Codebase Overview** trong dự án PulseBlog.

---

## 📌 1. Cấu Trúc Dự Án & Nguyên Tắc Phân Tách Mối Bận Tâm (SoC)

Dự án PulseBlog được tổ chức theo cấu trúc module hóa cao, tuân thủ chặt chẽ nguyên tắc **Separation of Concerns (SoC)** nhằm tối ưu khả năng mở rộng, bảo trì và kiểm thử:

```
daotaoGOKU/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Pipeline CI/CD tự động build & deploy lên GitHub Pages
├── public/                       # Tài nguyên tĩnh độc lập không qua bundler
├── src/
│   ├── assets/                   # Hình ảnh, icons và tài nguyên media nội bộ
│   ├── components/               # Tầng giao diện người dùng (UI Components)
│   │   ├── CreatePostModal.jsx   # Modal form tạo mới & chỉnh sửa bài viết
│   │   ├── Header.jsx            # Hero Section & các thẻ thống kê bài viết
│   │   ├── Navbar.jsx            # Thanh điều hướng, bộ lọc tìm kiếm & Theme toggle
│   │   ├── PostCard.jsx          # Thẻ hiển thị tóm tắt bài viết chuẩn Semantic HTML
│   │   └── PostDetailModal.jsx   # Hộp thoại đọc toàn văn bài viết & bình luận
│   ├── hooks/                    # Tầng Custom Hooks tái sử dụng logic
│   │   ├── useDebounce.js        # Hook trì hoãn tần suất cập nhật dữ liệu (Search)
│   │   └── useLocalStorage.js    # Hook đồng bộ State với Web Storage API
│   ├── services/                 # Tầng giao tiếp mạng & API Services
│   │   └── api.js                # Tách biệt toàn bộ fetch requests ra khỏi UI
│   ├── App.css                   # Custom animation keyframes
│   ├── App.jsx                   # Orchestrator / Root Stateful Component
│   ├── index.css                 # Import Tailwind CSS, Google Fonts & Glassmorphism classes
│   └── main.jsx                  # Điểm khởi chạy ứng dụng (React Root & StrictMode)
├── .oxlintrc.json                # Cấu hình siêu linter Oxlint cực nhanh
├── index.html                    # Tệp HTML chính chứa SEO meta tags & Fonts preload
├── package.json                  # Khai báo dependencies & scripts thực thi
└── vite.config.js                # Cấu hình Vite bundler & Base path GitHub Pages
```

---

## 📌 2. Phân Tích Các Tầng Kiến Trúc Trọng Tâm

### 🌐 Tầng Giao Tiếp Mạng & Dịch Vụ API ([src/services/api.js](src/services/api.js))
- **Mục đích**: Tách biệt 100% logic gọi API ra khỏi các React Components.
- **Phương thức xử lý**:
  - `fetchPosts()`: Lấy danh sách bài viết từ JSONPlaceholder.
  - `fetchUsers()`: Lấy thông tin tác giả để ánh xạ (`authorName`).
  - `fetchPostComments(postId)`: Tải danh sách bình luận tương ứng theo từng bài viết.
- **Xử lý ngoại lệ**: Sử dụng khối `try...catch` tập trung, kiểm tra `response.ok` và ném lỗi có ngữ cảnh rõ ràng, tránh gây crash giao diện khi mất mạng hoặc API lỗi.

### 💾 Tầng Dữ Liệu Lai (Hybrid State Architecture)
Ứng dụng áp dụng mô hình dữ liệu lai kết hợp linh hoạt giữa hai nguồn:
1. **Server State**: Dữ liệu bài viết và người dùng lấy từ API bên ngoài.
2. **Client Persistent State**: Dữ liệu do người dùng tạo ra (custom posts), danh sách bài viết đã lưu (saved/bookmarks), danh sách bài viết đã xóa (deleted IDs), và tùy chọn giao diện Dark/Light mode được lưu trữ bền vững trong `localStorage`.
- **Hợp nhất dữ liệu (Data Merging)**: Trong [src/App.jsx](src/App.jsx), `useMemo` tự động kết hợp bài viết từ API và Custom Posts, gắn tên tác giả thông qua bảng tra cứu `userMap`, và loại trừ các bài viết nằm trong `deletedPostIds`.

### 🎨 Tầng Giao Diện & Design System ([src/index.css](src/index.css))
- **Tailwind CSS v4 Integration**: Sử dụng `@tailwindcss/vite` tích hợp trực tiếp vào quy trình biên dịch của Vite, cho tốc độ HMR (Hot Module Replacement) tức thì dưới 10ms.
- **Glassmorphism & High Contrast**: Các class `.glass-card-dark`, `.glass-card-light`, `.glass-nav-dark`, `.glass-nav-light` tạo hiệu ứng mờ nền kính hiện đại.
- **Chuyển đổi màu sắc siêu mượt (700ms Theme Transition)**: Cấu hình `transition: background-color 700ms, border-color 700ms, color 700ms` với hàm gia tốc `cubic-bezier(0.4, 0, 0.2, 1)` giúp việc chuyển đổi Dark/Light mode diễn ra êm dịu, không giật màn hình.

### 🚀 Tầng Tự Động Hóa & Triển Khai (CI/CD) ([.github/workflows/deploy.yml](.github/workflows/deploy.yml))
- Tự động kích hoạt khi có commit đẩy lên nhánh `main`.
- Sử dụng Node.js 20, tự động chạy `npm ci` và `npm run build`.
- Upload thư mục sản phẩm `./dist` và xuất bản trực tiếp lên GitHub Pages hoàn toàn tự động.

---

## 💡 Kiến Thức Tâm Đắc Về Kiến Trúc Codebase

1. **Single Source of Truth (Nguồn chân lý duy nhất)**:
   - Thay vì để mỗi modal hay mỗi component con tự quản lý danh sách bài viết riêng lẻ, việc quy tụ toàn bộ state về [src/App.jsx](src/App.jsx) loại bỏ hoàn toàn nguy cơ bất đồng bộ dữ liệu giữa Navbar (số lượng saved), Header (tổng số bài viết) và Grid bài viết.
2. **Khai thác sức mạnh của Derived State thay vì Duplicate State**:
   - Không lưu trữ `filteredPosts` thành một state riêng biệt bằng `useState` (vì việc đồng bộ giữa `posts`, `searchQuery` và `filteredPosts` thủ công rất dễ sinh ra lỗi out-of-sync hoặc vòng lặp render vô tận). Thay vào đó, tính toán động bằng `useMemo` dựa trên `allPosts`, `savedPosts`, `activeTab` và `debouncedSearchQuery`.
3. **Hiệu năng công cụ phát triển (DX) thế hệ mới**:
   - Sử dụng **Vite 8** kết hợp cùng **Oxlint** (linter viết bằng Rust) giúp kiểm tra toàn bộ mã nguồn trong chưa đầy 10ms, nhanh hơn hàng chục lần so với ESLint truyền thống.

---
---

# Chương: DEV-FE-006 · TypeScript

Tài liệu thực hành và hoàn thành các bài tập thuộc Chương **DEV-FE-006 · TypeScript** trong dự án PulseBlog bằng cách phát triển module mới theo chuẩn **React TypeScript Best Practices**.

---

## 📌 1. Mục Tiêu & Kiến Trúc Module Mới (Pulse Insights & Analytics)

Để chứng minh năng lực làm việc với TypeScript trong môi trường React thực chiến, dự án đã phát triển mới hoàn toàn module **Pulse Insights & Analytics** với 2 tệp cốt lõi:
- **Tầng Kiểu Dữ Liệu Hợp Đồng (Type Contracts)**: [src/types/blog.ts](src/types/blog.ts)
- **Tầng Component Giao Diện (TypeScript UI Component)**: [src/components/AnalyticsModal.tsx](src/components/AnalyticsModal.tsx)

Module cung cấp bảng số liệu phân tích thời gian thực về bài viết: tổng số lượng từ, thời gian đọc ước tính (với tốc độ đọc trung bình 200 từ/phút), phân bổ bài viết theo từng tác giả hàng đầu (kèm biểu đồ thanh phần trăm trực quan), bài viết có dung lượng dài nhất, và bộ lọc phân loại theo phạm vi dữ liệu.

---

## 📌 2. Phân Tích Hệ Thống Types & Data Contracts ([src/types/blog.ts](src/types/blog.ts))

Toàn bộ mô hình dữ liệu trong ứng dụng được định nghĩa chặt chẽ với TypeScript:

```typescript
/**
 * Mô hình bài viết chuẩn mực với các trường tùy chọn rõ ràng
 */
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  authorName?: string;
  isCustom?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Mô hình số liệu phân tích bài viết
 */
export interface ReadingMetric {
  totalArticles: number;
  totalWords: number;
  estimatedReadingMinutes: number;
  averageWordsPerArticle: number;
  longestArticleTitle: string;
}

/**
 * Mô hình phân tích tác giả & tỷ trọng đóng góp
 */
export interface AuthorInsight {
  authorName: string;
  postCount: number;
  percentage: number;
}

export type MetricTab = 'overview' | 'authors' | 'categories';

/**
 * Mẫu thiết kế Discriminated Union (Tagged Union) giúp lọc dữ liệu an toàn
 */
export type AnalyticsFilter = 
  | { type: 'all'; label: 'All Articles' }
  | { type: 'custom_only'; label: 'Custom Stories Only' }
  | { type: 'saved_only'; label: 'Saved Articles Only' };

/**
 * Hợp đồng Props nghiêm ngặt cho component AnalyticsModal
 */
export interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
  posts: Post[];
  savedPosts: Post[];
  isDarkMode: boolean;
}
```

---

## 📌 3. Triển Khai Component Chuẩn React Best Practice ([src/components/AnalyticsModal.tsx](src/components/AnalyticsModal.tsx))

Component được viết hoàn toàn bằng cú pháp TypeScript hiện đại, áp dụng các kỹ thuật React 19 / Modern React tiên tiến nhất:

### 🔷 1. Ràng Buộc Kiểu Dữ Liệu Cho Props & Output:
```typescript
export default function AnalyticsModal({
  isOpen,
  onClose,
  posts,
  savedPosts,
  isDarkMode
}: AnalyticsModalProps): React.JSX.Element | null {
  if (!isOpen) return null;
  // ...
}
```
- Sử dụng `React.JSX.Element | null` làm kiểu trả về tường minh thay vì dựa dẫm vào type inference ngầm định.

### 🔷 2. Ràng Buộc Type Generics Cho React Hooks:
```typescript
// 1. Quản lý Tab với Union Type
const [activeTab, setActiveTab] = useState<MetricTab>('overview');

// 2. Quản lý Bộ lọc với Discriminated Union
const [selectedFilter, setSelectedFilter] = useState<AnalyticsFilter>(FILTER_OPTIONS[0]);

// 3. Tính toán tập dữ liệu theo bộ lọc
const targetDataset = useMemo<Post[]>(() => {
  switch (selectedFilter.type) {
    case 'custom_only':
      return posts.filter((p) => p.isCustom);
    case 'saved_only':
      return savedPosts;
    case 'all':
    default:
      return posts;
  }
}, [posts, savedPosts, selectedFilter]);

// 4. Tính toán Metrics với Interface định sẵn
const metrics = useMemo<ReadingMetric>(() => {
  // ...
  return {
    totalArticles: targetDataset.length,
    totalWords,
    estimatedReadingMinutes: estimatedMinutes,
    averageWordsPerArticle: averageWords,
    longestArticleTitle: longestTitle
  };
}, [targetDataset]);
```

### 🔷 3. Sử Dụng Cấu Trúc Dữ Liệu Typed Map:
```typescript
const map = new Map<string, number>();
targetDataset.forEach((post) => {
  const author = post.authorName || `Author #${post.userId || 1}`;
  map.set(author, (map.get(author) || 0) + 1);
});
```

---

## 📌 4. Cấu Hình TypeScript & Khả Năng Di Chuyển Dần ([tsconfig.json](tsconfig.json))

Dự án áp dụng mô hình **Incremental Migration (Di chuyển từng bước)**, cho phép mã nguồn JavaScript (`.jsx`, `.js`) và TypeScript (`.tsx`, `.ts`) cùng hoạt động hài hòa trong cùng một dự án:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "allowJs": true,
    "noEmit": true
  },
  "include": ["src"]
}
```
- **Lợi ích**:
  - `allowJs: true`: Cho phép tệp TypeScript import các component JavaScript và ngược lại.
  - `strict: true`: Bật chế độ kiểm tra nghiêm ngặt tối đa, ngăn ngừa lỗi `null` / `undefined` và cấm hoàn toàn `any` ngầm định.
  - `noEmit: true`: Tận dụng Vite cho việc chuyển đổi mã (transpilation) siêu nhanh, TypeScript chỉ đóng vai trò Type Checker (`npx tsc --noEmit`).

---

## 💡 Kiến Thức Tâm Đắc Về TypeScript Trong React

1. **Discriminated Unions (Tagged Unions) - Giải Pháp Hoàn Hảo Cho State Machine**:
   - Thay vì quản lý nhiều cờ boolean rời rạc (`isCustomFilter: boolean`, `isSavedFilter: boolean`) dễ rơi vào trạng thái phi logic (ví dụ cả 2 cờ đều là `true`), việc dùng Discriminated Union `{ type: 'all' } | { type: 'custom_only' } | { type: 'saved_only' }` ép buộc mỗi trạng thái phải loại trừ lẫn nhau (mutually exclusive). Trình biên dịch sẽ tự động thu hẹp kiểu (Type Narrowing) hoàn hảo trong cấu trúc `switch...case`.
2. **Loại Bỏ `React.FC` Cũ Kỹ Theo Khuyến Nghị Mới**:
   - Sử dụng khai báo hàm chuẩn `function AnalyticsModal(props: AnalyticsModalProps): React.JSX.Element` giúp mã nguồn tường minh hơn, tránh được các nhược điểm lịch sử của `React.FC` (như việc ngầm định thuộc tính `children` ở các phiên bản cũ và khó sử dụng với Generic Components).
3. **Quy Tắc "Contract First" (Định Nghĩa Hợp Đồng Trước)**:
   - Trước khi dựng giao diện, việc phác thảo toàn bộ Interfaces tại `src/types/blog.ts` giúp người lập trình hình dung rõ ràng toàn bộ luồng dữ liệu, các trường bắt buộc vs tùy chọn (`?`), giúp giảm tới 80% thời gian debug so với việc viết JavaScript chay.
4. **Kiểm Tra Kiểu Độc Lập Với Quy Trình Build**:
   - Với câu lệnh `npx tsc --noEmit`, toàn bộ cây mã nguồn TypeScript được thẩm định tính an toàn 100% trước khi đưa vào bundle đóng gói sản phẩm, đảm bảo không có bất kỳ lỗi Runtime TypeError nào lọt vào môi trường Production.

---
---

# Chương: DEV-FE-007 · Advanced Hooks & Custom Hooks

Tài liệu thực hành và hoàn thành các bài tập thuộc Chương **DEV-FE-007 · Advanced Hooks & Custom Hooks** trong dự án PulseBlog.

---

## 📌 1. Tổng Quan Về Hệ Thống Hooks Trong Dự Án

PulseBlog tận dụng tối đa các Hooks chính thống của React cùng các Custom Hooks tự xây dựng để quản lý vòng đời, tối ưu hiệu năng và trừu tượng hóa các tác vụ phức tạp:

| Hook | Tệp triển khai | Vai trò & Mục đích sử dụng |
| :--- | :--- | :--- |
| **`useState`** | Toàn bộ components | Quản lý trạng thái cục bộ của form, modal visibility, danh sách bài viết và active tab. |
| **`useEffect`** | `App.jsx`, `PostDetailModal.jsx`, `CreatePostModal.jsx`, hooks | Xử lý Side-Effects: Gọi API khi mount, đồng bộ dữ liệu vào `localStorage`, fetch bình luận theo `postId`. |
| **`useMemo`** | `src/App.jsx` | Ghi nhớ kết quả tính toán tốn kém: map tác giả `userMap`, danh sách gộp `allPosts`, và bộ lọc tìm kiếm `filteredPosts`. |
| **`useLocalStorage`** | [src/hooks/useLocalStorage.js](src/hooks/useLocalStorage.js) | **Custom Hook**: Đồng bộ và lưu trữ hai chiều trạng thái React vào `window.localStorage` an toàn. |
| **`useDebounce`** | [src/hooks/useDebounce.js](src/hooks/useDebounce.js) | **Custom Hook**: Trì hoãn tần suất cập nhật dữ liệu của ô tìm kiếm, triệt tiêu re-render thừa khi gõ nhanh. |

---

## 📌 2. Đi Sâu Phân Tích Các Custom Hooks Tự Phát Triển

### 🔷 Custom Hook 1: `useLocalStorage` ([src/hooks/useLocalStorage.js](src/hooks/useLocalStorage.js))

Hook chuyên trách giải quyết bài toán đồng bộ dữ liệu giữa bộ nhớ React State và Web Storage API của trình duyệt:

```javascript
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // 1. Khởi tạo State trễ (Lazy State Initialization)
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // 2. Tự động đồng bộ vào Web Storage khi state thay đổi
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
```

#### 🌟 Điểm Sáng Kỹ Thuật & Kiến Thức Tâm Đắc:
1. **Khởi tạo State Trễ (Lazy Initial State)**:
   - *Vấn đề*: `window.localStorage.getItem` là một thao tác đọc đĩa I/O đồng bộ (blocking synchronous I/O). Nếu truyền trực tiếp `useState(window.localStorage.getItem(key))`, thao tác đọc đĩa sẽ bị ép thực thi ở **mọi lần component re-render**, làm suy giảm hiệu năng nghiêm trọng.
   - *Giải pháp*: Truyền một hàm callback khởi tạo `useState(() => { ... })`. React chỉ thực thi hàm này **duy nhất một lần** khi component khởi tạo (mount), hoàn toàn bỏ qua ở các chu kỳ render tiếp theo.
2. **Khả năng phục hồi lỗi (Graceful Degradation)**:
   - Bao bọc bằng `try...catch` giúp ứng dụng không bị sập (crash) trong các trường hợp người dùng bật chế độ ẩn danh (Private Browsing) chặn cookie/storage, hoặc khi dung lượng ổ cứng đầy (`QuotaExceededError`).
3. **Chuẩn hóa giao diện tương thích (API Consistency)**:
   - Trả về tuple `[storedValue, setStoredValue]` tương tự như `useState` nguyên bản, hỗ trợ cả cách truyền giá trị trực tiếp lẫn truyền hàm cập nhật hàm (`prev => ...`).

---

### 🔷 Custom Hook 2: `useDebounce` ([src/hooks/useDebounce.js](src/hooks/useDebounce.js))

Hook chuyên xử lý kỹ thuật **Debouncing** cho các sự kiện phát sinh liên tục với tần suất cao (High-frequency Events):

```javascript
import { useState, useEffect } from 'react';

export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Thiết lập bộ hẹn giờ cập nhật giá trị sau khoảng delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function: Hủy bỏ timer cũ nếu value thay đổi trước khi hết hạn delay
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

#### 🌟 Điểm Sáng Kỹ Thuật & Kiến Thức Tâm Đắc:
1. **Loại bỏ tính toán dư thừa khi tìm kiếm**:
   - Khi người dùng gõ từ khóa `"react fundamentals"` (18 ký tự), nếu không debounce, ứng dụng sẽ thực hiện 18 lần lọc mảng và 18 lần re-render giao diện.
   - Khi áp dụng `useDebounce(searchQuery, 250)` trong [src/App.jsx](src/App.jsx), việc lọc mảng chỉ được thực thi **duy nhất 1 lần** sau khi người dùng dừng tay 250ms, tiết kiệm tài nguyên CPU tối đa.
2. **Cơ chế hàm dọn dẹp (Cleanup Function) trong `useEffect`**:
   - Mỗi khi dependency `value` thay đổi trước khi timeout kết thúc, React sẽ gọi hàm cleanup của lần render trước để `clearTimeout(handler)`. Kỹ thuật này ngăn chặn triệt để rò rỉ bộ nhớ (Memory Leak) và triệt tiêu xung đột dữ liệu (Race Conditions).

---

## 📌 3. Các Mẫu Thiết Kế Nâng Cao Với Core Hooks

### 🛡️ Ngăn Chặn State Update Trên Component Đã Unmount
Triển khai trong [src/components/PostDetailModal.jsx](src/components/PostDetailModal.jsx):
```javascript
useEffect(() => {
  if (!post || post.isCustom) {
    setLoadingComments(false);
    setComments([]);
    return;
  }

  let isMounted = true;
  setLoadingComments(true);

  fetchPostComments(post.id)
    .then((data) => {
      if (isMounted) {
        setComments(data);
        setLoadingComments(false);
      }
    })
    .catch(() => {
      if (isMounted) setLoadingComments(false);
    });

  return () => {
    isMounted = false; // Đánh dấu component đã unmount
  };
}, [post]);
```
- **Bài học kinh nghiệm**: Khi người dùng đóng modal trước khi API trả về kết quả, nếu không kiểm tra `isMounted`, hàm `setComments()` sẽ cố cập nhật state vào một component không còn tồn tại trong DOM, phát sinh cảnh báo bộ nhớ của React và làm sai lệch logic.

### ⚡ Tối Ưu Bảng Tra Cứu O(1) Với `useMemo`
Triển khai trong [src/App.jsx](src/App.jsx):
```javascript
const userMap = useMemo(() => {
  const map = {};
  users.forEach((u) => {
    map[u.id] = u.name;
  });
  return map;
}, [users]);
```
- Thay vì sử dụng phương thức `users.find(u => u.id === post.userId)` với độ phức tạp $O(N)$ trong mỗi lần duyệt từng bài viết (khiến tổng độ phức tạp tăng lên $O(M \times N)$), ta dùng `useMemo` tạo trước một Hash Map $O(1)$. Nhờ đó, việc truy xuất tên tác giả đạt hiệu suất tức thì bất kể số lượng bài viết lớn cỡ nào.

---

## 💡 Đúc Kết Các Nguyên Tắc Vàng Khi Làm Việc Với Hooks

1. **Tuân thủ tuyệt đối Rules of Hooks**:
   - Chỉ gọi Hooks ở cấp cao nhất của component (không đặt trong `if`, vòng lặp `for`, hay các hàm lồng nhau).
   - Đảm bảo thứ tự gọi Hook luôn luôn nhất quán giữa các lần render để React duy trì đúng chỉ mục mảng Fiber node.
2. **Khai báo đầy đủ Dependencies trong `useEffect` và `useMemo`**:
   - Mọi biến số, hàm hoặc state được sử dụng bên trong callback của Hook đều phải được liệt kê vào dependency array. Tránh tình trạng "stale closures" (bắt phải giá trị cũ của state).
3. **Phân biệt rạch ròi giữa UI Component và Logic Hooks**:
   - Một component sạch sẽ chỉ nên tập trung vào việc mô tả giao diện trông như thế nào dựa trên dữ liệu. Toàn bộ logic phức tạp (gọi storage, debounce, network, timers) cần được gom nhóm vào Custom Hooks riêng biệt.


---
---

# Chương: DEV-FE-008 · State Management, Zustand & Redux Toolkit

Tài liệu thực hành và hoàn thành các bài tập thuộc Chương **DEV-FE-008 · State Management, Zustand & Redux Toolkit** trong dự án PulseBlog.

---

## 📌 1. Bối Cảnh & Kiến Trúc Tổng Thể (Architecture Overview)

Trước đây, PulseBlog quản lý trạng thái tập trung chủ yếu tại component gốc [src/App.jsx](src/App.jsx) với hơn 10 React hooks rời rạc (`useState`, `useLocalStorage`, `useEffect`, `useMemo`), kéo theo hiện tượng **Prop Drilling** khi phải truyền dữ liệu và callbacks qua nhiều tầng con (`Navbar`, `Header`, `PostCard`, các Modal).

Tại chương này, hệ thống được tái cấu trúc chuyển dịch sang mô hình **Centralized State Management** chuẩn công nghiệp:
- **Thư viện chủ đạo**: [Zustand](https://github.com/pmndrs/zustand) kết hợp **Slice Pattern**, **Selective Persist Middleware**, và **Fine-grained Atomic Selectors**.
- **Kiến trúc tham chiếu đối sánh**: Triển khai song song module [Redux Toolkit](https://redux-toolkit.js.org/) tương đương 1-1 tại thư mục `src/store/redux/` nhằm phân tích, so sánh chuyên sâu giữa hai trường phái quản lý trạng thái phổ biến nhất hiện nay.

```
                  ┌────────────────────────────────────────────────────────┐
                  │                 PulseBlog App Store                    │
                  │             (Zustand Slice Pattern)                    │
                  ├──────────────────┬──────────────────┬──────────────────┤
                  │    postSlice     │     uiSlice      │    themeSlice    │
                  │  - apiPosts      │  - activeTab     │  - isDarkMode    │
                  │  - customPosts   │  - searchQuery   │  - toggleTheme() │
                  │  - savedPostIds  │  - modals open   │  - setTheme()    │
                  │  - deletedPostIds│  - selectedPost  │                  │
                  │  - users, loading│                  │                  │
                  └─────────┬────────┴─────────┬────────┴─────────┬────────┘
                            │                  │                  │
                  ┌─────────┴──────────────────┴──────────────────┴────────┐
                  │          Middleware Layer (Zustand Middleware)         │
                  │  - devtools: Đăng ký Redux DevTools extension          │
                  │  - persist: Lưu trữ có chọn lọc (partialize)           │
                  └────────────────────────────┬───────────────────────────┘
                                               │
               ┌───────────────────────────────┴───────────────────────────────┐
               │                                                               │
     ┌─────────▼─────────┐                                           ┌─────────▼─────────┐
     │  Atomic Selectors │                                           │ Memoized Selectors│
     │  - selectIsPost   │                                           │  - selectAllPosts │
     │  - selectSavedCnt │                                           │  - selectFiltered │
     │  - isDarkMode     │                                           │  - selectUserMap  │
     └─────────┬─────────┘                                           └─────────┬─────────┘
               │                                                               │
     ┌─────────▼───────────────────────────────────────────────────────────────▼─────────┐
     │                             UI Components (Subscribers)                            │
     │      Navbar   │   Header   │   PostCard   │   DetailModal   │   AnalyticsModal     │
     └────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📌 2. Tiêu Chí 1: Phân Tách Store Thành Các Module/Slice Hợp Lý (Slice Pattern)

Store được phân rã theo nguyên lý **Separation of Concerns (SoC)** thành 3 slices độc lập đặt trong `src/store/slices/`, sau đó được hợp nhất tại [src/store/useAppStore.ts](src/store/useAppStore.ts):

### 🔷 1. `postSlice` ([src/store/slices/postSlice.ts](src/store/slices/postSlice.ts))
Quản lý toàn bộ vòng đời của dữ liệu bài viết (Entities & Network State):
- **Trạng thái**:
  - `apiPosts: Post[]` — Danh sách bài viết nạp từ máy chủ JSONPlaceholder.
  - `customPosts: Post[]` — Danh sách bài viết do người dùng tự khởi tạo trong phiên làm việc.
  - `savedPostIds: number[]` — Danh sách ID các bài viết được đánh dấu lưu (bookmark).
  - `deletedPostIds: number[]` — Danh sách ID các bài viết đã bị xóa.
  - `users: User[]` — Danh sách tác giả từ API.
  - `loading: boolean` & `error: string | null` — Trạng thái gọi mạng bất đồng bộ.
- **Hành động (Actions)**:
  - `loadApiData()`: Gọi đồng thời API `fetchPosts` và `fetchUsers` thông qua `Promise.all`.
  - `createPost(postData)`: Bổ sung bài viết mới vào đầu danh sách với ID sinh tự động `Date.now()`.
  - `updatePost(updatedPost)`: Cập nhật bài viết bất biến (immutable update).
  - `deletePost(postId)`: Đưa `postId` vào danh sách bài viết bị ẩn, đồng thời gỡ bỏ khỏi `savedPostIds` và `customPosts`.
  - `toggleSavePost(postId)`: Thêm hoặc gỡ ID bài viết khỏi danh sách bookmark.

### 🔷 2. `uiSlice` ([src/store/slices/uiSlice.ts](src/store/slices/uiSlice.ts))
Quản lý các trạng thái giao diện tức thời (Transient UI State):
- **Trạng thái**:
  - `activeTab: 'all' | 'saved'` — Tab hiển thị hiện tại.
  - `searchQuery: string` — Chuỗi tìm kiếm người dùng đang nhập.
  - `selectedPost: Post | null` — Bài viết đang được mở xem chi tiết trong modal.
  - `editingPost: Post | null` — Bài viết đang được chọn chỉnh sửa.
  - `isCreateModalOpen: boolean` — Cờ mở/đóng modal tạo/sửa bài viết.
  - `isAnalyticsOpen: boolean` — Cờ mở/đóng modal phân tích dữ liệu chuyên sâu.
- **Hành động (Actions)**:
  - `setActiveTab`, `setSearchQuery`, `openCreateModal`, `closeCreateModal`, `openDetailModal`, `closeDetailModal`, `openAnalyticsModal`, `closeAnalyticsModal`.

### 🔷 3. `themeSlice` ([src/store/slices/themeSlice.ts](src/store/slices/themeSlice.ts))
Quản lý chủ đề giao diện ứng dụng:
- **Trạng thái**: `isDarkMode: boolean` (mặc định khởi tạo từ cấu hình người dùng).
- **Hành động (Actions)**: `toggleTheme()`, `setTheme(isDark)`.

### 🔷 4. Tích Hợp Root Store ([src/store/useAppStore.ts](src/store/useAppStore.ts))
```typescript
export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (...a) => ({
        ...createPostSlice(...a),
        ...createUiSlice(...a),
        ...createThemeSlice(...a),
      }),
      {
        name: 'pulse_blog_store',
        partialize: (state) => ({
          isDarkMode: state.isDarkMode,
          customPosts: state.customPosts,
          savedPostIds: state.savedPostIds,
          deletedPostIds: state.deletedPostIds,
        }),
      }
    ),
    {
      name: 'PulseBlogStore',
      enabled: import.meta.env.DEV,
    }
  )
);
```

---

## 📌 3. Tiêu Chí 2: State Tối Thiểu Cần Thiết, Không Dữ Liệu Thừa (Normalized State)

Một trong những sai lầm phổ biến nhất trong State Management là lưu trữ dữ liệu trùng lặp hoặc lưu các giá trị có thể tính toán được từ dữ liệu gốc (**Derived State**).

### ❌ Anti-pattern Trước Đây:
- Lưu trữ toàn bộ object `savedPosts: Post[]` vào state và `localStorage`. Khi một bài viết được sửa tiêu đề hoặc xóa, ứng dụng phải cập nhật thủ công đồng thời ở 3 vị trí khác nhau: `apiPosts`, `customPosts`, và `savedPosts`.
- Nếu cập nhật sót một vị trí, dữ liệu lập tức bị phân mảnh (Desynchronized State).

### ✅ Giải Pháp Chuẩn Hóa Triển Khai (Single Source of Truth):
Trong `postSlice`, ứng dụng áp dụng nguyên tắc **Normalized State**:
1. **Chỉ lưu mảng định danh `savedPostIds: number[]`**:
   - Khi bài viết được chỉnh sửa, dữ liệu bài viết chỉ cập nhật đúng 1 lần tại nguồn gốc. Toàn bộ danh sách `savedPosts` hiển thị ở UI là kết quả của Selector lọc từ `allPosts` theo `savedPostIds`.
2. **Không lưu `allPosts` trong State**:
   - Danh sách bài viết tổng thể là dữ liệu phái sinh được kết hợp từ `apiPosts + customPosts - deletedPostIds`.
3. **Không lưu `filteredPosts` trong State**:
   - Kết quả tìm kiếm theo từ khóa và theo Tab ('all' vs 'saved') được tính toán động qua selector `selectFilteredPosts`.
4. **Không lưu các biến đếm số lượng (`savedCount`, `totalPosts`, `totalUsers`) trong State**:
   - Toàn bộ được trích xuất tức thời thông qua các selector $O(1)$ như `selectSavedCount` (`savedPostIds.length`).

| Dữ liệu | Vị trí lưu trữ | Phân loại | Lý do |
| :--- | :--- | :--- | :--- |
| `apiPosts`, `customPosts` | `postSlice` | **Root State** | Dữ liệu gốc của hệ thống |
| `savedPostIds` | `postSlice` | **Root State** | Danh sách khóa ngoại liên kết (Foreign Keys) |
| `deletedPostIds` | `postSlice` | **Root State** | Danh sách loại trừ các bản ghi API bị xóa |
| `savedPosts` (danh sách object) | Selector (`selectSavedPosts`) | **Derived State** | Tính toán tự động từ `allPosts` và `savedPostIds` |
| `allPosts` (gộp API + Custom) | Selector (`selectAllPosts`) | **Derived State** | Tránh trùng lặp mảng bài viết trong RAM |
| `filteredPosts` | Selector (`selectFilteredPosts`) | **Derived State** | Phụ thuộc vào từ khóa tìm kiếm và tab |
| `savedCount`, `totalPosts` | Selector | **Derived State** | Trích xuất độ dài mảng $O(1)$, không cần lưu thừa |

---

## 📌 4. Tiêu Chí 3: Selector Tối Ưu, Triệt Tiêu Re-render Thừa

### ⚡ Vấn Đề Lớn Của Prop Drilling Trước Khi Có Store:
- Khi người dùng gõ 1 ký tự vào ô tìm kiếm (`searchQuery`), hook `useState` tại `App.jsx` bị kích hoạt.
- `App.jsx` re-render kéo theo toàn bộ cây component con bị re-render: `Navbar`, `Header`, và toàn bộ **100+ component `PostCard`**, dù tiêu đề và nội dung bài viết không hề thay đổi.

### 🛡️ Giải Pháp Triệt Tiêu Re-render Với Zustand & Selectors ([src/store/selectors.ts](src/store/selectors.ts)):

#### 1. Atomic Selectors & Factory Selectors Cho Từng Card:
Thay vì truyền hàm `isPostSaved(post.id)` từ component cha, mỗi component [src/components/PostCard.jsx](src/components/PostCard.jsx) tự đăng ký lắng nghe trạng thái bookmark của riêng mình thông qua Selector Factory:
```javascript
// PostCard.jsx
const isPostSavedInStore = useAppStore(selectIsPostSaved(post.id));
```
Bên trong `selectors.ts`:
```typescript
export const selectIsPostSaved = (postId: number) => (state: AppStore): boolean => {
  return state.savedPostIds.includes(postId);
};
```
- **Hiệu quả**: Hàm selector trả về giá trị kiểu nguyên thủy `boolean` (`true` hoặc `false`).
- Khi người dùng click bookmark tại Bài viết #1, Zustand so sánh bằng toán tử `Object.is`. Trạng thái của Bài viết #1 đổi từ `false` sang `true` $\rightarrow$ **Chỉ duy nhất Bài viết #1 re-render để đổi icon**. Toàn bộ 99 bài viết còn lại có selector trả về `false === false`, hoàn toàn **KHÔNG re-render**!

#### 2. Kỹ Thuật Snapshot Caching Đáp Ứng React 19 `useSyncExternalStore`:
- *Nguyên tắc cốt lõi*: Trong React 18/19, `useSyncExternalStore` yêu cầu các selector trả về kiểu đối tượng/mảng phải duy trì tính ổn định tham chiếu (**Referential Stability**). Nếu selector trả về một mảng mới `[...filter]` ở mỗi lần gọi mà dữ liệu gốc không đổi, React sẽ phát hiện snapshot thay đổi liên tục và cảnh báo `Error: Maximum update depth exceeded`.
- *Triển khai*: Trong [src/store/selectors.ts](src/store/selectors.ts), các selector phái sinh phức tạp (`selectAllPosts`, `selectSavedPosts`, `selectFilteredPosts`) đều được trang bị cơ chế **Snapshot Cache**:
```typescript
let lastSavedAllPosts: Post[] | null = null;
let lastSavedIds: number[] | null = null;
let cachedSavedPosts: Post[] = [];

export const selectSavedPosts = (state: AppStore): Post[] => {
  const allPosts = selectAllPosts(state);
  // Nếu dữ liệu phụ thuộc không đổi tham chiếu, trả về mảng cache cũ ngay lập tức
  if (allPosts === lastSavedAllPosts && state.savedPostIds === lastSavedIds) {
    return cachedSavedPosts;
  }

  cachedSavedPosts = allPosts.filter((post) => state.savedPostIds.includes(post.id));
  lastSavedAllPosts = allPosts;
  lastSavedIds = state.savedPostIds;
  return cachedSavedPosts;
};
```

#### 3. Cách Ly Hoàn Toàn Hero `Header` Khỏi Ô Tìm Kiếm:
Component [src/components/Header.jsx](src/components/Header.jsx) chỉ đăng ký:
```javascript
const totalPosts = useAppStore(selectTotalPostsCount);
const savedCount = useAppStore(selectSavedCount);
const totalUsers = useAppStore(selectTotalUsersCount);
const isDarkMode = useAppStore((state) => state.isDarkMode);
```
- Khi người dùng gõ bàn phím liên tục vào ô tìm kiếm, `searchQuery` trong `uiSlice` thay đổi liên tục.
- Do `Header` không đăng ký selector tới `searchQuery`, component `Header` **hoàn toàn không re-render một lần nào** trong suốt quá trình người dùng tìm kiếm!

---

## 📌 5. Tiêu Chí 4: Cơ Chế Persist Có Chọn Lọc Cho Dữ Liệu Cần Lưu (Selective Persistence)

### 🎯 Phân Định Trạng Thái Bền Vững (Durable) vs Trạng Thái Tạm Thời (Transient):
Không phải mọi dữ liệu trong Store đều nên lưu vào Web Storage. Nếu lưu bừa bãi dữ liệu tạm thời (UI modals, loading spinners, lỗi mạng) sẽ khiến trải nghiệm người dùng bị hỏng khi họ tải lại trang hoặc mở ở tab mới.

```
┌───────────────────────────────────────────────┬───────────────────────────────────────────────┐
│     Durable State (ĐƯỢC LƯU TRỮ PERSIST)      │   Transient State (TUYỆT ĐỐI KHÔNG PERSIST)   │
├───────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ ✔ isDarkMode: Cấu hình giao diện người dùng  │ ✘ loading, error: Trạng thái mạng tạm thời    │
│ ✔ customPosts: Các bài viết do user tự viết   │ ✘ apiPosts: Cần fetch mới nhất từ máy chủ     │
│ ✔ savedPostIds: Danh sách ID bài viết đã lưu  │ ✘ searchQuery: Ô tìm kiếm cần reset khi reload│
│ ✔ deletedPostIds: Danh sách bài viết bị xóa   │ ✘ isCreateModalOpen, isAnalyticsOpen: Modals  │
│                                               │ ✘ selectedPost: Chi tiết bài viết đang xem    │
└───────────────────────────────────────────────┴───────────────────────────────────────────────┘
```

### ⚙️ Triển Khai Qua Middleware `partialize`:
```typescript
persist(
  (...a) => ({ ... }),
  {
    name: 'pulse_blog_store', // Key định danh duy nhất trong window.localStorage
    partialize: (state) => ({
      isDarkMode: state.isDarkMode,
      customPosts: state.customPosts,
      savedPostIds: state.savedPostIds,
      deletedPostIds: state.deletedPostIds,
    }),
  }
)
```

### 🔄 Cơ Chế Chuyển Đổi Tương Thích Dữ Liệu Cũ (Backward Compatibility Migration):
Trong [src/store/slices/postSlice.ts](src/store/slices/postSlice.ts), hàm `getLegacyInitialData()` tự động kiểm tra và di chuyển dữ liệu cũ từ các key `pulse_blog_saved_posts`, `pulse_blog_custom_posts`, `pulse_blog_deleted_posts` sang cấu trúc mới của Zustand Store, đảm bảo người dùng không bị mất bất kỳ bài viết hay bookmark nào từ các phiên bản trước.

---

## 📌 6. Tiêu Chí 5: So Sánh Toàn Diện & Lý Do Lựa Chọn Giữa Zustand và Redux Toolkit Cho PulseBlog

Trong chương này, mã nguồn tham chiếu tương đương của Redux Toolkit cũng được xây dựng đầy đủ tại thư mục `src/store/redux/` (`postSlice.ts`, `uiSlice.ts`, `themeSlice.ts`, `store.ts`, `selectors.ts` với `createSelector`). Dưới đây là phân tích kiến trúc chuyên sâu:

### 📊 Bảng So Sánh Kỹ Thuật: Zustand vs Redux Toolkit (RTK)

| Tiêu chí | Zustand (Lựa chọn chính) | Redux Toolkit (Mô hình so sánh) |
| :--- | :--- | :--- |
| **Kích thước Bundle (Minified + Gzip)** | **~1.1 kB** (Siêu nhẹ, zero dependency) | **~12 – 14 kB** (Bao gồm RTK + React-Redux + Immer + Reselect) |
| **Boilerplate & Ceremony** | **Rất thấp**: Khởi tạo hook trực tiếp, cập nhật trực tiếp qua `set()`. | **Trung bình - Cao**: Cần `createSlice`, `configureStore`, `<Provider>`, `useDispatch`, `useSelector`. |
| **Yêu cầu Context Provider** | **Không cần**: Store nằm ngoài cây React component, có thể gọi trực tiếp ở bất kỳ tệp JS/TS nào (`useAppStore.getState()`). | **Bắt buộc**: Phải bọc toàn bộ ứng dụng trong `<Provider store={store}>`. |
| **Cơ Chế Re-render** | Tối ưu tức thì thông qua Fine-grained Atomic Selectors và `useShallow`. | Cần sử dụng `createSelector` (Reselect) hoặc truyền hàm `equalityFn` tùy chỉnh vào `useSelector`. |
| **Cơ Chế Persistence** | Tích hợp sẵn middleware `persist` chính thống, lọc trường qua `partialize`. | Cần cài thêm thư viện bên thứ ba `redux-persist` (khá nặng, hay gặp lỗi serialization warnings). |
| **Mô Hình Bất Đồng Bộ (Async Actions)** | Gọi hàm async tự nhiên bên trong slice (`async () => { set(...) }`). | Cần `createAsyncThunk` hoặc cấu hình RTK Query với cú pháp `extraReducers`. |
| **DevTools & Time-travel** | Hỗ trợ Redux DevTools extension thông qua middleware `devtools`. | Tích hợp sẵn Redux DevTools gốc với khả năng Time-travel debugging mạnh mẽ. |
| **Tương thích React 19 & Concurrent Mode** | Tương thích 100% thông qua `useSyncExternalStore`. | Tương thích 100% thông qua `react-redux` v9+ (`useSyncExternalStore`). |
| **Độ dốc học tập (Learning Curve)** | Dễ tiếp cận trong vòng 15 phút cho mọi trình độ Frontend. | Cần nắm vững tư duy luồng dữ liệu 1 chiều (Flux), Action, Reducer, Dispatcher, Middleware. |

### 🏆 Luận Điểm Lựa Chọn Zustand Làm Store Chính Cho PulseBlog:

1. **Hiệu Quả Về Tài Nguyên & Bundle Size**:
   - PulseBlog là một ứng dụng đọc báo, tin tức và phân tích tri thức hiện đại. Việc tiết kiệm hơn 10 kB bundle size giúp website khởi động và tương tác tức thì (FCP & TTI tối ưu), đặc biệt trên các thiết bị di động có băng thông hạn chế.
2. **Loại Bỏ Hoàn Toàn Provider Hell & Prop Drilling**:
   - Với Zustand, component con có thể truy xuất trực tiếp trạng thái mà không cần bọc `<Provider>` ở cấp cao nhất. Việc tích hợp, kiểm thử (unit testing) các component riêng lẻ trở nên độc lập và đơn giản hơn rất nhiều.
3. **Cơ Chế Persist Tinh Gọn**:
   - Middleware `persist` của Zustand giải quyết bài toán lưu trữ trạng thái có chọn lọc (`partialize`) một cách tự nhiên chỉ trong 5 dòng code, không làm phát sinh cảnh báo non-serializable value như khi dùng `redux-persist`.
4. **Hỗ Trợ Module Hóa Slices Hoàn Hảo**:
   - Mặc dù nhẹ, Zustand vẫn cung cấp đầy đủ khả năng phân tách module thông qua Slice Pattern, đáp ứng chuẩn mực kiến trúc sạch (Clean Architecture) không hề thua kém Redux Toolkit.

### 🏢 Khi Nào Một Dự Án Enterprise Nên Chọn Redux Toolkit?

Redux Toolkit vẫn là sự lựa chọn số 1 trong các kịch bản sau:
1. **Dự án quy mô cực lớn với hàng chục team cùng làm việc (Multi-team Enterprise)**:
   - Kiến trúc nghiêm ngặt của Redux (mọi biến động trạng thái đều phải thông qua Action Type cụ thể) giúp việc kiểm soát, phân định trách nhiệm code và audit log hệ thống trở nên minh bạch tuyệt đối.
2. **Yêu cầu Time-travel Debugging và Replay Bugs khắt khe**:
   - Redux DevTools với khả năng xuất/nhập toàn bộ lịch sử Action dưới dạng tệp JSON giúp đội ngũ QA và DevOps tái hiện chính xác 100% chuỗi thao tác dẫn tới lỗi của người dùng.
3. **Tận Dụng Sức Mạnh Của RTK Query**:
   - Khi ứng dụng có hàng trăm API REST hoặc GraphQL phức tạp cần cơ chế tự động caching, deduplication, polling và optimistic updates, RTK Query là một giải pháp toàn diện vượt trội.


---
---

# Chương: DEV-FE-009 · Fetching với TanStack Query

Tài liệu thực hành và hoàn thành các bài tập thuộc Chương **DEV-FE-009 · Fetching với TanStack Query** trong dự án PulseBlog.

---

## 📌 1. Bối Cảnh & Kiến Trúc Phân Định Server State vs Client State

Trước phiên bản này, toàn bộ việc gọi API được kích hoạt thủ công qua hook `useEffect` trong component hoặc hàm action của Zustand. Cách tiếp cận này bộc lộ các nhược điểm cố hữu của việc tự quản lý Server State:
- Thiếu cơ chế Caching tự động: Mỗi lần người dùng đổi trang hoặc quay lại tab cũ, hệ thống lại phải gửi lại request HTTP.
- Khó khăn trong việc khử trùng lặp (Deduplication) khi nhiều component cùng cần một nguồn dữ liệu.
- Xử lý phức tạp cho các tác vụ đột biến dữ liệu (Mutations) và đồng bộ trạng thái (Cache Invalidation).

Tại chương này, PulseBlog áp dụng mô hình phân tách trạng thái hiện đại chuẩn công nghiệp:
- **Server State (Dữ liệu máy chủ)**: Được quản lý tập trung bởi **TanStack Query v5** ([@tanstack/react-query](https://tanstack.com/query/latest)), chịu trách nhiệm fetching, caching, deduplication, pagination, và mutations.
- **Client State (Trạng thái giao diện)**: Được quản lý bởi **Zustand Store**, chịu trách nhiệm lưu trữ theme Dark/Light mode, bookmarks (`savedPostIds`), từ khóa tìm kiếm và trạng thái đóng/mở modals.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                   PulseBlog Application                                │
└───────────────────┬────────────────────────────────────────────────┬───────────────────┘
                    │                                                │
         ┌──────────▼──────────┐                          ┌──────────▼──────────┐
         │     Server State    │                          │     Client State    │
         │   (TanStack Query)  │                          │    (Zustand Store)  │
         ├─────────────────────┤                          ├─────────────────────┤
         │ • usePostsPagedQuery│                          │ • isDarkMode        │
         │ • useAllPostsQuery  │                          │ • savedPostIds      │
         │ • useUsersQuery     │                          │ • searchQuery       │
         │ • usePostComments   │                          │ • customPosts       │
         │ • useMutations      │                          │ • modals open/close │
         └──────────┬──────────┘                          └──────────┬──────────┘
                    │                                                │
                    │ ┌────────────────────────────────────────────┐ │
                    └─►          App Component / PostCard          ◄─┘
                      │  - Kết hợp dữ liệu phân trang & tác giả    │
                      │  - Bookmark & hiển thị trạng thái bài viết │
                      └────────────────────────────────────────────┘
```

---

## 📌 2. Tiêu Chí 1: Danh Sách Dùng `useQuery`, Xử Lý Loading & Error Rõ Ràng

Toàn bộ các tác vụ truy xuất dữ liệu từ máy chủ JSONPlaceholder được đóng gói vào các Custom Hooks tại [src/hooks/useBlogQueries.ts](src/hooks/useBlogQueries.ts):

### 🔷 1. Triển Khai Hook Truy Vấn Phân Trang ([src/hooks/useBlogQueries.ts](src/hooks/useBlogQueries.ts)):
```typescript
export function usePostsPagedQuery(page = 1, limit = 9) {
  return useQuery({
    queryKey: queryKeys.posts.list(page, limit),
    queryFn: () => fetchPostsPaged(page, limit),
    placeholderData: keepPreviousData, // Giữ nguyên dữ liệu trang cũ khi tải trang mới
  });
}
```

### 🔷 2. Giao Diện Xử Lý Trạng Thái Toàn Diện Trong [src/App.jsx](src/App.jsx):
1. **Trạng Thái Đang Tải (Loading State — `isPagedLoading`)**:
   - Khi truy cập lần đầu hoặc cache chưa có dữ liệu, hiển thị khối thông báo Animated Glassmorphism với spinner quay mượt mà:
   ```jsx
   {isPagedLoading && (
     <div className="flex flex-col items-center justify-center py-20">
       <Loader2 className="w-10 h-10 text-indigo-600 dark:text-indigo-400 animate-spin mb-4" />
       <p className="text-sm font-semibold text-slate-400">
         Fetching articles via TanStack Query...
       </p>
     </div>
   )}
   ```
2. **Trạng Thái Lỗi Kết Nối (Error State — `isPagedError`)**:
   - Nếu máy chủ gặp sự cố hoặc ngắt kết nối mạng, TanStack Query tự động retry 1 lần trước khi chuyển sang trạng thái lỗi.
   - Giao diện hiển thị cảnh báo đỏ với nút **"Retry Query"** gọi trực tiếp phương thức `refetchPaged()` để phục hồi:
   ```jsx
   {isPagedError && !isPagedLoading && (
     <div className="flex flex-col items-center justify-center py-16 p-6 rounded-2xl text-center max-w-md mx-auto glass-card-dark">
       <AlertCircle className="w-12 h-12 text-red-500 mb-3" />
       <h3 className="text-lg font-bold text-white mb-2">TanStack Query Error</h3>
       <p className="text-sm text-slate-400 mb-6">{pagedError?.message}</p>
       <button onClick={() => refetchPaged()} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-xl text-white font-semibold">
         <RefreshCw className="w-4 h-4" /> Retry Query
       </button>
     </div>
   )}
   ```
3. **Trạng Thái Đồng Bộ Ngầm (Background Fetching / Revalidating — `isPagedFetching`)**:
   - Hiển thị badge trạng thái `⚡ TanStack Cache: 5m` cùng biểu tượng đồng bộ `Syncing...` nhấp nháy êm dịu, thông báo cho người dùng biết dữ liệu đang được xác thực ngầm mà không gây chặn giao diện.

---

## 📌 3. Tiêu Chí 2: Chuyển Trang / Quay Lại Không Load Lại (Cơ Chế Caching)

### ⚙️ Cấu Hình Cache Chiến Lược ([src/lib/queryClient.ts](src/lib/queryClient.ts)):
```typescript
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,  // 5 phút: Dữ liệu được xem là tươi mới tuyệt đối
      gcTime: 1000 * 60 * 30,    // 30 phút: Lưu trữ dữ liệu không hoạt động trong RAM
      refetchOnWindowFocus: false, // Không bắn request dư thừa khi click chuyển cửa sổ
      retry: 1,                  // Tự động thử lại 1 lần nếu gặp lỗi mạng
    },
  },
});
```

### 🚀 Trải Nghiệm Tốc Độ Vượt Trội (0ms Cache Hit):
1. **Chuyển qua lại giữa các trang phân trang**:
   - Khi người dùng ở **Trang 1** $\rightarrow$ bấm sang **Trang 2** $\rightarrow$ rồi bấm quay lại **Trang 1**:
   - TanStack Query nhận diện queryKey `['posts', 'paged', { page: 1, limit: 9 }]` vẫn còn trong thời hạn `staleTime` (5 phút).
   - **Kết quả**: Dữ liệu Trang 1 xuất hiện **ngay lập tức trong 0 mili-giây** từ bộ nhớ RAM Cache! Hoàn toàn không phát sinh bất kỳ spinner xoay hay thời gian chờ đợi nào.
2. **Bộ Nhớ Tạm Cho Bình Luận Bài Viết ([src/components/PostDetailModal.jsx](src/components/PostDetailModal.jsx))**:
   - Thay vì mỗi lần mở modal lại gọi API bình luận, hook `usePostCommentsQuery(post.id)` tự động cache bình luận theo từng `postId`. Người dùng mở lại bài viết đã xem trước đó sẽ thấy bình luận hiện ra tức thì.

---

## 📌 4. Tiêu Chí 3: Thêm / Sửa / Xóa Bằng `useMutation` + `invalidateQueries`

Mọi thao tác thay đổi dữ liệu (CUD) đều được chuyển hóa thành các TanStack Mutation kết hợp làm tươi Cache tự động:

```
    User bấm "Publish" / "Delete"
                 │
                 ▼
    ┌─────────────────────────┐
    │     useMutation()       │
    │  - createPostMutation   │
    │  - updatePostMutation   │
    │  - deletePostMutation   │
    └────────────┬────────────┘
                 │
                 ├──► 1. Gọi API bất đồng bộ (POST / PUT / DELETE)
                 │
                 └──► 2. onSuccess: queryClient.invalidateQueries({ queryKey: ['posts'] })
                                      │
                                      ▼
                        Đánh dấu toàn bộ cache 'posts' là Stale
                        Kích hoạt Refetch ngầm lấy danh sách mới nhất!
```

### 🔷 1. Triển Khai Mutations ([src/hooks/useBlogQueries.ts](src/hooks/useBlogQueries.ts)):
```typescript
export function useCreatePostMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newPost: Omit<Post, 'id'>) => createPostApi(newPost),
    onSuccess: () => {
      // Invalidate toàn bộ cache liên quan đến danh sách bài viết
      queryClient.invalidateQueries({ queryKey: queryKeys.posts.all });
    },
  });
}

export function useDeletePostMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (postId: number) => deletePostApi(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.posts.all });
    },
  });
}
```

### 🔷 2. Trải Nghiệm Phản Hồi Ngay Lập Tức (Optimistic Integration):
- Khi người dùng tạo hoặc xóa bài viết trong [src/App.jsx](src/App.jsx), hệ thống cập nhật tức thời vào Zustand Client State để giao diện phản hồi trong 1 frame hình (60fps), đồng thời mutation chạy ngầm gửi request tới máy chủ và kích hoạt `invalidateQueries` để đảm bảo tính toàn vẹn dữ liệu.

---

## 📌 5. Tiêu Chí 4: Phân Trang Mượt Mà Với `placeholderData: keepPreviousData`

### 🎨 Component Phân Trang Chuyên Nghiệp ([src/components/Pagination.jsx](src/components/Pagination.jsx)):
- Hỗ trợ đầy đủ: Nút **Prev**, danh sách số trang `[1, 2, 3, 4 ... 11]`, dấu rút gọn thông minh `...`, nút **Next**, và thông số chi tiết *"Showing 1 - 9 of 100 articles"*.
- Hiển thị hiệu ứng xoay icon và gradient sắc nét cho trang đang hoạt động.

### 🛡️ Kỹ Thuật Triệt Tiêu Hoàn Toàn Hiện Tượng Nhấp Nháy (Zero Layout Shift):
- *Vấn đề khi phân trang thông thường*: Khi người dùng bấm sang trang tiếp theo, component thường chuyển sang trạng thái `isLoading = true`, khiến danh sách bài viết bị xóa khỏi DOM và hiển thị spinner, gây giật giao diện (Layout Shift).
- *Giải pháp TanStack Query v5*: Cấu hình `placeholderData: keepPreviousData` trong `usePostsPagedQuery`:
  - Trong lúc dữ liệu của trang tiếp theo đang được tải về qua mạng, dữ liệu của trang hiện tại **vẫn được giữ nguyên vẹn trên màn hình**.
  - Ngay khi dữ liệu trang mới tải xong, TanStack Query hoán đổi mượt mà sang dữ liệu mới mà không có 1 mili-giây nhấp nháy nào!
  - Kết hợp hàm cuộn mượt `window.scrollTo({ top: 380, behavior: 'smooth' })` mang lại cảm giác lướt web vô cùng tự nhiên.

---

## 📌 6. Tiêu Chí 5: Network & DevTools: Triệt Tiêu Request Trùng Lặp (Deduplication)

### 🛠️ Tích Hợp ReactQueryDevtools ([src/main.jsx](src/main.jsx)):
```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* DevTools tích hợp góc phải dưới màn hình */}
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </QueryClientProvider>
  </StrictMode>
);
```
- Cho phép lập trình viên trực tiếp theo dõi số lượng query đang ở trạng thái `fresh`, `fetching`, `stale`, hay `inactive`.
- Hỗ trợ kích hoạt thủ công các nút `Refetch`, `Invalidate`, `Reset` ngay trên giao diện nổi.

### ⚡ Cơ Chế Khử Trùng Lặp Request (Query Deduplication):
1. **Chia sẻ Query giữa các Component độc lập**:
   - Khi cả `Header`, `PostCard`, và `AnalyticsModal` đều cần dữ liệu tác giả `users`, cả 3 nơi cùng gọi `useUsersQuery()`.
   - TanStack Query tự động phát hiện cùng queryKey `['users']` đang trong quá trình thực thi và **chỉ phát đi đúng 1 request HTTP duy nhất** trên Network tab. Toàn bộ các component còn lại sẽ cùng chia sẻ kết quả trả về từ request duy nhất đó.
2. **Khóa Request Khi Chuyển Cửa Sổ (`refetchOnWindowFocus: false`)**:
   - Mặc định TanStack Query sẽ refetch khi người dùng Alt+Tab quay lại trình duyệt. Bằng cách thiết lập `refetchOnWindowFocus: false`, ứng dụng tiết kiệm 100% các request thừa không cần thiết, giảm tải áp lực cho máy chủ và tiết kiệm pin cho thiết bị di động.

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

