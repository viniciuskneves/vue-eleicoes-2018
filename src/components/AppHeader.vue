<template>
  <h1>
    <span>Eleições 2018</span>
  </h1>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
h1 {
  margin-bottom: 0.1em;
  overflow: hidden;
  background-image: linear-gradient(
    to bottom,#2ed72a 0%,#2ed72a 40%,#ebff39 40%,#ebff39 80%,#fff 80%,#fff 100%
  );
  font-size: 4rem;
}

span {
  box-shadow: 10px 0 15px 20px #fff;
  background: #fff;
}
</style>
