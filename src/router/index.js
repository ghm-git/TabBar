import Vue from "vue";
import Router from "vue-router";
const Home = () => import("../views/home/Home");
const Category = () => import("../views/category/Category");
const Shopcart = () => import("../views/Shopcart/Shopcart");
const Profile = () => import("../views/profile/Profile");

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "",
      redirect: "/home",
      meta: {
        title: "首页"
      }
    },
    {
      path: "/home",
      component: Home,
      meta: {
        title: "首页"
      }
    },
    {
      path: "/category",
      component: Category,
      meta: {
        title: "分类"
      }
    },
    {
      path: "/shopcart",
      component: Shopcart,
      meta: {
        title: "购物车"
      }
    },
    {
      path: "/profile",
      component: Profile,
      meta: {
        title: "我的"
      }
    }
  ],
  mode: "history"
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

export default router;
