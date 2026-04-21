<template>
    <div class = "container mt-4">
        <h1>Bài 1 Counter</h1><br>
        Counter: <input type="number" v-model="counter" min="0" @input="limit"><br>
        <button @click="counter++">+</button>
        <button @click="decrement">-</button>
        <br>
        <h1>Bài 2 form nhập thông tin tính tổng tiền</h1><br>
        Tên sản phẩm: <input type="text" v-model="b2TenSP"><br>
        Giá sản phẩm: <input type="number" v-model="b2GiaSP"><br>
        Số lượng: <input type="number" v-model="b2SoLuong" min="0"><br>
        <h2>Tổng tiền: {{ b2TongTien }}k</h2>
        <div style="border:1px solid #ccc; padding:10px; margin-top:16px; width:300px;">
            <h3>Thông tin sản phẩm</h3>
            <p><strong>Tên sản phẩm:</strong> {{ b2TenSP }}</p>
            <p><strong>Giá sản phẩm:</strong> {{ b2GiaSP }}k</p>
            <p><strong>Số lượng:</strong> {{ b2SoLuong }}</p>
            <p><strong>Tổng tiền:</strong> {{ b2TongTien }}k</p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// Bài 1
const counter = ref(0);

function limit(e) {
    if (counter.value < 0) {
        counter.value = 0;
    }
}
function decrement() {
    if (counter.value > 0) {
        counter.value--;
    }
}

const b2TenSP = ref('');
const b2GiaSP = ref(0);
const b2SoLuong = ref(0);
const b2TongTien = computed(() => b2GiaSP.value * b2SoLuong.value);
</script>


<style></style>