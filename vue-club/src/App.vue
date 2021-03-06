<template>
  <div>
    <Follow />
  </div>
</template>

<script>
// import Header from "./components/Header.vue";
// import SearchBar from "./components/SearchBar.vue";
// import RoomsList from "./components/RoomsList";

import Follow from "./components/Follow.vue";

export default {
  name: 'App',
  components: {
    Follow
  }
}
</script>

<style>
#app {
  font-family: 'Roboto Slab', serif;
  border: 1px solid red;

}
</style>
