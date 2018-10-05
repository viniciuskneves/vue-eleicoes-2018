<template>
  <app-loading v-if="!hasCandidates"/>
  <div v-else>
    <h1>PRESIDENTES</h1>
    <app-candidates-list :candidates="candidates"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AppLoading from '@/components/AppLoading.vue';
import AppCandidatesList from '@/components/AppCandidatesList.vue';

export default {
  name: 'ThePresidents',

  components: {
    AppLoading,
    AppCandidatesList,
  },

  computed: {
    ...mapState('presidents', ['candidates']),

    hasCandidates() {
      return !!this.candidates.length;
    },
  },

  methods: {
    ...mapActions('presidents', ['fetchPayload']),
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

