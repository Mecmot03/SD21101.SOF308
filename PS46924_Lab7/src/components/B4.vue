
<template>
    <div>
        {{ loggedInUser }}
<login v-if="!isLoggedIn" @loggedIn="handleLoginSuccess" />
<comment v-else :username="loggedInUser" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import login from '../components/Login.vue'
import comment from '../components/Comment.vue'

const isLoggedIn = ref(false);
const loggedInUser = ref('');

function handleLoginSuccess(username) {
    isLoggedIn.value = true;
    loggedInUser.value = username;
}
</script>

<style >

</style>