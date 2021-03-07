<template>
  <div>
    <Header />
    <div class="profile-grid">
      <div class="d-flex flex-column justify-content-between my-2 profile-subgrid">
        <img src="../assets/xps-2.jpg" alt="" class="border rounded-circle">
        <!-- <button>Edit profile</button> -->
        <p>John Doe</p>
        <p>@johndoe</p>
        <div class="d-flex flex-row justify-content-flex-start">
          <p class="right-margin"><span>40</span> followers</p>
          <p class="left-margin"><span>20</span> following</p>
        </div>
      </div>

      <div class="my-2 profile-subgrid">
        <p>
          Bio....    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      
    </div>
  </div>
</template>

<script>
import Header from "../components/commons/Header";
export default {
  name: "Profile",
  components: {
    Header
  }
}
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}

.right-margin {
  margin-right: 10px;
}

.left-margin {
  margin-left: 10px;
}

.profile-grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

.profile-subgrid {
  width: 48%;
  justify-self: center;
  align-self: center;
}

@media (max-width: 768px) {
  .profile-grid {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .profile-subgrid {
    width: 100%;
    justify-self: center;
    align-self: center;
  }
}
</style>