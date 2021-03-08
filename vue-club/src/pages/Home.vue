<template>
  <div>
    <SearchBar/>
    <div id="section" class="my-3 rooms-grid">

      <div class="card rooms-subgrid">
        <div class="card-body">
          <h5 class="card-title">Club Name</h5>
          <h6 class="card-subtitle mb-2 text-muted">Meeting Title/Purpose</h6>
          <div class="rooms-flex">
            <img src="" alt="Avatar of room users">
            <div>
              <p class="card-text">Room user 1</p>
              <p class="card-text">Room user 2</p>
              <p class="card-text">Room user 3</p>
              <a href="#" class="card-link link-pri-colour">
                <!-- No of persons in the room -->
                28 
                <i class="bi bi-person-fill"></i>
              </a>
              <a href="#" class="card-link link link-pri-colour">
                <!-- No of people on stage -->
                18
                <i class="bi bi-chat-dots"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="card rooms-subgrid">
        <div class="card-body">
          <h5 class="card-title">Club Name</h5>
          <h6 class="card-subtitle mb-2 text-muted">Meeting Title/Purpose</h6>
          <div class="rooms-flex">
            <img src="" alt="Avatar of room users">
            <div>
              <p class="card-text">Room user 1</p>
              <p class="card-text">Room user 2</p>
              <p class="card-text">Room user 3</p>
              <a href="#" class="card-link link link-pri-colour">
                <!-- No of persons in the room -->
                120 
                <i class="bi bi-person-fill"></i>
              </a>
              <a href="#" class="card-link link link-pri-colour">
                <!-- No of people on stage -->
                25
                <i class="bi bi-chat-dots"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="card rooms-subgrid">
        <div class="card-body">
          <h5 class="card-title">Club Name</h5>
          <h6 class="card-subtitle mb-2 text-muted">Meeting Title/Purpose</h6>
          <div class="rooms-flex">
            <img src="" alt="Avatar of room users">
            <div>
              <p class="card-text">Room user 1</p>
              <p class="card-text">Room user 2</p>
              <p class="card-text">Room user 3</p>
              <a href="#" class="card-link link link-pri-colour">
                <!-- No of persons in the room -->
                25
                <i class="bi bi-person-fill"></i>
              </a>
              <a href="#" class="card-link link link-pri-colour">
                <!-- No of people on stage -->
                14
                <i class="bi bi-chat-dots"></i>
              </a>
            </div>
          </div>
        </div>
      </div>  

      <div class="card rooms-subgrid">
        <div class="card-body">
          <h5 class="card-title">Club Name</h5>
          <h6 class="card-subtitle mb-2 text-muted">Meeting Title/Purpose</h6>
          <div class="rooms-flex">
            <img src="" alt="Avatar of room users">
            <div>
              <p class="card-text">Room user 1</p>
              <p class="card-text">Room user 2</p>
              <p class="card-text">Room user 3</p>
              <a href="#" class="card-link link link-pri-colour">
                <!-- No of persons in the room -->
                105 
                <i class="bi bi-person-fill"></i>
              </a>
              <a href="#" class="card-link link link-pri-colour">
                <!-- No of people on stage -->
                48
                <i class="bi bi-chat-dots"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="float-button">
        <button type="button" class="m-3 bg-pri-colour">
          <i class="bi bi-plus"></i>
          Start a room
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/commons/SearchBar.vue";
  export default {
    name: 'Home',
    components: {
      SearchBar,
    }
    // props: {
    //   msg: String
    // }
  }
</script>

<style scoped>
.rooms-grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

.rooms-subgrid {
  width: 48%;
  margin: 10px 0;
  justify-self: center;
  align-self: center;
  border-radius: 15px;
  -webkit-box-shadow: 0 8px 6px -6px #777;
  -moz-box-shadow: 0 8px 6px -6px #777;
  box-shadow: 0 8px 6px -6px #777;
}

@media (max-width: 768px) {
  .rooms-grid {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
  }
  .rooms-subgrid {
    width: 100%;
    margin: 10px 0;
    justify-self: center;
    align-self: center;
    border-radius: 15px;
    -webkit-box-shadow: 0 8px 6px -6px #777;
    -moz-box-shadow: 0 8px 6px -6px #777;
    box-shadow: 0 8px 6px -6px #777;
  }
}

.float-button {
  position: fixed;
  bottom: 5%;
  right: 10%;  
}

.float-button > button {
  border-radius: 15px;
  font-size: 1.5rem;
}

/* .float-button > button:hover {
  border-radius: 15px;
  font-size: 1.5rem;
} */

</style>