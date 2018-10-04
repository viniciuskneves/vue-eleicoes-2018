<template>
  <!-- <Loading v-if="loading" /> -->
  <router-view />
</template>

<script>
import { mapState } from 'vuex';

import Loading from './Loading.vue';

export default {
  name: 'AppBody',
  components: {
    Loading,
  },
  computed: mapState({
    loading: state => !state.candidatos.length,
  }),
};
</script>
