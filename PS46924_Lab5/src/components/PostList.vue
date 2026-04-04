<template>
  <div>
    <h2>Danh sách bài viết</h2>
    <div v-for="(post, index) in posts" :key="index" :class="{ 'highlighted': post.title.length > 20 }"
      :style="{ backgroundColor: post.backgroundColor, color: post.textcolor }" class="post">
      <h1> Bài {{ index + 1 }}</h1>
      <h3 class="text-success">{{ post.title }}</h3>
      <h4 class="text-danger">{{ post.author }}</h4>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
// Định nghĩa props
const props = defineProps({//cánh tay đưa ra bên ngoài lấy dữ liệu vào 
  posts: {
    type: Array,
    required: true,
  }
});
</script>

<style>
.post {
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.highlighted {
  border: 2px solid lightgray;
}
</style>