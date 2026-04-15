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
                    <div>
                        <h4>Dashboard</h4>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0 small">
                                <li class="breadcrumb-item active">Tổng quan</li>
                            </ol>
                        </nav>
                    </div>
                    <a href="add-article.html" class="btn btn-primary btn-sm">
                        <i class="bi bi-plus-lg me-1"></i>Thêm bài viết
                    </a>
                </div>

                <!-- ===== STAT CARDS ===== -->
                <div class="row g-3 mb-4">
                    <div class="col-sm-6 col-xl-3">
                        <div class="card stat-card shadow-sm h-100">
                            <div class="card-body d-flex align-items-center gap-3">
                                <div class="stat-icon bg-primary bg-opacity-10 text-primary">
                                    <i class="bi bi-file-earmark-text"></i>
                                </div>
                                <div>
                                    <div class="text-muted small">Tổng bài viết</div>
                                    <div class="fs-4 fw-bold lh-1">48</div>
                                    <div class="text-success small mt-1"><i class="bi bi-arrow-up-short"></i>+3 tuần này
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="card stat-card shadow-sm h-100">
                            <div class="card-body d-flex align-items-center gap-3">
                                <div class="stat-icon bg-success bg-opacity-10 text-success">
                                    <i class="bi bi-people"></i>
                                </div>
                                <div>
                                    <div class="text-muted small">Người dùng</div>
                                    <div class="fs-4 fw-bold lh-1">1,234</div>
                                    <div class="text-success small mt-1"><i class="bi bi-arrow-up-short"></i>+28 tuần
                                        này</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="card stat-card shadow-sm h-100">
                            <div class="card-body d-flex align-items-center gap-3">
                                <div class="stat-icon bg-warning bg-opacity-10 text-warning">
                                    <i class="bi bi-eye"></i>
                                </div>
                                <div>
                                    <div class="text-muted small">Lượt xem</div>
                                    <div class="fs-4 fw-bold lh-1">52.4k</div>
                                    <div class="text-success small mt-1"><i class="bi bi-arrow-up-short"></i>+12% tháng
                                        này</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="card stat-card shadow-sm h-100">
                            <div class="card-body d-flex align-items-center gap-3">
                                <div class="stat-icon bg-danger bg-opacity-10 text-danger">
                                    <i class="bi bi-chat-dots"></i>
                                </div>
                                <div>
                                    <div class="text-muted small">Bình luận chờ duyệt</div>
                                    <div class="fs-4 fw-bold lh-1">12</div>
                                    <div class="text-danger small mt-1"><i class="bi bi-exclamation-circle me-1"></i>Cần
                                        xử lý</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ===== ROW 2: Biểu đồ + Bài viết mới nhất ===== -->
                <div class="row g-4 mb-4">
                    <!-- Biểu đồ lượt xem (placeholder) -->
                    <div class="col-lg-8">
                        <div class="card border-0 shadow-sm h-100">
                            <div
                                class="card-header bg-white border-bottom d-flex justify-content-between align-items-center">
                                <h6 class="fw-bold mb-0"><i class="bi bi-bar-chart-line me-2 text-primary"></i>Lượt xem
                                    theo tuần</h6>
                                <select class="form-select form-select-sm w-auto border-0 text-muted">
                                    <option>7 ngày qua</option>
                                    <option>30 ngày qua</option>
                                    <option>3 tháng qua</option>
                                </select>
                            </div>
                            <div class="card-body d-flex align-items-center justify-content-center"
                                style="min-height:240px;">
                                <!-- Placeholder chart bars -->
                                <div class="w-100 px-3">
                                    <div class="d-flex align-items-end justify-content-between gap-2"
                                        style="height:180px;">
                                        <div class="d-flex flex-column align-items-center gap-1 flex-fill">
                                            <div class="bg-primary rounded-top w-100" style="height:40%;opacity:.7;">
                                            </div>
                                            <small class="text-muted" style="font-size:.7rem;">T2</small>
                                        </div>
                                        <div class="d-flex flex-column align-items-center gap-1 flex-fill">
                                            <div class="bg-primary rounded-top w-100" style="height:65%;opacity:.7;">
                                            </div>
                                            <small class="text-muted" style="font-size:.7rem;">T3</small>
                                        </div>
                                        <div class="d-flex flex-column align-items-center gap-1 flex-fill">
                                            <div class="bg-primary rounded-top w-100" style="height:50%;opacity:.7;">
                                            </div>
                                            <small class="text-muted" style="font-size:.7rem;">T4</small>
                                        </div>
                                        <div class="d-flex flex-column align-items-center gap-1 flex-fill">
                                            <div class="bg-primary rounded-top w-100" style="height:80%;"></div>
                                            <small class="text-muted" style="font-size:.7rem;">T5</small>
                                        </div>
                                        <div class="d-flex flex-column align-items-center gap-1 flex-fill">
                                            <div class="bg-primary rounded-top w-100" style="height:70%;"></div>
                                            <small class="text-muted" style="font-size:.7rem;">T6</small>
                                        </div>
                                        <div class="d-flex flex-column align-items-center gap-1 flex-fill">
                                            <div class="bg-success rounded-top w-100" style="height:95%;"></div>
                                            <small class="text-muted" style="font-size:.7rem;">T7</small>
                                        </div>
                                        <div class="d-flex flex-column align-items-center gap-1 flex-fill">
                                            <div class="bg-success rounded-top w-100" style="height:60%;opacity:.8;">
                                            </div>
                                            <small class="text-muted" style="font-size:.7rem;">CN</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Tỉ lệ danh mục (placeholder) -->
                    <div class="col-lg-4">
                        <div class="card border-0 shadow-sm h-100">
                            <div class="card-header bg-white border-bottom">
                                <h6 class="fw-bold mb-0"><i class="bi bi-pie-chart me-2 text-primary"></i>Bài viết theo
                                    danh mục</h6>
                            </div>
                            <div class="card-body">
                                <!-- Placeholder donut -->
                                <div class="d-flex justify-content-center mb-4">
                                    <div class="rounded-circle border border-5 d-flex align-items-center justify-content-center text-muted"
                                        style="width:120px;height:120px;border-color:#dee2e6 !important;">
                                        <small class="text-center" style="font-size:.7rem;">Biểu đồ<br>tròn</small>
                                    </div>
                                </div>
                                <ul class="list-unstyled small mb-0">
                                    <li class="d-flex justify-content-between align-items-center mb-2">
                                        <span><span class="d-inline-block rounded me-2"
                                                style="width:10px;height:10px;background:#0d6efd;"></span>Lập
                                            trình</span>
                                        <span class="fw-semibold">18 (37%)</span>
                                    </li>
                                    <li class="d-flex justify-content-between align-items-center mb-2">
                                        <span><span class="d-inline-block rounded me-2"
                                                style="width:10px;height:10px;background:#198754;"></span>Công
                                            nghệ</span>
                                        <span class="fw-semibold">12 (25%)</span>
                                    </li>
                                    <li class="d-flex justify-content-between align-items-center mb-2">
                                        <span><span class="d-inline-block rounded me-2"
                                                style="width:10px;height:10px;background:#0dcaf0;"></span>Thiết
                                            kế</span>
                                        <span class="fw-semibold">9 (18%)</span>
                                    </li>
                                    <li class="d-flex justify-content-between align-items-center mb-2">
                                        <span><span class="d-inline-block rounded me-2"
                                                style="width:10px;height:10px;background:#6c757d;"></span>Cuộc
                                            sống</span>
                                        <span class="fw-semibold">7 (14%)</span>
                                    </li>
                                    <li class="d-flex justify-content-between align-items-center">
                                        <span><span class="d-inline-block rounded me-2"
                                                style="width:10px;height:10px;background:#dc3545;"></span>Bảo mật</span>
                                        <span class="fw-semibold">5 (10%) </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ===== ROW 3: Bài viết gần đây + Bình luận chờ duyệt ===== -->
                <div class="row g-4">
                    <!-- Bài viết gần đây -->
                    <div class="col-lg-7">
                        <div class="card border-0 shadow-sm">
                            <div
                                class="card-header bg-white border-bottom d-flex justify-content-between align-items-center">
                                <h6 class="fw-bold mb-0"><i class="bi bi-clock-history me-2 text-primary"></i>Bài viết
                                    gần đây</h6>
                                <a href="manage-articles.html" class="btn btn-sm btn-outline-primary">Xem tất cả</a>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table admin-table mb-0">
                                        <thead>
                                            <tr>
                                                <th class="ps-4">Tiêu đề</th>
                                                <th>Danh mục</th>
                                                <th>Trạng thái</th>
                                                <th>Ngày</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="ps-4">
                                                    <div class="fw-semibold small text-truncate"
                                                        style="max-width:200px;">Xu hướng công nghệ 2026</div>
                                                </td>
                                                <td><span class="badge bg-warning text-dark">Công nghệ</span></td>
                                                <td><span class="badge bg-success">Đã đăng</span></td>
                                                <td class="text-muted small">20/03/2026</td>
                                                <td>
                                                    <a href="add-article.html"
                                                        class="btn btn-sm btn-outline-secondary py-0 px-2">
                                                        <i class="bi bi-pencil"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ps-4">
                                                    <div class="fw-semibold small text-truncate"
                                                        style="max-width:200px;">Học Bootstrap 5 từ A đến Z</div>
                                                </td>
                                                <td><span class="badge bg-success">Lập trình</span></td>
                                                <td><span class="badge bg-success">Đã đăng</span></td>
                                                <td class="text-muted small">18/03/2026</td>
                                                <td>
                                                    <a href="add-article.html"
                                                        class="btn btn-sm btn-outline-secondary py-0 px-2">
                                                        <i class="bi bi-pencil"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ps-4">
                                                    <div class="fw-semibold small text-truncate"
                                                        style="max-width:200px;">10 nguyên tắc UI/UX 2026</div>
                                                </td>
                                                <td><span class="badge bg-info text-dark">Thiết kế</span></td>
                                                <td><span class="badge bg-secondary">Nháp</span></td>
                                                <td class="text-muted small">15/03/2026</td>
                                                <td>
                                                    <a href="add-article.html"
                                                        class="btn btn-sm btn-outline-secondary py-0 px-2">
                                                        <i class="bi bi-pencil"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ps-4">
                                                    <div class="fw-semibold small text-truncate"
                                                        style="max-width:200px;">Bảo mật ứng dụng web</div>
                                                </td>
                                                <td><span class="badge bg-danger">Bảo mật</span></td>
                                                <td><span class="badge bg-success">Đã đăng</span></td>
                                                <td class="text-muted small">08/03/2026</td>
                                                <td>
                                                    <a href="add-article.html"
                                                        class="btn btn-sm btn-outline-secondary py-0 px-2">
                                                        <i class="bi bi-pencil"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ps-4">
                                                    <div class="fw-semibold small text-truncate"
                                                        style="max-width:200px;">So sánh SQL và NoSQL</div>
                                                </td>
                                                <td><span class="badge" style="background:#6f42c1;">Database</span></td>
                                                <td><span class="badge bg-danger">Ẩn</span></td>
                                                <td class="text-muted small">05/03/2026</td>
                                                <td>
                                                    <a href="add-article.html"
                                                        class="btn btn-sm btn-outline-secondary py-0 px-2">
                                                        <i class="bi bi-pencil"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bình luận chờ duyệt -->
                    <div class="col-lg-5">
                        <div class="card border-0 shadow-sm">
                            <div
                                class="card-header bg-white border-bottom d-flex justify-content-between align-items-center">
                                <h6 class="fw-bold mb-0">
                                    <i class="bi bi-chat-dots me-2 text-warning"></i>Bình luận chờ duyệt
                                    <span class="badge bg-warning text-dark ms-1">12</span>
                                </h6>
                                <a href="manage-comments.html" class="btn btn-sm btn-outline-warning">Xem tất cả</a>
                            </div>
                            <div class="card-body p-0">
                                <!-- Comment 1 -->
                                <div class="p-3 border-bottom">
                                    <div class="d-flex justify-content-between align-items-start mb-1">
                                        <span class="fw-semibold small">Trần Thị B</span>
                                        <span class="text-muted" style="font-size:.72rem;">21/03/2026</span>
                                    </div>
                                    <p class="text-muted small mb-2">Bài viết rất hay! Tôi hoàn toàn đồng ý với quan
                                        điểm về tư duy hệ thống...</p>
                                    <div class="d-flex gap-2">
                                        <button class="btn btn-success btn-sm py-0 px-2"><i
                                                class="bi bi-check me-1"></i>Duyệt</button>
                                        <button class="btn btn-danger btn-sm py-0 px-2"><i class="bi bi-x me-1"></i>Từ
                                            chối</button>
                                    </div>
                                </div>
                                <!-- Comment 2 -->
                                <div class="p-3 border-bottom">
                                    <div class="d-flex justify-content-between align-items-start mb-1">
                                        <span class="fw-semibold small">Lê Văn C</span>
                                        <span class="text-muted" style="font-size:.72rem;">22/03/2026</span>
                                    </div>
                                    <p class="text-muted small mb-2">Mong có bài chuyên sâu hơn về DeFi trong tương lai
                                        gần!</p>
                                    <div class="d-flex gap-2">
                                        <button class="btn btn-success btn-sm py-0 px-2"><i
                                                class="bi bi-check me-1"></i>Duyệt</button>
                                        <button class="btn btn-danger btn-sm py-0 px-2"><i class="bi bi-x me-1"></i>Từ
                                            chối</button>
                                    </div>
                                </div>
                                <!-- Comment 3 -->
                                <div class="p-3">
                                    <div class="d-flex justify-content-between align-items-start mb-1">
                                        <span class="fw-semibold small">Phạm Minh D</span>
                                        <span class="text-muted" style="font-size:.72rem;">23/03/2026</span>
                                    </div>
                                    <p class="text-muted small mb-2">Cảm ơn tác giả, bài viết giúp ích cho tôi rất nhiều
                                        trong dự án hiện tại.</p>
                                    <div class="d-flex gap-2">
                                        <button class="btn btn-success btn-sm py-0 px-2"><i
                                                class="bi bi-check me-1"></i>Duyệt</button>
                                        <button class="btn btn-danger btn-sm py-0 px-2"><i class="bi bi-x me-1"></i>Từ
                                            chối</button>
                                    </div>
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
import AdminTopBar from '../../components/AdminTopBar.vue'
import AdminSideBar from '../../components/AdminSideBar.vue'
</script>

<style></style>