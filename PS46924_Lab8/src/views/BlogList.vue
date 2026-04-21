<template>
    <div>
        <h2>📰 Danh sách bài viết</h2>
        <!-- <p>Tổng cộng <strong>{{ blog.length }}</strong> bài viết</p> -->
        <ul class="blog-list">
            <li v-for="item in blog" :key="item.id" class="blog-card">
                <RouterLink :to="{ name: 'blog-post', params: { id: item.id } }">
                    <h3>{{ item.title }}</h3>
                </RouterLink>
                <p class="meta">✍️ {{ item.author }} · 📅 {{ item.date }}</p>
                <p class="excerpt">{{ item.excerpt }}</p>
                <RouterLink :to="{ name: 'blog-post', params: { id: item.id } }" class="read-more">
                    Đọc tiếp →
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { blog } from '../data/blog.js';
const router = useRouter();
</script>

<style scoped>
.blog-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.blog-card {
    padding: 16px 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: white;
}
.blog-card h3 {
    margin: 0 0 6px;
}
.blog-card a {
    color: #2c3e50;
    text-decoration: none;
    font-weight: bold;
}
.blog-card a:hover {
    color: #42b883;
}
.meta {
    font-size: 0.85rem;
    color: #888;
    margin: 0 0 8px;
}
.excerpt {
    margin: 0 0 10px;
    color: #555;
}
.read-more {
    font-size: 0.9rem;
    color: #42b883 !important;
    font-weight: bold;
}
</style>