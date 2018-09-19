<template>
  <div>
    <h1>PRESIDENTES</h1>
    <ul>
      <li
        v-for="candidato in candidatos"
        :key="candidato.id"
      >
        <img :src="candidato.photoUrl" />
        {{ candidato.nomeCompleto }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CandidatosList',
  computed: mapState(['candidatos']),
}
</script>

<style scoped>
h1 {
  text-align: center;
}

ul {
  list-style: none;
}

img {
  filter: grayscale(100%);
  border-radius: 20px;
}
</style>
