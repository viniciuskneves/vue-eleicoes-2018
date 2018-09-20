<template>
  <footer>
    <p>As informações contidas nessa página foram retiradas do <a href="http://divulgacandcontas.tse.jus.br" target="_blank">Site Oficial do TSE</a>.</p>
    <p>Este projeto tem o <a href="https://github.com/viniciuskneves/vue-eleicoes-2018">código aberto</a> sob a <a href="https://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT">Licença MIT</a>.</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
footer {
  text-align: center;
}

p {
  color: #aaa;
}

a {
  color: #777;
}
</style>
