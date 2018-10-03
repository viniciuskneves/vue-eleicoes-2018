import Vue from 'vue';
import Router from 'vue-router';
import CandidatosList from './components/CandidatosList.vue';
import GovernadoresList from './components/GovernadoresList.vue';

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
      component: CandidatosList,
    },
    {
      path: '/governadores',
      component: GovernadoresList,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
