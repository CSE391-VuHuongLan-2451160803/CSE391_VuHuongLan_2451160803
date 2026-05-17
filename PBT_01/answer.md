PHẦN A — KIỂM TRA ĐỌC HIỂU
Câu A1 — HTTP & Browser
Tham chiếu: Chương 01_introduction_html_universe.md 

Các bước khi truy cập https://shopee.vn
1. DNS lookup → Phân giải tên miền shopee.vn thành địa chỉ IP
2. TCP handshake → Thiết lập kết nối giữa client và server
3. TLS handshake (HTTPS) → Thiết lập kết nối bảo mật
4. HTTP Request → Trình duyệt gửi GET request đến server
5. HTTP Response → Server trả về HTML (status code 200)
6. Render → Trình duyệt parse HTML, tải CSS/JS/images và hiển thị trang

Tab Network trong Google Chrome hiển thị:
- Danh sách request (HTML, CSS, JS, images)
- Status code
- Thời gian load
- Tổng thời gian tải trang
- Kích thước dữ liệu
![network](screenshots/![alt text](image.png))

Câu A2 — Semantic HTML
Tham chiếu: Chương 04_visible_part_html.md
Các lỗi semantic
1. Dùng div thay cho header, main, footer
2. Menu không dùng thẻ nav
3. Sản phẩm không dùng article
4. Không sử dụng thẻ heading (h1, h2)
5. Ảnh không có thuộc tính alt
Code sửa
<header>
    <h1>ShopTLU</h1>
    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>

<main>
    <section>
        <article>
            <h2>iPhone 16 Pro</h2>
            <p>25.990.000đ</p>
            <figure>
                <img src="iphone.jpg" alt="iPhone 16 Pro">
            </figure>
        </article>
    </section>
</main>

<footer>
    <p>© 2026 ShopTLU</p>
</footer>

Câu A3 — Block vs Inline
Tham chiếu: Chương HTML Basics
Kết quả hiển thị
Hộp 1
Text A Text B
Hộp 2
Text C Text D
Hộp 3
Giải thích
- div là phần tử block → chiếm toàn bộ dòng → xuống dòng
- span và strong là inline → hiển thị trên cùng một dòng

Câu A4 — Table
Tham chiếu: Chương 05_tables_hyperlinks.md
Phân biệt
<thead>  → chứa tiêu đề bảng
<tbody>  → chứa dữ liệu chính
<tfoot>  → chứa tổng kết
Không nên dùng table để layout
1. Không responsive (khó hiển thị trên mobile)
2. Code phức tạp, khó bảo trì
3. Không mang ý nghĩa semantic → SEO kém

PHẦN B — THỰC HÀNH CODE
Bài B3 — Debug HTML: Danh sách lỗi
Lỗi 1: Dòng <!DOCTYPE> - thiếu html - Sửa: <!DOCTYPE html>
Lỗi 2: Dòng <title>Trang web - không đóng - Sửa: <title>Trang web</title>
Lỗi 3: Dòng <meta charset="utf8"> - charset sai - Sửa: <meta charset="UTF-8">
Lỗi 4: Dòng <h1>Welcome to ShopTLU<h1> - không đóng đúng - Sửa: <h1>Welcome to ShopTLU</h1>
Lỗi 5: Dòng <a href="home">Trang chủ<a> - không đóng - Sửa: <a href="home">Trang chủ</a>
Lỗi 6: Dòng  <img src=iphone.jpg> - img thiếu dấu ngoặc - Sửa: <img src="iphone.jpg">
Lỗi 7:Dòng <p>Giá: <b>25.990.000đ</p></b> - sai thứ tự đóng thẻ b - Sửa: <p>Giá: <b>25.990.000đ</b></p>
Lỗi 8: table thiếu thead/tbody - Sửa: thêm thead/tbody đúng 
Lỗi 9: có 2 thẻ main - Sửa: đổi thẻ thứ 2 thành aside
Lỗi 10: Dòng <p>Copyright 2026 - thiếu đóng p - Sửa: <p>Copyright 2026</p>

Bài B4 — Phân tích trang web thật - shopee.vn
1. 3 thẻ semantic HTML5 mà trang đó sử dụng (ghi rõ thẻ gì, ở đâu):
    - <html> - Thẻ gốc của toàn bộ trang (có thuộc tính lang="vi") 
    - <head> - Chứa metadata của trang
    - <body> - Chứa toàn bộ nội dung hiển thị
2. Mở tab Elements, tìm 1 <table> trên trang. Chụp screenshot và trả lời:
     - Trong trang đăng nhập hiện tại: Không tìm thấy thẻ <table> 
    - Kết luận: Trang này không sử dụng table. Vì đây là trang form đăng nhập, không cần dữ liệu dạng bảng
3. Tìm 1 <form> trên trang (ví dụ ô tìm kiếm). Chụp screenshot:
    - Form: khu vực đăng nhập (Email/SĐT + Mật khẩu) 
    - Không thấy thẻ <form> rõ ràng trong DOM 
    - Input types: + text (Email/SĐT) + password (Mật khẩu) 
    - Nút: + button (Đăng nhập) 
    - action: → Không thấy trực tiếp - method: → Không xác định rõ 

PHẦN C — SUY LUẬN
Câu C1 — Thiết kế cấu trúc
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Chi tiết sản phẩm</title>
</head>

<body>

<header>
    <!-- header: chứa logo + menu chính -->
    <nav>
        <!-- nav: khu vực điều hướng -->
        <a href="#">Trang chủ</a>
        <a href="#">Danh mục</a>
        <a href="#">Liên hệ</a>
    </nav>
</header>

<nav aria-label="breadcrumb">
    <!-- nav: breadcrumb là điều hướng -->
    <ol>
        <!-- ol: có thứ tự cấp bậc -->
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#">Điện thoại</a></li>
        <li>iPhone 16</li>
    </ol>
</nav>

<main>
    <!-- main: nội dung chính của trang -->

    <section>
        <!-- section: nhóm nội dung sản phẩm -->

        <article>
            <!-- article: 1 sản phẩm độc lập -->

            <figure>
                <!-- figure: chứa hình ảnh sản phẩm -->
                <img src="#" alt="Ảnh sản phẩm">
                <figcaption>Ảnh chính</figcaption>
            </figure>

            <figure>
                <img src="#" alt="Ảnh phụ 1">
                <figcaption>Ảnh phụ</figcaption>
            </figure>

            <figure>
                <img src="#" alt="Ảnh phụ 2">
                <figcaption>Ảnh phụ</figcaption>
            </figure>

            <figure>
                <img src="#" alt="Ảnh phụ 3">
                <figcaption>Ảnh phụ</figcaption>
            </figure>

            <figure>
                <img src="#" alt="Ảnh phụ 4">
                <figcaption>Ảnh phụ</figcaption>
            </figure>

            <h1>Tên sản phẩm</h1>
            <!-- h1: tiêu đề chính -->

            <p><strong>Giá:</strong> ...</p>
            <!-- strong: nhấn mạnh giá -->

            <p>⭐⭐⭐⭐☆</p>
            <!-- hiển thị đánh giá -->

            <p>Mô tả sản phẩm...</p>
            <!-- mô tả -->

        </article>

    </section>

    <section>
        <!-- section: bảng thông số -->

        <h2>Thông số kỹ thuật</h2>

        <table>
            <!-- table: dữ liệu dạng bảng -->
            <thead>
                <tr>
                    <th>Thông số</th>
                    <th>Giá trị</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Màn hình</td>
                    <td>...</td>
                </tr>
            </tbody>
        </table>

    </section>

    <section>
        <!-- section: đánh giá -->

        <h2>Đánh giá</h2>

        <article>
            <!-- article: mỗi bình luận độc lập -->
            <p>Người dùng A</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p>Bình luận...</p>
        </article>

    </section>

</main>

<aside>
    <!-- aside: nội dung phụ (sản phẩm tương tự) -->

    <h3>Sản phẩm tương tự</h3>

    <article>
        <p>Sản phẩm 1</p>
    </article>

    <article>
        <p>Sản phẩm 2</p>
    </article>

</aside>

<footer>
    <!-- footer: thông tin cuối trang -->
    <p>© 2026 Shop</p>
</footer>

</body>
</html>

Câu C2 — So sánh & Tranh luận
Mình không đồng ý với việc dùng div cho mọi thứ. Đúng là dùng div thì nhanh, nhưng về lâu dài sẽ gây bất lợi. Thứ nhất là về SEO. Các công cụ tìm kiếm như Google cần dựa vào cấu trúc HTML để hiểu nội dung trang. Nếu toàn div thì nó khó phân biệt đâu là nội dung chính, đâu là menu hay footer. Còn nếu dùng các thẻ như header, main, article thì việc phân tích sẽ rõ ràng hơn, giúp trang dễ được xếp hạng tốt hơn. Thứ hai là về accessibility. Những người dùng screen reader sẽ dựa vào các thẻ semantic để điều hướng. Nếu có nav hay main thì họ có thể truy cập nhanh đến phần cần thiết, còn nếu chỉ có div thì trải nghiệm sẽ kém hơn. Ví dụ, khi làm trang sản phẩm, nếu mỗi sản phẩm được đặt trong thẻ article thì vừa dễ hiểu cấu trúc, vừa hỗ trợ SEO tốt hơn. Tuy nhiên, div vẫn cần thiết trong nhiều trường hợp, nhất là để chia layout khi dùng CSS như flexbox hoặc grid. Tóm lại, không nên lạm dụng div. Dùng semantic HTML đúng chỗ sẽ giúp code rõ ràng và chuyên nghiệp hơn.