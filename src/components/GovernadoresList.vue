<template>
  <div>
    <Loading v-if="!candidatos.length" />
    <div v-else>
      <h1>GOVERNADORES</h1>
      <ul>
        <li
          v-for="candidato in candidatos"
          :key="candidato.id"
        >
          <div class="image">
            <Loading v-if="!candidato.photoUrl" />
            <img
              v-else
              :src="candidato.photoUrl"
            />
          </div>
          <div class="content">
            <span class="candidato-number">{{ candidato.numero }}</span>
            <h2>{{ candidato.nomeUrna }}</h2>
            <h3>{{ candidato.sigla }} - {{ candidato.nomeColigacao }}</h3>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Loading from './Loading.vue';
import types from '../types';

export default {
  name: 'GovernadoresList',
  components: { Loading },
  computed: mapState(['candidatos']),
  created() {
    this.$store.dispatch('FETCH_DATA', { state: 'SC', type: types.governador });
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
