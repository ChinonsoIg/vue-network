<template>
  <div>
    <UpcomingEvents />
  </div>
</template>

<script>
import UpcomingEvents from "./pages/UpcomingEvents.vue";

// import Follow from "./components/Follow.vue";

// import AddEvent from "./components/AddEvent.vue";

export default {
  name: 'App',
  components: {
    UpcomingEvents
  }
}
</script>

<style>
#app {
  font-family: 'Roboto Slab', serif;
  border: 1px solid red;

}
</style>
