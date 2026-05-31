console.log("=== Doan 1 ===");

console.log(x);
var x = 5;

console.log("=== Doan 2 ===");

try {
    console.log(y);
    let y = 10;
} catch(err) {
    console.log(err.message);
}

console.log("=== Doan 3 ===");

try {
    const z = 15;
    z = 20;
} catch(err) {
    console.log(err.message);
}

console.log("=== Doan 4 ===");

const arr = [1,2,3];
arr.push(4);
console.log(arr);

console.log("=== Doan 5 ===");

let a = 1;

{
    let a = 2;
    console.log("Trong block:", a);
}

console.log("Ngoai block:", a);