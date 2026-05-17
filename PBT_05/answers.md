PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)
Câu A1 (5đ) — Viewport & Mobile-First
1. <meta name="viewport" content="width=device-width, initial-scale=1.0">
Giải thích: width=device-width → Chiều rộng trang web bằng đúng chiều rộng thiết bị.
initial-scale=1.0 → Mức zoom ban đầu = 100%.
2. iPhone sẽ giả lập trang desktop rộng khoảng 980px.
Kết quả:
- Chữ rất nhỏ
- Layout bị thu nhỏ
- Người dùng phải zoom mới đọc được
- Responsive hoạt động sai
3. Khác nhau:
/* Mobile trước */
.container {
    width: 100%;
}
@media (min-width: 768px) {
    .container {
        width: 720px;
    }
}
Giải thích
- CSS mặc định cho mobile
- Màn hình lớn hơn mới mở rộng

/* Desktop trước */
.container {
    width: 1200px;
}
@media (max-width: 768px) {
    .container {
        width: 100%;
    }
}
Giải thích
- CSS mặc định cho desktop
- Màn hình nhỏ mới thu gọn

Tại sao Mobile-First được khuyên dùng?
- Mobile hiện chiếm phần lớn người dùng
- CSS nhẹ hơn cho điện thoại
- Dễ mở rộng lên desktop
- Hiệu năng tốt hơn
- Google ưu tiên Mobile-First Indexing cho SEO

Câu A2 (5đ) — Breakpoints
| Breakpoint | Kích thước | Thiết bị đại diện | Ví dụ số cột |
|-------------|------------|-------------------|---------------|
| xs | <576px | Điện thoại nhỏ | 1 cột |
| sm | ≥576px | Điện thoại lớn | 2 cột |
| md | ≥768px | Tablet | 2-3 cột |
| lg | ≥992px | Laptop | 4 cột |
| xl | ≥1200px | Desktop lớn | 4-5 cột |
| xxl | ≥1400px | Màn hình rất lớn | 5-6 cột |

Câu A3 (5đ) — Media Queries
| Chiều rộng màn hình | .container width |
|---------------------|------------------|
| 375px               | 100%             |
| 600px               | 540px            |
| 800px               | 720px            |
| 1000px              | 960px            |
| 1400px              | 1140px           |

Giải thích
375px:
→ chưa đạt 576px
→ width = 100%
600px:
→ đạt min-width: 576px
→ width = 540px
800px:
→ đạt min-width: 768px
→ width = 720px
1000px:
→ đạt min-width: 992px
→ width = 960px
1400px:
→ đạt min-width: 1200px
→ width = 1140px

Câu A4 (5đ) — SCSS Basics
Đọc chương 16. Giải thích 4 tính năng chính của SCSS và cho ví dụ:
1. Variables
$primary-color: blue;

button {
    background: $primary-color;
}
Giải thích
Biến giúp tái sử dụng giá trị nhiều lần.
Dễ đổi màu/theme toàn website.
2. Nesting
nav {
    background: black;

    a {
        color: white;
    }
}
Giải thích
Cho phép viết CSS lồng nhau
giống cấu trúc HTML.
3. Mixins
@mixin center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    @include center;
}
Giải thích
Mixin giúp tái sử dụng nhiều đoạn CSS.
4. @extend / Inheritance
.button {
    padding: 10px;
    border-radius: 5px;
}

.primary-btn {
    @extend .button;
    background: blue;
}
Giải thích
Kế thừa style từ class khác
để tránh viết lặp.

Tại sao browser không đọc được .scss?
SCSS không phải CSS chuẩn.

Trình duyệt chỉ hiểu:
- CSS
- HTML
- JavaScript

→ Cần compile SCSS thành CSS.

Bước chuyển SCSS → CSS
Dùng Sass compiler:

style.scss
↓
Compile
↓
style.css

Ví dụ terminal:

sass style.scss style.css