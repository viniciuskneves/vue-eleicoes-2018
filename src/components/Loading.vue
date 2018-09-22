<!-- Based on https://codepen.io/Manoz/pen/pydxK -->
<template>
  <div class="load">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
};
</script>

<style scoped>
.load {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.line {
  margin: 0 3px;
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #4b9cdb;
}

.load .line:nth-last-child(1) {
  background-color: #002776;
  animation: loading .6s .1s linear infinite;
}
.load .line:nth-last-child(2) {
  background-color: #009c3b;
  animation: loading .6s .2s linear infinite;
}
.load .line:nth-last-child(3) {
  background-color: #ffdf00;
  animation: loading .6s .3s linear infinite;
}

@keyframes loading {
    0 {transform: translate(0,0);}
    50% {transform: translate(0,15px);}
    100% {transform: translate(0,0);}
}
</style>
