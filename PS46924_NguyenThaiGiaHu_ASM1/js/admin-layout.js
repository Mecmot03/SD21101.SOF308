/**
 * admin-layout.js
 * Inject topbar + sidebar vào mọi trang admin.
 * Thêm data-page="<tên-trang>" vào <body> để đánh dấu nav-link đang active.
 */
(function () {
    'use strict';

    // ===== TOPBAR =====
    var topbar = document.getElementById('adminTopbar');
    if (topbar) {
        topbar.innerHTML = `
            <div class="d-flex align-items-center gap-3 flex-grow-1">
                <button class="btn btn-sm btn-outline-secondary d-lg-none" id="sidebarToggle">
                    <i class="bi bi-list fs-5"></i>
                </button>
                <a class="fw-bold text-dark text-decoration-none fs-5" href="dashboard.html">
                    <i class="bi bi-journal-richtext text-primary me-2"></i>Admin Panel
                </a>
            </div>
            <div class="d-flex align-items-center gap-3">
                <button class="btn btn-sm btn-outline-secondary position-relative">
                    <i class="bi bi-bell fs-6"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size:.6rem;">5</span>
                </button>
                <a href="../public/index.html" class="btn btn-sm btn-outline-primary" target="_blank">
                    <i class="bi bi-box-arrow-up-right me-1"></i>Xem trang
                </a>
                <div class="dropdown">
                    <button class="btn btn-sm d-flex align-items-center gap-2 border-0 p-0" data-bs-toggle="dropdown" aria-expanded="false">
                        <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white avatar-sm">
                            <i class="bi bi-person-fill"></i>
                        </div>
                        <span class="d-none d-md-inline small fw-semibold">Admin</span>
                        <i class="bi bi-chevron-down small text-muted"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end shadow">
                        <li><h6 class="dropdown-header">Nguyễn Thái Giả Hủ</h6></li>
                        <li><a class="dropdown-item" href="../public/profile.html"><i class="bi bi-person me-2"></i>Hồ sơ</a></li>
                        <li><a class="dropdown-item" href="#"><i class="bi bi-gear me-2"></i>Cài đặt</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item text-danger" href="../auth/login.html"><i class="bi bi-box-arrow-right me-2"></i>Đăng xuất</a></li>
                    </ul>
                </div>
            </div>
        `;
    }

    // ===== SIDEBAR =====
    var sidebar = document.getElementById('adminSidebar');
    if (sidebar) {
        sidebar.innerHTML = `
            <div class="sidebar-brand">
                <i class="bi bi-speedometer2 me-2 text-primary"></i>M1 Admin
            </div>
            <div class="py-2 flex-grow-1">
                <div class="nav-section-label">Tổng quan</div>
                <a href="dashboard.html" class="nav-link" data-page="dashboard">
                    <i class="bi bi-grid-1x2-fill"></i>Dashboard
                </a>
                <div class="nav-section-label">Nội dung</div>
                <a href="manage-articles.html" class="nav-link" data-page="manage-articles">
                    <i class="bi bi-file-earmark-text"></i>Quản lý bài viết
                </a>
                <a href="add-article.html" class="nav-link" data-page="add-article">
                    <i class="bi bi-plus-circle"></i>Thêm bài viết
                </a>
                <a href="manage-categories.html" class="nav-link" data-page="manage-categories">
                    <i class="bi bi-tags"></i>Danh mục
                </a>
                <a href="manage-comments.html" class="nav-link" data-page="manage-comments">
                    <i class="bi bi-chat-dots"></i>Bình luận
                    <span class="badge bg-warning text-dark ms-auto">12</span>
                </a>
                <div class="nav-section-label">Người dùng</div>
                <a href="manage-users.html" class="nav-link" data-page="manage-users">
                    <i class="bi bi-people"></i>Người dùng
                </a>
            </div>
            <div class="p-3 sidebar-footer">
                <div class="d-flex align-items-center gap-2">
                    <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white flex-shrink-0 avatar-md">
                        <i class="bi bi-person-fill"></i>
                    </div>
                    <div class="overflow-hidden">
                        <div class="text-white small fw-semibold text-truncate">Nguyễn Thái Giả Hủ</div>
                        <div class="text-muted text-xxs">Administrator</div>
                    </div>
                    <a href="../auth/login.html" class="ms-auto text-muted" title="Đăng xuất">
                        <i class="bi bi-box-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;

        // Đánh dấu nav-link active dựa theo data-page của <body>
        var currentPage = document.body.dataset.page;
        if (currentPage) {
            var activeLink = sidebar.querySelector('.nav-link[data-page="' + currentPage + '"]');
            if (activeLink) activeLink.classList.add('active');
        }
    }

    // ===== SIDEBAR TOGGLE (mobile) =====
    document.addEventListener('click', function (e) {
        if (e.target.closest('#sidebarToggle')) {
            document.getElementById('adminSidebar')?.classList.toggle('show');
        }
    });

}());
