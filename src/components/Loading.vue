<template>
  <div></div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped>
div {
  margin: 0 auto;
  border: 2rem solid #fff;
  border-radius: 50%;
  border-top: 2rem solid #002776;
  border-right: 2rem solid #009c3b;
  border-bottom: 2rem solid #ffdf00;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
