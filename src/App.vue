<template>
  <div>
    <AppHeader />
    <AppMenu />
    <AppBody />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMenu from './components/AppMenu.vue';
import AppBody from './components/AppBody.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMenu,
    AppBody,
    AppFooter,
  },
  created() {
    this.$store.dispatch('FETCH_DATA');
  },
};
</script>

<style>
body {
  max-width: 750px;
  margin: 0 auto;
}
</style>
