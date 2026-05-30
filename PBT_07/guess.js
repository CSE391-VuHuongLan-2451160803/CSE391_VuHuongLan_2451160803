const secret =
Math.floor(Math.random() * 100) + 1;

let count = 0;

const guessed = [];

while (count < 7) {

    let input = prompt(
        "Nhập số từ 1-100"
    );

    let num = Number(input);

    if (
        isNaN(num) ||
        num < 1 ||
        num > 100
    ) {
        alert("Số không hợp lệ");
        continue;
    }

    if (guessed.includes(num)) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    guessed.push(num);

    count++;

    if (num === secret) {
        alert(
            `Đúng rồi! Sau ${count} lần đoán`
        );
        break;
    }

    if (num < secret) {
        alert("Cao hơn");
    } else {
        alert("Thấp hơn");
    }
}

if (
    count === 7 &&
    !guessed.includes(secret)
) {
    alert(
        `Bạn thua. Đáp án là ${secret}`
    );
}