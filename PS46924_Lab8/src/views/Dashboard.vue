<template>
    <div>
        <h2>📊 Dashboard</h2>
        <p>Xin chào, <strong>{{ loggedInUser }}</strong>! Bạn đã đăng nhập thành công.</p>
        <hr />
        <br />
        <div class="stats">
            <div class="card">📝 Bài viết: {{ blog.length }}</div>
        </div>

        <br />
        <h3>Danh sách bài viết</h3>
        <ul class="blog-list">
            <li v-for="(post, index) in blog" :key="post.id" class="blog-item">
                <span>{{ post.title }}</span>
                <button class="btn-delete" @click="removePost(index)">🗑️ Xóa</button>
            </li>
            <li v-if="blog.length === 0" class="empty">Chưa có bài viết nào.</li>
        </ul>
        <br />
        <button @click="logout">Đăng xuất</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { blog } from '../data/blog.js';

const router = useRouter();
const loggedInUser = ref(localStorage.getItem('loggedInUser'));

function removePost(index) {
    if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
        blog.splice(index, 1);
    }
}

function logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('loggedInUser');
    router.push({ name: 'home' });
}
</script>

<style scoped>
.links a {
    color: #42b883;
    text-decoration: none;
    font-weight: bold;
}
.stats {
    display: flex;
    gap: 16px;
    justify-content: center;
}
.blog-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.blog-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: #fff;
}
.empty {
    color: #888;
    text-align: center;
    padding: 12px;
}
.card {
    padding: 16px 24px;
    background: #f4f4f4;
    border-radius: 8px;
    font-size: 1.1rem;
    border: 1px solid #ddd;
}
button {
    padding: 8px 16px;
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    background: #c0392b;
}
.btn-delete {
    padding: 4px 12px;
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
}
.btn-delete:hover {
    background: #c0392b;
}
</style>