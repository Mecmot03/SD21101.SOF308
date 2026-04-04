/**
 * public-layout.js
 * Inject navbar + footer vào mọi trang public.
 * Thêm data-page="<tên-trang>" vào <body> để đánh dấu nav-link đang active.
 * Các giá trị data-page hợp lệ: index | articles | about | contact | profile
 */
(function () {
    'use strict';

    // ===== NAVBAR =====
    var nav = document.getElementById('publicNav');
    if (nav) {
        nav.innerHTML = `
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <i class="bi bi-journal-richtext me-2 text-danger"></i> <span class="font-lol">M1 Entertainment</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain"
                    aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarMain">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html" data-page="index">Trang chủ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="articles.html" data-page="articles">Bài viết</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html" data-page="about">Giới thiệu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html" data-page="contact">Liên hệ</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control form-control-sm me-2 bg-secondary border-0 text-white" type="search"
                            placeholder="Tìm kiếm..." aria-label="Search">
                        <button class="btn btn-outline-light btn-sm" type="submit">Tìm</button>
                    </form>
                    <div class="ms-3 d-flex gap-2">
                        <a href="../auth/login.html" class="btn btn-sm btn-outline-light">Đăng nhập</a>
                        <a href="../auth/register.html" class="btn btn-sm btn-primary">Đăng ký</a>
                    </div>
                </div>
            </div>
        `;

        // Đánh dấu nav-link active dựa theo data-page của <body>
        var currentPage = document.body.dataset.page;
        if (currentPage) {
            var activeLink = nav.querySelector('.nav-link[data-page="' + currentPage + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
                activeLink.setAttribute('aria-current', 'page');
            }
        }
    }

    // ===== FOOTER =====
    var footer = document.getElementById('publicFooter');
    if (footer) {
        footer.innerHTML = `
            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-4 col-md-6">
                        <h1 class="mb-2">M1Entertainment</h1>
                        <p class="small">Nền tảng quản lý blog cá nhân đơn giản, hiện đại. Chia sẻ ý tưởng và kết nối với cộng đồng.</p>
                        <div class="d-flex gap-3 mt-3">
                            <a href="#" title="Facebook"><i class="bi bi-facebook fs-5"></i></a>
                            <a href="#" title="Twitter/X"><i class="bi bi-twitter-x fs-5"></i></a>
                            <a href="#" title="GitHub"><i class="bi bi-github fs-5"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-6">
                        <h6 class="text-white fw-semibold mb-3">Liên kết</h6>
                        <ul class="list-unstyled small">
                            <li class="mb-2"><a href="index.html">Trang chủ</a></li>
                            <li class="mb-2"><a href="articles.html">Bài viết</a></li>
                            <li class="mb-2"><a href="about.html">Giới thiệu</a></li>
                            <li class="mb-2"><a href="contact.html">Liên hệ</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 col-6">
                        <h6 class="text-white fw-semibold mb-3">Danh mục</h6>
                        <ul class="list-unstyled small">
                            <li class="mb-2"><a href="articles.html?cat=cong-nghe">Công nghệ</a></li>
                            <li class="mb-2"><a href="articles.html?cat=lap-trinh">Lập trình</a></li>
                            <li class="mb-2"><a href="articles.html?cat=thiet-ke">Thiết kế</a></li>
                            <li class="mb-2"><a href="articles.html?cat=cuoc-song">Cuộc sống</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h6 class="text-white fw-semibold mb-3">Liên hệ</h6>
                        <ul class="list-unstyled small">
                            <li class="mb-2"><i class="bi bi-envelope me-1"></i>contact@m1entertainment.vn</li>
                            <li class="mb-2"><i class="bi bi-geo-alt me-1"></i>Hồ Chí Minh, Việt Nam</li>
                        </ul>
                        <h6 class="text-white fw-semibold mt-3 mb-2">Đăng ký nhận tin</h6>
                        <form class="d-flex gap-2">
                            <input type="email" class="form-control form-control-sm bg-secondary border-0 text-white" placeholder="Email của bạn">
                            <button class="btn btn-primary btn-sm px-3" type="submit">Gửi</button>
                        </form>
                    </div>
                </div>
                <hr class="footer-divider my-4">
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-center small">
                    <span>&copy; 2026 M1Entertainment. Tất cả quyền được bảo lưu.</span>
                    <div class="d-flex gap-3 mt-2 mt-md-0">
                        <a href="#">Chính sách bảo mật</a>
                        <a href="#">Điều khoản sử dụng</a>
                    </div>
                </div>
            </div>
        `;
    }

}());
