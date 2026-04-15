<template>
    <PublicNavBar />
    <div data-page="index bg-dark">
        <!-- ===== CAROUSEL ===== -->
        <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/imgs/T13lllT.png" class="d-block w-100" alt="T1 nâng cúp tại CKTG 2025">
                    <div class="carousel-caption d-none d-md-block pb-5 text-uppercase">
                        <span class="badge bg-danger text-white mb-2">Hot</span>
                        <h2 class="text-white">WORLDS 2025</h2>
                        <p class="text-white">Đại chiến viễn thông' kết thúc, T1 vô địch 3 lần liên tiếp</p>
                        <a href="#" class="btn btn-danger btn-sm px-4 text-white">Đọc ngay</a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/imgs/G23_0GenG.png" class="d-block w-100" alt="G2 3 - 0 GEN">
                    <div class="carousel-caption d-none d-md-block pb-5 text-uppercase">
                        <span class="badge bg-danger text-white mb-2">Shock</span>
                        <h2 class="text-white">G2 3 - 0 GEN</h2>
                        <p class="text-white">ĐỊA CHẤN ĐÃ XẢY RA!!!</p>
                        <a href="#" class="btn btn-danger btn-sm px-4 text-white">Đọc ngay</a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/imgs/GumaLeaveT1.png" class="d-block w-100" alt="Guma rời T1">
                    <div class="carousel-caption d-none d-md-block pb-5 text-uppercase">
                        <span class="badge bg-danger text-white mb-2">Hot</span>
                        <h2 class="text-white">Guma rời T1</h2>
                        <p class="text-white">Đcú chuyển nhượng có thể làm rung chuyển LCK</p>
                        <a href="#" class="btn btn-danger btn-sm px-4 text-white">Đọc ngay</a>
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
                            id="articleScrollPrev">
                            <i class="bi bi-chevron-left"></i>
                        </button>

                        <div class="row row-cols-1 row-cols-md-4 g-3" id="articleList">
                            <div class="col" v-for="blog in blogs" :key="blog.id">
                                <div class="card h-100 border-0 shadow-sm bg-dark text-white article-card">
                                    <router-link :to="`/articles/${blog.id}`"
                                        class="text-decoration-none article-title">
                                        <div
                                            class="article-thumb-sm bg-danger d-flex align-items-center justify-content-center">
                                            <img :src="blog.image" :alt="blog.title" class="img-fluid">
                                        </div>
                                        <div class="card-body">
                                            <span class="badge bg-danger mb-2">{{ blog.badge }}</span>
                                            <h6 class="card-title font-lol">{{ blog.title }}</h6>
                                            <p class="card-text small">{{ blog.description }}</p>
                                        </div>
                                        <div class="card-footer bg-transparent border-0 small text-white-50">
                                            <i class="bi bi-calendar3 me-1 text-danger"></i>{{ blog.date }}
                                            <span class="float-end"><i class="bi bi-heart me-1 text-danger"></i>{{
                                                blog.likes }}</span>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <button
                            class="btn btn-outline-secondary btn-sm position-absolute top-50 translate-middle-y end-0 z-1"
                            id="articleScrollNext">
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
import { blogs } from '../data/Blog'
</script>

<style></style>