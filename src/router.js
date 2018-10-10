import Vue from 'vue';
import Router from 'vue-router';
import ThePresidents from '@/views/ThePresidents.vue';
import TheFederal from '@/views/TheFederal.vue';
import TheState from '@/views/TheState.vue';

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
      path: '/federais',
      name: 'Dep. Federais',
      component: TheFederal,
    },
    {
      path: '/estaduais',
      name: 'Dep. Estaduais',
      component: TheState,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
