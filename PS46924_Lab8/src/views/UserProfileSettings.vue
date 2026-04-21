<template>
    <div class="settings">
        <h3>Cài đặt tài khoản</h3>
        <form @submit.prevent="saveSettings">
            <div>
                <label>Tên hiển thị:</label>
                <input v-model="form.name" type="text" placeholder="Nhập tên..." />
            </div>
            <div>
                <label>Email:</label>
                <input v-model="form.email" type="email" placeholder="Nhập email..." />
            </div>
            <div>
                <label>Giới thiệu:</label>
                <textarea v-model="form.bio" rows="3" placeholder="Giới thiệu bản thân..."></textarea>
            </div>
            <button type="submit">Lưu cài đặt</button>
            <p v-if="saved" class="success">✅ Đã lưu thành công!</p>
        </form>
    </div>
</template>

<script setup>
import { reactive, ref, inject } from 'vue';

const user = inject('user');

// Form khởi tạo từ giá trị hiện tại của user
const form = reactive({
    name: user.name,
    email: user.email,
    bio: user.bio,
});

const saved = ref(false);

function saveSettings() {
    // Cập nhật reactive object được inject — UserProfileInfo sẽ tự cập nhật
    user.name = form.name;
    user.email = form.email;
    user.bio = form.bio;

    // Lưu vào localStorage để giữ khi reload
    localStorage.setItem('loggedInUser', form.name);
    localStorage.setItem('loggedInEmail', form.email);
    localStorage.setItem('loggedInBio', form.bio);

    saved.value = true;
    setTimeout(() => { saved.value = false; }, 60*60*1000); // 1 giờ sau ẩn thông báo thành công
}
</script>

<style scoped>
.settings form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 360px;
}
form > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
label {
    font-weight: bold;
    font-size: 0.9rem;
    color: #555;
}
input, select, textarea {
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: inherit;
    font-size: 0.95rem;
}
button {
    padding: 8px 20px;
    background: #42b883;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: fit-content;
}
button:hover { background: #33a06f; }
.success { color: green; margin: 0; }
</style>