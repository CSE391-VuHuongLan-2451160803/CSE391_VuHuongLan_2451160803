Câu A1 (5đ) — 3 Cách nhúng CSS
Đọc chương 08. Liệt kê 3 cách nhúng CSS vào HTML (inline, internal, external).
1. Inline CSS
- Ví dụ:
<h1 style="color: red; font-size: 24px;">Tiêu đề</h1>

- Ưu điểm:
Nhanh
Dễ test/debug
Áp dụng trực tiếp cho 1 element

- Nhược điểm:
Code khó bảo trì
HTML bị lẫn CSS
Không tái sử dụng được
Khó quản lý khi project lớn

- Khi nào nên dùng:
Debug nhanh
Test style tạm thời
Email HTML
2. Internal CSS
- Ví dụ:
<head>
    <style>
        h1 {
            color: red;
            font-size: 24px;
        }
    </style>
</head>

- Ưu điểm:
Không cần file CSS riêng
Dễ dùng cho prototype nhỏ
Code CSS tập trung hơn inline

- Nhược điểm:
Không tái sử dụng giữa nhiều trang
File HTML bị dài
Không phù hợp project lớn

- Khi nào nên dùng:
Demo nhanh
Prototype
Bài tập nhỏ
3. External CSS
- Ví dụ:
HTML:
<head>
    <link rel="stylesheet" href="style.css">
</head>

css:
h1 {
    color: red;
    font-size: 24px;
}

- Ưu điểm:
Chuẩn production
Dễ bảo trì
Tái sử dụng nhiều trang
HTML sạch hơn
Browser cache tốt hơn

- Nhược điểm:
Cần quản lý thêm file CSS
Nếu link sai CSS sẽ không hoạt động

- Khi nào nên dùng:
Website thực tế
Dự án lớn
Portfolio
Web app production

Câu A2 (8đ) — CSS Selectors — Dự đoán kết quả
1. h1   → Chọn: ShopTLU
2. .price  → Chọn: 25.990.000đ,45.990.000đ
3. #app header → Chọn: <header class="top-bar dark"> chứa ShopTLU,Home,Products,About
4. nav a:first-child → Chọn: Home
5. .product.featured h2 → Chọn: MacBook Pro
6. article > p → Chọn: 25.990.000đ Mô tả sản phẩm..., 45.990.000đ Mô tả sản phẩm...
7. a[href="/"] → Chọn: Home
8. .top-bar.dark h1 → Chọn: ShopTLU

Câu A3 (7đ) — Box Model — Tính toán kích thước
/* Trường hợp 1: content-box (mặc định) */
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 450px
→ Không gian chiếm trên trang = 470px

/* Trường hợp 2: border-box */
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 400px
→ Kích thước content thực tế = 350px
→ Không gian chiếm trên trang = 420px

/* Trường hợp 3: Margin collapse */
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
→ Khoảng cách giữa box-a và box-b = 40px
→ Giải thích tại sao KHÔNG PHẢI 65px: Do margin dọc bị collapse, browser chỉ lấy margin lớn hơn nên hông cộng lại.

Nâng cao:
.box-a { margin-bottom: -10px; }
.box-b { margin-top: 40px; }
→ Khoảng cách: 40 + (-10) = 30px

Câu A4 (5đ) — Specificity (Độ ưu tiên)
Cho các CSS rules sau cùng target 1 element <p class="price" id="main-price">:

p { color: black; }                    /* Rule A */
.price { color: blue; }               /* Rule B */
#main-price { color: red; }           /* Rule C */
p.price { color: green; }             /* Rule D */
1. Tính specificity score (a, b, c) cho mỗi rule
- Rule A: Specificity:(0,0,1)
- Rule B: Specificity:(0,1,0)
- Rule C: Specificity:(1,0,0)
- Rule D: Specificity:(0,1,1)
2. Element sẽ có màu gì? Giải thích
Element sẽ có màu:RED
Vì:#main-price có specificity cao nhất.
3. Nếu thêm <p class="price" id="main-price" style="color: orange;">, element có màu gì?
Element có màu:ORANGE
Vì:inline style ưu tiên cao hơn CSS thường.
4. Nếu Rule A thêm !important, element có màu gì? Tại sao?
Element có màu:BLACK
Vì:!important ưu tiên cao hơn specificity thông thường.

PHẦN B — THỰC HÀNH CODE (55 điểm)
Bài B1 (20đ) — Style trang Profile
Các loại selector đã dùng:
1. Element selector:
body, table, footer
2. Class selector:
.active
3. Descendant selector:
nav a
4. Pseudo-class selector:
nav a:hover
tr:nth-child(even)
tr:hover
5. Universal selector:
*

Bài B2 (20đ) — Box Model Lab
PHẦN 1 — Content-box vs Border-box
Hộp 1 (content-box):
- width CSS = 300px
- padding = 20px x 2
- border = 5px x 2
→ Chiều rộng thực tế:
300 + 40 + 10 = 350px

Hộp 2 (border-box):
- width CSS = 300px
- padding + border đã nằm trong width
→ Chiều rộng thực tế:
300px

Giải thích:
- content-box:
width chỉ tính phần content → padding + border làm hộp lớn hơn
- border-box:
width bao gồm cả content + padding + border
→ dễ kiểm soát layout hơn

PHẦN 2 — Layout 3 cột

Trường hợp KHÔNG dùng border-box:
Sidebar:
250 + 30 = 280px
Content:
500 + 40 = 540px
Ads:
250 + 30 = 280px
→ Tổng:
280 + 540 + 280 = 1100px
→ Layout bị tràn container 1000px

Trường hợp dùng border-box:
Padding nằm trong width
→ Tổng:
250 + 500 + 250 = 1000px
→ Layout vừa khít container

Bài B3 (15đ) — Specificity Battle
Liệt kê 10 rules + specificity score
1. p
Specificity:
(0,0,1)

2. .text
Specificity:
(0,1,0)

3. .highlight
Specificity:
(0,1,0)

4. p.text
Specificity:
(0,1,1)

5. p.highlight
Specificity:
(0,1,1)

6. .text.highlight
Specificity:
(0,2,0)

7. #demo
Specificity:
(1,0,0)

8. p#demo
Specificity:
(1,0,1)

9. #demo.text
Specificity:
(1,1,0)

10. p#demo.text.highlight
Specificity:
(1,2,1)

Element cuối cùng hiển thị màu gì? Tại sao?
- Element cuối cùng hiển thị màu: GOLD
- Vì: Rule số 10 có specificity cao nhất:
(1,2,1) → Browser ưu tiên rule này.

Thay đổi thứ tự rules trong CSS file. Kết quả có đổi không? Giải thích.
Nếu thay đổi thứ tự rules:
- Nếu specificity KHÁC nhau:
→ Kết quả KHÔNG đổi
- Nếu specificity bằng nhau:
→ Rule viết SAU sẽ thắng
- Ví dụ:
.text và .highlight đều có specificity (0,1,0)
→ Rule nào viết sau sẽ được áp dụng.

PHẦN C — DEBUG & SUY LUẬN (20 điểm)
Câu C1 (10đ) — Debug CSS Layout
1. Tính chiều rộng thực tế

Sidebar:

width = 300px
padding = 20px x 2 = 40px
border = 1px x 2 = 2px

→ Chiều rộng thực tế:
300 + 40 + 2 = 342px

Content:

width = 660px
padding = 30px x 2 = 60px
border = 1px x 2 = 2px

→ Chiều rộng thực tế:
660 + 60 + 2 = 722px

Tổng:
342 + 722 = 1064px

Container chỉ có:
960px

→ Layout bị tràn nên content bị đẩy xuống dòng mới.

2. Cách sửa 1 — Dùng border-box

Thêm:

* {
    box-sizing: border-box;
}

→ Width sẽ bao gồm padding + border
→ Tổng width đúng 960px

3. Cách sửa 2 — Không dùng border-box

Giảm width thực tế:

.sidebar {
    width: 258px;
}

.content {
    width: 598px;
}

Vì:

258 + 40 + 2 = 300px
598 + 60 + 2 = 660px

→ Tổng:
300 + 660 = 960px

Câu C2 (10đ) — Cascade Puzzle
1. "Sản phẩm A" (h2)

Font-size:
20px

Vì:
.card .title {
    font-size: 20px;
}

Color:
GREEN

Vì:
.highlight {
    color: green !important;
}

!important ưu tiên cao hơn:
#featured .title {
    color: red;
}

2. "Mô tả sản phẩm" (p trong featured)

Color:
BLUE

Vì:

.card {
    color: blue;
}

.card p {
    color: inherit;
}

→ p kế thừa màu từ .card
→ màu blue

3. "Sản phẩm B" (h2)

Font-size:
20px

Vì:
.card .title {
    font-size: 20px;
}

Color:
BLUE

Không có:
- id
- !important

→ kế thừa từ:
.card {
    color: blue;
}

4. "Mô tả sản phẩm B" (p.highlight)

Color:
GREEN

Vì:
.highlight {
    color: green !important;
}

!important thắng inheritance và rule thường.