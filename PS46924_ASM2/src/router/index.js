import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Articles from '../views/Articles.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
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
    { path: '/admin', component: DashBoard },
    { path: '/admin/articles', component: ManageArticles },
    { path: '/admin/categories', component: ManageCategories },
    { path: '/admin/comments', component: ManageComments },
    { path: '/admin/users', component: ManageUsers },
  ]
})

export default router   