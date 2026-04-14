<template>
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
            <div
                class="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white flex-shrink-0 avatar-md">
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
</template>

<script setup>
var currentPage = document.body.dataset.page;
if (currentPage) {
    var activeLink = sidebar.querySelector('.nav-link[data-page="' + currentPage + '"]');
    if (activeLink) activeLink.classList.add('active');
}
document.addEventListener('click', function (e) {
    if (e.target.closest('#sidebarToggle')) {
        document.getElementById('adminSidebar')?.classList.toggle('show');
    }
});
</script>

<style></style>