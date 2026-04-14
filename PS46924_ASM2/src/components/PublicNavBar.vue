<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        <div class="container">
            <RouterLink to="/" class="navbar-brand">
                <i class="bi bi-journal-richtext me-2 text-danger"></i> <span class="font-lol">M1 Entertainment</span>
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain"
                aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarMain">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link" active-class="active" exact-active-class="active">Trang chủ
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/articles" class="nav-link" active-class="active" exact-active-class="active">
                            Bài viết</RouterLink>
                    </li>
                </ul>
                <!-- <form class="d-flex" role="search">
                    <input class="form-control form-control-sm me-2 bg-secondary border-0 text-white" type="search"
                        placeholder="Tìm kiếm..." aria-label="Search">
                    <button class="btn btn-outline-light btn-sm" type="submit">Tìm</button>
                </form> -->
                <div class="ms-3 d-flex gap-2">
                    <RouterLink to="/login" class="btn btn-sm btn-outline-light">Đăng nhập</RouterLink>
                    <RouterLink to="/register" class="btn btn-sm btn-primary">Đăng ký</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
var currentPage = document.body.dataset.page;
if (currentPage) {
    var activeLink = document.querySelector('.nav-link[data-page="' + currentPage + '"]');
    if (activeLink) {
        activeLink.classList.add('active');
        activeLink.setAttribute('aria-current', 'page');
    }
}
</script>

<style></style>