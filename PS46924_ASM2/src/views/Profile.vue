<template>
    <div class="profile-page">
        <PublicNavBar />

        <!-- ===== PAGE HERO ===== -->
        <div class="profile-hero text-white py-5">
            <div class="container text-center py-3">
                <i class="bi bi-person-circle display-4 mb-3 d-block text-danger"></i>
                <h1 class="fw-bold mb-2">Thông tin cá nhân</h1>
                <p class="text-white-50 mb-0">Xem và cập nhật thông tin tài khoản của bạn.</p>
            </div>
        </div>

        <!-- ===== MAIN ===== -->
        <main class="container py-5" v-if="user">
            <div class="row g-4">

                <!-- CỘT TRÁI -->
                <div class="col-lg-3">
                    <div class="profile-card text-center p-4 mb-3">
                        <div class="avatar-circle mx-auto mb-3">
                            <span>{{ user.username?.charAt(0).toUpperCase() }}</span>
                        </div>
                        <h5 class="fw-bold mb-0 text-white">{{ user.fullName || user.username }}</h5>
                        <p class="text-white-50 small mb-2">@{{ user.username }}</p>
                        <span class="badge" :class="user.role === 'admin' ? 'badge-admin' : 'badge-user'">
                            {{ user.role === 'admin' ? 'Quản trị viên' : 'Thành viên' }}
                        </span>
                        <hr class="border-secondary my-3">
                        <p class="text-white-50 small mb-1">
                            <i class="bi bi-envelope me-1"></i>{{ user.email }}
                        </p>
                        <p class="text-white-50 small mb-0">
                            <i class="bi bi-calendar3 me-1"></i>Tham gia: {{ user.createdAt }}
                        </p>
                    </div>

                    <div class="profile-card p-0 overflow-hidden">
                        <RouterLink to="/articles" class="profile-link">
                            <i class="bi bi-journal-text me-2 text-danger"></i>Xem bài viết
                        </RouterLink>
                        <button class="profile-link text-danger border-0 bg-transparent w-100 text-start" @click="logout">
                            <i class="bi bi-box-arrow-right me-2"></i>Đăng xuất
                        </button>
                    </div>
                </div>

                <!-- CỘT PHẢI -->
                <div class="col-lg-9">
                    <div class="profile-card">
                        <div class="profile-tabs px-4 pt-3">
                            <ul class="nav nav-tabs border-0">
                                <li class="nav-item">
                                    <button class="profile-tab" :class="{ active: tab === 'info' }" @click="tab = 'info'">
                                        <i class="bi bi-person me-1"></i>Thông tin
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button class="profile-tab" :class="{ active: tab === 'password' }" @click="tab = 'password'">
                                        <i class="bi bi-shield-lock me-1"></i>Đổi mật khẩu
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button class="profile-tab" :class="{ active: tab === 'articles' }" @click="tab = 'articles'">
                                        <i class="bi bi-journal-richtext me-1"></i>Bài viết của tôi
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div class="p-4">

                            <!-- TAB THÔNG TIN -->
                            <div v-if="tab === 'info'">
                                <h5 class="fw-bold mb-4 text-white">Chỉnh sửa thông tin</h5>
                                <form @submit.prevent="saveInfo">
                                    <div class="row g-3">
                                        <div class="col-sm-6">
                                            <label class="form-label text-white-50 small">Tên đăng nhập</label>
                                            <input type="text" class="form-control profile-input" :value="user.username" readonly>
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label text-white-50 small">Họ và tên</label>
                                            <input type="text" class="form-control profile-input" v-model="form.fullName">
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label text-white-50 small">Email <span class="text-danger">*</span></label>
                                            <input type="email" class="form-control profile-input" v-model="form.email" required>
                                        </div>
                                        <div class="col-sm-6">
                                            <label class="form-label text-white-50 small">Vai trò</label>
                                            <input type="text" class="form-control profile-input" :value="user.role === 'admin' ? 'Quản trị viên' : 'Thành viên'" readonly>
                                        </div>
                                        <div class="col-12 pt-2 d-flex gap-2">
                                            <button type="submit" class="btn btn-danger px-4">
                                                <i class="bi bi-check-lg me-1"></i>Lưu thay đổi
                                            </button>
                                        </div>
                                        <div v-if="infoMsg" class="col-12">
                                            <div class="alert py-2 small" :class="infoMsg.type === 'success' ? 'alert-success' : 'alert-danger'">{{ infoMsg.text }}</div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <!-- TAB ĐỔI MẬT KHẨU -->
                            <div v-if="tab === 'password'">
                                <h5 class="fw-bold mb-4 text-white">Đổi mật khẩu</h5>
                                <div class="col-md-7">
                                    <form @submit.prevent="changePassword">
                                        <div class="mb-3">
                                            <label class="form-label text-white-50 small">Mật khẩu hiện tại <span class="text-danger">*</span></label>
                                            <input type="password" class="form-control profile-input" v-model="pw.current" required placeholder="Nhập mật khẩu hiện tại">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label text-white-50 small">Mật khẩu mới <span class="text-danger">*</span></label>
                                            <input type="password" class="form-control profile-input" v-model="pw.newPw" required placeholder="Tối thiểu 8 ký tự">
                                        </div>
                                        <div class="mb-4">
                                            <label class="form-label text-white-50 small">Xác nhận mật khẩu mới <span class="text-danger">*</span></label>
                                            <input type="password" class="form-control profile-input" v-model="pw.confirm" required placeholder="Nhập lại mật khẩu mới">
                                        </div>
                                        <button type="submit" class="btn btn-danger px-4">
                                            <i class="bi bi-shield-check me-1"></i>Cập nhật mật khẩu
                                        </button>
                                        <div v-if="pwMsg" class="mt-3">
                                            <div class="alert py-2 small" :class="pwMsg.type === 'success' ? 'alert-success' : 'alert-danger'">{{ pwMsg.text }}</div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <!-- TAB BÀI VIẾT -->
                            <div v-if="tab === 'articles'">
                                <h5 class="fw-bold mb-4 text-white">Bài viết của tôi ({{ myArticles.length }})</h5>
                                <div v-if="myArticles.length === 0" class="text-white-50 text-center py-4">
                                    <i class="bi bi-journal-x display-6 d-block mb-2"></i>Bạn chưa có bài viết nào.
                                </div>
                                <div v-else class="table-responsive">
                                    <table class="table align-middle mb-0">
                                        <thead>
                                            <tr class="text-white-50 border-secondary">
                                                <th class="bg-transparent text-white-50 fw-normal border-secondary">Tiêu đề</th>
                                                <th class="bg-transparent text-white-50 fw-normal border-secondary">Danh mục</th>
                                                <th class="bg-transparent text-white-50 fw-normal border-secondary">Ngày đăng</th>
                                                <th class="bg-transparent text-white-50 fw-normal border-secondary text-end">Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="a in myArticles" :key="a.id" class="border-secondary">
                                                <td class="text-white border-secondary">{{ a.title }}</td>
                                                <td class="border-secondary"><span class="badge bg-secondary">{{ a.category }}</span></td>
                                                <td class="text-white-50 small border-secondary">{{ a.date }}</td>
                                                <td class="text-end border-secondary">
                                                    <RouterLink :to="'/articles/' + a.id" class="btn btn-sm btn-outline-light me-1">
                                                        <i class="bi bi-eye"></i>
                                                    </RouterLink>
                                                    <button class="btn btn-sm btn-outline-danger" @click="deleteArticle(a.id)">
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </main>

        <main class="container py-5 text-center text-white-50" v-else>
            <i class="bi bi-person-x display-4 d-block mb-3"></i>
            Bạn chưa đăng nhập. <RouterLink to="/login" class="text-danger">Đăng nhập ngay</RouterLink>
        </main>

        <PublicFooter />
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from '../axios'
import PublicNavBar from '../components/PublicNavBar.vue'
import PublicFooter from '../components/PublicFooter.vue'

const router = useRouter()
const user = ref(null)
const tab = ref('info')
const myArticles = ref([])
const infoMsg = ref(null)
const pwMsg = ref(null)

const form = reactive({ fullName: '', email: '' })
const pw = reactive({ current: '', newPw: '', confirm: '' })

onMounted(async () => {
    user.value = JSON.parse(localStorage.getItem('currentUser') || 'null')
    if (!user.value) return
    form.fullName = user.value.fullName || ''
    form.email = user.value.email || ''
    const res = await axios.get('/blogs')
    myArticles.value = res.data.filter(b => b.userId === user.value.id)
})

async function saveInfo() {
    infoMsg.value = null
    try {
        const updated = { ...user.value, fullName: form.fullName, email: form.email }
        await axios.patch(`/users/${user.value.id}`, { fullName: form.fullName, email: form.email })
        user.value = updated
        localStorage.setItem('currentUser', JSON.stringify(updated))
        infoMsg.value = { type: 'success', text: 'Đã lưu thay đổi thành công!' }
    } catch {
        infoMsg.value = { type: 'error', text: 'Có lỗi xảy ra, vui lòng thử lại.' }
    }
}

async function changePassword() {
    pwMsg.value = null
    if (pw.current !== user.value.password) {
        pwMsg.value = { type: 'error', text: 'Mật khẩu hiện tại không đúng.' }
        return
    }
    if (pw.newPw.length < 8) {
        pwMsg.value = { type: 'error', text: 'Mật khẩu mới phải có ít nhất 8 ký tự.' }
        return
    }
    if (pw.newPw !== pw.confirm) {
        pwMsg.value = { type: 'error', text: 'Xác nhận mật khẩu không khớp.' }
        return
    }
    try {
        await axios.patch(`/users/${user.value.id}`, { password: pw.newPw })
        const updated = { ...user.value, password: pw.newPw }
        user.value = updated
        localStorage.setItem('currentUser', JSON.stringify(updated))
        pw.current = ''; pw.newPw = ''; pw.confirm = ''
        pwMsg.value = { type: 'success', text: 'Đổi mật khẩu thành công!' }
    } catch {
        pwMsg.value = { type: 'error', text: 'Có lỗi xảy ra, vui lòng thử lại.' }
    }
}

async function deleteArticle(id) {
    if (!confirm('Bạn có chắc muốn xóa bài viết này?')) return
    await axios.delete(`/blogs/${id}`)
    myArticles.value = myArticles.value.filter(a => a.id !== id)
}

function logout() {
    localStorage.removeItem('currentUser')
    router.push('/')
}
</script>

<style scoped>
.profile-page {
    background: #111;
    min-height: 100vh;
}

.profile-hero {
    background: #1a1a1a;
    border-bottom: 1px solid #2a2a2a;
}

.profile-card {
    background: #1a1a1a;
    border: 1px solid #2a2a2a;
    border-radius: 10px;
}

.avatar-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #dc3545;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
}

.badge-admin {
    background: #dc354520;
    color: #dc3545;
    border: 1px solid #dc354540;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: .75rem;
}

.badge-user {
    background: #ffffff15;
    color: #adb5bd;
    border: 1px solid #ffffff20;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: .75rem;
}

.profile-link {
    display: block;
    padding: 10px 16px;
    color: #adb5bd;
    text-decoration: none;
    font-size: .875rem;
    border-bottom: 1px solid #2a2a2a;
    transition: color .2s, background .2s;
    cursor: pointer;
}

.profile-link:last-child {
    border-bottom: none;
}

.profile-link:hover {
    background: #222;
    color: #fff;
}

.profile-tabs {
    border-bottom: 1px solid #2a2a2a;
}

.profile-tab {
    background: none;
    border: none;
    color: #6c757d;
    padding: 10px 16px;
    font-size: .875rem;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    transition: color .2s;
}

.profile-tab:hover {
    color: #fff;
}

.profile-tab.active {
    color: #dc3545;
    border-bottom-color: #dc3545;
}

.profile-input {
    background: #111;
    border-color: #2a2a2a;
    color: #fff;
}

.profile-input:focus {
    background: #111;
    border-color: #dc3545;
    color: #fff;
    box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .2);
}

.profile-input[readonly] {
    background: #1a1a1a;
    color: #6c757d;
}

.table tbody tr:hover td {
    background: #222 !important;
}
</style>