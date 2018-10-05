<template>
  <div>
    <app-header/>
    <app-menu />
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMenu from './components/AppMenu.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppMenu,
    AppFooter,
  },
};
</script>

<style>
body {
  max-width: 750px;
  margin: 0 auto;
}
</style>
