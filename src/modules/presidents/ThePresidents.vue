<template>
  <div>
    <app-loading v-if="!hasCandidates"/>
    <app-candidates-list
      :candidatos="candidatos"
      v-else/>
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
