import Vue from 'vue';
import Router from 'vue-router';
import ThePresidents from '@/modules/presidents/ThePresidents.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/presidentes',
    },
    {
      path: '/presidentes',
      component: ThePresidents,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
