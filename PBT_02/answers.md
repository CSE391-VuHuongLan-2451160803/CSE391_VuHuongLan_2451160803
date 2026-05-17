Câu A1 (5đ) — Input Types
Liệt kê 10 input types khác nhau trong HTML5, cho mỗi type:

Giao diện hiển thị (mô tả bằng lời)
Validation tự động (nếu có)
Use case cụ thể trong trang E-Commerce

1. type="email" → Ô nhập text, kiểm tra có định dạng email (có @) → Dùng cho đăng ký / đăng nhập tài khoản
2. type="password" → Ô nhập bị ẩn ký tự (***), không hiển thị nội dung → Dùng cho nhập mật khẩu
3. type="text" → Ô nhập văn bản thông thường → Dùng cho tên khách hàng, địa chỉ
4. type="number" → Ô nhập số, có nút tăng/giảm → Dùng cho số lượng sản phẩm
5. type="tel" → Ô nhập số điện thoại, hỗ trợ bàn phím số trên mobile → Dùng cho nhập SĐT khi đặt hàng
6. type="url" → Ô nhập link, kiểm tra định dạng URL → Dùng cho nhập link (ví dụ shop, website)
7. type="date" → Hiển thị bộ chọn ngày (calendar) → Dùng cho chọn ngày sinh hoặc ngày giao hàng
8. type="radio" → Nút chọn 1 trong nhiều lựa chọn → Dùng chọn phương thức thanh toán (COD, chuyển khoản)
9. type="checkbox" → Ô tick chọn nhiều lựa chọn → Dùng chọn sản phẩm hoặc đồng ý điều khoản
10. type="file" → Nút chọn file từ máy → Dùng upload ảnh (ví dụ đánh giá sản phẩm)

Câu A2 (5đ) — Validation Attributes
Đọc chương 07. Không chạy code, hãy dự đoán điều gì xảy ra khi user bấm Submit cho mỗi trường hợp sau. 

Trường hợp 1:
<input type="text" required value="">
→ Kết quả: KHÔNG submit được
→ Lý do: thuộc tính required bắt buộc phải nhập, nhưng value đang rỗng → browser chặn và báo lỗi “Please fill out this field”

Trường hợp 2:
<input type="email" value="abc">
→ Kết quả: KHÔNG submit được
→ Lý do: type="email" yêu cầu đúng định dạng email (phải có @), "abc" không hợp lệ → browser báo lỗi định dạng

Trường hợp 3:
<input type="number" min="1" max="10" value="15">
→ Kết quả: KHÔNG submit được
→ Lý do: giá trị 15 > max=10 → vi phạm ràng buộc → browser báo lỗi “Value must be less than or equal to 10”

Trường hợp 4:
<input type="text" pattern="[0-9]{10}" value="abc123">
→ Kết quả: KHÔNG submit được
→ Lý do: pattern yêu cầu đúng 10 chữ số, nhưng "abc123" chứa chữ + không đủ 10 ký tự → không match regex

Trường hợp 5:
<input type="password" minlength="8" value="123">
→ Kết quả: KHÔNG submit được
→ Lý do: minlength=8 yêu cầu ít nhất 8 ký tự, nhưng chỉ có 3 ký tự → browser chặn submit

 So sánh với dự đoán: Kết quả thực tế giống với dự đoán và validation HTML5 hoạt động đúng như lý thuyết
- Các trường đều bị chặn submit khi không hợp lệ
- Browser hiển thị thông báo lỗi tương ứng

Câu A3 (5đ) — Accessibility
Đọc phần Accessibility trong chương 07. Giải thích:

1. Tại sao <label for="email"> quan trọng?
<label> giúp liên kết mô tả với ô input thông qua thuộc tính for và id. Đối với người dùng screen reader, khi focus vào input, trình đọc sẽ đọc luôn nội dung của label (ví dụ: “Email”). Nếu không có label, người dùng sẽ không biết ô đó dùng để nhập gì dẫn đến rất khó sử dụng form.

2. Khi nào dùng <fieldset> + <legend>?
Dùng khi có nhiều trường input liên quan với nhau và cần nhóm lại.
Ví dụ:
Thông tin giao hàng gồm:
- Họ tên
- Địa chỉ
- Số điện thoại
Dùng <fieldset> để nhóm các trường này
<legend> để đặt tiêu đề “Thông tin giao hàng”

3. aria-label dùng khi nào?
Dùng khi phần tử KHÔNG có text hiển thị rõ ràng, ví dụ:
- Button chỉ có icon
- Input không có label
Tại sao KHÔNG nên dùng aria-label khi đã có <label>?
Vì: <label> đã cung cấp thông tin đầy đủ và rõ ràng, aria-label có thể gây trùng lặp hoặc mâu thuẫn .Làm code khó bảo trì hơn

Câu A4 (5đ) — Media
1. loading="lazy" là gì? 
Thuộc tính loading="lazy" dùng để trì hoãn việc tải ảnh cho đến khi ảnh gần xuất hiện trong viewport (màn hình người dùng).

Cải thiện:
- Tăng tốc độ load trang ban đầu
- Giảm băng thông
- Tối ưu hiệu năng (đặc biệt trang có nhiều ảnh như e-commerce)

KHÔNG nên dùng khi:
- Ảnh ở đầu trang (above-the-fold)
- Ảnh quan trọng cần hiển thị ngay (banner, hero)

2. Tại sao dùng nhiều <source> trong <video>?
Vì mỗi trình duyệt hỗ trợ định dạng video khác nhau.
Cung cấp nhiều <source> giúp video chạy được trên nhiều trình duyệt.

3 format phổ biến:
- .mp4
- .webm
- .ogg

3. Thuộc tính alt trên <img> dùng để làm gì?
alt cung cấp mô tả cho ảnh:
- Giúp screen reader đọc nội dung cho người khiếm thị
- Hiển thị khi ảnh lỗi
- Hỗ trợ SEO

Viết alt tốt cho 3 trường hợp:
- Ảnh sản phẩm iPhone 16: alt="iPhone 16 Pro màu đen hiển thị mặt trước và mặt sau"
- Ảnh trang trí (decorative): alt=""
- Ảnh biểu đồ doanh thu Q1/2026: alt="Biểu đồ doanh thu quý 1 năm 2026 tăng dần từ tháng 1 đến tháng 3"

Câu A5 (5đ) — So sánh <figure> vs <img>
<!-- Cách 1 -->
<img src="product.jpg" alt="iPhone">
Dùng khi ảnh chỉ đơn thuần để hiển thị, không cần chú thích đi kèm.
Đặc điểm:
- Đơn giản
- Không có nội dung bổ sung
- Thường dùng trong layout

Ví dụ:
- Icon giỏ hàng trên trang Shopee
- Logo website ở header

<!-- Cách 2 -->
<figure>
    <img src="product.jpg" alt="iPhone 16 Pro Max 256GB Titan">
    <figcaption>iPhone 16 Pro Max — 25.990.000đ</figcaption>
</figure>
Dùng khi ảnh có ý nghĩa nội dung và cần chú thích (caption) để giải thích thêm.
Đặc điểm:
- Có ngữ nghĩa rõ ràng
- Ảnh + mô tả đi cùng nhau
- Tốt cho SEO và accessibility

Ví dụ:
- Ảnh sản phẩm iPhone kèm tên và giá
- Ảnh minh họa trong bài blog có chú thích bên dưới

Câu C1 (10đ) — Debug Form
Lỗi 1: Dòng 2 — Input "Tên" không có <label for>, vi phạm accessibility  
Sửa: <label for="name">Tên:</label> <input type="text" id="name" name="name" required>

Lỗi 2: Dòng 4 — Input email không có label  
Sửa: <label for="email">Email:</label> <input type="email" id="email" name="email" placeholder="Email của bạn" required>

Lỗi 3: Dòng 6 — Input password không có label  
Sửa: <label for="password">Mật khẩu:</label> <input type="password" id="password" name="password" required minlength="8">

Lỗi 4: Dòng 7 — Input confirm password không có label và không có name  
Sửa: <label for="confirm">Nhập lại mật khẩu:</label> <input type="password" id="confirm" name="confirm" required minlength="8">

Lỗi 5: Dòng 9 — Phone dùng type="text" thay vì type="tel"  
Sửa: <label for="phone">Phone:</label> <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="0901234567">

Lỗi 6: Dòng 9 — Dùng value thay vì placeholder → không đúng UX  
Sửa: bỏ value, dùng placeholder

Lỗi 7: Dòng 11 — <select> không có label  
Sửa: <label for="city">Thành phố:</label> <select id="city" name="city">...</select>

Lỗi 8: Dòng 15 — Checkbox không có input (label đứng một mình)  
Sửa: <input type="checkbox" id="agree" required> <label for="agree">Tôi đồng ý điều khoản</label>

Câu C2 (10đ) — Thiết kế chiến lược Validation
Bạn xây dựng form đăng ký cho ngân hàng số. Yêu cầu:

CMND/CCCD: đúng 12 chữ số
Số tài khoản: 10-15 chữ số
Email: bắt buộc, đúng format
PIN: đúng 6 chữ số, KHÔNG hiển thị

1. Regex pattern
- CMND/CCCD (12 chữ số): pattern="^[0-9]{12}$"
- Số tài khoản (10–15 chữ số): pattern="^[0-9]{10,15}$"

2. HTML5 validation có đủ an toàn cho ngân hàng không?
Chưa đủ an toàn do không thể đảm bảo tính bảo mật hoặc tính đúng đắn dữ liệu, vì:
- HTML5 validation chỉ chạy ở phía client (trình duyệt)
- Người dùng có thể dễ dàng bypass bằng cách:
  + Tắt JavaScript
  + Sửa HTML (DevTools)
  + Gửi request trực tiếp (Postman)

3. 3 loại validation HTML5 KHÔNG làm được
- So sánh giữa các field:
  Ví dụ: password và confirm password phải giống nhau
- Kiểm tra dữ liệu với database:
  Ví dụ: email đã tồn tại hay chưa
- Validation logic phức tạp:
  Ví dụ:
  + Kiểm tra CMND có hợp lệ theo thuật toán
  + Kiểm tra độ mạnh mật khẩu (nhiều điều kiện phức tạp)

4. 2 rủi ro nếu chỉ validate frontend
- Nhận dữ liệu giả mạo: Hacker có thể gửi request không qua form → bypass toàn bộ validation
- Tấn công bảo mật:
  Ví dụ:
  + SQL Injection
  + XSS
  nếu backend không kiểm tra lại dữ liệu