<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <HelloWorld /> -->
   <h1>LAB 8 - Vue Router</h1>
   <br>
   <h2>15 - Nguyễn Thái Giả Hủ</h2>
   <hr>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/blogs">Blogs</RouterLink>
    <RouterLink to="/dashboard">Dashboard</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
