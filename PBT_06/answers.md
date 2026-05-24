TRACK A — BOOTSTRAP 5
PHẦN A — ĐỌC HIỂU (20 điểm)
Câu A1 (10đ) — Grid System
Đọc tài liệu Grid System. Không chạy code, vẽ layout cho HTML sau ở 3 kích thước:

<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-3">Box 1</div>
        <div class="col-12 col-md-6 col-lg-3">Box 2</div>
        <div class="col-12 col-md-6 col-lg-3">Box 3</div>
        <div class="col-12 col-md-6 col-lg-3">Box 4</div>
    </div>
</div>

| Kích thước | < 768px | 768px - 991px | ≥ 992px |
|------------|---------|---------------|---------|
| Số cột | 12 | 6 | 3 |
| Box layout | 1 | 2 | 4 |

Mobile (<768px)
┌────────────┐
│   Box 1    │
├────────────┤
│   Box 2    │
├────────────┤
│   Box 3    │
├────────────┤
│   Box 4    │
└────────────┘

Tablet (768px - 991px)
┌──────────┬──────────┐
│  Box 1   │  Box 2   │
├──────────┼──────────┤
│  Box 3   │  Box 4   │
└──────────┴──────────┘

Desktop (≥992px)
┌──────┬──────┬──────┬──────┐
│Box 1 │Box 2 │Box 3 │Box 4 │
└──────┴──────┴──────┴──────┘

- col-md-6 nghĩa là gì?Từ breakpoint md (≥768px),element chiếm 6/12 cột = 50% width.
- Tại sao không cần viết col-sm-12?
Vì Bootstrap dùng: Mobile First
Nên: col-12 đã áp dụng cho mọi màn hình nhỏ hơn md rồi.

Câu A2 (10đ) — Utilities & Components
1. d-none d-md-block
<div class="d-none d-md-block">

Ý nghĩa:
d-none      → ẩn element
d-md-block  → từ md trở lên hiển thị block

Element này hiển thị khi kích thước >=768px, ẩn khi kích thước <768px.

2. 5 Spacing Utilities
mt-3
margin-top: 1rem
→ Tạo khoảng cách phía trên.

mb-4
margin-bottom: 1.5rem
→ Khoảng cách phía dưới.

px-4
padding-left + padding-right
→ Padding ngang.

py-2
padding-top + padding-bottom
→ Padding dọc.

mb-auto
margin-bottom: auto
→ Đẩy phần tử bằng flexbox.

3. container vs container-fluid vs container-md:
.container
Có max-width theo breakpoint.
Giữa màn hình.
→ Responsive chuẩn Bootstrap.

.container-fluid
Full width 100% mọi màn hình.
→ Tràn toàn bộ chiều ngang.

.container-md
Full width ở mobile.
Từ md trở lên có max-width.
→ Responsive từ breakpoint md.

PHẦN C — PHÂN TÍCH (20 điểm)
Câu C1 (10đ) — Tùy biến Bootstrap
Quy trình thực hiện
Bước 1 — Cài Node.js + Sass
npm install -g sass
Bước 2 — Tải source Bootstrap SCSS
Có thể:
Download Bootstrap source
Hoặc cài bằng npm:
npm install bootstrap
Bước 3 — Tạo file custom.scss
// Đổi biến trước khi import Bootstrap
$primary: #E63946;
@import "node_modules/bootstrap/scss/bootstrap";
Bước 4 — Compile SCSS → CSS
sass custom.scss custom.css
Sau đó link file: <link rel="stylesheet" href="custom.css">

Cần công cụ: Node.js để chạy npm, Sass để compile SCSS, Bootstrap source SCSS để sửa variables

2. Tại sao KHÔNG nên override trực tiếp?

❌ Ví dụ:

.btn-primary {
    background: red;
}
Vấn đề
- Chỉ đổi được 1 component

.btn-primary đổi màu nhưng:

alert-primary
bg-primary
text-primary
border-primary

vẫn dùng màu cũ.

-  Dễ conflict

Bootstrap có nhiều states:

.btn-primary:hover
.btn-primary:focus
.btn-primary:active

Override không hết sẽ bị lỗi màu.

- Khó maintain

Project lớn có hàng trăm component.

Đổi bằng variables thì toàn bộ hệ thống đồng bộ màu sắc.

Vì sao nên dùng SASS variables?
$primary: #E63946;

Bootstrap sẽ tự generate lại:

button
alert
badge
navbar
text colors
hover states
borders

→ Đồng bộ toàn hệ thống.

Câu C2 (10đ) — So sánh
1. Navbar + Product Card bằng CSS thuần

Muốn tạo:
responsive navbar
mobile menu
product card
responsive grid
hover effect

thì phải tự viết:
display: flex;
media queries;
hover;
spacing;
responsive;
card styles;

Có thể mất: 200-300 dòng CSS

2. Với Bootstrap

Chỉ cần:
<nav class="navbar navbar-expand-lg">
<div class="card">
<div class="row col-lg-3 col-md-6">

→ Bootstrap đã có sẵn responsive + spacing + components.

- Số dòng CSS cần viết: css thuần nhiều, bootstrap ít
- Thời gian phát triển: css thuần chậm hơn, boostrap nhanh
- Khả năng tùy biến: css thuần rất cao, bootstrap bị framework giới hạn
- Khi nào NÊN và KHÔNG NÊN dùng Bootstrap?
Khi nào NÊN dùng Bootstrap?
 Prototype nhanh
 Admin dashboard
 Landing page
 Deadline gấp
 Team nhỏ
 Không mạnh frontend

Khi nào KHÔNG nên dùng Bootstrap?
 Website cần UI quá riêng biệt
 Muốn performance tối ưu
 Design system custom lớn
 Web animation phức tạp
 Cần code cực sạch và nhẹ

 TRACK B — TAILWINDCSS
PHẦN A — ĐỌC HIỂU (20 điểm)
Câu A1 (10đ) — Utility Classes
- flex → display: flex
- items-center → align-items: center
- p-4 → padding: 1rem (16px)
- bg-white → background màu trắng
- shadow-md → đổ bóng mức vừa
- rounded-lg → bo góc lớn
- hover:shadow-xl → hover → shadow lớn hơn
- transition-shadow → animation cho shadow
- duration-300 → transition 300ms

- w-16 → width: 64px
- h-16 → height: 64px
- rounded-full → bo tròn 100%
- object-cover → ảnh fill khung không méo

- ml-4 → margin-left: 1rem
- flex-1 → flex-grow: 1

- text-lg → font-size lớn
- font-semibold → font-weight: 600
- text-gray-800 → text màu xám đậm
- truncate → text quá dài → ...

- text-sm → font nhỏ
- text-gray-500 → text xám vừa

- px-4 → padding trái/phải 1rem
- py-2 → padding trên/dưới 0.5rem
- bg-blue-500 → nền xanh
- text-white → chữ trắng
- rounded-md → bo góc vừa
- hover:bg-blue-600 → hover → xanh đậm hơn
- focus:ring-2 → focus hiện ring 2px
- focus:ring-blue-300 → ring màu xanh nhạt

Câu A2 (10đ) — Responsive & States
1. Responsive Prefix
md:, lg:, xl:
Prefix	Breakpoint
md:	≥768px
lg:	≥1024px
xl:	≥1280px
Ví dụ
md:grid-cols-2 lg:grid-cols-4
Ý nghĩa:
Mobile mặc định = 1 cột
>=768px = 2 cột
>=1024px = 4 cột

2. State Modifiers
Modifier	Ý nghĩa
hover:	khi rê chuột
focus:	khi input/button được focus
active:	khi đang click
group-hover:	hover parent ảnh hưởng child
Ví dụ hover
<button class="hover:bg-red-500">→ Hover đổi màu nền đỏ.
Ví dụ group-hover
<div class="group">
    <p class="group-hover:text-red-500">
→ Hover div → text đổi đỏ.

3. Class Tailwind tương đương d-none d-md-flex
<div class="hidden md:flex">
Ý nghĩa:
Mobile: hidden
>=768px: display flex

PHẦN C — PHÂN TÍCH (20 điểm)
Câu C1 (10đ) — Tailwind vs CSS thuần
1. HTML file size
CSS thuần	Tailwind
HTML ngắn hơn	HTML dài hơn do nhiều classes

Ví dụ:
<div class="card">
vs
<div class="bg-white rounded-xl shadow-md p-4 hover:shadow-xl">

→ Tailwind HTML dài hơn rõ rệt.

2. Maintainability
- CSS thuần
HTML sạch hơn
Nhưng phải nhảy qua file CSS để sửa
- Tailwind
Nhìn class là biết style
Sửa trực tiếp trong HTML
Không cần đổi qua nhiều file

3. Reusability
CSS thuần
.card {
   ...
}
→ tái sử dụng dễ.

Tailwind
Có thể dùng:
@apply

Ví dụ:
.card {
   @apply bg-white rounded-xl shadow-md p-4;
}
→ tạo reusable components.

Câu C2 (10đ) — Performance
1. Tại sao Tailwind CSS cuối cùng nhỏ hơn Bootstrap?
Bootstrap chứa:
hàng ngàn component
utilities
classes không dùng
Ví dụ:
carousel
modal
toast
accordion
dù project không dùng vẫn tồn tại.

Tailwind dùng:
Just-In-Time (JIT)
→ chỉ generate class thực sự xuất hiện trong HTML.

2. Tailwind PurgeCSS / JIT

Tailwind scan project:
HTML
JS
React/Vue files

Sau đó:
Đúng: giữ class đang dùng
Sai: xóa class không dùng

Ví dụ:
Nếu chỉ dùng:
bg-blue-500
flex
p-4
thì CSS build cuối chỉ chứa đúng các class đó

3. Khi nào KHÔNG nên dùng Tailwind?
Trường hợp 1 — Team không quen utility-first
HTML sẽ rất dài:
class="flex items-center justify-between ..."
→ khó đọc với người mới.

Trường hợp 2 — Project cần semantic HTML cực sạch
Ví dụ:
CMS lớn
HTML email
hệ thống enterprise strict
Tailwind làm HTML nhiều class → khó maintain nếu coding standard quá nghiêm ngặt.