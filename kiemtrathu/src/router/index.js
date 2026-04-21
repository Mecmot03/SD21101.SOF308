import { createRouter, createWebHistory } from 'vue-router'
import JobList from '../components/test2.vue'
import JobDetail from '../components/jobDetail.vue'

const routes = [
    {path: '/', component: JobList},
    {path: '/job/:id', component: JobDetail}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router