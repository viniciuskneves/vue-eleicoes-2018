<template>
  <nav class="menu">
    <div
      :key="route.path"
      v-for="route in routes">
      <router-link
        class="route"
        :to="route.path">
        {{ route.name }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppMenu',
  data() {
    return {
      routes: [],
    };
  },
  created() {
    this.$router.options.routes.forEach((route) => {
      if (route.name) {
        this.routes.push({ name: route.name, path: route.path });
      }
    });
  },
};
</script>

<style scoped>
.menu {
  margin-bottom: 3em;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.menu div {
  margin: 0;
  padding: 0;
  margin: 20px 10px;
}
.route {
  border: 1px solid #e6e6e6;
  height: 100%;
  padding: 10px 20px;
  transition: all 0.3s ease;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
}
.route:hover {
  background-color: #fafafa;
}
</style>
