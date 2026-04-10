<template>
    <div>
        <!-- <input type="text" v-model="so" v-on:keydown.down="so--" v-on:keydown.up="so++">
        <br>
        {{ so }} -->
        <!-- lazy giúp hoãn xử lý tức thời, tăng hiệu năng -->
        <!-- two-way biding data component: cả props và emit trong một component -->
        <!-- <div>
            <input type="checkbox" value="TV" v-model="Language">Tiếng Việt<br>
            <input type="checkbox" value="EN" v-model="Language">English<br>
            <input type="checkbox" value="CN" v-model="Language">China<br>
        </div>
        Ngôn ngữ: {{ Language }} -->

        <div v-for="lang in languages" :key="lang.value">
            <input type="checkbox" :value="lang.value" v-model="Language">{{ lang.label }}<br>
        </div>
        Ngôn ngữ:
        {{languages.filter(l => Language.includes(l.value)).map(l => l.label).join(', ')}}
        <!-- <span v-if="Language.includes('TV')">Tiếng Việt</span>
        <span v-if="Language.includes('EN')"> English</span>
        <span v-if="Language.includes('CN')"> China</span> -->
        <!-- {{languages.filter(l => Language.includes(l.value)).map(l => l.label).join(', ')}} -->
    </div>

    <!-- <input type="checkbox" value="Tiếng Việt" v-model="Language">Tiếng Việt<br>
<input type="checkbox" value="English" v-model="Language">English<br>
<input type="checkbox" value="China" v-model="Language">China<br>
Ngôn ngữ: {{ Language.join(', ') }} -->
</template>

<script setup>
import { ref } from 'vue'

const languages = ref([
    { value: 'TV', label: 'Tiếng Việt' },
    { value: 'EN', label: 'English' },
    { value: 'CN', label: 'China' }
]);
const Language = ref([]);
</script>

<style></style>