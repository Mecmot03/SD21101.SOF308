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
                    <h4>Quản lý người dùng</h4>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 small">
                            <li class="breadcrumb-item"><a href="dashboard.html">Dashboard</a></li>
                            <li class="breadcrumb-item active">Người dùng</li>
                        </ol>
                    </nav>
                </div>
                <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#userModal">
                    <i class="bi bi-person-plus me-1"></i>Thêm người dùng
                </button>
            </div>

            <!-- ===== STAT CARDS ===== -->
            <div class="row g-3 mb-4">
                <div class="col-6 col-xl-3">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body d-flex align-items-center gap-3">
                            <div class="stat-icon bg-primary bg-opacity-10 text-primary"><i class="bi bi-people"></i></div>
                            <div>
                                <div class="text-muted small">Tổng người dùng</div>
                                <div class="fs-4 fw-bold lh-1">1,234</div>
                                <div class="text-success small mt-1"><i class="bi bi-arrow-up-short"></i>+28 tuần này</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-xl-3">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body d-flex align-items-center gap-3">
                            <div class="stat-icon bg-success bg-opacity-10 text-success"><i class="bi bi-person-check"></i></div>
                            <div>
                                <div class="text-muted small">Đang hoạt động</div>
                                <div class="fs-4 fw-bold lh-1">1,189</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-xl-3">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body d-flex align-items-center gap-3">
                            <div class="stat-icon bg-warning bg-opacity-10 text-warning"><i class="bi bi-shield-check"></i></div>
                            <div>
                                <div class="text-muted small">Admin / Editor</div>
                                <div class="fs-4 fw-bold lh-1">8</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-xl-3">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body d-flex align-items-center gap-3">
                            <div class="stat-icon bg-danger bg-opacity-10 text-danger"><i class="bi bi-person-x"></i></div>
                            <div>
                                <div class="text-muted small">Bị khóa</div>
                                <div class="fs-4 fw-bold lh-1">45</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ===== FILTER BAR ===== -->
            <div class="card border-0 shadow-sm mb-4">
                <div class="card-body py-3">
                    <div class="row g-2 align-items-end">
                        <div class="col-md-4">
                            <label class="form-label small mb-1 fw-semibold text-muted">Tìm kiếm</label>
                            <div class="input-group input-group-sm">
                                <span class="input-group-text border-end-0 bg-white"><i class="bi bi-search text-muted"></i></span>
                                <input type="text" class="form-control border-start-0" placeholder="Tên, email hoặc username...">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <label class="form-label small mb-1 fw-semibold text-muted">Vai trò</label>
                            <select class="form-select form-select-sm">
                                <option value="">Tất cả</option>
                                <option>Admin</option>
                                <option>Editor</option>
                                <option>User</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label class="form-label small mb-1 fw-semibold text-muted">Trạng thái</label>
                            <select class="form-select form-select-sm">
                                <option value="">Tất cả</option>
                                <option>Hoạt động</option>
                                <option>Bị khóa</option>
                                <option>Chưa xác minh</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label class="form-label small mb-1 fw-semibold text-muted">Sắp xếp</label>
                            <select class="form-select form-select-sm">
                                <option>Mới nhất</option>
                                <option>Cũ nhất</option>
                                <option>Tên A–Z</option>
                            </select>
                        </div>
                        <div class="col-md-2 d-flex gap-2">
                            <button class="btn btn-primary btn-sm flex-fill"><i class="bi bi-funnel me-1"></i>Lọc</button>
                            <button class="btn btn-outline-secondary btn-sm" title="Đặt lại"><i class="bi bi-arrow-counterclockwise"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ===== BULK ACTIONS ===== -->
            <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                <div class="d-flex align-items-center gap-2 flex-wrap">
                    <select class="form-select form-select-sm w-auto">
                        <option>Hành động hàng loạt</option>
                        <option>Khóa tài khoản</option>
                        <option>Mở khóa</option>
                        <option>Xóa tài khoản</option>
                    </select>
                    <button class="btn btn-sm btn-outline-secondary">Áp dụng</button>
                    <span class="text-muted small">Đã chọn: <strong>0</strong></span>
                </div>
                <div class="text-muted small">Hiển thị <strong>1–10</strong> trong tổng số <strong>1,234</strong> người dùng</div>
            </div>

            <!-- ===== TABLE ===== -->
            <div class="card border-0 shadow-sm mb-4">
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table admin-table mb-0">
                            <thead>
                                <tr>
                                    <th class="ps-4" style="width:40px;"><input class="form-check-input" type="checkbox" id="checkAll"></th>
                                    <th style="width:50px;">#</th>
                                    <th>Người dùng</th>
                                    <th>Email</th>
                                    <th>Vai trò</th>
                                    <th>Bài viết</th>
                                    <th>Trạng thái</th>
                                    <th>Ngày tham gia</th>
                                    <th class="text-center">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Row 1 - Admin -->
                                <tr>
                                    <td class="ps-4"><input class="form-check-input" type="checkbox"></td>
                                    <td class="text-muted small">001</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white flex-shrink-0" style="width:32px;height:32px;font-size:.8rem;">NH</div>
                                            <div>
                                                <div class="small fw-semibold">Nguyễn Thái Giả Hủ</div>
                                                <div class="text-muted text-xxs">@nguyenthaigiahu</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="small">admin@m1entertainment.vn</span></td>
                                    <td><span class="badge bg-danger">Admin</span></td>
                                    <td><span class="small fw-semibold">24</span></td>
                                    <td><span class="badge bg-success">Hoạt động</span></td>
                                    <td class="text-muted small">01/01/2025</td>
                                    <td>
                                        <div class="d-flex gap-1 justify-content-center">
                                            <a href="../public/profile.html" class="btn btn-sm btn-outline-info py-0 px-2" title="Xem hồ sơ" target="_blank"><i class="bi bi-person"></i></a>
                                            <button class="btn btn-sm btn-outline-primary py-0 px-2" title="Sửa" data-bs-toggle="modal" data-bs-target="#userModal"><i class="bi bi-pencil"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Row 2 - Editor -->
                                <tr>
                                    <td class="ps-4"><input class="form-check-input" type="checkbox"></td>
                                    <td class="text-muted small">002</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="rounded-circle bg-success d-flex align-items-center justify-content-center text-white flex-shrink-0" style="width:32px;height:32px;font-size:.8rem;">NA</div>
                                            <div>
                                                <div class="small fw-semibold">Nguyễn Văn A</div>
                                                <div class="text-muted text-xxs">@nguyenvana</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="small">nguyenvana@email.com</span></td>
                                    <td><span class="badge bg-warning text-dark">Editor</span></td>
                                    <td><span class="small fw-semibold">18</span></td>
                                    <td><span class="badge bg-success">Hoạt động</span></td>
                                    <td class="text-muted small">15/03/2025</td>
                                    <td>
                                        <div class="d-flex gap-1 justify-content-center">
                                            <a href="../public/profile.html" class="btn btn-sm btn-outline-info py-0 px-2" title="Xem hồ sơ" target="_blank"><i class="bi bi-person"></i></a>
                                            <button class="btn btn-sm btn-outline-primary py-0 px-2" title="Sửa" data-bs-toggle="modal" data-bs-target="#userModal"><i class="bi bi-pencil"></i></button>
                                            <button class="btn btn-sm btn-outline-danger py-0 px-2" title="Khóa" data-bs-toggle="modal" data-bs-target="#lockModal"><i class="bi bi-lock"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Row 3 - Editor -->
                                <tr>
                                    <td class="ps-4"><input class="form-check-input" type="checkbox"></td>
                                    <td class="text-muted small">003</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="rounded-circle bg-info d-flex align-items-center justify-content-center text-dark flex-shrink-0" style="width:32px;height:32px;font-size:.8rem;">TB</div>
                                            <div>
                                                <div class="small fw-semibold">Trần Thị B</div>
                                                <div class="text-muted text-xxs">@tranthib</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="small">tranthib@email.com</span></td>
                                    <td><span class="badge bg-warning text-dark">Editor</span></td>
                                    <td><span class="small fw-semibold">6</span></td>
                                    <td><span class="badge bg-success">Hoạt động</span></td>
                                    <td class="text-muted small">20/06/2025</td>
                                    <td>
                                        <div class="d-flex gap-1 justify-content-center">
                                            <a href="../public/profile.html" class="btn btn-sm btn-outline-info py-0 px-2" title="Xem hồ sơ" target="_blank"><i class="bi bi-person"></i></a>
                                            <button class="btn btn-sm btn-outline-primary py-0 px-2" title="Sửa" data-bs-toggle="modal" data-bs-target="#userModal"><i class="bi bi-pencil"></i></button>
                                            <button class="btn btn-sm btn-outline-danger py-0 px-2" title="Khóa" data-bs-toggle="modal" data-bs-target="#lockModal"><i class="bi bi-lock"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Row 4 - User -->
                                <tr>
                                    <td class="ps-4"><input class="form-check-input" type="checkbox"></td>
                                    <td class="text-muted small">004</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white flex-shrink-0" style="width:32px;height:32px;font-size:.8rem;">LC</div>
                                            <div>
                                                <div class="small fw-semibold">Lê Minh C</div>
                                                <div class="text-muted text-xxs">@leminhc</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="small">leminhc@email.com</span></td>
                                    <td><span class="badge bg-secondary">User</span></td>
                                    <td><span class="small fw-semibold">0</span></td>
                                    <td><span class="badge bg-success">Hoạt động</span></td>
                                    <td class="text-muted small">10/01/2026</td>
                                    <td>
                                        <div class="d-flex gap-1 justify-content-center">
                                            <a href="../public/profile.html" class="btn btn-sm btn-outline-info py-0 px-2" title="Xem hồ sơ" target="_blank"><i class="bi bi-person"></i></a>
                                            <button class="btn btn-sm btn-outline-primary py-0 px-2" title="Sửa" data-bs-toggle="modal" data-bs-target="#userModal"><i class="bi bi-pencil"></i></button>
                                            <button class="btn btn-sm btn-outline-danger py-0 px-2" title="Khóa" data-bs-toggle="modal" data-bs-target="#lockModal"><i class="bi bi-lock"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Row 5 - Locked -->
                                <tr class="table-danger bg-opacity-10">
                                    <td class="ps-4"><input class="form-check-input" type="checkbox"></td>
                                    <td class="text-muted small">005</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="rounded-circle bg-danger d-flex align-items-center justify-content-center text-white flex-shrink-0" style="width:32px;height:32px;font-size:.8rem;">PD</div>
                                            <div>
                                                <div class="small fw-semibold text-muted">Phạm Đức D</div>
                                                <div class="text-muted text-xxs">@phamducd</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="small text-muted">phamducd@email.com</span></td>
                                    <td><span class="badge bg-secondary">User</span></td>
                                    <td><span class="small fw-semibold">0</span></td>
                                    <td><span class="badge bg-danger">Bị khóa</span></td>
                                    <td class="text-muted small">05/02/2026</td>
                                    <td>
                                        <div class="d-flex gap-1 justify-content-center">
                                            <button class="btn btn-sm btn-outline-success py-0 px-2" title="Mở khóa"><i class="bi bi-unlock"></i></button>
                                            <button class="btn btn-sm btn-outline-danger py-0 px-2" title="Xóa tài khoản" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="bi bi-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Row 6 - Unverified -->
                                <tr>
                                    <td class="ps-4"><input class="form-check-input" type="checkbox"></td>
                                    <td class="text-muted small">006</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="rounded-circle bg-light d-flex align-items-center justify-content-center text-muted flex-shrink-0 border" style="width:32px;height:32px;font-size:.8rem;">VE</div>
                                            <div>
                                                <div class="small fw-semibold">Võ Thị E</div>
                                                <div class="text-muted text-xxs">@vothie</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="small">vothie@email.com</span></td>
                                    <td><span class="badge bg-secondary">User</span></td>
                                    <td><span class="small fw-semibold">0</span></td>
                                    <td><span class="badge bg-info text-dark">Chưa xác minh</span></td>
                                    <td class="text-muted small">27/03/2026</td>
                                    <td>
                                        <div class="d-flex gap-1 justify-content-center">
                                            <button class="btn btn-sm btn-outline-primary py-0 px-2" title="Sửa" data-bs-toggle="modal" data-bs-target="#userModal"><i class="bi bi-pencil"></i></button>
                                            <button class="btn btn-sm btn-outline-danger py-0 px-2" title="Xóa" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="bi bi-trash"></i></button>
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
                        <li class="page-item"><a class="page-link" href="#">...»</a></li>
                        <li class="page-item"><a class="page-link" href="#">124</a></li>
                        <li class="page-item"><a class="page-link" href="#">»</a></li>
                    </ul>
                </nav>
            </div>

        </main>
    </div>

    <!-- ===== ADD/EDIT USER MODAL ===== -->
    <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content shadow">
                <div class="modal-header">
                    <h6 class="modal-title fw-bold" id="userModalLabel">
                        <i class="bi bi-person-plus me-2 text-primary"></i>Thêm người dùng mới
                    </h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row g-3">
                        <div class="col-6">
                            <label class="form-label small fw-semibold">Họ <span class="text-danger">*</span></label>
                            <input type="text" class="form-control form-control-sm" placeholder="Nguyễn">
                        </div>
                        <div class="col-6">
                            <label class="form-label small fw-semibold">Tên <span class="text-danger">*</span></label>
                            <input type="text" class="form-control form-control-sm" placeholder="Văn A">
                        </div>
                        <div class="col-12">
                            <label class="form-label small fw-semibold">Email <span class="text-danger">*</span></label>
                            <input type="email" class="form-control form-control-sm" placeholder="example@email.com">
                        </div>
                        <div class="col-12">
                            <label class="form-label small fw-semibold">Username</label>
                            <input type="text" class="form-control form-control-sm" placeholder="nguyenvana">
                        </div>
                        <div class="col-6">
                            <label class="form-label small fw-semibold">Vai trò</label>
                            <select class="form-select form-select-sm">
                                <option>User</option>
                                <option>Editor</option>
                                <option>Admin</option>
                            </select>
                        </div>
                        <div class="col-6">
                            <label class="form-label small fw-semibold">Trạng thái</label>
                            <select class="form-select form-select-sm">
                                <option>Hoạt động</option>
                                <option>Bị khóa</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label class="form-label small fw-semibold">Mật khẩu tạm thời</label>
                            <input type="password" class="form-control form-control-sm" placeholder="Để trống nếu không đổi">
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0 pt-0">
                    <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-primary btn-sm"><i class="bi bi-check-lg me-1"></i>Lưu người dùng</button>
                </div>
            </div>
        </div>
    </div>

    <!-- ===== LOCK MODAL ===== -->
    <div class="modal fade" id="lockModal" tabindex="-1" aria-labelledby="lockModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content shadow">
                <div class="modal-header border-0 pb-0">
                    <h6 class="modal-title fw-bold" id="lockModalLabel">
                        <i class="bi bi-lock-fill text-warning me-2"></i>Khóa tài khoản
                    </h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="mb-3 text-muted">Người dùng sẽ không thể đăng nhập khi bị khóa. Bạn có thể mở khóa bất kỳ lúc nào.</p>
                    <div>
                        <label class="form-label small fw-semibold">Lý do khóa</label>
                        <textarea class="form-control form-control-sm" rows="3" placeholder="Nhập lý do..."></textarea>
                    </div>
                </div>
                <div class="modal-footer border-0 pt-0">
                    <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal"><i class="bi bi-x me-1"></i>Hủy</button>
                    <button type="button" class="btn btn-warning btn-sm"><i class="bi bi-lock me-1"></i>Khóa tài khoản</button>
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
                        <i class="bi bi-exclamation-triangle-fill text-danger me-2"></i>Xác nhận xóa tài khoản
                    </h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="mb-0 text-muted">Bạn có chắc muốn xóa tài khoản này không? Toàn bộ dữ liệu liên quan sẽ bị xóa. Hành động này <strong class="text-danger">không thể hoàn tác</strong>.</p>
                </div>
                <div class="modal-footer border-0 pt-0">
                    <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal"><i class="bi bi-x me-1"></i>Hủy</button>
                    <button type="button" class="btn btn-danger btn-sm"><i class="bi bi-trash me-1"></i>Xóa tài khoản</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>

</script>

<style >

</style>