1. Ở Phần A, mỗi lần thêm/xóa/toggle 1 todo, bạn phải gọi bao nhiêu hàm?

Mỗi thao tác cần gọi:
- addTodo()
- toggleTodo()
- deleteTodo()
- renderTodos()

Sau khi thay đổi dữ liệu phải tự gọi renderTodos() để cập nhật giao diện.

2. Ở Phần B, khi setTodos(...) chạy, React tự động làm gì giúp bạn?

React tự động:
- cập nhật state
- render lại component
- cập nhật giao diện (DOM)

Lập trình viên không cần tự gọi render hay thao tác DOM bằng tay.
