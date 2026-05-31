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

Bài 1.2 GoodCounter
Tạo file

src/components/GoodCounter.jsx

import { useState } from "react";

function GoodCounter() {
    console.log("✅ GoodCounter render");

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div style={{
            padding: "20px",
            border: "2px solid green",
            marginTop: "20px"
        }}>
            <h2>✅ Counter tốt</h2>

            <p>Bộ đếm: {count}</p>

            <button onClick={handleClick}>
                Tăng (+1)
            </button>

            <p style={{ color: "green" }}>
                UI cập nhật nhờ useState
            </p>
        </div>
    );
}

export default GoodCounter;
App.jsx
import GoodCounter from "./components/GoodCounter";

function App() {
    return (
        <GoodCounter />
    );
}

export default App;
Test

Click:

0
1
2
3
4
Console:

✅ GoodCounter render
✅ GoodCounter render
✅ GoodCounter render
...

Mỗi lần setCount() → React render lại.

Bài 1.3 FlowDemo
import { useState } from "react";

function FlowDemo() {
    console.log("🔄 Component render!");

    const [step, setStep] = useState(1);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Luồng hoạt động React</h2>

            <p>Bước hiện tại: {step}</p>

            <button
                onClick={() => setStep(step + 1)}
            >
                Bước tiếp theo
            </button>

            <button
                style={{ marginLeft: "10px" }}
                onClick={() => setStep(1)}
            >
                Reset
            </button>

            <div
                style={{
                    marginTop: "20px",
                    padding: "10px",
                    background: "#f0f0f0"
                }}
            >
                {step === 1 && <p>👋 Bước 1: Xin chào!</p>}
                {step === 2 && <p>📖 Bước 2: Học React</p>}
                {step === 3 && <p>🎯 Bước 3: useState</p>}
                {step === 4 && <p>🎉 Bước 4: Hoàn thành</p>}
            </div>
        </div>
    );
}

export default FlowDemo;
App.jsx
import FlowDemo from "./components/FlowDemo";

function App() {
    return (
        <FlowDemo />
    );
}

export default App;
Test

Mỗi lần click:

🔄 Component render!

xuất hiện thêm trong Console.

Luồng:

User click
↓
setStep()
↓
React re-render
↓
JSX mới
↓
UI cập nhật
