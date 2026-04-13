<template>
    <div>
 <h2>User Profile</h2>
        <!-- Navigation sang các tab con -->
        <RouterLink to="/profile/info">Info</RouterLink> |
        <RouterLink to="/profile/settings">Settings</RouterLink>

        <hr>
        <!-- Đây là nơi UserProfileInfo / UserProfileSettings sẽ render -->
        <RouterView />
    </div>
</template>

<script setup>
import { provide } from 'vue';
import { user } from '../data/user.js';

provide('user', user[0]);
</script>

<style>

</style>