<template>
    <div class="auth-wrapper">
        <!-- ===== NAVBAR ===== -->
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
                        class="col-lg-6 d-none d-lg-flex auth-brand-panel login-panel align-items-center justify-content-center text-white p-5">
                        <div class="text-center">
                            <i class="bi bi-journal-richtext" style="font-size:5rem"></i>
                            <h2 class="mt-4 mb-3 font-lol">M1 Entertainment</h2>
                            <p class="text-white-75 mb-5" style="font-size:1.1rem; opacity:.85;">
                                Nền tảng blog chia sẻ kiến thức công nghệ, lập trình và cuộc sống — dành cho cộng đồng
                                Việt Nam.
                            </p>
                            <div class="row g-4 text-center">
                                <div class="col-4">
                                    <h3 class="fw-bold mb-0">200+</h3>
                                    <small style="opacity:.8;">Bài viết</small>
                                </div>
                                <div class="col-4">
                                    <h3 class="fw-bold mb-0">50k+</h3>
                                    <small style="opacity:.8;">Độc giả</small>
                                </div>
                                <div class="col-4">
                                    <h3 class="fw-bold mb-0">15+</h3>
                                    <small style="opacity:.8;">Tác giả</small>
                                </div>
                            </div>
                            <div class="mt-5 p-4 rounded-4" style="background:rgba(255,255,255,.15);">
                                <i class="bi bi-quote fs-3 d-block mb-2" style="opacity:.6;"></i>
                                <p class="mb-2 fst-italic" style="opacity:.9;">"Kiến thức được chia sẻ là kiến thức được
                                    nhân lên."</p>
                                <small style="opacity:.7;">— Đội ngũ M1Entertainment</small>
                            </div>
                        </div>
                    </div>

                    <!-- ===== PANEL PHẢI — Form đăng nhập ===== -->
                    <div class="col-lg-6 d-flex align-items-center justify-content-center py-5 px-3 auth-form-panel">
                        <div class="auth-card">

                            <!-- Header -->
                            <div class="text-center mb-4">
                                <div class="d-lg-none mb-3">
                                    <i class="bi bi-journal-richtext text-danger" style="font-size:2.5rem;"></i>
                                </div>
                                <h3 class="fw-bold mb-1 text-white">Chào mừng trở lại!</h3>
                                <p class="text-secondary">Đăng nhập để tiếp tục hành trình của bạn.</p>
                            </div>


                            <!-- Thông báo lỗi -->
                            <div class="alert alert-danger align-items-center gap-2" role="alert"
                                v-show="showError">
                                <i class="bi bi-exclamation-triangle-fill flex-shrink-0"></i>
                                <div>Email/tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.</div>
                            </div>

                            <!-- Form -->
                            <div class="card auth-form-card border-secondary shadow-sm">
                                <div class="card-body p-4">
                                    <form @submit.prevent="handleLogin">
                                        <!-- Email hoặc tên đăng nhập -->
                                        <div class="mb-3">
                                            <label for="loginIdentifier" class="form-label fw-semibold text-white-50">
                                                <i class="bi bi-person me-1 text-danger"></i>Email hoặc tên đăng nhập
                                            </label>
                                            <input type="text" class="form-control auth-input" id="loginIdentifier"
                                                v-model="identifier" placeholder="Email hoặc username"
                                                autocomplete="username" required>
                                        </div>

                                        <!-- Mật khẩu -->
                                        <div class="mb-3">
                                            <div class="d-flex justify-content-between align-items-center mb-1">
                                                <label for="loginPassword"
                                                    class="form-label fw-semibold mb-0 text-white-50">
                                                    <i class="bi bi-lock me-1 text-danger"></i>Mật khẩu
                                                </label>
                                                <a href="#" class="small text-danger text-decoration-none">Quên mật
                                                    khẩu?</a>
                                            </div>
                                            <input type="password" class="form-control auth-input" id="loginPassword"
                                                v-model="password" placeholder="Nhập mật khẩu"
                                                autocomplete="current-password" required>
                                        </div>
                                        <!-- Nút đăng nhập -->
                                        <div class="d-grid mb-3">
                                            <button type="submit" class="btn btn-danger py-2 fw-semibold">
                                                <i class="bi bi-box-arrow-in-right me-2"></i>Đăng nhập
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <!-- Link đăng ký -->
                            <p class="text-center text-secondary small mt-4">
                                Chưa có tài khoản?
                                <RouterLink to="/register" class="text-danger fw-semibold text-decoration-none">Đăng ký
                                    ngay</RouterLink>
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const users = ref([]);

const fetchUsers = async () => {
    try {
        const res = await axios.get('http://localhost:3001/users')
        users.value = res.data
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu người dùng', error)
    }
}
onMounted(fetchUsers);

const identifier = ref('')
const password = ref('')
const showError = ref(false)

function handleLogin() {
    const matched = users.value.find(u =>
        (u.email === identifier.value || u.username === identifier.value) &&
        u.password === password.value
    )

    if (!matched) {
        showError.value = true
        return
    }

    showError.value = false
    // Lưu thông tin đăng nhập vào localStorage
    localStorage.setItem('currentUser', JSON.stringify(matched))

    if (matched.role === 'admin') {
        router.push('/admin')
    } else {
        router.push('/')
    }
}
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
.auth-card {
    width: 100%;
    max-width: 420px;
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