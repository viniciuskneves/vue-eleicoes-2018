<template>
  <div>
    <AppHeader />
    <AppBody />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppBody from './components/AppBody.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppBody,
  },
  created() {
    this.$store.dispatch('FETCH_DATA');
  },
};
</script>
