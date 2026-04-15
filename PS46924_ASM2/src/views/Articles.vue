<template>
    <div>
        <PublicNavBar />

        <!-- ===== PAGE HEADER ===== -->
        <div class="bg-dark text-white py-5">
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-2">
                        <li class="breadcrumb-item"><RouterLink to="/" class="text-light">Trang chủ</RouterLink></li>
                        <li class="breadcrumb-item active text-white-50" aria-current="page">Bài viết</li>
                    </ol>
                </nav>
                <h1 class="fw-bold mb-1">Tất cả bài viết</h1>
                <p class="text-white-50 mb-0">Khám phá kho nội dung phong phú từ cộng đồng M1Entertainment</p>
            </div>
        </div>

        <!-- ===== MAIN ===== -->
        <main>
            <div class="container py-5">
                <div class="row g-4">

                    <!-- ===== CỘT CHÍNH (8/12) ===== -->
                    <div class="col-lg-8">

                        <!-- Bộ lọc & sắp xếp -->
                        <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
                            <div class="d-flex flex-wrap gap-2">
                                <button class="btn btn-primary btn-sm">Tất cả</button>
                                <button class="btn btn-outline-secondary btn-sm">Lập trình</button>
                                <button class="btn btn-outline-secondary btn-sm">Công nghệ</button>
                                <button class="btn btn-outline-secondary btn-sm">Thiết kế</button>
                                <button class="btn btn-outline-secondary btn-sm">Cuộc sống</button>
                                <button class="btn btn-outline-secondary btn-sm">Bảo mật</button>
                            </div>
                            <select class="form-select form-select-sm w-auto">
                                <option>Mới nhất</option>
                                <option>Cũ nhất</option>
                                <option>Đọc nhiều nhất</option>
                                <option>Yêu thích nhất</option>
                            </select>
                        </div>

                        <!-- Danh sách bài viết -->
                        <div class="row g-3">
                            <div class="col-md-6 col-lg-4" v-for="blog in blogs" :key="blog.id">
                                <div class="card h-100 border-0 bg-dark article-card">
                                    <RouterLink :to="`/articles/${blog.id}`" class="text-decoration-none">
                                        <div class="article-thumb-sm d-flex align-items-center justify-content-center">
                                            <img :src="blog.image" :alt="blog.title" class="img-fluid">
                                        </div>
                                        <div class="card-body">
                                            <span class="badge bg-danger mb-2">{{ blog.badge }}</span>
                                            <h6 class="card-title fw-bold text-white article-title">{{ blog.title }}</h6>
                                            <p class="card-text text-white-50 small">{{ blog.description }}</p>
                                        </div>
                                        <div class="card-footer bg-transparent border-0 small text-white-50">
                                            <i class="bi bi-calendar3 me-1"></i>{{ blog.date }}
                                            <span class="float-end"><i class="bi bi-heart me-1"></i>{{ blog.likes }}</span>
                                        </div>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>

                        <!-- Phân trang -->
                        <nav class="mt-5" aria-label="Phân trang bài viết">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#"><i class="bi bi-chevron-right"></i></a>
                                </li>
                            </ul>
                            <p class="text-center text-muted small mt-2">Trang 1 / 1 — Tổng {{ blogs.length }} bài viết</p>
                        </nav>
                    </div><!-- /col-lg-8 -->

                    <!-- ===== SIDEBAR (4/12) ===== -->
                    <div class="col-lg-4">

                        <!-- Bài viết nổi bật -->
                        <div class="card border-0">
                            <div class="card-body">
                                <h6 class="mb-3"><i class="bi bi-fire me-2" style="color:#ffb300;"></i>Bài viết nổi bật</h6>
                                <ol class="list-unstyled mb-0">
                                    <li class="d-flex gap-3 mb-3 pb-3 border-bottom" v-for="(blog, index) in [...blogs].sort((a,b) => b.likes - a.likes).slice(0,3)" :key="blog.id">
                                        <span class="fs-3 fw-bold lh-1" style="color:#ffb300;">{{ String(index+1).padStart(2,'0') }}</span>
                                        <div>
                                            <RouterLink :to="`/articles/${blog.id}`" class="text-decoration-none fw-semibold article-title" style="color:#ffb300;">{{ blog.title }}</RouterLink>
                                            <div style="font-size:.75rem;color:#aaa;"><i class="bi bi-heart me-1" style="color:#ffb300;"></i>{{ blog.likes }} lượt thích</div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div><!-- /col-lg-4 -->

                </div><!-- /.row -->
            </div><!-- /.container -->
        </main>

        <PublicFooter />
    </div>
</template>

<script setup>
import PublicNavBar from '../components/PublicNavBar.vue'
import PublicFooter from '../components/PublicFooter.vue'
import { blogs } from '../data/Blog'
</script>

<style></style>
