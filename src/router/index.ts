import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";
import TestView from "../views/TestView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: HomeView,
    },
    {
      name: "test",
      path: "/test",
      component: TestView,
    },
  ],
});

export default router;
