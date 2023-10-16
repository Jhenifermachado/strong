import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/FullLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
      ],
    },
    {
      path: "/",
      component: () => import("../layouts/BlankLayout.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("../views/LoginView.vue"),
        },
      ],
    },
  ],
});

export default router;
