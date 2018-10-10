<template>
  <app-loading v-if="!hasCandidates"/>
  <div v-else>
    <h1>DEPUTADOS ESTADUAIS</h1>
    <app-candidates-list :candidates="candidates"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AppLoading from '@/components/AppLoading.vue';
import AppCandidatesList from '@/components/AppCandidatesList.vue';

export default {
  name: 'TheState',

  components: {
    AppLoading,
    AppCandidatesList,
  },

  computed: {
    ...mapState('state', ['candidates']),

    hasCandidates() {
      return !!this.candidates.length;
    },
  },

  methods: {
    ...mapActions('state', ['fetchPayload']),
  },

  created() {
    this.fetchPayload();
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>

