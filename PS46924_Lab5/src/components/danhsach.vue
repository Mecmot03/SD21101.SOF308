<template>
    <div>
        <h2>Danh sách sinh viên</h2>
        <select v-model="selectedRank">
            <option value="Tất cả">Tất cả</option>
            <option value="Yếu">Yếu</option>
            <option value="Trung bình">Trung bình</option>
            <option value="Khá">Khá</option>
            <option value="Giỏi">Giỏi</option>
            <option value="Xuất sắc">Xuất sắc</option>
        </select>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên sinh viên</th>
                    <th>Điểm trung bình</th>
                    <th>Xếp loại</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(sinhvien, index) in dssvFiltered" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ sinhvien.TenSV }}</td>
                    <td>{{ sinhvien.DiemTB }}</td>
                    <td v-if="sinhvien.DiemTB < 5">Yếu</td>
                    <td v-else-if="sinhvien.DiemTB < 6.5">Trung bình</td>
                    <td v-else-if="sinhvien.DiemTB < 8">Khá</td>
                    <td v-else-if="sinhvien.DiemTB < 9">Giỏi</td>
                    <td v-else>Xuất sắc</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { defineProps, ref, computed } from 'vue';
const selectedRank = ref('Tất cả');

const dssvFiltered = computed(() => {
    if (selectedRank.value === 'Tất cả') {
        return props.dssv;
    } else {
        return props.dssv.filter(sv => rank(sv.DiemTB) === selectedRank.value);
    }
});

const rank = (DiemTB) => {
    if (DiemTB < 5) return 'Yếu';
    else if (DiemTB < 6.5) return 'Trung bình';
    else if (DiemTB < 8) return 'Khá';
    else if (DiemTB < 9) return 'Giỏi';
    else return 'Xuất sắc';
}

const props = defineProps({
    dssv: {
        type: Array,
        required: true
    }
});
</script>

<style>
table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border: 1px solid white;
    padding: 8px;
    text-align: left;
}
</style>