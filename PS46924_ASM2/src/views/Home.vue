<template>
    <PublicNavBar />
    <div data-page="index bg-dark">
        <!-- ===== CAROUSEL ===== -->
        <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button v-for="(blog, index) in blogs.slice(0, 3)" :key="blog.id" type="button"
                    data-bs-target="#heroCarousel" :data-bs-slide-to="index" :class="{ active: index === 0 }"
                    :aria-current="index === 0 ? 'true' : undefined" :aria-label="`Slide ${index + 1}`"></button>
            </div>
            <div class="carousel-inner">
                <div v-for="(blog, index) in blogs.slice(0, 3)" :key="blog.id" class="carousel-item"
                    :class="{ active: index === 0 }">
                    <img :src="blog.image" class="d-block w-100" :alt="blog.title">
                    <div class="carousel-caption d-none d-md-block pb-5 text-uppercase">
                        <span class="badge bg-danger text-white mb-2">{{ blog.badge }}</span>
                        <h2 class="text-white">{{ blog.title }}</h2>
                        <router-link :to="`/articles/${blog.id}`" class="btn btn-danger btn-sm px-4 text-white">Đọc
                            ngay</router-link>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <!-- ===== MAIN ===== -->
        <main>
            <div class="container py-5">
                <div class="row g-4">

                    <!-- ===== DANH SÁCH BÀI VIẾT ===== -->
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h4 class="mb-0 font-lol">Bài viết mới nhất</h4>
                    </div>
                    <!-- Lưới bài viết - scroll ngang -->
                    <div class="position-relative px-4">
                        <button
                            class="btn btn-outline-secondary btn-sm position-absolute top-50 translate-middle-y start-0 z-1"
                            id="articleScrollPrev" @click="prevPage" :disabled="currentPage === 0">
                            <i class="bi bi-chevron-left"></i>
                        </button>

                        <div class="row row-cols-1 row-cols-md-4 g-3" id="articleList">
                            <div class="col rounded-5" v-for="blog in pagedBlogs" :key="blog.id">
                                <div class="card border-0 shadow-sm bg-dark text-white article-card overflow-hidden"
                                    style="height: 320px;">
                                    <router-link :to="`/articles/${blog.id}`"
                                        class="text-decoration-none article-title d-flex flex-column h-100">
                                        <div
                                            class="article-thumb-sm bg-danger d-flex align-items-center justify-content-center flex-shrink-0">
                                            <img :src="blog.image" :alt="blog.title" class="img-fluid">
                                        </div>
                                        <div class="card-body pb-1 flex-grow-1 overflow-hidden">
                                            <span class="badge bg-danger mb-2">{{ blog.badge }}</span>
                                            <h6 class="card-title font-lol">{{ blog.title }}</h6>
                                            <p class="card-text small text-truncate-multiline">{{ blog.description }}
                                            </p>
                                        </div>
                                        <div
                                            class="card-footer bg-transparent border-0 small text-white-50 flex-shrink-0">
                                            <i class="bi bi-calendar3 me-1 text-danger"></i>{{ blog.date }}
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <button
                            class="btn btn-outline-secondary btn-sm position-absolute top-50 translate-middle-y end-0 z-1"
                            id="articleScrollNext" @click="nextPage" :disabled="currentPage >= totalPages - 1">
                            <i class="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div><!-- /.row -->
            </div><!-- /.container -->
        </main>

        <!-- ===== FOOTER ===== -->
        <PublicFooter />
    </div>
</template>

<script setup>
import PublicNavBar from '../components/PublicNavBar.vue'
import PublicFooter from '../components/PublicFooter.vue'
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const blogs = ref([])
const currentPage = ref(0)
const pageSize = 4

const pagedBlogs = computed(() => blogs.value.slice(currentPage.value * pageSize, (currentPage.value + 1) * pageSize))
const totalPages = computed(() => Math.ceil(blogs.value.length / pageSize))

function prevPage() {
    if (currentPage.value > 0) currentPage.value--
}
function nextPage() {
    if (currentPage.value < totalPages.value - 1) currentPage.value++
}

const fetchBlogs = async () => {
    try {
        const res = await axios.get('http://localhost:3001/blogs')
        blogs.value = res.data
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu', error)
    }
}
onMounted(fetchBlogs)
</script>

<style>
.text-truncate-multiline {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>