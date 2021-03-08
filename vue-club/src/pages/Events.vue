<template>
  <div>
    <div class="d-flex justify-content-between">
      <p>UPCOMING ROOM EVENTS</p>
      <router-link to="/events/add">
        <button class="bg-pri-colour">Add event</button>
      </router-link>
    </div>
    <div class="events-grid my-2">
      <div class="events-subgrid">
        <div class="d-flex justify-content-between">
          <p>Time</p>
          <p><i class="bi bi-bell font-pri-colour"></i></p>
        </div>
        <p>Event name</p>
        <p>Host name</p>
        <p>Description</p>
      </div>

      <div class="events-subgrid">
        <div class="d-flex justify-content-between">
          <p>Time</p>
          <p><i class="bi bi-bell font-pri-colour"></i></p>
        </div>
        <p>Event name</p>
        <p>Host name</p>
        <p>Description</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Events",
}
</script>

<style scoped>
.events-grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}
.events-subgrid {
  display: flex;
  flex-flow: column;
  width: 48%;
  margin: 10px 0;
  justify-content: space-between;
  align-content: center;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  -webkit-box-shadow: 0 8px 6px -6px #777;
  -moz-box-shadow: 0 8px 6px -6px #777;
  box-shadow: 0 8px 6px -6px #777;
}

button {
  /* background-color: #b8a2f7; */
  /* opacity: 1; */
  /* color: white; */
  border: none;
  padding: 10px;
  border-radius: 15px;
}

button:hover {
  /* background-color: #8d67f8;
  color: white; */
  /* border: none; */
  /* border-radius: 15px; */
}

@media (max-width: 768px) {
  .events-grid {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
  }
  .events-subgrid {
    width: 100%;
    margin: 10px 0;
    justify-self: center;
    align-self: center;
    border-radius: 15px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
}

</style>