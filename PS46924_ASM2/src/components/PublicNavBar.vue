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
                {{ currentUser.fullName }}
                <!-- <form class="d-flex" role="search">
                    <input class="form-control form-control-sm me-2 bg-secondary border-0 text-white" type="search"
                        placeholder="Tìm kiếm..." aria-label="Search">
                    <button class="btn btn-outline-light btn-sm" type="submit">Tìm</button>
                </form> -->
                <div class="ms-3 d-flex gap-2 align-items-center">
                    <template v-if="currentUser">
                        <RouterLink v-if="currentUser.role === 'admin'" to="/admin" class="btn btn-sm btn-outline-warning">
                            <i class="bi bi-speedometer2 me-1"></i>Quản lý
                        </RouterLink>
                        <RouterLink v-else to="/my-articles" class="btn btn-sm btn-outline-light">
                            <i class="bi bi-pencil-square me-1"></i>Đăng bài
                        </RouterLink>
                        <RouterLink to="/profile" class="btn btn-sm btn-outline-light">
                            <i class="bi bi-person-circle me-1"></i>{{ currentUser.username }}
                        </RouterLink>
                        <button class="btn btn-sm btn-danger" @click="logout">
                            <i class="bi bi-box-arrow-right me-1"></i>Đăng xuất
                        </button>
                    </template>
                    <template v-else>
                        <RouterLink to="/login" class="btn btn-sm btn-outline-light">Đăng nhập</RouterLink>
                        <RouterLink to="/register" class="btn btn-sm btn-primary">Đăng ký</RouterLink>
                    </template>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentUser = ref(null)

onMounted(() => {
    currentUser.value = JSON.parse(localStorage.getItem('currentUser') || 'null')
})

function logout() {
    localStorage.removeItem('currentUser')
    currentUser.value = null
    router.push('/')
}
</script>

<style></style>