<template>
    <div>
        <h2>👤 Hồ sơ người dùng</h2>
        <p>Đang đăng nhập với tên: <strong>{{ user.name }}</strong></p>
        <hr />
        <!-- Thanh điều hướng giữa các tab con -->
        <nav class="profile-nav">
            <RouterLink :to="{ name: 'userProfileInfo' }" active-class="active-link">Thông tin</RouterLink>
            <RouterLink :to="{ name: 'userProfileSettings' }" active-class="active-link">Cài đặt</RouterLink>
        </nav>
        <hr />
        <!-- Đây là nơi UserProfileInfo / UserProfileSettings sẽ render -->
        <RouterView />
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { provide } from 'vue';

// Reactive object đọc từ localStorage—chia sẻ xuống các component con
const user = reactive({
    name: localStorage.getItem('loggedInUser') || '',
    email: localStorage.getItem('loggedInEmail') || '',
    bio: localStorage.getItem('loggedInBio') || '',
});

provide('user', user);
</script>

<style scoped>
.profile-nav {
    display: flex;
    gap: 16px;
    margin-bottom: 8px;
}
.profile-nav a {
    text-decoration: none;
    color: #42b883;
    font-weight: bold;
    padding: 4px 12px;
    border-radius: 4px;
    border: 1px solid #42b883;
}
.profile-nav a:hover {
    background: #42b883;
    color: white;
}
.active-link {
    background: #42b883;
    color: white !important;
}
</style>