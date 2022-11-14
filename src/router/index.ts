import { createRouter, createWebHistory } from "vue-router";
import TestView from "../views/TestView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "test",
      path: "/test",
      component: TestView,
    },
  ],
});

export default router;
