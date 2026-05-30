const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let gioi = 0;
let kha = 0;
let tb = 0;
let yeu = 0;

let maxStudent = null;
let minStudent = null;

let tongMath = 0;
let tongPhysics = 0;
let tongCS = 0;

console.log("| STT | Tên | TB | Xếp loại |");

students.forEach((s, index) => {

    let avg =
        s.math * 0.4 +
        s.physics * 0.3 +
        s.cs * 0.3;

    avg = avg.toFixed(1);

    let rank = "";

    if (avg >= 8) {
        rank = "Giỏi";
        gioi++;
    } else if (avg >= 6.5) {
        rank = "Khá";
        kha++;
    } else if (avg >= 5) {
        rank = "Trung bình";
        tb++;
    } else {
        rank = "Yếu";
        yeu++;
    }

    console.log(
        `${index + 1} | ${s.name} | ${avg} | ${rank}`
    );

    if (
        maxStudent === null ||
        avg > maxStudent.avg
    ) {
        maxStudent = {
            name: s.name,
            avg: Number(avg)
        };
    }

    if (
        minStudent === null ||
        avg < minStudent.avg
    ) {
        minStudent = {
            name: s.name,
            avg: Number(avg)
        };
    }

    tongMath += s.math;
    tongPhysics += s.physics;
    tongCS += s.cs;
});

console.log("\nXếp loại:");
console.log("Giỏi:", gioi);
console.log("Khá:", kha);
console.log("Trung bình:", tb);
console.log("Yếu:", yeu);

console.log("\nCao nhất:", maxStudent);
console.log("Thấp nhất:", minStudent);

console.log("\nTB môn:");
console.log(
    "Math:",
    (tongMath / students.length).toFixed(2)
);

console.log(
    "Physics:",
    (tongPhysics / students.length).toFixed(2)
);

console.log(
    "CS:",
    (tongCS / students.length).toFixed(2)
);