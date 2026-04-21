<template>
    <div class="home">
        <!-- Hero Section -->
        <header class="hero">
            <h1>Lab 8 - VueRouter</h1>
            <p>15 - Nguyễn Thái Giả Hủ</p>
        </header>

        <hr />

        <!-- Nav links -->
        <nav>
            <ul>
                <li><RouterLink :to="{ name: 'blog-list' }">📰 Danh sách Blog</RouterLink></li>
                <li><RouterLink :to="{ name: 'userProfile' }">👤 Hồ sơ người dùng</RouterLink></li>
                <li><RouterLink :to="{ name: 'login' }">🔑 Đăng nhập</RouterLink></li>
                <li><RouterLink :to="{ name: 'dashboard' }">📊 Dashboard</RouterLink></li>
            </ul>
        </nav>

        <!-- Khu vực hiển thị route con -->
        <div class="view-panel">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped>
.hero {
    text-align: center;
    padding: 32px 0 16px;
}
.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 8px;
    color: #2c3e50;
}
.hero p {
    color: #666;
    margin-bottom: 16px;
}
.btn-primary {
    display: inline-block;
    padding: 10px 24px;
    background: #42b883;
    color: white !important;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
}
.btn-primary:hover {
    background: #33a06f;
}
nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
}
nav li a {
    text-decoration: none;
    color: #42b883;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 4px;
}
nav li a:hover {
    background: #f0fdf9;
}
.view-panel {
    margin-top: 24px;
    padding: 24px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    background: #fafafa;
    min-height: 180px;
}
</style>