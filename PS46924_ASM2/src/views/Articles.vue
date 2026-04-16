<template>
    <div>
        <PublicNavBar />

        <!-- ===== PAGE HEADER ===== -->
        <div class="bg-dark text-white py-5">
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-2">
                        <li class="breadcrumb-item">
                            <RouterLink to="/" class="text-light">Trang chủ</RouterLink>
                        </li>
                        <li class="breadcrumb-item active text-white-50" aria-current="page">Bài viết</li>
                    </ol>
                </nav>
                <h1 class="font-lol mb-1">Tất cả bài viết</h1>
                <p class="text-white-50 mb-0">Khám phá kho nội dung phong phú từ cộng đồng M1Entertainment</p>
            </div>
        </div>

        <!-- ===== MAIN ===== -->
        <main class="articles-main">
            <div class="container py-5">
                <div class="row g-4">

                    <!-- ===== CỘT CHÍNH ===== -->
                    <div class="col-lg-12">

                        <!-- Bộ lọc & sắp xếp -->
                        <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
                            <div class="d-flex flex-wrap gap-2">
                                <button v-for="cat in categories" :key="cat.value" class="btn btn-sm"
                                    :class="selectedCategory === cat.value ? 'btn-danger' : 'btn-outline-secondary'"
                                    @click="selectedCategory = cat.value">{{ cat.label }}</button>
                            </div>
                        </div>

                        <!-- Danh sách bài viết -->
                        <div class="row g-3">
                            <div class="col-md-6 col-lg-4" v-for="blog in pagedBlogs" :key="blog.id">
                                <div class="card h-100 border-0 bg-dark article-card">
                                    <RouterLink :to="`/articles/${blog.id}`" class="text-decoration-none">
                                        <div class="article-thumb-sm d-flex align-items-center justify-content-center">
                                            <img :src="blog.image" :alt="blog.title" class="img-fluid">
                                        </div>
                                        <div class="card-body">
                                            <span class="badge bg-danger mb-2">{{ blog.badge }}</span>
                                            <h6 class="card-title text-white article-title">{{ blog.title }}</h6>
                                            <p class="card-text text-white-50 small">{{ blog.description }}</p>
                                        </div>
                                        <div class="card-footer bg-transparent border-0 small text-white-50">
                                            <i class="bi bi-calendar3 me-1"></i>{{ blog.date }}
                                        </div>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>

                        <!-- Phân trang -->
                        <nav class="mt-5" aria-label="Phân trang bài viết">
                            <ul class="pagination justify-content-center">
                                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                    <a class="page-link" href="#" @click.prevent="currentPage--"><i
                                            class="bi bi-chevron-left"></i></a>
                                </li>
                                <li v-for="p in totalPages" :key="p" class="page-item"
                                    :class="{ active: currentPage === p }">
                                    <a class="page-link" href="#" @click.prevent="currentPage = p">{{ p }}</a>
                                </li>
                                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                                    <a class="page-link" href="#" @click.prevent="currentPage++"><i
                                            class="bi bi-chevron-right"></i></a>
                                </li>
                            </ul>
                            <p class="text-center text-muted small mt-2">Tổng {{ filteredBlogs.length }} bài viết</p>
                        </nav>
                    </div><!-- /col-lg-12 -->

                </div><!-- /.row -->
            </div><!-- /.container -->
        </main>

        <PublicFooter />
    </div>
</template>

<script setup>
import PublicNavBar from '../components/PublicNavBar.vue'
import PublicFooter from '../components/PublicFooter.vue'
import { ref, computed, watch, onMounted } from 'vue'
import axios from 'axios'
const blogs = ref([])
const selectedCategory = ref('')
const currentPage = ref(1)
const PAGE_SIZE = 6

const categories = [
    { value: '', label: 'Tất cả' },
    { value: 'esports', label: 'Esports' },
    { value: 'news', label: 'Tin tức' },
]

const filteredBlogs = computed(() => {
    if (!selectedCategory.value) return blogs.value
    return blogs.value.filter(b => b.category === selectedCategory.value)
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredBlogs.value.length / PAGE_SIZE)))

const pagedBlogs = computed(() => {
    const start = (currentPage.value - 1) * PAGE_SIZE
    return filteredBlogs.value.slice(start, start + PAGE_SIZE)
})

watch(selectedCategory, () => { currentPage.value = 1 })

const fetchBlogs = async () => {
    try {
        const res = await axios.get('http://localhost:3001/blogs')
        blogs.value = res.data
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu', error)
    }
}
onMounted(fetchBlogs);
</script>

<style>
.articles-main {
    background-color: #111111;
    min-height: 60vh;
    padding: 0;
    /* override global main { padding: 60px 0 } */
}

/* Override global h-tag color */
.articles-main h1,
.articles-main h6 {
    color: inherit;
    text-shadow: none;
}

/* Override global .small text-shadow */
.articles-main .small {
    text-shadow: none;
}

.articles-main .text-muted {
    color: #888 !important;
}

/* Card title override .article-title { color: red } */
.articles-main .card-title.article-title {
    color: #ffffff !important;
}

.articles-main .card-title.article-title:hover {
    color: #dc3545 !important;
}

/* Pagination */
.articles-main .page-link {
    background-color: #1e1e1e;
    border-color: #444;
    color: #ccc;
}

.articles-main .page-item.active .page-link {
    background-color: #dc3545;
    border-color: #dc3545;
    color: #fff;
}

.articles-main .page-item.disabled .page-link {
    background-color: #111;
    color: #555;
    border-color: #333;
}

.articles-main .page-link:hover {
    background-color: #2a2a2a;
    color: #fff;
    border-color: #555;
}
</style>
