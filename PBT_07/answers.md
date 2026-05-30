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
