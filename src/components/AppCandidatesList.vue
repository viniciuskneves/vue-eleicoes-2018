<template>
  <ul>
    <li
      v-for="candidate in candidates"
      :key="candidate.id">
      <div class="image">
        <img :src="candidate.fotoUrl">
      </div>
      <div class="content">
        <span class="candidato-number">{{ candidate.numero }}</span>
        <h2>{{ candidate.nomeUrna }}</h2>
        <h3>{{ candidate.sigla }} - {{ candidate.nomeColigacao }}</h3>
      </div>
    </li>
  </ul>
</template>

<script>
import AppLoading from './AppLoading.vue';

export default {
  name: 'AppCandidatesList',

  components: {
    AppLoading,
  },

  props: {
    candidates: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

ul {
  list-style: none;
}

li {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
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
