import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import BlogList from "../views/BlogList.vue";
import BlogPost from "../views/BlogPost.vue";
import DashBoard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import UserProfile from "../views/UserProfile.vue";
import UserProfileInfo from "../views/UserProfileInfo.vue";
import UserProfileSettings from "../views/UserProfileSettings.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      { path: "blogs", name: "blog-list", component: BlogList },
      { path: "blogs/:id", name: "blog-post", component: BlogPost },
      {
        path: "dashboard",
        name: "dashboard",
        component: DashBoard,
      },
      { path: "login", name: "login", component: Login },
      {
        path: "profile",
        name: "userProfile",
        component: UserProfile,
        children: [
          { path: "info", name: "userProfileInfo", component: UserProfileInfo },
          { path: "settings", name: "userProfileSettings", component: UserProfileSettings },
        ],
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Route Guard for Authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
