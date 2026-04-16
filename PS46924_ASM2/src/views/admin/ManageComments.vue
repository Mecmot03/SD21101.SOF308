<template>
    <div>
        <AdminTopBar />

        <div class="d-flex flex-grow-1">
            <nav class="admin-sidebar d-flex flex-column">
                <AdminSideBar />
            </nav>

            <main class="admin-content">

                <!-- Page header -->
                <div class="admin-page-header d-flex flex-wrap justify-content-between align-items-start gap-2">
                    <div>
                        <h4>Quản lý bình luận</h4>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0 small">
                                <li class="breadcrumb-item">
                                    <RouterLink to="/admin">Dashboard</RouterLink>
                                </li>
                                <li class="breadcrumb-item active">Bình luận</li>
                            </ol>
                        </nav>
                    </div>
                    <span class="badge bg-danger fs-6 d-flex align-items-center gap-1">
                        <i class="bi bi-hourglass-split"></i>{{ pendingCount }} chờ duyệt
                    </span>
                </div>

                <!-- ===== STAT CARDS ===== -->
                <div class="row g-3 mb-4">
                    <div class="col-6 col-xl-3">
                        <div class="card border-0 shadow-sm h-100 dash-card">
                            <div class="card-body d-flex align-items-center gap-3">
                                <div class="stat-icon bg-danger bg-opacity-10 text-danger"><i
                                        class="bi bi-chat-dots"></i></div>
                                <div>
                                    <div class="text-white-50 small">Tổng bình luận</div>
                                    <div class="fs-4 fw-bold lh-1 text-white">{{ comments.length }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-xl-3">
                        <div class="card border-0 shadow-sm h-100 dash-card">
                            <div class="card-body d-flex align-items-center gap-3">
                                <div class="stat-icon bg-danger bg-opacity-10 text-danger"><i
                                        class="bi bi-hourglass-split"></i></div>
                                <div>
                                    <div class="text-white-50 small">Chờ duyệt</div>
                                    <div class="fs-4 fw-bold lh-1 text-white">{{ pendingCount }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-xl-3">
                        <div class="card border-0 shadow-sm h-100 dash-card">
                            <div class="card-body d-flex align-items-center gap-3">
                                <div class="stat-icon bg-danger bg-opacity-10 text-danger"><i
                                        class="bi bi-check-circle"></i></div>
                                <div>
                                    <div class="text-white-50 small">Đã duyệt</div>
                                    <div class="fs-4 fw-bold lh-1 text-white">{{ approvedCount }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- ===== FILTER BAR ===== -->
                <div class="card border-0 shadow-sm mb-4 dark-card">
                    <div class="card-body py-3">
                        <div class="row g-2 align-items-end">
                            <div class="col-md-4">
                                <label class="form-label small mb-1 fw-semibold text-white-50">Tìm kiếm</label>
                                <div class="input-group input-group-sm">
                                    <span class="input-group-text dark-addon"><i
                                            class="bi bi-search text-white-50"></i></span>
                                    <input type="text" class="form-control dark-input border-start-0"
                                        v-model="searchQuery" placeholder="Nội dung hoặc tên người dùng...">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label small mb-1 fw-semibold text-white-50">Trạng thái</label>
                                <select class="form-select form-select-sm dark-input" v-model="filterStatus">
                                    <option value="">Tất cả</option>
                                    <option value="pending">Chờ duyệt</option>
                                    <option value="approved">Đã duyệt</option>

                                </select>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-outline-secondary btn-sm" @click="resetFilter">
                                    <i class="bi bi-arrow-counterclockwise me-1"></i>Đặt lại
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ===== COUNT ===== -->
                <div class="d-flex justify-content-end mb-3">
                    <div class="text-white-50 small">Tổng số <strong class="text-white">{{ filteredComments.length
                    }}</strong> bình luận</div>
                </div>

                <!-- ===== TABLE ===== -->
                <div class="card border-0 shadow-sm mb-4 dark-card">
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table admin-table mb-0">
                                <thead>
                                    <tr>
                                        <th style="width:50px;">#</th>
                                        <th>Người bình luận</th>
                                        <th>Nội dung</th>
                                        <th>Bài viết</th>
                                        <th>Trạng thái</th>
                                        <th>Ngày</th>
                                        <th class="text-center">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-if="filteredComments.length === 0">
                                        <td colspan="7" class="text-center text-white-50 py-4">Không có bình luận nào.
                                        </td>
                                    </tr>
                                    <tr v-for="(c, index) in filteredComments" :key="c.id">
                                        <td class="text-white-50 small">{{ String(index + 1).padStart(3, '0') }}</td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="rounded-circle bg-danger d-flex align-items-center justify-content-center text-white flex-shrink-0"
                                                    style="width:30px;height:30px;font-size:.75rem;">
                                                    {{ initials(c.user?.username) }}
                                                </div>
                                                <div>
                                                    <div class="small fw-semibold text-white">{{ c.user?.username ?? 'Ẩn danh' }}</div>
                                                    <div class="text-white-50" style="font-size:.72rem;">{{ c.user?.email || '' }}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="small text-white-50 text-truncate d-block"
                                                style="max-width:220px;">{{ c.content }}</span>
                                        </td>
                                        <td>
                                            <RouterLink :to="`/articles/${c.blogId}`"
                                                class="small text-truncate d-block text-decoration-none text-danger"
                                                style="max-width:160px;" target="_blank">
                                                {{ c.blog?.title || c.blogId }}
                                            </RouterLink>
                                        </td>
                                        <td>
                                            <span class="badge" :class="statusBadgeClass(c.status)">{{
                                                statusLabel(c.status) }}</span>
                                        </td>
                                        <td class="text-white-50 small">{{ c.date }}</td>
                                        <td>
                                            <div class="d-flex gap-1 justify-content-center">
                                                <button v-if="c.status === 'pending'"
                                                    class="btn btn-sm btn-outline-light py-0 px-2" title="Duyệt"
                                                    @click="setStatus(c, 'approved')">
                                                    <i class="bi bi-check-lg"></i>
                                                </button>

                                                <button class="btn btn-sm btn-outline-danger py-0 px-2" title="Xóa"
                                                    @click="confirmDelete(c)">
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

            </main>
        </div>

        <!-- ===== DELETE MODAL ===== -->
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content shadow dark-modal">
                    <div class="modal-header border-secondary pb-0">
                        <h6 class="modal-title fw-bold text-white">
                            <i class="bi bi-exclamation-triangle-fill text-danger me-2"></i>Xác nhận xóa bình luận
                        </h6>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="mb-0 text-white-50">Bạn có chắc muốn xóa bình luận của <strong class="text-white">{{
                            deletingComment?.user?.username }}</strong>? Hành động này <strong
                                class="text-danger">không thể hoàn tác</strong>.</p>
                    </div>
                    <div class="modal-footer border-secondary pt-0">
                        <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">
                            <i class="bi bi-x me-1"></i>Hủy
                        </button>
                        <button type="button" class="btn btn-danger btn-sm" @click="deleteComment">
                            <i class="bi bi-trash me-1"></i>Xóa bình luận
                        </button>
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

const API = 'http://localhost:3001'

const comments = ref([])
const blogs = ref([])
const users = ref([])
const searchQuery = ref('')
const filterStatus = ref('')
const deletingComment = ref(null)

onMounted(async () => {
    const [cRes, bRes, uRes] = await Promise.all([
        axios.get(`${API}/comments`),
        axios.get(`${API}/blogs`),
        axios.get(`${API}/users`)
    ])
    comments.value = cRes.data
    blogs.value = bRes.data
    users.value = uRes.data
})

const enriched = computed(() =>
    comments.value.map(c => ({
        ...c,
        blog: blogs.value.find(b => b.id === c.blogId),
        user: users.value.find(u => u.id === c.userId)
    }))
)

const filteredComments = computed(() =>
    enriched.value.filter(c => {
        const q = searchQuery.value.toLowerCase()
        const matchSearch = !q ||
            c.content.toLowerCase().includes(q) ||
            c.user?.username?.toLowerCase().includes(q)
        const matchStatus = !filterStatus.value || c.status === filterStatus.value
        return matchSearch && matchStatus
    })
)

const pendingCount = computed(() => comments.value.filter(c => c.status === 'pending').length)
const approvedCount = computed(() => comments.value.filter(c => c.status === 'approved').length)

function resetFilter() {
    searchQuery.value = ''
    filterStatus.value = ''
}

function initials(name) {
    if (!name) return '?'
    return name.slice(0, 2).toUpperCase()
}

function statusLabel(status) {
    return { pending: 'Chờ duyệt', approved: 'Đã duyệt' }[status] || status
}

function statusBadgeClass(status) {
    return {
        pending: 'border border-warning text-warning',
        approved: 'border border-light text-white'
    }[status] || 'border border-secondary text-white-50'
}

async function setStatus(comment, status) {
    await axios.patch(`${API}/comments/${comment.id}`, { status })
    const idx = comments.value.findIndex(c => c.id === comment.id)
    if (idx !== -1) comments.value[idx] = { ...comments.value[idx], status }
}

function confirmDelete(comment) {
    deletingComment.value = enriched.value.find(c => c.id === comment.id)
    new Modal(document.getElementById('deleteModal')).show()
}

async function deleteComment() {
    if (!deletingComment.value) return
    await axios.delete(`${API}/comments/${deletingComment.value.id}`)
    comments.value = comments.value.filter(c => c.id !== deletingComment.value.id)
    Modal.getInstance(document.getElementById('deleteModal'))?.hide()
    deletingComment.value = null
}
</script>

<style>
.dash-card {
    background-color: #1e1e1e !important;
    border-color: #333 !important;
    color: #f0f0f0;
}

.dark-card {
    background-color: #1e1e1e !important;
    border-color: #333 !important;
}

.dark-input {
    background-color: #2a2a2a !important;
    border-color: #444 !important;
    color: #f0f0f0 !important;
}

.dark-input::placeholder {
    color: #666 !important;
}

.dark-input:focus {
    background-color: #2a2a2a !important;
    border-color: #dc3545 !important;
    color: #f0f0f0 !important;
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, .25) !important;
}

.dark-input option {
    background-color: #2a2a2a;
    color: #f0f0f0;
}

.dark-addon {
    background-color: #333 !important;
    border-color: #444 !important;
}

.dark-modal {
    background-color: #1e1e1e !important;
    color: #f0f0f0 !important;
    border-color: #333 !important;
}

.dark-modal .modal-header,
.dark-modal .modal-footer {
    background-color: #181818;
}

.admin-table tbody tr {
    background-color: #1e1e1e !important;
    border-color: #2e2e2e !important;
}

.admin-table tbody tr:hover {
    background-color: #252525 !important;
}

.admin-table tbody td {
    background-color: transparent !important;
    border-color: #2e2e2e !important;
    color: #f0f0f0;
}
</style>

