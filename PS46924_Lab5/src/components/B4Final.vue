<template>
  <div id="post-app">
    <h1>Ứng dụng Blog nhỏ với Vue.js</h1>
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script setup>

import { ref } from 'vue'
import CreatePost from '../components/CreatePost.vue'
import PostList from '../components/PostList.vue'

const posts = ref([
  {
    title: 'LMHT: Riot Games ra mắt tướng mới Ambessa',
    author: 'Faker',
    content: 'Riot Games vừa chính thức công bố tướng mới Ambessa Medarda, một chiến binh tốc độ cao với khả năng cơ động cực mạnh trong top lane.',
  },
  {
    title: 'MSI 2025: T1 vô địch sau màn trình diễn xuất sắc',
    author: 'Caps',
    content: 'Đội tuyển T1 đã giành chức vô địch MSI 2025 với tỷ số 3-1 trước Gen.G, Faker tiếp tục khẳng định vị thế huyền thoại của mình.',
  },
  {
    title: 'Bảng ngươi dùng Season 2025: Những thay đổi lớn',
    author: 'Phreak',
    content: 'Season 2025 mang đến hàng loạt thay đổi về bản đồ, vật phẩm và cơ chế rồng — ảnh hưởng lớn đến meta hiện tại.',
  }
])

function addPost(post) {
  posts.value.unshift(post)
}
</script>

<style>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
