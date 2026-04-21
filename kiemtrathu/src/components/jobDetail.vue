<template>
    <div v-if="job">
        <h2>{{ job.title }}</h2>
        <p>Lương: {{ job.salary }}</p>
        <p>Kỹ năng: {{ job.skills }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import { jobList } from '../data/jobList.js';

const route = useRoute();
const jobID = Number(route.params.id);


const job = jobList.find(job => job.id === jobID);

</script>

<style></style>