<template>
    <header class="admin-topbar d-flex align-items-center justify-content-between px-4 py-2">
        <div class="d-flex align-items-center gap-3">
            <RouterLink to="/" class="text-white-50 text-decoration-none small">
                <i class="bi bi-house me-1"></i>Trang chủ
            </RouterLink>
            <span class="text-white-50">/</span>
            <span class="text-white small fw-semibold">Quản trị</span>
        </div>
        <div class="d-flex align-items-center gap-3">
            <span class="small text-white-50"><i class="bi bi-bell me-1"></i>Thông báo</span>
            <div class="d-flex align-items-center gap-2">
                <div class="rounded-circle bg-danger d-flex align-items-center justify-content-center text-white"
                    style="width:32px;height:32px;font-size:.85rem;">
                    <i class="bi bi-person-fill"></i>
                </div>
                <span class="small fw-semibold text-white">Admin</span>
            </div>
            <RouterLink to="/" class="btn btn-sm btn-outline-secondary">
                <i class="bi bi-house-fill me-1"></i>Trang chủ
            </RouterLink>
            <RouterLink to="/login" class="btn btn-sm btn-outline-danger">
                <i class="bi bi-box-arrow-right me-1"></i>Đăng xuất
            </RouterLink>
        </div>
    </header>
</template>

<script setup>
</script>

<style></style>