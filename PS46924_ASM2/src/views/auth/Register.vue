<template>
    <div class="auth-wrapper">
        <nav class="navbar navbar-dark bg-dark shadow">
            <div class="container">
                <RouterLink class="navbar-brand" to="/">
                    <i class="bi bi-journal-richtext me-2"></i>
                    M1Entertainment
                </RouterLink>
                <div class="d-flex gap-2">
                    <RouterLink to="/" class="btn btn-sm btn-outline-light">
                        <i class="bi bi-house me-1"></i>Trang chủ
                    </RouterLink>
                </div>
            </div>
        </nav>

        <!-- ===== NỘI DUNG CHÍNH ===== -->
        <div class="flex-grow-1 d-flex">
            <div class="container-fluid p-0">
                <div class="row g-0 h-100">

                    <!-- ===== PANEL TRÁI — Branding ===== -->
                    <div
                        class="col-lg-5 d-none d-lg-flex auth-brand-panel register-panel align-items-center justify-content-center text-white p-5">
                        <div class="text-center">
                            <i class="bi bi-person-plus-fill" style="font-size:4.5rem;"></i>
                            <h2 class="fw-bold mt-4 mb-3">Tham gia cùng chúng tôi!</h2>
                            <p class="mb-5" style="opacity:.85;font-size:1.05rem;">
                                Tạo tài khoản miễn phí để bắt đầu chia sẻ kiến thức, kết nối với cộng đồng và quản lý
                                blog cá nhân của bạn.
                            </p>

                            <!-- Lợi ích -->
                            <div class="text-start">
                                <div class="d-flex align-items-center gap-3 mb-3">
                                    <div class="rounded-circle bg-white d-flex align-items-center justify-content-center flex-shrink-0"
                                        style="width:40px;height:40px;">
                                        <i class="bi bi-pencil-square text-success fs-5"></i>
                                    </div>
                                    <div>
                                        <p class="fw-semibold mb-0">Viết và đăng bài viết</p>
                                        <small style="opacity:.8;">Chia sẻ kiến thức với hàng nghìn độc giả</small>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center gap-3 mb-3">
                                    <div class="rounded-circle bg-white d-flex align-items-center justify-content-center flex-shrink-0"
                                        style="width:40px;height:40px;">
                                        <i class="bi bi-bookmark-star text-primary fs-5"></i>
                                    </div>
                                    <div>
                                        <p class="fw-semibold mb-0">Lưu bài viết yêu thích</p>
                                        <small style="opacity:.8;">Quản lý danh sách đọc của riêng bạn</small>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center gap-3 mb-3">
                                    <div class="rounded-circle bg-white d-flex align-items-center justify-content-center flex-shrink-0"
                                        style="width:40px;height:40px;">
                                        <i class="bi bi-chat-dots text-warning fs-5"></i>
                                    </div>
                                    <div>
                                        <p class="fw-semibold mb-0">Bình luận & trao đổi</p>
                                        <small style="opacity:.8;">Kết nối với cộng đồng lập trình viên</small>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center gap-3">
                                    <div class="rounded-circle bg-white d-flex align-items-center justify-content-center flex-shrink-0"
                                        style="width:40px;height:40px;">
                                        <i class="bi bi-bell text-danger fs-5"></i>
                                    </div>
                                    <div>
                                        <p class="fw-semibold mb-0">Nhận thông báo mới</p>
                                        <small style="opacity:.8;">Không bỏ lỡ bài viết nào quan trọng</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- ===== PANEL PHẢI — Form đăng ký ===== -->
                    <div class="col-lg-7 d-flex align-items-center justify-content-center py-5 px-3 auth-form-panel">
                        <div class="auth-card auth-card-wide">

                            <!-- Header -->
                            <div class="text-center mb-4">
                                <div class="d-lg-none mb-3">
                                    <i class="bi bi-journal-richtext text-danger" style="font-size:2.5rem;"></i>
                                </div>
                                <h3 class="fw-bold mb-1 text-white">Tạo tài khoản mới</h3>
                                <p class="text-secondary">Miễn phí và chỉ mất vài phút.</p>
                            </div>

                            <!-- Form -->
                            <div class="card auth-form-card border-secondary shadow-sm">
                                <div class="card-body p-4">
                                    <form>
                                        <!-- Họ và Tên -->
                                        <div class="row g-3 mb-3">
                                            <div class="col-sm-6">
                                                <label for="regFirstName" class="form-label fw-semibold text-white-50">
                                                    <i class="bi bi-person me-1 text-danger"></i>Họ
                                                </label>
                                                <input type="text" class="form-control auth-input" id="regFirstName"
                                                    placeholder="Nguyễn" autocomplete="given-name" required>
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="regLastName" class="form-label fw-semibold text-white-50">Tên</label>
                                                <input type="text" class="form-control auth-input" id="regLastName"
                                                    placeholder="Văn A" autocomplete="family-name" required>
                                            </div>
                                        </div>

                                        <!-- Tên hiển thị -->
                                        <div class="mb-3">
                                            <label for="regUsername" class="form-label fw-semibold text-white-50">
                                                <i class="bi bi-at me-1 text-danger"></i>Tên người dùng
                                            </label>
                                            <div class="input-group">
                                                <span class="input-group-text auth-input-addon">@</span>
                                                <input type="text" class="form-control auth-input" id="regUsername"
                                                    placeholder="ten_nguoi_dung" autocomplete="username" required>
                                            </div>
                                            <div class="form-text auth-hint">Tên này sẽ hiển thị công khai bên dưới bài viết của bạn.</div>
                                        </div>

                                        <!-- Email -->
                                        <div class="mb-3">
                                            <label for="regEmail" class="form-label fw-semibold text-white-50">
                                                <i class="bi bi-envelope me-1 text-danger"></i>Email
                                            </label>
                                            <input type="email" class="form-control auth-input" id="regEmail"
                                                placeholder="example@email.com" autocomplete="email" required>
                                        </div>

                                        <!-- Mật khẩu -->
                                        <div class="mb-3">
                                            <label for="regPassword" class="form-label fw-semibold text-white-50">
                                                <i class="bi bi-lock me-1 text-danger"></i>Mật khẩu
                                            </label>
                                            <input type="password" class="form-control auth-input" id="regPassword"
                                                placeholder="Tối thiểu 8 ký tự" autocomplete="new-password" required>
                                            <div class="form-text auth-hint mt-1">Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số.</div>
                                        </div>

                                        <!-- Xác nhận mật khẩu -->
                                        <div class="mb-4">
                                            <label for="regPasswordConfirm" class="form-label fw-semibold text-white-50">
                                                <i class="bi bi-lock-fill me-1 text-danger"></i>Xác nhận mật khẩu
                                            </label>
                                            <input type="password" class="form-control auth-input" id="regPasswordConfirm"
                                                placeholder="Nhập lại mật khẩu" autocomplete="new-password" required>
                                        </div>

                                        <!-- Nút đăng ký -->
                                        <div class="d-grid mb-3">
                                            <button type="submit" class="btn btn-danger py-2 fw-semibold">
                                                <i class="bi bi-person-check me-2"></i>Tạo tài khoản
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <!-- Link đăng nhập -->
                            <p class="text-center text-secondary small mt-4">
                                Đã có tài khoản?
                                <RouterLink to="/login" class="text-danger fw-semibold text-decoration-none">Đăng nhập ngay</RouterLink>
                            </p>
                        </div>
                    </div>

                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>

        <!-- ===== FOOTER NHỎ ===== -->
        <footer class="bg-dark text-muted py-3">
            <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center small">
                <span>&copy; 2026 M1Entertainment. Tất cả quyền được bảo lưu.</span>
                <div class="d-flex gap-3 mt-2 mt-md-0">
                    <a href="#" class="text-muted text-decoration-none">Chính sách bảo mật</a>
                    <a href="#" class="text-muted text-decoration-none">Điều khoản sử dụng</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped>
/* ===== Wrapper tổng ===== */
.auth-wrapper {
    background-color: #181818;
    color: #f5f5f5;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* ===== Brand panel (trái) ===== */
.auth-brand-panel h1,
.auth-brand-panel h2,
.auth-brand-panel h3,
.auth-brand-panel h4,
.auth-brand-panel h5,
.auth-brand-panel h6 {
    color: #fff !important;
    text-shadow: none !important;
    font-family: inherit !important;
}

/* ===== Form panel (phải) ===== */
.auth-form-panel {
    background-color: #1f1f1f;
}

/* ===== Auth card max-width ===== */
.auth-card-wide {
    width: 100%;
    max-width: 560px;
}

/* ===== Card tối ===== */
.auth-form-card {
    background-color: #2a2a2a !important;
    color: #f5f5f5 !important;
}

/* ===== Input tối ===== */
.auth-input {
    background-color: #3a3a3a !important;
    border-color: #555 !important;
    color: #f5f5f5 !important;
}

.auth-input::placeholder {
    color: #888 !important;
}

.auth-input:focus {
    background-color: #3a3a3a !important;
    border-color: #dc3545 !important;
    color: #f5f5f5 !important;
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25) !important;
}

/* ===== Input group addon ===== */
.auth-input-addon {
    background-color: #444 !important;
    border-color: #555 !important;
    color: #aaa !important;
}

/* ===== Form hint text ===== */
.auth-hint {
    color: #888 !important;
    text-shadow: none !important;
}

/* ===== Fix heading đỏ từ global style ===== */
h3 {
    text-shadow: none !important;
    font-family: inherit !important;
}

/* ===== Footer ===== */
footer {
    background: #111 !important;
    color: #adb5bd !important;
}

footer a {
    color: #adb5bd !important;
}

footer a:hover {
    color: #fff !important;
}
</style>