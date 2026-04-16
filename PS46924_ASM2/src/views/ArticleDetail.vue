<template>
    <div>
        <PublicNavBar />

        <!-- Loading -->
        <div v-if="loading" class="container py-5 text-center">
            <div class="spinner-border text-danger" role="status"></div>
            <p class="mt-3 text-muted">Đang tải bài viết...</p>
        </div>

        <main v-else-if="blog">
            <div class="container py-5">
                <div class="row g-4">
                    <div class="col-lg-12">

                        <!-- Breadcrumb -->
                        <nav aria-label="breadcrumb" class="mb-3">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><RouterLink to="/" class="text-decoration-none">Trang chủ</RouterLink></li>
                                <li class="breadcrumb-item"><RouterLink to="/articles" class="text-decoration-none">Bài viết</RouterLink></li>
                                <li class="breadcrumb-item active" aria-current="page">Chi tiết</li>
                            </ol>
                        </nav>

                        <!-- Badge + Tiêu đề -->
                        <div class="mb-1">
                            <span class="badge bg-danger d-inline-block">{{ blog.badge }}</span>
                        </div>
                        <h1 class="mb-3 font-lol">{{ blog.title }}</h1>

                        <!-- Meta -->
                        <div class="d-flex flex-wrap align-items-center gap-3 text-muted small mb-4 pb-4 border-bottom">
                            <span><i class="bi bi-calendar3 me-1"></i>{{ blog.date }}</span>
                            <span v-if="author"><i class="bi bi-person me-1"></i>{{ author.fullName || author.username }}</span>
                        </div>

                        <!-- Ảnh bìa -->
                        <div class="mb-4 text-center">
                            <img :src="blog.image" :alt="blog.title" class="img-fluid rounded shadow">
                        </div>

                        <!-- Nội dung -->
                        <article class="article-content">
                            <p class="lead">{{ blog.description }}</p>
                        </article>

                        <!-- Nút tương tác -->
                        <div class="d-flex gap-2 mt-4 mb-5">
                            <button class="btn btn-outline-primary btn-sm"><i class="bi bi-share me-1"></i>Chia sẻ</button>
                            <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-bookmark me-1"></i>Lưu lại</button>
                        </div>

                        <!-- Bình luận -->
                        <div class="mb-5">
                            <h5 class="mb-4 font-lol"><i class="bi bi-chat-dots me-2"></i>Bình luận ({{ comments.length }})</h5>

                            <!-- Form viết bình luận -->
                            <div class="card border-0 mb-4 dark-card">
                                <div class="card-body">
                                    <h6 class="mb-3 font-lol">Viết bình luận</h6>
                                    <div v-if="currentUser">
                                        <div class="mb-3">
                                            <textarea
                                                v-model="newComment"
                                                class="form-control dark-input"
                                                rows="3"
                                                placeholder="Nhập bình luận của bạn..."
                                                :disabled="submitting"
                                            ></textarea>
                                        </div>
                                        <div v-if="commentError" class="alert alert-danger py-2 small mb-3">{{ commentError }}</div>
                                        <div v-if="commentSuccess" class="alert alert-success py-2 small mb-3">{{ commentSuccess }}</div>
                                        <button class="btn btn-danger btn-sm px-4" @click="submitComment" :disabled="submitting">
                                            <span v-if="submitting" class="spinner-border spinner-border-sm me-1"></span>
                                            <i v-else class="bi bi-send me-1"></i>Gửi bình luận
                                        </button>
                                    </div>
                                    <div v-else class="text-muted small">
                                        <RouterLink to="/login" class="text-danger">Đăng nhập</RouterLink> để viết bình luận.
                                    </div>
                                </div>
                            </div>

                            <!-- Danh sách bình luận -->
                            <div v-if="comments.length === 0" class="text-muted small">Chưa có bình luận nào.</div>
                            <div v-for="c in comments" :key="c.id" class="d-flex gap-3 mb-4">
                                <div class="comment-avatar flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle bg-danger text-white fw-bold">
                                    {{ (c.user?.username || 'A').charAt(0).toUpperCase() }}
                                </div>
                                <div class="flex-grow-1">
                                    <div class="d-flex align-items-center gap-2 mb-1">
                                        <span class="fw-semibold small">{{ c.user?.username || 'Ẩn danh' }}</span>
                                        <span class="text-muted" style="font-size:.75rem;">{{ c.date }}</span>
                                    </div>
                                    <p class="mb-0 small">{{ c.content }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Bài viết liên quan -->
                        <div>
                            <h5 class="mb-4 font-lol">Bài viết liên quan</h5>
                            <div class="row row-cols-1 row-cols-md-3 g-3">
                                <div class="col" v-for="related in relatedBlogs" :key="related.id">
                                    <div class="card h-100 border-0 shadow-sm article-card">
                                        <RouterLink :to="`/articles/${related.id}`" class="text-decoration-none">
                                            <div class="article-thumb-sm d-flex align-items-center justify-content-center">
                                                <img :src="related.image" :alt="related.title" class="img-fluid">
                                            </div>
                                            <div class="card-body">
                                                <span class="badge bg-danger mb-2">{{ related.badge }}</span>
                                                <h6 class="card-title article-title font-lol">{{ related.title }}</h6>
                                            </div>
                                            <div class="card-footer bg-transparent small">
                                                <i class="bi bi-calendar3 me-1"></i>{{ related.date }}
                                            </div>
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div><!-- /col-lg-8 -->

                </div><!-- /.row -->
            </div><!-- /.container -->
        </main>

        <!-- Không tìm thấy bài viết -->
        <div v-else-if="!loading" class="container py-5 text-center">
            <i class="bi bi-exclamation-circle fs-1 text-muted d-block mb-3"></i>
            <h4 class="font-lol">Không tìm thấy bài viết</h4>
            <RouterLink to="/articles" class="btn btn-primary mt-3">Quay lại danh sách</RouterLink>
        </div>

        <PublicFooter />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PublicNavBar from '../components/PublicNavBar.vue'
import PublicFooter from '../components/PublicFooter.vue'
import axios from 'axios'

const route = useRoute()
const blog = ref(null)
const blogs = ref([])
const loading = ref(true)
const author = ref(null)
const comments = ref([])
const newComment = ref('')
const submitting = ref(false)
const commentError = ref('')
const commentSuccess = ref('')
const currentUser = ref(null)

async function fetchComments() {
    const [commentsRes, usersRes] = await Promise.all([
        axios.get(`http://localhost:3001/comments?blogId=${route.params.id}`),
        axios.get('http://localhost:3001/users')
    ])
    const users = usersRes.data
    comments.value = commentsRes.data
        .filter(c => c.status === 'approved')
        .map(c => ({ ...c, user: users.find(u => u.id === c.userId) || null }))
}

onMounted(async () => {
    currentUser.value = JSON.parse(localStorage.getItem('currentUser') || 'null')
    const res = await axios.get(`http://localhost:3001/blogs/${route.params.id}`)
    blog.value = res.data || null
    
    if (blog.value?.userId) {
        const usersRes = await axios.get('http://localhost:3001/users')
        author.value = usersRes.data.find(u => u.id === blog.value.userId) || null
    }

    const allRes = await axios.get('http://localhost:3001/blogs')
    blogs.value = allRes.data
    loading.value = false
    await fetchComments()
})

async function submitComment() {
    commentError.value = ''
    commentSuccess.value = ''
    if (!newComment.value.trim()) {
        commentError.value = 'Vui lòng nhập nội dung bình luận.'
        return
    }
    submitting.value = true
    try {
        const today = new Date()
        const dateStr = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
        await axios.post('http://localhost:3001/comments', {
            blogId: route.params.id,
            userId: currentUser.value.id,
            content: newComment.value.trim(),
            date: dateStr,
            status: 'pending'
        })
        newComment.value = ''
        commentSuccess.value = 'Bình luận đã được gửi và đang chờ duyệt.'
    } catch {
        commentError.value = 'Gửi bình luận thất bại, vui lòng thử lại.'
    } finally {
        submitting.value = false
    }
}

const relatedBlogs = computed(() => {
    if (!blog.value) return []
    return blogs.value.filter(b => b.id !== blog.value.id).slice(0, 3)
})
</script>

<style scoped>
.comment-avatar {
    width: 38px;
    height: 38px;
    font-size: .9rem;
}
</style>
