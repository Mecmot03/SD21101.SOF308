<template>
    <div class="blog-post">
        <button @click="router.push({ name: 'blog-list' })" class="btn-back">← Quay lại</button>

        <div v-if="post">
            <h2>{{ post.title }}</h2>
            <p class="meta">✍️ {{ post.author }} · 📅 {{ post.date }}</p>
            <hr />
            <p class="content">{{ post.content }}</p>
        </div>
        <div v-else class="not-found">
            <p>⚠️ Không tìm thấy bài viết với ID: <strong>{{ route.params.id }}</strong></p>
            <button @click="router.push({ name: 'blog-list' })">Về danh sách</button>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { blog } from '../data/blog.js';

const route = useRoute();
const router = useRouter();

// Tìm bài viết có id khớp với :id trên URL (dynamic route params)
const post = blog.find(b => b.id === Number(route.params.id));
</script>

<style scoped>
.blog-post {
    max-width: 680px;
}
.btn-back {
    margin-bottom: 16px;
    padding: 6px 14px;
    background: #42b883;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.btn-back:hover {
    background: #33a06f;
}
.meta {
    font-size: 0.85rem;
    color: #888;
    margin: 4px 0 12px;
}
.content {
    line-height: 1.7;
    color: #333;
}
.not-found {
    color: #c0392b;
}
</style>
<style scoped>
button {
    margin-top: 12px;
    padding: 6px 14px;
    background: #42b883;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    background: #33a06f;
}
</style>