<template>
    <div>
        <PublicNavBar />

        <main v-if="blog">
            <div class="container py-5">
                <div class="row g-4">
                    <div class="col-lg-8">

                        <!-- Breadcrumb -->
                        <nav aria-label="breadcrumb" class="mb-3">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><RouterLink to="/" class="text-decoration-none">Trang chủ</RouterLink></li>
                                <li class="breadcrumb-item"><RouterLink to="/articles" class="text-decoration-none">Bài viết</RouterLink></li>
                                <li class="breadcrumb-item active" aria-current="page">Chi tiết</li>
                            </ol>
                        </nav>

                        <!-- Badge + Tiêu đề -->
                        <div class="mb-1">
                            <span class="badge bg-danger d-inline-block">{{ blog.badge }}</span>
                        </div>
                        <h1 class="mb-3">{{ blog.title }}</h1>

                        <!-- Meta -->
                        <div class="d-flex flex-wrap align-items-center gap-3 text-muted small mb-4 pb-4 border-bottom">
                            <span><i class="bi bi-calendar3 me-1"></i>{{ blog.date }}</span>
                            <span><i class="bi bi-heart me-1"></i>{{ blog.likes }} yêu thích</span>
                        </div>

                        <!-- Ảnh bìa -->
                        <div class="mb-4 text-center">
                            <img :src="blog.image" :alt="blog.title" class="img-fluid rounded shadow">
                        </div>

                        <!-- Nội dung -->
                        <article class="article-content">
                            <p class="lead">{{ blog.description }}</p>
                        </article>

                        <!-- Nút tương tác -->
                        <div class="d-flex gap-2 mt-4 mb-5">
                            <button class="btn btn-outline-danger btn-sm"><i class="bi bi-heart me-1"></i>Yêu thích ({{ blog.likes }})</button>
                            <button class="btn btn-outline-primary btn-sm"><i class="bi bi-share me-1"></i>Chia sẻ</button>
                            <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-bookmark me-1"></i>Lưu lại</button>
                        </div>

                        <!-- Bình luận -->
                        <div class="mb-5">
                            <h5 class="mb-4"><i class="bi bi-chat-dots me-2"></i>Bình luận</h5>
                            <div class="card border-0 mb-4 dark-card">
                                <div class="card-body">
                                    <h6 class="mb-3">Viết bình luận</h6>
                                    <div class="mb-3">
                                        <textarea class="form-control dark-input" rows="3" placeholder="Nhập bình luận của bạn..."></textarea>
                                    </div>
                                    <button class="btn btn-danger btn-sm px-4">
                                        <i class="bi bi-send me-1"></i>Gửi bình luận
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Bài viết liên quan -->
                        <div>
                            <h5 class="fw-bold mb-4">Bài viết liên quan</h5>
                            <div class="row row-cols-1 row-cols-md-3 g-3">
                                <div class="col" v-for="related in relatedBlogs" :key="related.id">
                                    <div class="card h-100 border-0 shadow-sm article-card">
                                        <RouterLink :to="`/articles/${related.id}`" class="text-decoration-none">
                                            <div class="article-thumb-sm d-flex align-items-center justify-content-center">
                                                <img :src="related.image" :alt="related.title" class="img-fluid">
                                            </div>
                                            <div class="card-body">
                                                <span class="badge bg-danger mb-2">{{ related.badge }}</span>
                                                <h6 class="card-title article-title">{{ related.title }}</h6>
                                            </div>
                                            <div class="card-footer bg-transparent small">
                                                <i class="bi bi-calendar3 me-1"></i>{{ related.date }}
                                                <span class="float-end"><i class="bi bi-heart me-1"></i>{{ related.likes }}</span>
                                            </div>
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div><!-- /col-lg-8 -->

                    <!-- ===== SIDEBAR ===== -->
                    <div class="col-lg-4">
                        <div class="card border-0 shadow-sm mb-4 sidebar-widget-card">
                            <div class="card-body">
                                <h6 class="mb-3"><i class="bi bi-fire me-2 text-danger"></i>Bài viết nổi bật</h6>
                                <ol class="list-unstyled mb-0">
                                    <li class="d-flex gap-3 mb-3 pb-3 border-bottom" v-for="(b, i) in topBlogs" :key="b.id">
                                        <span class="fs-3 fw-bold lh-1 text-danger">{{ String(i+1).padStart(2,'0') }}</span>
                                        <div>
                                            <RouterLink :to="`/articles/${b.id}`" class="text-decoration-none fw-semibold article-title">{{ b.title }}</RouterLink>
                                            <div class="text-muted small"><i class="bi bi-heart me-1"></i>{{ b.likes }} lượt thích</div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>

                </div><!-- /.row -->
            </div><!-- /.container -->
        </main>

        <!-- Không tìm thấy bài viết -->
        <div v-else class="container py-5 text-center">
            <i class="bi bi-exclamation-circle fs-1 text-muted d-block mb-3"></i>
            <h4>Không tìm thấy bài viết</h4>
            <RouterLink to="/articles" class="btn btn-primary mt-3">Quay lại danh sách</RouterLink>
        </div>

        <PublicFooter />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PublicNavBar from '../components/PublicNavBar.vue'
import PublicFooter from '../components/PublicFooter.vue'
import { blogs } from '../data/Blog'

const route = useRoute()
const blog = computed(() => blogs.find(b => b.id === Number(route.params.id)))
const relatedBlogs = computed(() => {
    const current = blog.value
    if (!current) return []
    const sameCategory = blogs.filter(b => b.id !== current.id && b.category === current.category)
    const others = blogs.filter(b => b.id !== current.id && b.category !== current.category)
    return [...sameCategory, ...others].slice(0, 3)
})
const topBlogs = computed(() => [...blogs].sort((a, b) => b.likes - a.likes).slice(0, 3))
</script>

<style></style>
