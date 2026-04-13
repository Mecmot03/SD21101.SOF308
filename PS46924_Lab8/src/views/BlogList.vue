<template>
    <div>
        <h2>Danh sách Blog</h2>
        <ul>
            <li v-for="item in blog" :key="item.id">
                <RouterLink :to="{ name: 'blog-post', params: { id: item.id } }">
                    {{ item.title }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { blog } from '../data/blog.js';
const route = useRoute();
const router = useRouter();

const id = route.params.id; // đọc :id từ URL

function goHome() {
    router.push({ name: 'home' }); // điều hướng bằng tên route (yêu cầu d)
}
</script>

<style></style>