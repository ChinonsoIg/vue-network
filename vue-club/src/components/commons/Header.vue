<template>
  <div id="section1" class="py-1 mb-3 menubar">
      <div class="flexleft">
        <router-link to="/">
          <i class="bi bi-person-plus-fill menu-item font-pri-colour"></i>
        </router-link>
      </div>
      <div class="flexright">
        <router-link to="/invites">
          <span><i class="bi bi-envelope-open menu-item font-pri-colour"></i></span>
        </router-link>
        <router-link to="/events">
          <span><i class="bi bi-calendar3 menu-item font-pri-colour"></i></span>
        </router-link>
        <router-link to="/notifications">
          <span><i class="bi bi-bell menu-item font-pri-colour"></i></span>
        </router-link>
        <router-link to="profile">
          <span><i class="bi bi-person-circle menu-item font-pri-colour"></i></span>
        </router-link>

      </div>
    </div>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menubar {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.menu-item {
  font-size: 28px;
}

.flexleft {
  padding: 0 10px;
  width: 65%;
}

.flexright {
  width: 35%;
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