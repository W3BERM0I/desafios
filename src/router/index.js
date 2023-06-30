// Composables
import { createRouter, createWebHistory } from "vue-router";
import LoginView from '@/views/Login.vue'
import store from "@/store";

const routes = [
  // {
  //   path: '/',
  //   component: () => import('@/layouts/default/Default.vue'),
  //   children: [
  //     {
  //       path: '',
  //       name: 'Home',
  //       // route level code-splitting
  //       // this generates a separate chunk (about.[hash].js) for this route
  //       // which is lazy-loaded when the route is visited.
  //       component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  //     },
  //   ],
  // },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    meta: {
      auth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/entrar",
    redirect: { name: 'Login' }
  },
  {
    path: "/",
    name: "Base",
    redirect: () => {
      if (store.state.isAuthenticated) return { name: "Home" }
      if (!store.state.isAuthenticated) return { name: "Login" }
    }
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const whitelist = [
  "Login"
];

router.beforeEach((to, from, next) => {
  if (!whitelist.includes(to.name) && !store.state.isAuthenticated) {
    next({ name: "Login" })
    return
  }

  if (to.meta.auth) {
    store.state.isAuthenticated ? next() : next({ name: "Login" })
  } else {
    next();
  }

  // if (to.name == "Login" && store.state.isAuthenticated) {
  //   next({ name: 'Home' })
  //   return
  // }
  next()
})

export default router;
