Mô hình hoạt động Project
Mô hình hoạt động của dự án gồm 3 thành phần:
1. Frontend React
2. Backend (viết bằng javascript với Node.JS)
3. Database SQL
Cụ thể yêu cầu của dự án:
Chức năng đăng ký/đăng nhập người dùng
Người dùng sẽ được phân quyền dựa vào role (Admin/user)
Sử dụng JWT (Json web token) để xác thực người dùng
CRUD bài thi, câu hỏi, câu trả lời, users
Chức năng làm bài thi, chấm điểm.

Setup Dự Án Backend (Dùng với Docker)
Tạo tài khoản Docker Hub
Docker giúp chúng ta ‘đóng gói ứng dụng’, tạo môi trường để chạy project, và hạn chế tối đa việc phải cài đặt công cụ.
Docker Hub là nơi lưu trữ file chạy của Docker (images), tương tự như Github để lưu code.
Cách tạo tài khoản trên Docker Hub:
1. Truy cập https://hub.docker.com/signup để tạo tài khoản
2. Docker Id chính là tên username dùng để hiển thị. Sử dụng Gmail để đăng ký
3. Khi xác nhận Email, nếu không thấy Email xác nhận ở Inbox nhớ check trong thư mục Spam 
Cài đặt Docker Desktop
Cài đặt Project
Tải docker.rar : https://drive.google.com/file/d/1a92o_EJa1h5Ciz99lK1borpPqz-XStvL/view?usp=sharing
Kết nối database PostgreSQL với DBeaver:
Các tham số mặc định của database, khai báo tại file docker-compose khi cài đặt với Docker:
Port: 5433
Database: postgres
Username: root
Password: 123456
Phân tích Model DB
Participant: quản lý users sử dụng hệ thống
Quiz: quản lý các bài thi
Question: quản lý câu hỏi của bài Quiz
Answer: quản lý câu trả lời cho từng câu hỏi (Question)
API Testing với Postman
Tải và cài đặt Postman
Trong thư mục docker.rar, kéo thả file backend.json vào Postman
