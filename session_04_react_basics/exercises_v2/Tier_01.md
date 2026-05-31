Bài 1.1 LifecycleDemo
Tạo file

src/components/LifecycleDemo.jsx

function LifecycleDemo() {
    console.log("1️⃣ Component được gọi!");

    return (
        <div style={{
            padding: "20px",
            border: "2px solid #3498db",
            borderRadius: "8px"
        }}>
            <h2>Lifecycle Demo</h2>
            <p>Mở Console (F12) để xem log</p>
            <p>Component này chỉ render một lần khi mount</p>
        </div>
    );
}

export default LifecycleDemo;
Sửa App.jsx
import LifecycleDemo from "./components/LifecycleDemo";

function App() {
    return (
        <div>
            <LifecycleDemo />
        </div>
    );
}

export default App;
Chạy
npm run dev

Mở F12 → Console

Refresh trang:

1️⃣ Component được gọi!

Bài 1.2 BadCounter
Tạo file

src/components/BadCounter.jsx

function BadCounter() {
    console.log("❌ BadCounter render");

    let count = 0;

    function handleClick() {
        count = count + 1;

        console.log("Count:", count);
    }

    return (
        <div style={{
            padding: "20px",
            border: "2px solid red",
            marginTop: "20px"
        }}>
            <h2>❌ Counter tệ</h2>

            <p>Bộ đếm: {count}</p>

            <button onClick={handleClick}>
                Tăng (+1)
            </button>

            <p style={{ color: "red" }}>
                Console tăng nhưng UI không đổi
            </p>
        </div>
    );
}

export default BadCounter;
App.jsx
import BadCounter from "./components/BadCounter";

function App() {
    return (
        <BadCounter />
    );
}

export default App;
Test

Click liên tục:

Count: 1
Count: 2
Count: 3

UI vẫn:

Bộ đếm: 0