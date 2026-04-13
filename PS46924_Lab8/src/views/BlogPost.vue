<template>
   <div>
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <button @click="router.push({ name: 'blog-list' })">← Quay lại</button>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { blog } from '../data/blog.js';

const route = useRoute();
const router = useRouter();

// Tìm bài viết có id khớp với :id trên URL
const post = blog.find(b => b.id === Number(route.params.id));
</script>
<style>

</style>