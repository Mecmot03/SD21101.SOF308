<template>
    <div>
        <!-- Nếu chưa đăng nhập → hiện form -->
        <template v-if="!isAuthenticated">
            <h2>Đăng nhập</h2>
            <form @submit.prevent="handleLogin">
                <div>
                    <label>Tên đăng nhập:</label>
                    <input v-model="username" type="text" placeholder="Nhập tên đăng nhập" required />
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input v-model="password" type="password" placeholder="Nhập mật khẩu" required />
                </div>
                <p v-if="errorMsg" style="color: red;">{{ errorMsg }}</p>
                <button type="submit">Đăng nhập</button>
            </form>
        </template>

        <!-- Ngược lại → hiện thông tin + nút đăng xuất -->
        <template v-else>
            <h2>👋 Xin chào, {{ loggedInUser }}!</h2>
            <p>Bạn đã đăng nhập thành công.</p>
            <button class="btn-logout" @click="handleLogout">Đăng xuất</button>
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');
const errorMsg = ref('');

// Khai báo biến xác thực cục bộ — đọc từ localStorage để giữ trạng thái khi reload
const isAuthenticated = ref(localStorage.getItem('isAuthenticated') === 'true');
const loggedInUser = ref(localStorage.getItem('loggedInUser') || '');

function handleLogin() {
    // Giả lập đăng nhập thành công (bất kỳ username/password đều hợp lệ)
    if (username.value && password.value) {
        isAuthenticated.value = true;
        loggedInUser.value = username.value;
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('loggedInUser', username.value);
        router.push({ name: 'dashboard' });
    } else {
        errorMsg.value = 'Vui lòng nhập đầy đủ thông tin.';
    }
}

function handleLogout() {
    isAuthenticated.value = false;
    loggedInUser.value = '';
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('loggedInUser');
    username.value = '';
    password.value = '';
}
</script>

<style scoped>
div {
    max-width: 400px;
    margin: 0 auto;
}
form > div {
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}
input {
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
button {
    padding: 8px 20px;
    background: #42b883;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    background: #33a06f;
}
.btn-logout {
    padding: 8px 20px;
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.btn-logout:hover {
    background: #c0392b;
}
</style>