import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Articles from '../views/Articles.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Profile from '../views/Profile.vue'
import DashBoard from '../views/admin/DashBoard.vue'
import ManageArticles from '../views/admin/ManageArticles.vue'
import ManageCategories from '../views/admin/ManageCategories.vue'
import ManageComments from '../views/admin/ManageComments.vue'
import ManageUsers from '../views/admin/ManageUsers.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/articles', component: Articles },
    { path: '/articles/:id', component: ArticleDetail },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile },
    { path: '/admin', component: DashBoard, meta: { requiresAdmin: true } },
    { path: '/admin/articles', component: ManageArticles, meta: { requiresAdmin: true } },
    { path: '/my-articles', component: ManageArticles, meta: { requiresAuth: true } },
    { path: '/admin/categories', component: ManageCategories, meta: { requiresAdmin: true } },
    { path: '/admin/comments', component: ManageComments, meta: { requiresAdmin: true } },
    { path: '/admin/users', component: ManageUsers, meta: { requiresAdmin: true } },
  ]
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null')
  if (to.meta.requiresAdmin && currentUser?.role !== 'admin') {
    return next('/login')
  }
  if (to.meta.requiresAuth && !currentUser) {
    return next('/login')
  }
  next()
})

export default router