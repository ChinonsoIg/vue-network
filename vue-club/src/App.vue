<template>
  <div>
    <Profile />
  </div>
</template>

<script>
import Profile from "./pages/Profile.vue";

// import Follow from "./components/Follow.vue";

// import AddEvent from "./components/AddEvent.vue";

export default {
  name: 'App',
  components: {
    Profile
  }
}
</script>

<style>
#app {
  font-family: 'Roboto Slab', serif;
  border: 1px solid red;

}
</style>
