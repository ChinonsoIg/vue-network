<template>
  <div id="section3" class="my-3 rooms-grid">

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
            <a href="#" class="card-link link">
              <!-- No of persons in the room -->
              28 
              <i class="bi bi-person-fill"></i>
            </a>
            <a href="#" class="card-link link">
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
            <a href="#" class="card-link link">
              <!-- No of persons in the room -->
              120 
              <i class="bi bi-person-fill"></i>
            </a>
            <a href="#" class="card-link link">
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
            <a href="#" class="card-link link">
              <!-- No of persons in the room -->
              25
              <i class="bi bi-person-fill"></i>
            </a>
            <a href="#" class="card-link link">
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
            <a href="#" class="card-link link">
              <!-- No of persons in the room -->
              105 
              <i class="bi bi-person-fill"></i>
            </a>
            <a href="#" class="card-link link">
              <!-- No of people on stage -->
              48
              <i class="bi bi-chat-dots"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="float-button">
      <button type="button" class="btn m-3">
        <i class="bi bi-plus"></i>
        Start a room
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RoomsList',
    // props: {
    //   msg: String
    // }
  }
</script>

<style scoped>
/* ------ section3 ------ */
.rooms-grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

.rooms-subgrid {
  width: 48%;
  margin: 10px 0;
  /* height: auto; */
  justify-self: center;
  align-self: center;
  border-radius: 15px;
  -webkit-box-shadow: 0 8px 6px -6px #777;
  -moz-box-shadow: 0 8px 6px -6px #777;
  box-shadow: 0 8px 6px -6px #777;
}

.link {
  color: rgba(141, 103, 248, 0.7);
  text-decoration: none;
}

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




/* ------ section4 ------ */
.float-button {
  position: fixed;
  bottom: 5%;
  right: 10%;  
}

.float-button > :first-child {
  border-radius: 15px;
  color: white;
  font-size: 1.5rem;
  background-color: #8d67f8;
  /* background-color:rgba(102, 0, 128, 1); */
}
</style>