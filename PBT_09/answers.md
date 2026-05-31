PHẦN A — KIỂM TRA ĐỌC HIỂU (15 điểm)
Câu A1 (5đ) — DOM Tree
DOM Tree
div#app
│
├── header
│   │
│   ├── h1
│   │   └── "Todo App"
│   │
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    │
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        │
        └── li.todo-item.completed
            └── "Learn CSS"
Query Selectors
Chọn h1
document.querySelector("h1");
Chọn input trong form
document.querySelector("#todoForm input");
Chọn tất cả .todo-item
document.querySelectorAll(".todo-item");
Chọn link active
document.querySelector("nav a.active");
Chọn li đầu tiên trong todoList
document.querySelector("#todoList li:first-child");
Chọn tất cả a trong nav
document.querySelectorAll("nav a");

Câu A2 (5đ) — innerHTML vs textContent
textContent

Gán hoặc lấy văn bản thuần.

element.textContent = "<h1>Hello</h1>";

Hiển thị:

<h1>Hello</h1>

như một chuỗi text.

innerHTML

Phân tích chuỗi thành HTML.

element.innerHTML = "<h1>Hello</h1>";

Kết quả:

<h1>Hello</h1>

sẽ trở thành thẻ HTML thực sự.

Khi nào dùng
textContent
Hiển thị dữ liệu người dùng nhập
Tránh XSS
Nhanh hơn

Ví dụ:

result.textContent = username;
innerHTML
Render HTML động
Tạo template

Ví dụ:

container.innerHTML =
`
<div class="card">
    <h3>iPhone</h3>
</div>
`;
XSS là gì?

Nếu user nhập:

<img src=x onerror="alert('Hacked!')">

và code:

result.innerHTML = userInput;

trình duyệt sẽ chạy:

alert("Hacked!");

=> lỗ hổng XSS.

Cách sửa
result.textContent = userInput;

hoặc

const div = document.createElement("div");
div.textContent = userInput;
result.appendChild(div);

Câu A3 (5đ) — Event Bubbling

Code:

outer.addEventListener(...)
inner.addEventListener(...)
btn.addEventListener(...)

HTML:

outer
 └── inner
      └── button
Click button

Sự kiện nổi bọt từ trong ra ngoài.

Output:

BUTTON
INNER
OUTER
Nếu dùng stopPropagation()
e.stopPropagation();

Output:

BUTTON
Giải thích

Event Bubbling:

button
  ↑
inner
  ↑
outer

Sự kiện đi từ phần tử được click lên các phần tử cha.

stopPropagation() chặn quá trình này.

PHẦN C — DEBUG & PHÂN TÍCH (15 điểm)
Câu C1 (8đ) — Debug DOM Code
Tìm và sửa tất cả lỗi (ít nhất 7 lỗi):
Lỗi 1: Sai event name

Code gốc:

document.querySelector("#decrementBtn").addEventListener("onclick", function() {

Sai vì:

onclick

không phải tên event trong addEventListener.

Sửa:

document.querySelector("#decrementBtn").addEventListener("click", function() {
Lỗi 2: Reset countDisplay sai

Code gốc:

countDisplay = count;

Sai vì:

countDisplay là DOM element
đang gán element thành số

Sửa:

countDisplay.textContent = count;

hoặc

countDisplay.innerHTML = count;
Lỗi 3: innerHTML = null

Code gốc:

historyList.innerHTML = null;

Không nên dùng.

Sửa:

historyList.innerHTML = "";
Lỗi 4: remove() thiếu dấu ()

Code gốc:

item.remove;

Sai vì chỉ tham chiếu hàm.

Sửa:

item.remove();
Lỗi 5: localStorage trả về string

Code gốc:

count = localStorage.getItem("count");

Sau khi load:

count++;

sẽ gây lỗi logic.

Ví dụ:

"5" + 1

→ "51"

Sửa:

count = Number(localStorage.getItem("count")) || 0;
Lỗi 6: Không load lại history

Code gốc:

localStorage.setItem("history", historyList.innerHTML);

Nhưng khi load:

count = localStorage.getItem("count");
countDisplay.textContent = count;

Không restore history.

Sửa:

historyList.innerHTML =
localStorage.getItem("history") || "";
Lỗi 7: Event của history bị mất sau refresh

Sau khi:

historyList.innerHTML = savedHistory;

các event click cũ mất hết.

Giải pháp tốt:

Dùng Event Delegation:

historyList.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        deleteHistory(e.target);
    }
});
Lỗi 8: Không nên dùng innerHTML cho count

Code:

countDisplay.innerHTML = count;

Dùng được nhưng không cần.

Tốt hơn:

countDisplay.textContent = count;
Lỗi 9: append() hỗ trợ nhiều kiểu dữ liệu

Không sai nhưng chuẩn hơn:

historyList.appendChild(li);

Câu C2 (7đ) — Performance
Tại sao bind 1000 event là BAD PRACTICE?

Ví dụ:

for(let i=0;i<1000;i++){

    div.addEventListener("click",handler);

}

Sẽ tạo:

1000 event listeners
tốn RAM
tốn CPU
DOM lớn sẽ chậm
Event Delegation

Thay vì:

1000 listeners

Ta dùng:

1 listener

ở thằng cha.

Ví dụ:

list.addEventListener("click",(e)=>{

    if(e.target.classList.contains("item")){

        console.log(e.target.textContent);

    }

});

Lợi ích:

ít memory
nhanh hơn
item tạo động vẫn hoạt động
Code gây 1000 lần reflow
for (let i = 0; i < 1000; i++) {

    const div = document.createElement("div");

    div.textContent = `Item ${i}`;

    document.body.appendChild(div);

}

Mỗi lần:

appendChild

→ Browser phải tính toán layout lại.

≈ 1000 reflow.

Dùng DocumentFragment
const fragment = document.createDocumentFragment();

for(let i=0;i<1000;i++){

    const div =
        document.createElement("div");

    div.textContent = `Item ${i}`;

    fragment.appendChild(div);

}

document.body.appendChild(fragment);
Tại sao nhanh hơn?
Cách cũ
append
↓
reflow

append
↓
reflow

append
↓
reflow

...
1000 lần
Cách mới
append vào Fragment
↓
không render

append vào Fragment
↓
không render

...

append Fragment vào DOM
↓
1 lần reflow