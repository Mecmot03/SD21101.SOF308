import { createRouter, createWebHistory } from "vue-router";
import home from "../components/Home.vue";
import about from "../components/About.vue";
import contact from "../components/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
