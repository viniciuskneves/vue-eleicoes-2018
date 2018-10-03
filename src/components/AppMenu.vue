<template>
    <nav class="menu">
        <div :key="route.path" v-for="route in routes">
            <router-link class="route" :to="route.path">{{ route.name }}</router-link>
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
        this.routes.push({
          name: route.name,
          path: route.path,
        });
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
    border-width: 1px 1px 1px 1px;
    border-style: solid;
    border-color: #e6e6e6;
    height: 100%;
    padding: 10px 20px;
    /* margin: 20px 40px; */
    transition: all 0.3s ease;
    font-size: 1.2rem;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
}
.route:hover {
    background-color: #fafafa;
}
</style>
