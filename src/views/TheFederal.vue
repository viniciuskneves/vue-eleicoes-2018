<template>
  <app-loading v-if="!hasCandidates"/>
  <div v-else>
    <h1>DEPUTADOS FEDERAIS</h1>
    <app-candidates-list :candidates="candidates"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AppLoading from '@/components/AppLoading.vue';
import AppCandidatesList from '@/components/AppCandidatesList.vue';

export default {
  name: 'TheFederal',

  components: {
    AppLoading,
    AppCandidatesList,
  },

  computed: {
    ...mapState('federal', ['candidates']),

    hasCandidates() {
      return !!this.candidates.length;
    },
  },

  methods: {
    ...mapActions('federal', ['fetchPayload']),
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

