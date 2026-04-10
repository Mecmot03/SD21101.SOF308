<template>
    <div>
        <h1>Đây là home</h1>
        <button @click="goToAbout">Go to About</button>
        <br>
        <lable>
            Search : <input type="search" v-model="search">
        </lable>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';
const router = useRouter();
const route = useRoute();
const search = computed({
    get(){
        return route.query.search;
    },
    set(search){
        router.replace({ query: {search} })
    }
});


const goToAbout = () => {
    router.push('/about');
}

</script>

<style></style>