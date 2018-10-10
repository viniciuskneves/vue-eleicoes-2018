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
  name: 'TheStateRepresentatives',

  components: {
    AppLoading,
    AppCandidatesList,
  },

  computed: {
    ...mapState('stateRepresentative', ['candidates']),

    hasCandidates() {
      return !!this.candidates.length;
    },
  },

  methods: {
    ...mapActions('stateRepresentative', ['fetchPayload']),
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

