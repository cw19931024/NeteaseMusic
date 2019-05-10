import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Recommend from "./views/Recommend.vue";
import Mine from "./views/Mine.vue";
import Ranking from "./views/Ranking.vue";
import PlayDetail from "./views/PlayDetail.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
      children: [
        {
          path: "recommend",
          component: Recommend
        },
        {
          path: "mine",
          component: Mine
        },
        {
          path: "ranking",
          component: Ranking
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/playDetail/:id",
      name: "login",
      component: PlayDetail
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
