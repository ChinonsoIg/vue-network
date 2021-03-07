<template>
  <div>
    <Notifications />
  </div>
</template>

<script>
import Notifications from "./pages/Notifications.vue";

// import Follow from "./components/Follow.vue";

// import AddEvent from "./components/AddEvent.vue";

export default {
  name: 'App',
  components: {
    Notifications
  }
}
</script>

<style>
#app {
  font-family: 'Roboto Slab', serif;
  border: 1px solid red;

}
</style>
