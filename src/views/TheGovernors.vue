<template>
  <app-loading v-if="!hasCandidates"/>
  <div v-else>
    <h1>GOVERNADORES</h1>
    <app-candidates-list :candidates="candidates"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AppLoading from '@/components/AppLoading.vue';
import AppCandidatesList from '@/components/AppCandidatesList.vue';

export default {
  name: 'TheGovernors',

  components: {
    AppLoading,
    AppCandidatesList,
  },

  computed: {
    ...mapState('governors', ['candidates']),

    hasCandidates() {
      return !!this.candidates.length;
    },
  },

  methods: {
    ...mapActions('governors', ['fetchPayload']),
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
