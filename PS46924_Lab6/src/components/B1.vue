<template>
    <div>
        <h1>NHẬP ĐIỂM CỦA BẠN</h1>
        <input type="number" v-model="diem" placeholder="Nhập điểm của bạn" />
        <p v-if="diem > 10 || diem < 0">Điểm không hợp lệ, vui lòng nhập lại</p>
        <p v-else-if="diem < 5">Xếp loại yếu</p>
        <p v-else-if="diem < 6.5">Xếp loại trung bình</p>
        <p v-else-if="diem < 8">Xếp loại khá</p>
        <p v-else-if="diem < 9">Xếp loại giỏi</p>
        <p v-else>Xếp loại xuất sắc</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const diem = ref(0);
</script>

<style></style>