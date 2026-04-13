<template>
    <div>
        <p>Tên: {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
    </div>
</template>

<script setup>
import { inject } from 'vue';
const user = inject('user');
</script>

<style></style>