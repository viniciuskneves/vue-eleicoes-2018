import Vue from 'vue';
import Router from 'vue-router';
import ThePresidents from '@/views/ThePresidents.vue';

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
      name: 'Presidentes',
      component: ThePresidents,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
