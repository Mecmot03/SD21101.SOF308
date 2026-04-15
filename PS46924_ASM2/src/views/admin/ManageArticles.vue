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
                    <h4>Quản lý bài viết</h4>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 small">
                            <li class="breadcrumb-item"><a href="dashboard.html">Dashboard</a></li>
                            <li class="breadcrumb-item active">Bài viết</li>
                        </ol>
                    </nav>
                </div>
                <a href="add-article.html" class="btn btn-primary btn-sm">
                    <i class="bi bi-plus-lg me-1"></i>Thêm bài viết mới
                </a>
            </div>

            <!-- ===== FILTER BAR ===== -->
            <div class="card border-0 shadow-sm mb-4">
                <div class="card-body py-3">
                    <div class="row g-2 align-items-end">
                        <!-- Tìm kiếm -->
                        <div class="col-md-4">
                            <label class="form-label small mb-1 fw-semibold text-muted">Tìm kiếm</label>
                            <div class="input-group input-group-sm">
                                <span class="input-group-text border-end-0 bg-white"><i class="bi bi-search text-muted"></i></span>
                                <input type="text" class="form-control border-start-0" placeholder="Tìm tiêu đề bài viết...">
                            </div>
                        </div>
                        <!-- Danh mục -->
                        <div class="col-md-2">
                            <label class="form-label small mb-1 fw-semibold text-muted">Danh mục</label>
                            <select class="form-select form-select-sm">
                                <option value="">Tất cả</option>
                                <option>Lập trình</option>
                                <option>Công nghệ</option>
                                <option>Thiết kế</option>
                                <option>Bảo mật</option>
                                <option>Cuộc sống</option>
                                <option>Database</option>
                            </select>
                        </div>
                        <!-- Trạng thái -->
                        <div class="col-md-2">
                            <label class="form-label small mb-1 fw-semibold text-muted">Trạng thái</label>
                            <select class="form-select form-select-sm">
                                <option value="">Tất cả</option>
                                <option>Đã đăng</option>
                                <option>Nháp</option>
                                <option>Ẩn</option>
                            </select>
                        </div>
                        <!-- Tác giả -->
                        <div class="col-md-2">
                            <label class="form-label small mb-1 fw-semibold text-muted">Tác giả</label>
                            <select class="form-select form-select-sm">
                                <option value="">Tất cả</option>
                                <option>Nguyễn Văn A</option>
                                <option>Trần Thị B</option>
                                <option>Lê Minh C</option>
                            </select>
                        </div>
                        <!-- Nút lọc -->
                        <div class="col-md-2 d-flex gap-2">
                            <button class="btn btn-primary btn-sm flex-fill">
                                <i class="bi bi-funnel me-1"></i>Lọc
                            </button>
                            <button class="btn btn-outline-secondary btn-sm" title="Đặt lại">
                                <i class="bi bi-arrow-counterclockwise"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ===== BULK ACTIONS + COUNT ===== -->
            <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                <div class="d-flex align-items-center gap-2 flex-wrap">
                    <select class="form-select form-select-sm w-auto">
                        <option>Hành động hàng loạt</option>
                        <option>Đăng tất cả</option>
                        <option>Ẩn tất cả</option>
                        <option>Xóa tất cả</option>
                    </select>
                    <button class="btn btn-sm btn-outline-secondary">Áp dụng</button>
                    <span class="text-muted small">Đã chọn: <strong>0</strong></span>
                </div>
                <div class="text-muted small">
                    Hiển thị <strong>1–10</strong> trong tổng số <strong>48</strong> bài viết
                </div>
            </div>

            <!-- ===== TABLE ===== -->
            <div class="card border-0 shadow-sm mb-4">
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table admin-table mb-0">
                            <thead>
                                <tr>
                                    <th class="ps-4" style="width:40px;">
                                        <input class="form-check-input" type="checkbox" id="checkAll">
                                    </th>
                                    <th style="width:60px;">#</th>
                                    <th>Bài viết</th>
                                    <th>Danh mục</th>
                                    <th>Tác giả</th>
                                    <th>Trạng thái</th>
                                    <th class="text-end">Lượt xem</th>
                                    <th>Ngày đăng</th>
                                    <th class="text-center">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Row 1 -->
                                <tr>
                                    <td class="ps-4"><input class="form-check-input row-check" type="checkbox"></td>
                                    <td class="text-muted small">001</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="rounded article-thumb-table" style="background:linear-gradient(135deg,#0d6efd,#6f42c1);"></div>
                                            <div>
                                                <div class="fw-semibold small">Xu hướng công nghệ 2026</div>
                                                <div class="text-muted text-xxs">Những gì sẽ thay đổi thế giới trong năm tới...</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-warning text-dark">Công nghệ</span></td>
                                    <td><span class="small">Nguyễn Văn A</span></td>
                                    <td><span class="badge bg-success">Đã đăng</span></td>
                                    <td class="text-end small fw-semibold">8.2k</td>
                                    <td class="text-muted small">20/03/2026</td>
                                    <td>
                                        <div class="d-flex gap-1 justify-content-center">
                                            <a href="../public/article-detail.html" class="btn btn-sm btn-outline-info py-0 px-2" title="Xem" target="_blank">
                                                <i class="bi bi-eye"></i>
                                            </a>
                                            <a href="add-article.html" class="btn btn-sm btn-outline-primary py-0 px-2" title="Sửa">
                                                <i class="bi bi-pencil"></i>
                                            </a>
                                            <button class="btn btn-sm btn-outline-danger py-0 px-2" title="Xóa" data-bs-toggle="modal" data-bs-target="#deleteModal" data-id="001">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Row 2 -->
                                <tr>
                                    <td class="ps-4"><input class="form-check-input row-check" type="checkbox"></td>
                                    <td class="text-muted small">002</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="rounded article-thumb-table" style="background:linear-gradient(135deg,#198754,#0d6efd);"></div>
                                            <div>
                                                <div class="fw-semibold small">Học Bootstrap 5 từ A đến Z</div>
                                                <div class="text-muted text-xxs">Hướng dẫn đầy đủ cho người mới bắt đầu...</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-success">Lập trình</span></td>
                                    <td><span class="small">Nguyễn Văn A</span></td>
                                    <td><span class="badge bg-success">Đã đăng</span></td>
                                    <td class="text-end small fw-semibold">5.7k</td>
                                    <td class="text-muted small">18/03/2026</td>
                                    <td>
                                        <div class="d-flex gap-1 justify-content-center">
                                            <a href="../public/article-detail.html" class="btn btn-sm btn-outline-info py-0 px-2" title="Xem" target="_blank">
                                                <i class="bi bi-eye"></i>
                                            </a>
                                            <a href="add-article.html" class="btn btn-sm btn-outline-primary py-0 px-2" title="Sửa">
                                                <i class="bi bi-pencil"></i>
                                            </a>
                                            <button class="btn btn-sm btn-outline-danger py-0 px-2" title="Xóa" data-bs-toggle="modal" data-bs-target="#deleteModal" data-id="002">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Row 3 -->
                                <tr>
                                    <td class="ps-4"><input class="form-check-input row-check" type="checkbox"></td>
                                    <td class="text-muted small">003</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="rounded article-thumb-table" style="background:linear-gradient(135deg,#0dcaf0,#6f42c1);"></div>
                                            <div>
                                                <div class="fw-semibold small">10 nguyên tắc UI/UX 2026</div>
                                                <div class="text-muted text-xxs">Thiết kế trải nghiệm người dùng hiện đại...</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-info text-dark">Thiết kế</span></td>
                                    <td><span class="small">Trần Thị B</span></td>
                                    <td><span class="badge bg-secondary">Nháp</span></td>
                                    <td class="text-end small fw-semibold">—</td>
                                    <td class="text-muted small">15/03/2026</td>
                                    <td>
                                        <div class="d-flex gap-1 justify-content-center">
                                            <a href="../public/article-detail.html" class="btn btn-sm btn-outline-info py-0 px-2" title="Xem" target="_blank">
                                                <i class="bi bi-eye"></i>
                                            </a>
                                            <a href="add-article.html" class="btn btn-sm btn-outline-primary py-0 px-2" title="Sửa">
                                                <i class="bi bi-pencil"></i>
                                            </a>
                                            <button class="btn btn-sm btn-outline-danger py-0 px-2" title="Xóa" data-bs-toggle="modal" data-bs-target="#deleteModal" data-id="003">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Row 4 -->
                                <tr>
                                    <td class="ps-4"><input class="form-check-input row-check" type="checkbox"></td>
                                    <td class="text-muted small">004</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="rounded article-thumb-table" style="background:linear-gradient(135deg,#dc3545,#fd7e14);"></div>
                                            <div>
                                                <div class="fw-semibold small">Bảo mật ứng dụng web — OWASP Top 10</div>
                                                <div class="text-muted text-xxs">Phòng chống các lỗ hổng phổ biến nhất...</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-danger">Bảo mật</span></td>
                                    <td><span class="small">Lê Minh C</span></td>
                                    <td><span class="badge bg-success">Đã đăng</span></td>
                                    <td class="text-end small fw-semibold">3.1k</td>
                                    <td class="text-muted small">08/03/2026</td>
                                    <td>
                                        <div class="d-flex gap-1 justify-content-center">
                                            <a href="../public/article-detail.html" class="btn btn-sm btn-outline-info py-0 px-2" title="Xem" target="_blank">
                                                <i class="bi bi-eye"></i>
                                            </a>
                                            <a href="add-article.html" class="btn btn-sm btn-outline-primary py-0 px-2" title="Sửa">
                                                <i class="bi bi-pencil"></i>
                                            </a>
                                            <button class="btn btn-sm btn-outline-danger py-0 px-2" title="Xóa" data-bs-toggle="modal" data-bs-target="#deleteModal" data-id="004">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Row 5 -->
                                <tr>
                                    <td class="ps-4"><input class="form-check-input row-check" type="checkbox"></td>
                                    <td class="text-muted small">005</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="rounded article-thumb-table" style="background:linear-gradient(135deg,#6f42c1,#0d6efd);"></div>
                                            <div>
                                                <div class="fw-semibold small">So sánh SQL và NoSQL</div>
                                                <div class="text-muted text-xxs">Khi nào dùng Relational hay Document DB?...</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="badge bg-purple">Database</span></td>
                                    <td><span class="small">Nguyễn Văn A</span></td>
                                    <td><span class="badge bg-danger">Ẩn</span></td>
                                    <td class="text-end small fw-semibold">1.4k</td>
                                    <td class="text-muted small">05/03/2026</td>
                                    <td>
                                        <div class="d-flex gap-1 justify-content-center">
                                            <a href="../public/article-detail.html" class="btn btn-sm btn-outline-info py-0 px-2" title="Xem" target="_blank">
                                                <i class="bi bi-eye"></i>
                                            </a>
                                            <a href="add-article.html" class="btn btn-sm btn-outline-primary py-0 px-2" title="Sửa">
                                                <i class="bi bi-pencil"></i>
                                            </a>
                                            <button class="btn btn-sm btn-outline-danger py-0 px-2" title="Xóa" data-bs-toggle="modal" data-bs-target="#deleteModal" data-id="005">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- ===== PAGINATION ===== -->
            <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div class="d-flex align-items-center gap-2 text-muted small">
                    Hiển thị
                    <select class="form-select form-select-sm w-auto">
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                    </select>
                    dòng mỗi trang
                </div>
                <nav>
                    <ul class="pagination pagination-sm mb-0">
                        <li class="page-item disabled"><a class="page-link" href="#">«</a></li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                        <li class="page-item"><a class="page-link" href="#">»</a></li>
                    </ul>
                </nav>
            </div>

        </main>
    </div>

    <!-- ===== DELETE MODAL ===== -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content shadow">
                <div class="modal-header border-0 pb-0">
                    <h6 class="modal-title fw-bold" id="deleteModalLabel">
                        <i class="bi bi-exclamation-triangle-fill text-danger me-2"></i>Xác nhận xóa bài viết
                    </h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="mb-0 text-muted">Bạn có chắc muốn xóa bài viết này không? Hành động này <strong class="text-danger">không thể hoàn tác</strong>.</p>
                </div>
                <div class="modal-footer border-0 pt-0">
                    <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">
                        <i class="bi bi-x me-1"></i>Hủy
                    </button>
                    <button type="button" class="btn btn-danger btn-sm" id="confirmDelete">
                        <i class="bi bi-trash me-1"></i>Xóa bài viết
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import AdminTopBar from '../../components/AdminTopBar.vue'
import AdminSideBar from '../../components/AdminSideBar.vue'
</script>

<style >

</style>