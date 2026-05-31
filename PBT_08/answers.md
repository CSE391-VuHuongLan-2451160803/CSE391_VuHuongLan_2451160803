PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)
Câu A1 (5đ) — Function Declaration vs Expression vs Arrow
Function Declaration
function tinhThueBaoHiem(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
}
Function Expression
const tinhThueBaoHiem2 = function (luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};
Arrow Function
const tinhThueBaoHiem3 = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};

Hoisting khác nhau thế nào?
Function Declaration

Được hoisting toàn bộ.

hello();

function hello() {
    console.log("Xin chào");
}

 Chạy bình thường.

Function Expression
hello();

const hello = function () {
    console.log("Xin chào");
};

 ReferenceError

Vì biến hello được khai báo bằng const.

Arrow Function
hello();

const hello = () => {
    console.log("Xin chào");
};

 ReferenceError

Arrow function cũng là biến const.

Câu A2 (5đ) — Scope & Closure
// Đoạn 1:
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const c = counter();
console.log(c.increment());  // 1
console.log(c.increment());  // 2
console.log(c.increment());  // 3
console.log(c.decrement());  // 2
console.log(c.getCount());   // 2

// Đoạn 2:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
// Output sau 200ms: 
var: 3
var: 3
var: 3

let: 0
let: 1
let: 2

var là function scope nên mọi callback dùng chung một biến.
let là block scope nên mỗi lần lặp có một bản sao riêng.

Câu A3 (5đ) — Array Methods
const nums = [1,2,3,4,5,6,7,8,9,10];
1. nums.filter(n => n % 2 === 0);
2. nums.map(n => n * 3);
3. nums.reduce((sum, n) => sum + n, 0);
4. nums.find(n => n > 7);
5. nums.some(n => n > 10);
6. nums.every(n => n > 0);
7. nums.map(
    n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`
);
8. [...nums].reverse();