<template>
  <div>
    <p>ACTIVITY</p>
    <div class="d-flex flex-column justify-content-between">
      <div class="d-flex flex-row justify-content-between align-items-center my-2">
        <div class="d-flex flex-row justify-content-between align-items-center">
          <img src="../assets/xps-1.jpg" alt="" class="border rounded-circle">
          <p class="m-2">NN followed you</p>
        </div>
        <p>7hours ago</p>
      </div>

      <div class="d-flex flex-row justify-content-between align-items-center my-2">
        <div class="d-flex flex-row justify-content-between align-items-center">
          <img src="../assets/xps-1.jpg" alt="" class="border rounded-circle">
          <p class="m-2">NN invited you to an event</p>
        </div>
        <p>7hours ago</p>
      </div>

    </div>
    <!-- <div class="d-flex flex-row justify-content-between align-items-center my-2">
      <div class="d-flex flex-row justify-content-between align-items-center">
        <img src="../assets/xps-1.jpg" alt="" class="border rounded-circle">
        <p class="m-3">NN followed you</p>
      </div>
      <p>7hours ago</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Notifications",
}
</script>

<style scoped>
img {
  width: 60px;
  height: 60px;
}
</style>