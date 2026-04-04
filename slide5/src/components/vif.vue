<template>
    <div>
        Năm sinh:
        <input type="number" v-model="namSinh" />
        <p v-if="tuoi === 0">Vui lòng nhập năm sinh của bạn</p>
        <p v-else-if="tuoi < 0">Năm sinh không hợp lệ, vui lòng nhập lại</p>
        <p v-else-if="tuoi > 0 &&tuoi < 16">{{ tuoi }}</p>
        <p v-else-if="tuoi < 16">Cần sự bảo trợ đặc biệt, chưa có năng lực hành vi dân sự đầy đủ.</p>
        <p v-else-if="tuoi >= 16 && tuoi < 18">Đang trong quá trình trưởng thành, bắt đầu chịu trách nhiệm hình sự/dân
            sự đầy đủ hơn nhưng chưa là người thành niên.</p>
        <p v-else-if="tuoi >= 18 && tuoi < 30">Độ tuổi lao động sung sức, có quyền bầu cử và năng lực hành vi dân sự đầy đủ.</p>
        <p v-else>Người trưởng thành (Khác)	Trên 30 tuổi	Nhóm đã qua độ tuổi "Thanh niên" theo Luật Thanh niên.</p>
        <!-- <button @click="step++">Bước tiếp theo</button>
<p v-if="step === 1">Bước 1: Chào mừng bạn đến với Vue.js</p>
<p v-else-if="step === 2">Bước 2: Học cách sử dụng v-if để hiển thị nội dung</p>
<p v-else-if="step === 3">Bước 3: Thực hành và áp dụng kiến thức vào dự án của bạn</p>
<p v-else>Bước cuối</p> -->

    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const step = ref(1)
const namHienTai = new Date().getFullYear()
const namSinh = ref(new Date().getFullYear())
const tuoi = computed(() => {
    return namHienTai - namSinh.value
})
</script>

<style></style>