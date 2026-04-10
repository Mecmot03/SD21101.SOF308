<template>
    <div>
        <h2>Tạo Sinh viên</h2>
        <input v-model="ten" placeholder="Tên" />
        <input v-model="diem" placeholder="Điểm TB" />
        <button @click="createSV">Tạo sinh viên</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const emit  = defineEmits(['add-sv']);

const ten = ref('');
const diem = ref();

function createSV(){
    if(ten.value && diem.value ){
        const newSv = {
            TenSV: ten.value,
            DiemTB: diem.value
        };

        emit('add-sv', newSv);


        ten.value = '';
        diem.value = 0;
    } else {
        alert('Vui lòng điền đầy đủ thông tin sinh viên');
    }

}
</script>

<style>

</style>