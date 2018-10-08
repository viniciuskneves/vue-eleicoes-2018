<template>
  <ul>
    <li
      v-for="candidate in candidates"
      :key="candidate.id">
      <app-candidates-list-item :candidate="candidate" />
    </li>
  </ul>
</template>

<script>
import AppLoading from './AppLoading.vue';
import AppCandidatesListItem from './AppCandidatesListItem.vue';

export default {
  name: 'AppCandidatesList',

  components: {
    AppLoading,
    AppCandidatesListItem,
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
  margin-bottom: 20px;
}
</style>
