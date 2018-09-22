<template>
  <Loading v-if="loading" />
  <CandidatosList v-else />
</template>

<script>
import { mapState } from 'vuex';

import Loading from './Loading.vue';
import CandidatosList from './CandidatosList.vue';

export default {
  name: 'AppBody',
  components: {
    Loading,
    CandidatosList,
  },
  computed: mapState({
    loading: state => !state.candidatos.length,
  }),
};
</script>

<style>

</style>
