<template>
  <ul>
    <li
      v-for="candidato in candidatos"
      :key="candidato.id"
    >
      {{ candidato.nomeCompleto }}
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CandidatosList',
  computed: mapState(['candidatos']),
}
</script>

<style>

</style>
