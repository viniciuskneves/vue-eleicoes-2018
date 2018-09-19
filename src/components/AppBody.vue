<template>
  <Loading v-if="loading" />
  <CandidatosList v-else />
</template>

<script>
import Loading from './Loading.vue';
import CandidatosList from './CandidatosList.vue';

import { mapState } from 'vuex';

export default {
  name: 'AppBody',
  components: {
    Loading,
    CandidatosList,
  },
  computed: mapState({
    loading: state => !state.candidatos.length,
  }),
}
</script>

<style>

</style>
