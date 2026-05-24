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

PHẦN B — THỰC HÀNH CODE (60 điểm)
Bài B3 (20đ) — SCSS Refactor
Compile — Biên dịch SCSS → CSS:

PHẦN C — PHÂN TÍCH (20 điểm)
Câu C1 (10đ) — Phân tích trang web thực
1. Mobile (375px)
📱 Navigation
Thanh menu desktop biến mất.
Xuất hiện icon hamburger/menu.
Ô tìm kiếm thu nhỏ.
Một số shortcut bị ẩn để tiết kiệm không gian.
📱 Layout sản phẩm
Grid hiển thị khoảng:
2 cột sản phẩm
📱 Thành phần bị ẩn
Banner lớn
Một số menu phụ
Footer chi tiết
Danh mục phụ bên trái
📱 Font size
Font nhỏ hơn desktop.
Padding và khoảng cách cũng giảm.
2. Tablet (768px)
💻 Navigation
Menu hiển thị nhiều hơn mobile.
Thanh tìm kiếm dài hơn.
Có thêm shortcut category.
💻 Layout sản phẩm
3 - 4 cột sản phẩm
💻 Thành phần hiển thị lại
Một số banner
Category section
Flash sale lớn hơn
💻 Font size
Lớn hơn mobile nhưng nhỏ hơn desktop.
3. Desktop (1440px)
🖥 Navigation
Full navigation bar.
Hiển thị:
Đăng nhập
Giỏ hàng
Thông báo
Danh mục
🖥 Layout sản phẩm
5 - 6 cột sản phẩm
🖥 Thành phần bổ sung
Sidebar category
Banner quảng cáo lớn
Footer đầy đủ thông tin
🖥 Font size
Font lớn hơn.
Khoảng trắng rộng hơn.
4. Media Queries tìm thấy trong DevTools
Ví dụ media query 1
@media (max-width: 768px) {
    .navbar {
        display: none;
    }
}

→ Ẩn navbar desktop trên mobile.

Ví dụ media query 2
@media (min-width: 1024px) {
    .product-grid {
        grid-template-columns: repeat(6, 1fr);
    }
}

→ Desktop hiển thị nhiều cột hơn.

âu C2 (10đ) — Thiết kế Responsive Strategy
1. Wireframe Mobile (<768px)
┌──────────────────┐
│ LOGO   ☰         │
├──────────────────┤
│   HERO IMAGE     │
├──────────────────┤
│ Ảnh món ăn       │
│ 1 cột            │
├──────────────────┤
│ FORM ĐẶT BÀN     │
├──────────────────┤
│ GOOGLE MAP       │
├──────────────────┤
│ FOOTER           │
└──────────────────┘
Mobile Strategy
Sidebar: KHÔNG có.
Form đặt bàn nằm dưới gallery.
Chỉ hiện hamburger menu.
Ảnh món ăn: 1 cột.
2. Wireframe Tablet (768px)
┌────────────────────────────┐
│ LOGO     MENU              │
├────────────────────────────┤
│        HERO IMAGE          │
├────────────────────────────┤
│ Ảnh  │ Ảnh                 │
│ Ảnh  │ Ảnh                 │
│ 2 cột gallery              │
├────────────────────────────┤
│ FORM ĐẶT BÀN               │
├────────────────────────────┤
│ GOOGLE MAP                 │
├────────────────────────────┤
│ FOOTER                     │
└────────────────────────────┘
Tablet Strategy
Gallery: 2 cột.
Menu ngang.
Map vẫn nằm dưới form.
3. Wireframe Desktop (≥1024px)
┌─────────────────────────────────────┐
│ LOGO      MENU      HOTLINE         │
├─────────────────────────────────────┤
│             HERO IMAGE              │
├───────────────┬────────────────────┤
│ FOOD GALLERY  │  FORM ĐẶT BÀN      │
│ 3 cột ảnh     │                    │
│               │                    │
├───────────────┴────────────────────┤
│            GOOGLE MAP              │
├────────────────────────────────────┤
│             FOOTER                 │
└────────────────────────────────────┘
Desktop Strategy
Layout 2 cột:
Gallery
Form
Gallery: 3 cột.
Hotline luôn hiển thị.

CSS Skeleton (Mobile-First)
/* MOBILE FIRST */

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
}

/* HEADER */
.header {
    display: flex;
    justify-content: space-between;
    padding: 15px;
}

/* HERO */
.hero img {
    width: 100%;
    height: auto;
}

/* FOOD GRID */
.food-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 15px;
}

/* FORM */
.booking-form {
    padding: 15px;
}

/* MAP */
.map iframe {
    width: 100%;
    height: 300px;
}

/* TABLET */
@media (min-width: 768px) {

    .food-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* DESKTOP */
@media (min-width: 1024px) {

    .main-layout {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 20px;
        padding: 20px;
    }

    .food-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

