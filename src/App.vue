<template>
  <div>
    <AppHeader />
    <AppBody />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppBody from './components/AppBody.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
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
