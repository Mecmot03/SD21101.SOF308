<template>
    <div>
        <header class="admin-topbar d-flex align-items-center px-3 shadow-sm" id="adminTopbar"></header>

        <div class="d-flex flex-grow-1">
            <nav class="admin-sidebar d-flex flex-column" id="adminSidebar"></nav>

            <!-- ===== MAIN CONTENT ===== -->
            <main class="admin-content">

                <!-- Page header -->
                <div class="admin-page-header d-flex flex-wrap justify-content-between align-items-start gap-2">
                    <div>
                        <h4>Quản lý danh mục</h4>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0 small">
                                <li class="breadcrumb-item"><a href="dashboard.html">Dashboard</a></li>
                                <li class="breadcrumb-item active">Danh mục</li>
                            </ol>
                        </nav>
                    </div>
                    <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#categoryModal">
                        <i class="bi bi-plus-lg me-1"></i>Thêm danh mục
                    </button>
                </div>

                <div class="row g-4">
                    <!-- ===== TABLE ===== -->
                    <div class="col-lg-8">
                        <div class="card border-0 shadow-sm">
                            <div class="card-header bg-white d-flex justify-content-between align-items-center py-3">
                                <span class="fw-semibold">Danh sách danh mục</span>
                                <div class="input-group input-group-sm w-auto" style="min-width:200px;">
                                    <span class="input-group-text border-end-0 bg-white"><i
                                            class="bi bi-search text-muted"></i></span>
                                    <input type="text" class="form-control border-start-0"
                                        placeholder="Tìm danh mục...">
                                </div>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table admin-table mb-0">
                                        <thead>
                                            <tr>
                                                <th class="ps-4" style="width:40px;"><input class="form-check-input"
                                                        type="checkbox" id="checkAll"></th>
                                                <th style="width:50px;">#</th>
                                                <th>Tên danh mục</th>
                                                <th>Slug</th>
                                                <th class="text-center">Bài viết</th>
                                                <th>Trạng thái</th>
                                                <th class="text-center">Thao tác</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="ps-4"><input class="form-check-input" type="checkbox"></td>
                                                <td class="text-muted small">01</td>
                                                <td>
                                                    <div class="d-flex align-items-center gap-2">
                                                        <span class="badge rounded-pill"
                                                            style="background:#0d6efd;width:10px;height:10px;padding:0;"></span>
                                                        <span class="fw-semibold small">Công nghệ</span>
                                                    </div>
                                                </td>
                                                <td><code class="small text-muted">cong-nghe</code></td>
                                                <td class="text-center"><span
                                                        class="badge bg-primary bg-opacity-10 text-primary">14</span>
                                                </td>
                                                <td><span class="badge bg-success">Hiển thị</span></td>
                                                <td>
                                                    <div class="d-flex gap-1 justify-content-center">
                                                        <button class="btn btn-sm btn-outline-primary py-0 px-2"
                                                            title="Sửa" data-bs-toggle="modal"
                                                            data-bs-target="#categoryModal"><i
                                                                class="bi bi-pencil"></i></button>
                                                        <button class="btn btn-sm btn-outline-danger py-0 px-2"
                                                            title="Xóa" data-bs-toggle="modal"
                                                            data-bs-target="#deleteModal"><i
                                                                class="bi bi-trash"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ps-4"><input class="form-check-input" type="checkbox"></td>
                                                <td class="text-muted small">02</td>
                                                <td>
                                                    <div class="d-flex align-items-center gap-2">
                                                        <span class="badge rounded-pill"
                                                            style="background:#198754;width:10px;height:10px;padding:0;"></span>
                                                        <span class="fw-semibold small">Lập trình</span>
                                                    </div>
                                                </td>
                                                <td><code class="small text-muted">lap-trinh</code></td>
                                                <td class="text-center"><span
                                                        class="badge bg-primary bg-opacity-10 text-primary">21</span>
                                                </td>
                                                <td><span class="badge bg-success">Hiển thị</span></td>
                                                <td>
                                                    <div class="d-flex gap-1 justify-content-center">
                                                        <button class="btn btn-sm btn-outline-primary py-0 px-2"
                                                            title="Sửa" data-bs-toggle="modal"
                                                            data-bs-target="#categoryModal"><i
                                                                class="bi bi-pencil"></i></button>
                                                        <button class="btn btn-sm btn-outline-danger py-0 px-2"
                                                            title="Xóa" data-bs-toggle="modal"
                                                            data-bs-target="#deleteModal"><i
                                                                class="bi bi-trash"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ps-4"><input class="form-check-input" type="checkbox"></td>
                                                <td class="text-muted small">03</td>
                                                <td>
                                                    <div class="d-flex align-items-center gap-2">
                                                        <span class="badge rounded-pill"
                                                            style="background:#0dcaf0;width:10px;height:10px;padding:0;"></span>
                                                        <span class="fw-semibold small">Thiết kế</span>
                                                    </div>
                                                </td>
                                                <td><code class="small text-muted">thiet-ke</code></td>
                                                <td class="text-center"><span
                                                        class="badge bg-primary bg-opacity-10 text-primary">7</span>
                                                </td>
                                                <td><span class="badge bg-success">Hiển thị</span></td>
                                                <td>
                                                    <div class="d-flex gap-1 justify-content-center">
                                                        <button class="btn btn-sm btn-outline-primary py-0 px-2"
                                                            title="Sửa" data-bs-toggle="modal"
                                                            data-bs-target="#categoryModal"><i
                                                                class="bi bi-pencil"></i></button>
                                                        <button class="btn btn-sm btn-outline-danger py-0 px-2"
                                                            title="Xóa" data-bs-toggle="modal"
                                                            data-bs-target="#deleteModal"><i
                                                                class="bi bi-trash"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ps-4"><input class="form-check-input" type="checkbox"></td>
                                                <td class="text-muted small">04</td>
                                                <td>
                                                    <div class="d-flex align-items-center gap-2">
                                                        <span class="badge rounded-pill"
                                                            style="background:#ffc107;width:10px;height:10px;padding:0;"></span>
                                                        <span class="fw-semibold small">Bảo mật</span>
                                                    </div>
                                                </td>
                                                <td><code class="small text-muted">bao-mat</code></td>
                                                <td class="text-center"><span
                                                        class="badge bg-primary bg-opacity-10 text-primary">5</span>
                                                </td>
                                                <td><span class="badge bg-success">Hiển thị</span></td>
                                                <td>
                                                    <div class="d-flex gap-1 justify-content-center">
                                                        <button class="btn btn-sm btn-outline-primary py-0 px-2"
                                                            title="Sửa" data-bs-toggle="modal"
                                                            data-bs-target="#categoryModal"><i
                                                                class="bi bi-pencil"></i></button>
                                                        <button class="btn btn-sm btn-outline-danger py-0 px-2"
                                                            title="Xóa" data-bs-toggle="modal"
                                                            data-bs-target="#deleteModal"><i
                                                                class="bi bi-trash"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ps-4"><input class="form-check-input" type="checkbox"></td>
                                                <td class="text-muted small">05</td>
                                                <td>
                                                    <div class="d-flex align-items-center gap-2">
                                                        <span class="badge rounded-pill"
                                                            style="background:#6c757d;width:10px;height:10px;padding:0;"></span>
                                                        <span class="fw-semibold small">Cuộc sống</span>
                                                    </div>
                                                </td>
                                                <td><code class="small text-muted">cuoc-song</code></td>
                                                <td class="text-center"><span
                                                        class="badge bg-primary bg-opacity-10 text-primary">3</span>
                                                </td>
                                                <td><span class="badge bg-secondary">Ẩn</span></td>
                                                <td>
                                                    <div class="d-flex gap-1 justify-content-center">
                                                        <button class="btn btn-sm btn-outline-primary py-0 px-2"
                                                            title="Sửa" data-bs-toggle="modal"
                                                            data-bs-target="#categoryModal"><i
                                                                class="bi bi-pencil"></i></button>
                                                        <button class="btn btn-sm btn-outline-danger py-0 px-2"
                                                            title="Xóa" data-bs-toggle="modal"
                                                            data-bs-target="#deleteModal"><i
                                                                class="bi bi-trash"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ps-4"><input class="form-check-input" type="checkbox"></td>
                                                <td class="text-muted small">06</td>
                                                <td>
                                                    <div class="d-flex align-items-center gap-2">
                                                        <span class="badge rounded-pill"
                                                            style="background:#6f42c1;width:10px;height:10px;padding:0;"></span>
                                                        <span class="fw-semibold small">Database</span>
                                                    </div>
                                                </td>
                                                <td><code class="small text-muted">database</code></td>
                                                <td class="text-center"><span
                                                        class="badge bg-primary bg-opacity-10 text-primary">9</span>
                                                </td>
                                                <td><span class="badge bg-success">Hiển thị</span></td>
                                                <td>
                                                    <div class="d-flex gap-1 justify-content-center">
                                                        <button class="btn btn-sm btn-outline-primary py-0 px-2"
                                                            title="Sửa" data-bs-toggle="modal"
                                                            data-bs-target="#categoryModal"><i
                                                                class="bi bi-pencil"></i></button>
                                                        <button class="btn btn-sm btn-outline-danger py-0 px-2"
                                                            title="Xóa" data-bs-toggle="modal"
                                                            data-bs-target="#deleteModal"><i
                                                                class="bi bi-trash"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div
                                class="card-footer bg-white d-flex justify-content-between align-items-center small text-muted py-2">
                                <span>Tổng cộng <strong>6</strong> danh mục</span>
                                <div class="d-flex gap-2">
                                    <select class="form-select form-select-sm w-auto">
                                        <option>Hành động hàng loạt</option>
                                        <option>Hiển thị tất cả</option>
                                        <option>Ẩn tất cả</option>
                                        <option>Xóa tất cả</option>
                                    </select>
                                    <button class="btn btn-sm btn-outline-secondary">Áp dụng</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- ===== STATS SIDEBAR ===== -->
                    <div class="col-lg-4">
                        <div class="card border-0 shadow-sm mb-3">
                            <div class="card-header bg-white fw-semibold py-3">Thống kê</div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
                                    <span class="small text-muted">Tổng danh mục</span>
                                    <span class="fw-bold">6</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
                                    <span class="small text-muted">Đang hiển thị</span>
                                    <span class="fw-bold text-success">5</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
                                    <span class="small text-muted">Đang ẩn</span>
                                    <span class="fw-bold text-secondary">1</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center py-2">
                                    <span class="small text-muted">Tổng bài viết</span>
                                    <span class="fw-bold text-primary">59</span>
                                </div>
                            </div>
                        </div>

                        <div class="card border-0 shadow-sm">
                            <div class="card-header bg-white fw-semibold py-3">Danh mục nhiều bài nhất</div>
                            <div class="card-body p-0">
                                <ul class="list-group list-group-flush">
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center px-3 py-2">
                                        <span class="small">Lập trình</span>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="progress" style="width:80px;height:6px;">
                                                <div class="progress-bar bg-success" style="width:100%"></div>
                                            </div>
                                            <span class="small fw-semibold">21</span>
                                        </div>
                                    </li>
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center px-3 py-2">
                                        <span class="small">Công nghệ</span>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="progress" style="width:80px;height:6px;">
                                                <div class="progress-bar bg-primary" style="width:67%"></div>
                                            </div>
                                            <span class="small fw-semibold">14</span>
                                        </div>
                                    </li>
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center px-3 py-2">
                                        <span class="small">Database</span>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="progress" style="width:80px;height:6px;">
                                                <div class="progress-bar bg-purple"
                                                    style="width:43%;background:#6f42c1;"></div>
                                            </div>
                                            <span class="small fw-semibold">9</span>
                                        </div>
                                    </li>
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center px-3 py-2">
                                        <span class="small">Thiết kế</span>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="progress" style="width:80px;height:6px;">
                                                <div class="progress-bar bg-info" style="width:33%"></div>
                                            </div>
                                            <span class="small fw-semibold">7</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>

        <!-- ===== ADD/EDIT CATEGORY MODAL ===== -->
        <div class="modal fade" id="categoryModal" tabindex="-1" aria-labelledby="categoryModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content shadow">
                    <div class="modal-header">
                        <h6 class="modal-title fw-bold" id="categoryModalLabel">
                            <i class="bi bi-tags me-2 text-primary"></i>Thêm danh mục mới
                        </h6>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label small fw-semibold">Tên danh mục <span
                                    class="text-danger">*</span></label>
                            <input type="text" class="form-control form-control-sm" placeholder="Ví dụ: Lập trình">
                        </div>
                        <div class="mb-3">
                            <label class="form-label small fw-semibold">Slug</label>
                            <input type="text" class="form-control form-control-sm" placeholder="lap-trinh">
                            <div class="form-text">Tự động tạo từ tên. Chỉ gồm chữ thường, số và dấu gạch ngang.</div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label small fw-semibold">Màu sắc</label>
                            <div class="d-flex gap-2 flex-wrap">
                                <input type="radio" class="btn-check" name="catColor" id="col1" checked>
                                <label class="btn btn-sm rounded-circle p-0" for="col1"
                                    style="width:28px;height:28px;background:#0d6efd;"></label>
                                <input type="radio" class="btn-check" name="catColor" id="col2">
                                <label class="btn btn-sm rounded-circle p-0" for="col2"
                                    style="width:28px;height:28px;background:#198754;"></label>
                                <input type="radio" class="btn-check" name="catColor" id="col3">
                                <label class="btn btn-sm rounded-circle p-0" for="col3"
                                    style="width:28px;height:28px;background:#0dcaf0;"></label>
                                <input type="radio" class="btn-check" name="catColor" id="col4">
                                <label class="btn btn-sm rounded-circle p-0" for="col4"
                                    style="width:28px;height:28px;background:#ffc107;"></label>
                                <input type="radio" class="btn-check" name="catColor" id="col5">
                                <label class="btn btn-sm rounded-circle p-0" for="col5"
                                    style="width:28px;height:28px;background:#6f42c1;"></label>
                                <input type="radio" class="btn-check" name="catColor" id="col6">
                                <label class="btn btn-sm rounded-circle p-0" for="col6"
                                    style="width:28px;height:28px;background:#dc3545;"></label>
                            </div>
                        </div>
                        <div class="mb-0">
                            <label class="form-label small fw-semibold">Trạng thái</label>
                            <select class="form-select form-select-sm">
                                <option>Hiển thị</option>
                                <option>Ẩn</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer border-0 pt-0">
                        <button type="button" class="btn btn-outline-secondary btn-sm"
                            data-bs-dismiss="modal">Hủy</button>
                        <button type="button" class="btn btn-primary btn-sm"><i class="bi bi-check-lg me-1"></i>Lưu danh
                            mục</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- ===== DELETE MODAL ===== -->
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content shadow">
                    <div class="modal-header border-0 pb-0">
                        <h6 class="modal-title fw-bold" id="deleteModalLabel">
                            <i class="bi bi-exclamation-triangle-fill text-danger me-2"></i>Xác nhận xóa danh mục
                        </h6>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="mb-0 text-muted">Bạn có chắc muốn xóa danh mục này không? Các bài viết thuộc danh mục
                            sẽ bị chuyển sang trạng thái <strong class="text-warning">không phân loại</strong>. Hành
                            động này <strong class="text-danger">không thể hoàn tác</strong>.</p>
                    </div>
                    <div class="modal-footer border-0 pt-0">
                        <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal"><i
                                class="bi bi-x me-1"></i>Hủy</button>
                        <button type="button" class="btn btn-danger btn-sm"><i class="bi bi-trash me-1"></i>Xóa danh
                            mục</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style></style>