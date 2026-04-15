<template>
    <header class="d-flex align-items-center justify-content-between px-4 py-2 bg-white border-bottom shadow-sm">
        <div class="d-flex align-items-center gap-3">
            <RouterLink to="/" class="text-muted text-decoration-none small">
                <i class="bi bi-house me-1"></i>Trang chủ
            </RouterLink>
            <span class="text-muted">/</span>
            <span class="text-dark small fw-semibold">Quản trị</span>
        </div>
        <div class="d-flex align-items-center gap-3">
            <span class="small text-muted"><i class="bi bi-bell me-1"></i>Thông báo</span>
            <div class="d-flex align-items-center gap-2">
                <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white"
                    style="width:32px;height:32px;font-size:.85rem;">
                    <i class="bi bi-person-fill"></i>
                </div>
                <span class="small fw-semibold">Admin</span>
            </div>
            <RouterLink to="/login" class="btn btn-sm btn-outline-secondary">
                <i class="bi bi-box-arrow-right me-1"></i>Đăng xuất
            </RouterLink>
        </div>
    </header>
</template>

<script setup>
</script>

<style></style>