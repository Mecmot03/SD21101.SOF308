<template>
    <div class="d-flex gap-5 p-4">
        <!-- Form đăng ký -->
        <div v-if="!isRegistered" class="p-5 col-sm-4">
            <h3>Form Đăng Ký</h3>

            <div class="mb-2">
                <label>Họ tên:</label>
                <input type="text" class="form-control" v-model="hoTen" placeholder="Nhập họ tên">
                <p v-if="hoTenError" style="color: red;">{{ hoTenError }}</p>
            </div>

            <div class="mb-2">
                <label>Email:</label>
                <input type="email" class="form-control" v-model="email" placeholder="Nhập email">
            </div>

            <div class="mb-2">
                <label>Mật khẩu:</label>
                <input type="password" class="form-control" v-model="matKhau" placeholder="Nhập mật khẩu">
            </div>

            <div class="mb-2">
                <label>Ngày sinh:</label>
                <input type="date" class="form-control" v-model="ngaySinh">
            </div>

            <div class="mb-2">
                <label>Giới tính:</label>
                <div>
                    <input type="radio" v-model="gioiTinh" value="Nam"> Nam
                    <input type="radio" v-model="gioiTinh" value="Nữ" class="ms-2"> Nữ
                    <input type="radio" v-model="gioiTinh" value="Khác" class="ms-2"> Khác
                </div>
            </div>

            <div class="mb-3">
                <label>Ngôn ngữ:</label>
                <div>
                    <input type="checkbox" v-model="ngonNgu" value="Tiếng Việt"> Tiếng Việt
                    <input type="checkbox" v-model="ngonNgu" value="Tiếng Anh" class="ms-2"> Tiếng Anh
                    <input type="checkbox" v-model="ngonNgu" value="Tiếng Nhật" class="ms-2"> Tiếng Nhật
                </div>
            </div>

            <button class="btn btn-primary" @click="dangKy">Đăng ký</button>
        </div>

        <!-- Thông tin đã đăng ký -->
        <div v-else>
            <h4>Thông tin đã đăng ký:</h4>
            <p><strong>Họ tên:</strong> {{ hoTen }}</p>
            <p><strong>Email:</strong> {{ email }}</p>
            <p><strong>Ngày sinh:</strong> {{ ngaySinh }}</p>
            <p><strong>Giới tính:</strong> {{ gioiTinh }}</p>
            <p><strong>Ngôn ngữ:</strong> {{ ngonNgu.join(', ') }}</p>
            <button class="btn btn-secondary mt-2" @click="dangKy">Quay lại</button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const isRegistered = ref(false);

const hoTen = ref('');
const email = ref('');
const matKhau = ref('');
const ngaySinh = ref('');
const gioiTinh = ref('Nam');
const ngonNgu = ref([]);

const hoTenError = ref('');
const emailError = ref('');
const matKhauError = ref('');
const ngaySinhError = ref('');
const gioiTinhError = ref('');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const result = reactive({});

const dangKy = () => {
    const hoTenError = ref('');
    const emailError = ref('');
    const matKhauError = ref('');
    const ngaySinhError = ref('');
    const gioiTinhError = ref('');

    if (!hoTen.value.trim()) {
        hoTenError.value = 'Vui lòng nhập họ tên';
    }

    if (!matKhau.value.trim()) {
        matKhauError.value = 'Vui lòng nhập mật khẩu';
    }

    if (!ngaySinh.value) {
        ngaySinhError.value = 'Vui lòng chọn ngày sinh';
    }

    if (gioiTinh.value === '') {
        gioiTinhError.value = 'Vui lòng chọn giới tính';
    }

    if (!email.value.trim()) {
        emailError.value = 'Vui lòng nhập email';
    } else if (!emailRegex.test(email.value)) {
        emailError.value = 'Email không hợp lệ';
    }

    if (!emailError.value && !matKhauError.value && !hoTenError.value && !ngaySinhError.value && !gioiTinhError.value) {
        isRegistered.value = true;
    }
};
</script>

<style></style>