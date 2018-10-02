<template>
  <div>
    <loading v-if="!hasCandidates"/>
    <candidatos-list
      :candidatos="candidatos"
      v-else/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Loading from '@/components/Loading.vue';
import CandidatosList from '@/components/CandidatosList.vue';

export default {
  name: 'ThePresidents',

  components: {
    Loading,
    CandidatosList,
  },

  computed: {
    ...mapState('presidents', ['candidatos']),

    hasCandidates() {
      return !!this.candidatos.length;
    },
  },

  methods: {
    ...mapActions('presidents', ['FETCH_DATA']),
  },

  created() {
    this.FETCH_DATA();
  },
};
</script>
