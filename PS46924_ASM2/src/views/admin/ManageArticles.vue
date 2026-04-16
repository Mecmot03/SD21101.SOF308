<template>
    <div>
    <AdminTopBar v-if="isAdmin" />
    <PublicNavBar v-else />

    <div class="d-flex flex-grow-1">
        <nav v-if="isAdmin" class="admin-sidebar d-flex flex-column">
            <AdminSideBar />
        </nav>

        <!-- ===== MAIN CONTENT ===== -->
        <main :class="isAdmin ? 'admin-content' : 'container py-4 w-100'">

            <!-- Page header -->
            <div class="admin-page-header d-flex flex-wrap justify-content-between align-items-start gap-2">
                <div>
                    <h4>{{ isAdmin ? 'Quản lý bài viết' : 'Bài viết của tôi' }}</h4>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 small">
                            <li class="breadcrumb-item"><RouterLink to="/">Trang chủ</RouterLink></li>
                            <li class="breadcrumb-item active">Bài viết</li>
                        </ol>
                    </nav>
                </div>
                <button class="btn btn-primary btn-sm" @click="openAdd">
                    <i class="bi bi-plus-lg me-1"></i>Thêm bài viết mới
                </button>
            </div>

            <!-- ===== FILTER BAR ===== -->
            <div class="card border-0 shadow-sm mb-4 dark-card">
                <div class="card-body py-3">
                    <div class="row g-2 align-items-end">
                        <!-- Tìm kiếm -->
                        <div class="col-md-4">
                            <label class="form-label small mb-1 fw-semibold text-white-50">Tìm kiếm</label>
                            <div class="input-group input-group-sm">
                                <span class="input-group-text dark-addon"><i class="bi bi-search text-white-50"></i></span>
                                <input type="text" class="form-control dark-input border-start-0" v-model="searchQuery" placeholder="Tìm tiêu đề bài viết...">
                            </div>
                        </div>
                        <!-- Danh mục -->
                        <div class="col-md-2">
                            <label class="form-label small mb-1 fw-semibold text-white-50">Danh mục</label>
                            <select class="form-select form-select-sm dark-input" v-model="filterCategory">
                                <option value="">Tất cả</option>
                                <option value="esports">Esports</option>
                                <option value="news">News</option>
                                <option value="tech">Tech</option>
                            </select>
                        </div>
                        <!-- Nút đặt lại -->
                        <div class="col-md-2">
                            <button class="btn btn-outline-secondary btn-sm" @click="resetFilter"><i class="bi bi-arrow-counterclockwise me-1"></i>Đặt lại</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ===== COUNT ===== -->
            <div class="d-flex justify-content-end align-items-center mb-3">
                <div class="text-muted small">Tổng số <strong>{{ filteredBlogs.length }}</strong> bài viết</div>
            </div>

            <!-- ===== TABLE ===== -->
            <div class="card border-0 shadow-sm mb-4 dark-card">
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
                                    <th>Badge</th>
                                    <th>Ngày đăng</th>
                                    <th class="text-center">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="filteredBlogs.length === 0">
                                    <td colspan="7" class="text-center text-white-50 py-4">Không có bài viết nào.</td>
                                </tr>
                                <tr v-for="(blog, index) in filteredBlogs" :key="blog.id">
                                    <td class="ps-4"><input class="form-check-input row-check" type="checkbox"></td>
                                    <td class="text-white-50 small">{{ String(index + 1).padStart(3, '0') }}</td>
                                    <td>
                                        <div class="d-flex align-items-center gap-3">
                                            <img v-if="blog.image" :src="blog.image" class="rounded" style="width:48px;height:36px;object-fit:cover;" alt="">
                                            <div class="rounded article-thumb-table" v-else style="background:linear-gradient(135deg,#dc3545,#7b0a17);"></div>
                                            <div>
                                                <div class="fw-semibold small text-white">{{ blog.title }}</div>
                                                <div class="text-white-50 text-xxs">{{ blog.description?.slice(0, 60) }}...</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span class="badge border border-danger text-danger">{{ blog.category }}</span></td>
                                    <td><span class="badge border border-secondary text-white-50">{{ blog.badge || '—' }}</span></td>
                                    <td class="text-white-50 small">{{ blog.date }}</td>
                                    <td>
                                        <div class="d-flex gap-1 justify-content-center">
                                            <RouterLink :to="`/articles/${blog.id}`" class="btn btn-sm btn-outline-secondary py-0 px-2" title="Xem" target="_blank">
                                                <i class="bi bi-eye"></i>
                                            </RouterLink>
                                            <button class="btn btn-sm btn-outline-light py-0 px-2" title="Sửa" @click="openEdit(blog)">
                                                <i class="bi bi-pencil"></i>
                                            </button>
                                            <button class="btn btn-sm btn-outline-danger py-0 px-2" title="Xóa" @click="confirmDelete(blog)">
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

    <!-- ===== ADD/EDIT ARTICLE MODAL ===== -->
    <div class="modal fade" id="articleModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content shadow dark-modal">
                <div class="modal-header border-secondary">
                    <h6 class="modal-title fw-bold text-white">
                        <i class="bi bi-pencil-square me-2 text-danger"></i>{{ editingBlog ? 'Chỉnh sửa bài viết' : 'Thêm bài viết mới' }}
                    </h6>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger py-2 small" v-if="modalError">{{ modalError }}</div>
                    <div class="row g-3">
                        <div class="col-12">
                            <label class="form-label small fw-semibold text-white-50">Tiêu đề <span class="text-danger">*</span></label>
                            <input type="text" class="form-control form-control-sm dark-input" v-model="form.title" placeholder="Nhập tiêu đề bài viết" required>
                        </div>
                        <div class="col-12">
                            <label class="form-label small fw-semibold text-white-50">Mô tả</label>
                            <textarea class="form-control form-control-sm dark-input" v-model="form.description" rows="3" placeholder="Nhập mô tả ngắn..."></textarea>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label small fw-semibold text-white-50">Danh mục</label>
                            <select class="form-select form-select-sm dark-input" v-model="form.category">
                                <option value="esports">Esports</option>
                                <option value="news">News</option>
                                <option value="tech">Tech</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label small fw-semibold text-white-50">Badge</label>
                            <input type="text" class="form-control form-control-sm dark-input" v-model="form.badge" placeholder="Hot, News, Shock...">
                        </div>
                        <div class="col-12">
                            <label class="form-label small fw-semibold text-white-50">URL ảnh</label>
                            <input type="text" class="form-control form-control-sm dark-input" v-model="form.image" placeholder="/src/assets/imgs/...">
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-secondary pt-0">
                    <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger btn-sm" @click="saveBlog"><i class="bi bi-check-lg me-1"></i>Lưu bài viết</button>
                </div>
            </div>
        </div>
    </div>

    <!-- ===== DELETE MODAL ===== -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content shadow dark-modal">
                <div class="modal-header border-secondary pb-0">
                    <h6 class="modal-title fw-bold text-white">
                        <i class="bi bi-exclamation-triangle-fill text-danger me-2"></i>Xác nhận xóa bài viết
                    </h6>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="mb-0 text-white-50">Bạn có chắc muốn xóa bài viết <strong class="text-white">{{ deletingBlog?.title }}</strong>? Hành động này <strong class="text-danger">không thể hoàn tác</strong>.</p>
                </div>
                <div class="modal-footer border-secondary pt-0">
                    <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">
                        <i class="bi bi-x me-1"></i>Hủy
                    </button>
                    <button type="button" class="btn btn-danger btn-sm" @click="deleteBlog">
                        <i class="bi bi-trash me-1"></i>Xóa bài viết
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
import PublicNavBar from '../../components/PublicNavBar.vue'

const API = 'http://localhost:3001/blogs'

const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null')
const isAdmin = currentUser?.role === 'admin'

const blogs = ref([])
const searchQuery = ref('')
const filterCategory = ref('')
const editingBlog = ref(null)
const deletingBlog = ref(null)
const modalError = ref('')

const form = ref({ title: '', description: '', category: 'esports', badge: '', image: '' })

const fetchBlogs = async () => {
    const res = await axios.get(API)
    blogs.value = res.data
}
onMounted(fetchBlogs)

const filteredBlogs = computed(() => {
    return blogs.value.filter(b => {
        if (!isAdmin && b.userId !== currentUser?.id) return false
        const q = searchQuery.value.toLowerCase()
        const matchSearch = !q || b.title.toLowerCase().includes(q)
        const matchCategory = !filterCategory.value || b.category === filterCategory.value
        return matchSearch && matchCategory
    })
})

function resetFilter() {
    searchQuery.value = ''
    filterCategory.value = ''
}

function openAdd() {
    editingBlog.value = null
    modalError.value = ''
    form.value = { title: '', description: '', category: 'esports', badge: '', image: '' }
    new Modal(document.getElementById('articleModal')).show()
}

function openEdit(blog) {
    editingBlog.value = blog
    modalError.value = ''
    form.value = {
        title: blog.title,
        description: blog.description || '',
        category: blog.category || 'esports',
        badge: blog.badge || '',
        image: blog.image || ''
    }
    new Modal(document.getElementById('articleModal')).show()
}

async function saveBlog() {
    modalError.value = ''
    if (!form.value.title.trim()) {
        modalError.value = 'Tiêu đề không được để trống.'
        return
    }
    try {
        const payload = {
            title: form.value.title,
            description: form.value.description,
            category: form.value.category,
            badge: form.value.badge,
            image: form.value.image,
        }
        if (editingBlog.value) {
            await axios.patch(`${API}/${editingBlog.value.id}`, payload)
        } else {
            payload.date = new Date().toLocaleDateString('vi-VN')
            if (!isAdmin) payload.userId = currentUser?.id
            await axios.post(API, payload)
        }
        await fetchBlogs()
        Modal.getInstance(document.getElementById('articleModal'))?.hide()
    } catch {
        modalError.value = 'Đã xảy ra lỗi. Vui lòng thử lại.'
    }
}

function confirmDelete(blog) {
    deletingBlog.value = blog
    new Modal(document.getElementById('deleteModal')).show()
}

async function deleteBlog() {
    if (!deletingBlog.value) return
    await axios.delete(`${API}/${deletingBlog.value.id}`)
    await fetchBlogs()
    Modal.getInstance(document.getElementById('deleteModal'))?.hide()
    deletingBlog.value = null
}
</script>

<style>
.dark-card {
    background-color: #1e1e1e !important;
    border-color: #333 !important;
}

.dark-input {
    background-color: #2a2a2a !important;
    border-color: #444 !important;
    color: #f0f0f0 !important;
}

.dark-input::placeholder { color: #666 !important; }

.dark-input:focus {
    background-color: #2a2a2a !important;
    border-color: #dc3545 !important;
    color: #f0f0f0 !important;
    box-shadow: 0 0 0 0.2rem rgba(220,53,69,.25) !important;
}

.dark-input option {
    background-color: #2a2a2a;
    color: #f0f0f0;
}

.dark-addon {
    background-color: #333 !important;
    border-color: #444 !important;
    color: #aaa !important;
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