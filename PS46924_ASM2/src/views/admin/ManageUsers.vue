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
                    <h4>Quản lý người dùng</h4>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 small">
                            <li class="breadcrumb-item"><a href="dashboard.html">Dashboard</a></li>
                            <li class="breadcrumb-item active">Người dùng</li>
                        </ol>
                    </nav>
                </div>
                <button class="btn btn-primary btn-sm" @click="openAdd">
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
                                <div class="fs-4 fw-bold lh-1">{{ users.length }}</div>
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
                                <div class="fs-4 fw-bold lh-1">{{ activeCount }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-xl-3">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body d-flex align-items-center gap-3">
                            <div class="stat-icon bg-warning bg-opacity-10 text-warning"><i class="bi bi-shield-check"></i></div>
                            <div>
                                <div class="text-muted small">Admin</div>
                                <div class="fs-4 fw-bold lh-1">{{ adminCount }}</div>
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
                                <div class="fs-4 fw-bold lh-1">{{ lockedCount }}</div>
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
                                <input type="text" class="form-control border-start-0" v-model="searchQuery" placeholder="Tên, email hoặc username...">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <label class="form-label small mb-1 fw-semibold text-muted">Vai trò</label>
                            <select class="form-select form-select-sm" v-model="filterRole">
                                <option value="">Tất cả</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label class="form-label small mb-1 fw-semibold text-muted">Trạng thái</label>
                            <select class="form-select form-select-sm" v-model="filterStatus">
                                <option value="">Tất cả</option>
                                <option value="active">Hoạt động</option>
                                <option value="locked">Bị khóa</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label class="form-label small mb-1 fw-semibold text-muted">Sắp xếp</label>
                            <select class="form-select form-select-sm" disabled>
                                <option>Mới nhất</option>
                            </select>
                        </div>
                        <div class="col-md-2 d-flex gap-2">
                            <button class="btn btn-outline-secondary btn-sm flex-fill" @click="resetFilter"><i class="bi bi-arrow-counterclockwise me-1"></i>Đặt lại</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ===== COUNT ===== -->
            <div class="d-flex justify-content-end align-items-center mb-3">
                <div class="text-muted small">Tổng số <strong>{{ filteredUsers.length }}</strong> người dùng</div>
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
                                    <th>Trạng thái</th>
                                    <th>Ngày tham gia</th>
                                    <th class="text-center">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="filteredUsers.length === 0">
                                    <td colspan="8" class="text-center text-muted py-4">Không có người dùng nào.</td>
                                </tr>
                                <tr v-for="(user, index) in filteredUsers" :key="user.id" :class="{ 'table-danger': user.status === 'locked' }">
                                    <td class="ps-4"><input class="form-check-input" type="checkbox"></td>
                                    <td class="text-muted small">{{ String(index + 1).padStart(3, '0') }}</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white flex-shrink-0" style="width:32px;height:32px;font-size:.8rem;">
                                                {{ user.username.slice(0,2).toUpperCase() }}
                                            </div>
                                            <div>
                                                <div class="small fw-semibold">{{ user.fullName || user.username }}</div>
                                                <div class="text-muted text-xxs">@{{ user.username }}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="small">{{ user.email }}</span></td>
                                    <td>
                                        <span class="badge" :class="user.role === 'admin' ? 'bg-danger' : 'bg-secondary'">{{ user.role }}</span>
                                    </td>
                                    <td>
                                        <span class="badge" :class="user.status === 'locked' ? 'bg-danger' : 'bg-success'">{{ user.status === 'locked' ? 'Bị khóa' : 'Hoạt động' }}</span>
                                    </td>
                                    <td class="text-muted small">{{ user.createdAt || '—' }}</td>
                                    <td>
                                        <div class="d-flex gap-1 justify-content-center">
                                            <button class="btn btn-sm btn-outline-primary py-0 px-2" title="Sửa" @click="openEdit(user)"><i class="bi bi-pencil"></i></button>
                                            <button v-if="user.status !== 'locked'" class="btn btn-sm btn-outline-warning py-0 px-2" title="Khóa" @click="toggleLock(user)"><i class="bi bi-lock"></i></button>
                                            <button v-else class="btn btn-sm btn-outline-success py-0 px-2" title="Mở khóa" @click="toggleLock(user)"><i class="bi bi-unlock"></i></button>
                                            <button class="btn btn-sm btn-outline-danger py-0 px-2" title="Xóa" @click="confirmDelete(user)"><i class="bi bi-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        </main>
    </div>

    <!-- ===== ADD/EDIT USER MODAL ===== -->
    <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content shadow">
                <div class="modal-header">
                    <h6 class="modal-title fw-bold" id="userModalLabel">
                        <i class="bi bi-person-plus me-2 text-primary"></i>{{ editingUser ? 'Chỉnh sửa người dùng' : 'Thêm người dùng mới' }}
                    </h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger py-2 small" v-if="modalError">{{ modalError }}</div>
                    <div class="row g-3">
                        <div class="col-12">
                            <label class="form-label small fw-semibold">Họ tên đầy đủ</label>
                            <input type="text" class="form-control form-control-sm" v-model="form.fullName" placeholder="Nguyễn Văn A">
                        </div>
                        <div class="col-12">
                            <label class="form-label small fw-semibold">Email <span class="text-danger">*</span></label>
                            <input type="email" class="form-control form-control-sm" v-model="form.email" placeholder="example@email.com" required>
                        </div>
                        <div class="col-12">
                            <label class="form-label small fw-semibold">Username <span class="text-danger">*</span></label>
                            <input type="text" class="form-control form-control-sm" v-model="form.username" placeholder="nguyenvana" required>
                        </div>
                        <div class="col-6">
                            <label class="form-label small fw-semibold">Vai trò</label>
                            <select class="form-select form-select-sm" v-model="form.role">
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div class="col-6">
                            <label class="form-label small fw-semibold">Trạng thái</label>
                            <select class="form-select form-select-sm" v-model="form.status">
                                <option value="active">Hoạt động</option>
                                <option value="locked">Bị khóa</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <label class="form-label small fw-semibold">Mật khẩu {{ editingUser ? '(để trống nếu không đổi)' : '*' }}</label>
                            <input type="password" class="form-control form-control-sm" v-model="form.password" placeholder="Nhập mật khẩu">
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0 pt-0">
                    <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-primary btn-sm" @click="saveUser"><i class="bi bi-check-lg me-1"></i>Lưu người dùng</button>
                </div>
            </div>
        </div>
    </div>

    <!-- ===== DELETE CONFIRM MODAL ===== -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content shadow">
                <div class="modal-header border-0 pb-0">
                    <h6 class="modal-title fw-bold">
                        <i class="bi bi-exclamation-triangle-fill text-danger me-2"></i>Xác nhận xóa tài khoản
                    </h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="mb-0 text-muted">Bạn có chắc muốn xóa tài khoản <strong>{{ deletingUser?.username }}</strong>? Hành động này <strong class="text-danger">không thể hoàn tác</strong>.</p>
                </div>
                <div class="modal-footer border-0 pt-0">
                    <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal"><i class="bi bi-x me-1"></i>Hủy</button>
                    <button type="button" class="btn btn-danger btn-sm" @click="deleteUser"><i class="bi bi-trash me-1"></i>Xóa tài khoản</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Modal } from 'bootstrap'
import axios from 'axios'
import AdminTopBar from '../../components/AdminTopBar.vue'
import AdminSideBar from '../../components/AdminSideBar.vue'

const API = 'http://localhost:3001/users'

const users = ref([])
const searchQuery = ref('')
const filterRole = ref('')
const filterStatus = ref('')
const editingUser = ref(null)
const deletingUser = ref(null)
const modalError = ref('')

const form = ref({ fullName: '', email: '', username: '', role: 'user', status: 'active', password: '' })

const fetchUsers = async () => {
    const res = await axios.get(API)
    users.value = res.data
}
onMounted(fetchUsers)

const filteredUsers = computed(() => {
    return users.value.filter(u => {
        const q = searchQuery.value.toLowerCase()
        const matchSearch = !q || u.username.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || (u.fullName || '').toLowerCase().includes(q)
        const matchRole = !filterRole.value || u.role === filterRole.value
        const matchStatus = !filterStatus.value || u.status === filterStatus.value
        return matchSearch && matchRole && matchStatus
    })
})

const activeCount = computed(() => users.value.filter(u => u.status === 'active').length)
const adminCount = computed(() => users.value.filter(u => u.role === 'admin').length)
const lockedCount = computed(() => users.value.filter(u => u.status === 'locked').length)

function resetFilter() {
    searchQuery.value = ''
    filterRole.value = ''
    filterStatus.value = ''
}

function openEdit(user) {
    editingUser.value = user
    modalError.value = ''
    form.value = {
        fullName: user.fullName || '',
        email: user.email,
        username: user.username,
        role: user.role,
        status: user.status || 'active',
        password: ''
    }
    new Modal(document.getElementById('userModal')).show()
}

function openAdd() {
    editingUser.value = null
    modalError.value = ''
    form.value = { fullName: '', email: '', username: '', role: 'user', status: 'active', password: '' }
    new Modal(document.getElementById('userModal')).show()
}

async function saveUser() {
    modalError.value = ''
    if (!form.value.email || !form.value.username) {
        modalError.value = 'Email và username là bắt buộc.'
        return
    }
    if (!editingUser.value && !form.value.password) {
        modalError.value = 'Mật khẩu là bắt buộc khi thêm mới.'
        return
    }
    try {
        const payload = {
            fullName: form.value.fullName,
            email: form.value.email,
            username: form.value.username,
            role: form.value.role,
            status: form.value.status,
        }
        if (form.value.password) payload.password = form.value.password

        if (editingUser.value) {
            await axios.patch(`${API}/${editingUser.value.id}`, payload)
        } else {
            payload.createdAt = new Date().toLocaleDateString('vi-VN')
            payload.img = ''
            await axios.post(API, payload)
        }
        await fetchUsers()
        Modal.getInstance(document.getElementById('userModal'))?.hide()
    } catch {
        modalError.value = 'Đã xảy ra lỗi. Vui lòng thử lại.'
    }
}

async function toggleLock(user) {
    const newStatus = user.status === 'locked' ? 'active' : 'locked'
    await axios.patch(`${API}/${user.id}`, { status: newStatus })
    await fetchUsers()
}

function confirmDelete(user) {
    deletingUser.value = user
    new Modal(document.getElementById('deleteModal')).show()
}

async function deleteUser() {
    if (!deletingUser.value) return
    await axios.delete(`${API}/${deletingUser.value.id}`)
    await fetchUsers()
    Modal.getInstance(document.getElementById('deleteModal'))?.hide()
    deletingUser.value = null
}
</script>

<style >

</style>