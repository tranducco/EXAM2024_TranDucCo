# EXAM2024_TranDucCo
Họ Tên: Trần Đức Cơ
MSSV: 2251161959
Lớp: 64HTTT2
# React Task List App

Dự án ứng dụng Quản lý công việc (Task List) được xây dựng bằng ReactJS và Bootstrap. Đây là bài làm thực hành mô phỏng Đề thi môn Nền tảng phát triển Web.

##  Ảnh chụp màn hình (Screenshot)


---

##  Các tính năng chính (Features)

Ứng dụng đáp ứng đầy đủ các thao tác CRUD (Thêm, Đọc, Sửa, Xóa) và lưu trữ dữ liệu phía client:
- Hiển thị danh sách: Lấy dữ liệu công việc và render ra giao diện với màu sắc tương ứng theo mức độ ưu tiên (High, Medium, Low).
- Thêm công việc mới: Form nhập liệu đi kèm xác thực (Validation) - không cho phép để trống hoặc nhập quá 100 kí tự.
- Cập nhật công việc: Chỉnh sửa thông tin Task (Tên, Mức độ ưu tiên) trực tiếp thông qua form.
- Xóa công việc: Xóa nhanh một công việc khỏi danh sách.
- Đánh dấu hoàn thành: Chuyển đổi trạng thái công việc (To Do <-> Done) với hiệu ứng cập nhật UI ngay lập tức.
- Lưu trữ dữ liệu (Data Persistence): Ứng dụng tích hợp `localStorage` giúp bảo toàn toàn bộ dữ liệu công việc ngay cả khi người dùng F5 tải lại trang.

---

## Công nghệ sử dụng (Tech Stack)

- Frontend Framework: ReactJS (Khởi tạo bằng Vite)
- UI Framework: Bootstrap 5 (Offline) & Bootstrap Icons
- State Management: React Hooks (`useState`, `useEffect`)
- Data Storage: LocalStorage & JSON file

---

## Cấu trúc thư mục (Project Structure)

Ứng dụng được chia nhỏ thành các Component theo mô hình luồng dữ liệu một chiều (One-way data flow) để dễ dàng quản lý:

```text
src/
├── components/
│   ├── TodoForm.jsx   # Xử lý form nhập liệu (Thêm/Sửa) và validation
│   ├── TodoItem.jsx   # Hiển thị thông tin chi tiết của 1 thẻ công việc
│   └── TodoList.jsx   # Khung chứa danh sách các TodoItem
├── App.jsx            # Component Cha: Nắm giữ State và xử lý logic chính
├── App.css            # Custom CSS
└── data.json          # Dữ liệu khởi tạo mặc định
```
## Hướng dẫn cài đặt và chạy dự án (How to run)
1. Clone dự án về máy:
    git clone https://github.com/tranducco/EXAM2024_TranDucCo
2. Chuyển đến thư mục dự án:
    cd .\EXAM2024_TranDucCo\todo-app
3. Cài đặt các thư viện (Dependencies):
    npm install
4. Khởi chạy dự án trên môi trường Dev:
    npm run dev
