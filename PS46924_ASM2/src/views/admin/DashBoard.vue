<template>
    <div>
        <AdminTopBar />

        <div class="d-flex flex-grow-1">
            <nav class="admin-sidebar d-flex flex-column">
                <AdminSideBar />
            </nav>

            <!-- ===== MAIN CONTENT ===== -->
            <main class="admin-content">

                <!-- Page header -->
                <div class="admin-page-header d-flex flex-wrap justify-content-between align-items-start gap-2">
                    <h4 class="font-lol">Dashboard tổng quan</h4>
                    <RouterLink to="/admin/articles" class="btn btn-danger btn-sm">
                        <i class="bi bi-plus-lg me-1"></i>Thêm bài viết
                    </RouterLink>
                </div>

                <!-- ===== STAT CARDS ===== -->
                <div class="row g-3 mb-4">
                    <div class="col-sm-6 col-xl-3">
                        <div class="card stat-card shadow-sm h-100 dash-card">
                            <div class="card-body d-flex align-items-center gap-3">
                                <div class="stat-icon bg-danger bg-opacity-10 text-danger">
                                    <i class="bi bi-file-earmark-text"></i>
                                </div>
                                <div>
                                    <div class="text-white-50 small">Tổng bài viết</div>
                                    <div class="fs-4 fw-bold lh-1 text-white">{{ blogs.length }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="card stat-card shadow-sm h-100 dash-card">
                            <div class="card-body d-flex align-items-center gap-3">
                                <div class="stat-icon bg-danger bg-opacity-10 text-danger">
                                    <i class="bi bi-people"></i>
                                </div>
                                <div>
                                    <div class="text-white-50 small">Người dùng</div>
                                    <div class="fs-4 fw-bold lh-1 text-white">{{ users.length }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ===== ROW 2: Tỉ lệ danh mục ===== -->
                <div class="row g-4 mb-4">
                    <div class="col-lg-12">
                        <div class="card border-0 shadow-sm h-100 dash-card">
                            <div class="card-header dash-card-header">
                                <h6 class="mb-0 font-lol"><i class="bi bi-pie-chart me-2 text-danger"></i>Bài viết theo danh mục</h6>
                            </div>
                            <div class="card-body">
                                <ul class="list-unstyled small mb-0">
                                    <li v-for="cat in categoryStats" :key="cat.value"
                                        class="d-flex justify-content-between align-items-center mb-2">
                                        <span>
                                            <span class="d-inline-block rounded me-2"
                                                style="width:10px;height:10px;"
                                                :style="{ background: cat.color }"></span>
                                            {{ cat.label }}
                                        </span>
                                        <span class="fw-semibold text-white">{{ cat.count }} ({{ cat.percent }}%)</span>
                                    </li>
                                    <li v-if="categoryStats.length === 0" class="text-white-50">Chưa có bài viết.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ===== ROW 3: Bài viết gần đây ===== -->
                <div class="row g-4">
                    <div class="col-lg-12">
                        <div class="card border-0 shadow-sm dash-card">
                            <div class="card-header dash-card-header d-flex justify-content-between align-items-center">
                                <h6 class="mb-0 font-lol"><i class="bi bi-clock-history me-2 text-danger"></i>Bài viết gần đây</h6>
                                <RouterLink to="/admin/articles" class="btn btn-sm btn-outline-danger">Xem tất cả</RouterLink>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table admin-table mb-0">
                                        <thead>
                                            <tr>
                                                <th class="ps-4">Tiêu đề</th>
                                                <th>Danh mục</th>
                                                <th>Badge</th>
                                                <th>Ngày đăng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-if="recentBlogs.length === 0">
                                                <td colspan="4" class="text-center text-white-50 py-4">Chưa có bài viết.</td>
                                            </tr>
                                            <tr v-for="blog in recentBlogs" :key="blog.id">
                                                <td class="ps-4">
                                                    <div class="fw-semibold small text-white text-truncate" style="max-width:320px;">{{ blog.title }}</div>
                                                </td>
                                                <td><span class="badge border border-danger text-danger">{{ blog.category }}</span></td>
                                                <td><span class="badge border border-secondary text-white-50">{{ blog.badge || '—' }}</span></td>
                                                <td class="text-white-50 small">{{ blog.date }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import AdminTopBar from '../../components/AdminTopBar.vue'
import AdminSideBar from '../../components/AdminSideBar.vue'

const blogs = ref([])
const users = ref([])

onMounted(async () => {
    const [blogsRes, usersRes] = await Promise.all([
        axios.get('http://localhost:3001/blogs'),
        axios.get('http://localhost:3001/users')
    ])
    blogs.value = blogsRes.data
    users.value = usersRes.data
})

const recentBlogs = computed(() => [...blogs.value].reverse().slice(0, 5))

const categoryDefs = [
    { value: 'esports', label: 'Esports', color: '#dc3545' },
    { value: 'news',    label: 'News',    color: '#adb5bd' },
    { value: 'tech',    label: 'Tech',    color: '#6c757d' },
]

const categoryStats = computed(() => {
    const total = blogs.value.length || 1
    return categoryDefs.map(cat => {
        const count = blogs.value.filter(b => b.category === cat.value).length
        return { ...cat, count, percent: Math.round(count / total * 100) }
    }).filter(c => c.count > 0)
})
</script>

<style>
.admin-content .font-lol {
    letter-spacing: 0.1em;
    color: #dc3545;
}

.dash-card {
    background-color: #1e1e1e !important;
    border-color: #333 !important;
    color: #f0f0f0;
}

.dash-card-header {
    background-color: #181818;
    border-color: #333 !important;
    color: #f0f0f0;
}

.dash-card .admin-table tbody tr {
    background-color: #1e1e1e !important;
    border-color: #2e2e2e !important;
}

.dash-card .admin-table tbody tr:hover {
    background-color: #252525 !important;
}

.dash-card .admin-table tbody td {
    background-color: transparent !important;
    border-color: #2e2e2e !important;
}
</style>