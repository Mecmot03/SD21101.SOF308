<template>
    <div class = "container">
<h3>Nhập tháng của bạn:</h3>
<input type="number" v-model="thang"/>
<p v-if="thang === 0">Vui lòng nhập tháng của bạn</p>
<p v-else-if="thang < 0 || thang > 12">Tháng không hợp lệ, vui lòng nhập lại</p>
<p v-else-if = "thang >= 1 && thang <= 3">Mùa xuân</p>
<p v-else-if = "thang <= 6">Mùa hạ</p>
<p v-else-if = "thang <= 9">Mùa thu</p>
<p v-else>Mùa đông</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const thang = ref(1)
</script>

<style>

</style>