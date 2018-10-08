<template>
  <div class="candidate-list-item">
    <app-loading v-if="!hasPhoto" />
    <div
      class="image"
      v-else>
      <img :src="candidate.fotoUrl">
    </div>
    <div class="content">
      <span class="candidato-number">{{ candidate.numero }}</span>
      <h2>{{ candidate.nomeUrna }}</h2>
      <h3>{{ getPoliticalPartyAcronym }} - {{ candidate.nomeColigacao }}</h3>
    </div>
  </div>
</template>

<script>
import AppLoading from './AppLoading.vue';

export default {
  name: 'AppCandidatesListItem',

  components: {
    AppLoading,
  },

  props: {
    candidate: {
      type: Object,
      required: true,
    },
  },

  computed: {
    getPoliticalPartyAcronym() {
      return this.candidate.partido.sigla || this.candidate.eleicoesAnteriores[0].partido;
    },

    hasPhoto() {
      return !!this.candidate.fotoUrl;
    },
  },
};
</script>

<style scoped>
.candidate-list-item {
  display: flex;
  flex-wrap: wrap;
}

h3 {
  color: #aaa;
  font-weight: normal;
}

.content {
  flex-grow: 2;
  padding: 10px;
}

.image {
  align-self: center;
}

.candidato-number {
  background: #2f4858;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  padding: 0.2em 0.5em;
}

img {
  filter: grayscale(100%);
  border-radius: 20px;
}
</style>

