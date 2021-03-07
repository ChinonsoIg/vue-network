<template>
  <div id="section1" class="py-1 mb-3 menubar">
      <div class="flexleft">
        <i class="bi bi-person-plus-fill menu-item"></i>
      </div>
      <div class="flexright">
        <span><i class="bi bi-envelope-open menu-item"></i></span>
        <span><i class="bi bi-calendar3 menu-item"></i></span>
        <span><i class="bi bi-bell menu-item"></i></span>
        <span><i class="bi bi-person-circle menu-item"></i></span>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Header',
    // props: {
    //   msg: String
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menubar {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  /* align-items: center; */
}

.menu-item {
  font-size: 24px; 
  color: #8d67f8;
}

.flexleft {
  /* justify-self: flex-start; */
  padding: 0 10px;
  width: 60%;
}

.flexright {
  /* justify-self: flex-end; */
  width: 40%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.rooms-flex {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.rooms-flex > img {
  width: 30%;
  border: 1px solid yellowgreen;
  border-radius: 20%;
  padding: 1%;
}

.rooms-flex > div {
  width: 70%;
  padding: 1%;
}
</style>