<template>
    <div class="info">
        <h3>Thông tin cá nhân</h3>
        <table>
            <tr>
                <td>👤 Tên:</td>
                <td>{{ user.name || '—' }}</td>
            </tr>
            <tr>
                <td>📧 Email:</td>
                <td>{{ user.email || '—' }}</td>
            </tr>
            <tr>
                <td>📝 Giới thiệu:</td>
                <td>{{ user.bio || '—' }}</td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { inject } from 'vue';
const user = inject('user');
</script>

<style scoped>
.info table {
    border-collapse: collapse;
    width: 100%;
    max-width: 400px;
}
.info td {
    padding: 8px 12px;
    border-bottom: 1px solid #eee;
}
.info td:first-child {
    font-weight: bold;
    color: #555;
    width: 120px;
}
</style>