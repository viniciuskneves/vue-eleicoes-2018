import Vue from 'vue';
import Router from 'vue-router';
import CandidatosList from './components/CandidatosList.vue';
import GovernadoresList from './components/GovernadoresList.vue';
import FederaisList from './components/FederaisList.vue';

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
      component: CandidatosList,
    },
    {
      path: '/governadores',
      name: 'Governadores',
      component: GovernadoresList,
    },
    {
      path: '/federais',
      name: 'Deputados Federais',
      component: FederaisList,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
