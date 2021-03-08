<template>
  <div>
    <h1 class="text-center pt-3">FIND PEOPLE TO FOLLOW</h1>
    <SearchBar />

    <div class="follow-grid">
      <!-- Data from the database will be used to fill the follow-subgrid -->
      <div class="follow-subgrid mt-3 mb-3">
        <div class="flex-left">
          <img src="../assets/logo.png" alt="" srcset="" class="border rounded-circle">
          <div class="p-1 m-1">
            <p>Name</p>
            <p>Brief details</p>
          </div>
        </div>
        <div class="flex-right">
          <p>Follow</p>
        </div>
      </div>

      <div class="follow-subgrid mt-3 mb-3">
        <div class="flex-left">
          <img src="../assets/xps-1.jpg" alt="" srcset="" class="border rounded-circle">
          <div class="p-1 m-1">
            <p>Name</p>
            <p>Brief details</p>
          </div>
        </div>
        <div class="flex-right">
          <p>Follow</p>
        </div>
      </div>

       <div class="follow-subgrid mt-3 mb-3">
        <div class="flex-left">
          <img src="../assets/xps-2.jpg" alt="" srcset="" class="border rounded-circle">
          <div class="p-1 m-1">
            <p>Name</p>
            <p>Brief details</p>
          </div>
        </div>
        <div class="flex-right">
          <p>Follow</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import SearchBar from "./commons/SearchBar.vue";

export default {
  name: 'Follow',
  components: {
    SearchBar,
  }
}
</script>

<style>
.follow-grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}
.follow-subgrid {
  display: flex;
  flex-flow: row nowrap;
  width: 48%;
  margin: 10px 0;
  justify-content: space-between;
  align-content: center;
  border-radius: 15px;
  -webkit-box-shadow: 0 8px 6px -6px #777;
  -moz-box-shadow: 0 8px 6px -6px #777;
  box-shadow: 0 8px 6px -6px #777;
}


@media (max-width: 768px) {
  .follow-grid {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
  }
  .follow-subgrid {
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



.flex-left {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

img {
  width: 100px;
  height: 100px;
}
.flex-right {
  align-self: center;
  justify-self: center;
}
.flex-right > p {  
  border: 2px solid purple;
  border-radius: 30px;
  padding: 5px 10px;
}
</style>
