import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/robots',
    name: 'Robots',
    component: () => import(/* webpackChunkName: "Robots" */ '../views/Robots.vue'),
  },
  {
    path: '/robots/:robotID',
    name: 'RobotEdit',
    component: () => import(/* webpackChunkName: "RobotEdit" */ '../views/RobotEdit.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
