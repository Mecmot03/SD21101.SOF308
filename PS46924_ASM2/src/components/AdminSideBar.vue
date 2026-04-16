<template>
    <div class="sidebar-brand">
        <i class="bi bi-speedometer2 me-2 text-primary"></i>M1 Admin
    </div>
    <div class="py-2 flex-grow-1">
        <div class="nav-section-label">Tổng quan</div>
        <RouterLink to="/admin" class="nav-link" active-class="active" exact-active-class="active">
            <i class="bi bi-grid-1x2-fill"></i>Dashboard
        </RouterLink>
        <div class="nav-section-label">Nội dung</div>
        <RouterLink to="/admin/articles" class="nav-link" active-class="active">
            <i class="bi bi-file-earmark-text"></i>Quản lý bài viết
        </RouterLink>
        <!-- <RouterLink to="/admin/categories" class="nav-link" active-class="active">
            <i class="bi bi-tags"></i>Danh mục
        </RouterLink> -->
        <RouterLink to="/admin/comments" class="nav-link" active-class="active">
            <i class="bi bi-chat-dots"></i>Bình luận
            <span class="badge bg-warning text-dark ms-auto">12</span>
        </RouterLink>
        <div class="nav-section-label">Người dùng</div>
        <RouterLink to="/admin/users" class="nav-link" active-class="active">
            <i class="bi bi-people"></i>Người dùng
        </RouterLink>
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
            <RouterLink to="/login" class="ms-auto text-muted" title="Đăng xuất">
                <i class="bi bi-box-arrow-right"></i>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
</script>

<style></style>