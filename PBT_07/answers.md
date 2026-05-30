PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)
Câu A1 (5đ) — var / let / const
// Đoạn 1
console.log(x);
var x = 5;
-> output: undefined

// Đoạn 2
console.log(y);
let y = 10;
-> output:  ReferenceError

// Đoạn 3
const z = 15;
z = 20;
console.log(z);
-> output:  TypeError

// Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
-> output:  [1,2,3,4]

// Đoạn 5
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
-> output:  Trong block: 2
            Ngoài block: 1

Câu A2 (5đ) — Data Types & Coercion
Không chạy code, dự đoán kết quả:

console.log(typeof null);              // object
console.log(typeof undefined);         // undefined
console.log(typeof NaN);              // number
console.log("5" + 3);                 // 53
console.log("5" - 3);                 // 2
console.log("5" * "3");              // 15
console.log(true + true);            // 2
console.log([] + []);                // ""
console.log([] + {});                // [object Object]
console.log({} + []);                // 0

Trong console thường được parse thành biểu thức khác

Câu A3 (5đ) — So sánh == vs ===
Dự đoán true hay false:

console.log(5 == "5");                // T
console.log(5 === "5");               // F
console.log(null == undefined);       // T
console.log(null === undefined);      // F
console.log(NaN == NaN);             // F
console.log(0 == false);             // T
console.log(0 === false);            // F
console.log("" == false);            // T

Nên dùng: "===" vì không ép kiểu ngầm.

Câu A4 (5đ) — Truthy & Falsy
Liệt kê TẤT CẢ giá trị Falsy trong JavaScript (đọc tài liệu):
false
0
-0
0n
""
''
``
null
undefined
NaN

Sau đó dự đoán kết quả:
if ("0") console.log("A");           // In A
if ("") console.log("B");            // Không in
if ([]) console.log("C");            // In C
if ({}) console.log("D");            // In D
if (null) console.log("E");          // Không in
if (0) console.log("F");             // Không in
if (-1) console.log("G");            // In G
if (" ") console.log("H");           // In H (space)

Câu A5 (5đ) — Template Literals
Cách 1
Trước
var greeting =
    "Xin chào " + name +
    "! Bạn " + age +
    " tuổi.";
Sau
let greeting =
`Xin chào ${name}! Bạn ${age} tuổi.`;
Cách 2
Trước
var url =
    "https://api.example.com/users/"
    + userId +
    "/orders?page=" +
    page;
Sau
let url =
    `https://api.example.com/users/${userId}/orders?page=${page}`;
Cách 3
Trước
var html =
    "<div class=\"card\">" +
    "<h2>" + title + "</h2>" +
    "<p>" + description + "</p>" +
    "<span>Giá: " + price + "đ</span>" +
    "</div>";
Sau
let html = `
    <div class="card">
        <h2>${title}</h2>
        <p>${description}</p>
        <span>Giá: ${price}đ</span>
    </div>
    `;

PHẦN C — SUY LUẬN (20 điểm)
Câu C1 (10đ) — Debug JavaScript
Tìm và sửa TẤT CẢ lỗi trong code sau (có ít nhất 6 lỗi):
Lỗi 1
if (giaSauGiam = 0)

Sai vì dùng toán tử gán.

Sửa:

if (giaSauGiam === 0)
Lỗi 2

Không kiểm tra kiểu dữ liệu.

tinhGiaGiamGia("100000",20)

Chuỗi có thể gây lỗi.

Sửa:

if (
typeof giaBan !== "number"
)
Lỗi 3

Không kiểm tra giá âm.

giaBan < 0
Lỗi 4

Thiếu dấu ;

Best practice:

return giaSauGiam;
Lỗi 5

var không nên dùng.

let giamGia =
giaBan * phanTramGiam / 100;
Lỗi 6 (Lỗi ẩn)
for (var i = 0; i < 5; i++)

Sau 1 giây:

Item 5
Item 5
Item 5
Item 5
Item 5

Vì var chỉ có function scope.

Sửa:

for(let i = 0; i < 5; i++)

Kết quả:

Item 0
Item 1
Item 2
Item 3
Item 4

