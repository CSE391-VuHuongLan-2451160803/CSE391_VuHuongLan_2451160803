PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)
Câu A1 (10đ) — 5 Loại Positioning
Đọc chương 12. Điền bảng sau mà KHÔNG tra Google:

Position	Vẫn chiếm chỗ trong flow?	Tham chiếu vị trí	          Cuộn theo trang?	 Use case
static	    Có                          Vị trí mặc định               Có                 Layout bình thường 
relative	Có                          Chính vị trí ban đầu của nó   Có                 Dịch nhẹ element, làm mốc cho absolute 
absolute	Không                       Parent gần nhất có position   Có                 Badge, popup, icon góc 
fixed	    Không                       Viewport (màn hình)           Không              Header cố định, nút scroll top
sticky	    Có                          Parent scroll/container       Một phần           Sidebar sticky, menu sticky
Câu hỏi thêm: Khi nào absolute tham chiếu body? Khi nào tham chiếu parent? Giải thích khái niệm "nearest positioned ancestor".
Khi nào absolute tham chiếu body?
→ Khi KHÔNG có parent nào có:
position: relative / absolute / fixed / sticky
→ Lúc đó nó lấy body (hoặc viewport) làm mốc.

Khi nào absolute tham chiếu parent?
→ Khi parent gần nhất có position khác static.
Ví dụ:
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 0;
    right: 0;
}
→ .child sẽ nằm theo .parent.

Nearest positioned ancestor là gì?
→ Là phần tử cha gần nhất có:
position khác static
(relative / absolute / fixed / sticky)
→ absolute sẽ lấy phần tử đó làm mốc định vị.

Câu A2 (10đ) — Flexbox vs Grid
/* Trường hợp 1 */
.container { display: flex; }
.item { flex: 1; }
/* 4 items → Bố cục = 4 items nằm trên 1 hàng
Mỗi item rộng bằng nhau

| Item 1 | Item 2 | Item 3 | Item 4 |
*/

/* Trường hợp 2 */
.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; }
/* 6 items → Bố cục = Mỗi item ≈ 50% chiều rộng

→ 2 cột mỗi hàng
→ 6 items = 3 hàng

| Item 1 | Item 2 |
| Item 3 | Item 4 |
| Item 5 | Item 6 | */

/* Trường hợp 3 */
.container { display: flex; justify-content: space-between; align-items: center; }
/* 3 items → Bố cục = 3 items nằm trên 1 hàng

- Item đầu sát trái
- Item cuối sát phải
- Item giữa ở giữa

Các item căn giữa theo chiều dọc

| Item1        Item2        Item3 | */

/* Trường hợp 4 */
.container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }
/* 3 items → Bố cục = Layout 3 cột:

| 200px | phần còn lại | 200px | */

/* Trường hợp 5 */
.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
/* 7 items → Bố cục = 3 cột đều nhau

7 items:

Hàng 1:
| 1 | 2 | 3 |

Hàng 2:
| 4 | 5 | 6 |

Hàng 3:
| 7 | */

PHẦN C — SUY LUẬN (20 điểm)
Câu C1 (10đ) — Flexbox vs Grid: Khi nào dùng gì?
1. Navigation bar ngang
→ Dùng: Flexbox

Vì:
- Layout 1 chiều (ngang)
- Dễ căn trái/phải/giữa
- justify-content và align-items rất phù hợp

2. Lưới ảnh Instagram
→ Dùng: Grid

Vì:
- Layout dạng lưới 2 chiều
- Cần nhiều hàng + nhiều cột đều nhau
- Grid quản lý cột tốt hơn Flexbox

3. Layout blog: content + sidebar
→ Dùng: Flexbox

Vì:
- Chỉ cần chia 2 cột ngang
- Sidebar cố định + content co giãn
- Flexbox đơn giản và dễ responsive

4. Footer 4 cột
→ Dùng: Grid

Vì:
- Nhiều cột đều nhau
- Grid giúp chia cột rõ ràng hơn
- Dễ responsive bằng repeat() và minmax()

5. Card sản phẩm
→ Dùng: Kết hợp Flexbox

Vì:
- Card bên ngoài có thể dùng Grid/Flex để tạo lưới
- Bên trong card dùng Flexbox column
- Dùng margin-top: auto để nút luôn dính đáy

Câu C2 (10đ) — Debug Flexbox
Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống

.card-container { display: flex; flex-wrap: wrap; }
.card { width: 30%; margin: 1.5%; }
.card img { width: 100%; }
.card h3 { font-size: 18px; }
.card .btn { padding: 10px; }

Nguyên nhân:
- Nội dung mỗi card khác nhau
- Card không dùng flex column
- Nút không được đẩy xuống đáy
Sửa:
.card-container {
    display: flex;
    flex-wrap: wrap;
}

.card {
    width: 30%;
    margin: 1.5%;

    display: flex;
    flex-direction: column;
}

.card img {
    width: 100%;
}

.card .btn {
    margin-top: auto;

    padding: 10px;
}
Giải thích:
- flex-direction: column:
xếp nội dung theo chiều dọc
- margin-top: auto:
đẩy button xuống cuối card
→ mọi nút thẳng hàng

Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc trong container 100vh, nhưng item vẫn dính góc trái trên

.hero {
    height: 100vh;
    display: flex;
}
.hero-content {
    text-align: center;
}

Nguyên nhân:Container chỉ có display:flex
nhưng chưa căn giữa ngang và dọc.
Sửa:
.hero {
    height: 100vh;

    display: flex;

    justify-content: center;
    align-items: center;
}

.hero-content {
    text-align: center;
}

Giải thích: 
justify-content: center → căn giữa ngang
align-items: center → căn giữa dọc

Lỗi 3: Sidebar bị co lại khi content quá dài

.layout { display: flex; }
.sidebar { width: 250px; }
.content { flex: 1; }

Nguyên nhân:
Flexbox mặc định cho phép item co lại
(flex-shrink: 1) → Sidebar bị ép nhỏ khi content quá dài

Sửa:
.layout {
    display: flex;
}

.sidebar {
    width: 250px;

    flex-shrink: 0;
}

.content {
    flex: 1;
}

Giải thích:
flex-shrink: 0
→ ngăn sidebar bị co nhỏ
→ luôn giữ width 250px