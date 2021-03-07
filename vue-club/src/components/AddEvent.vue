<template>
  <div class="py-3">
    <div class="section-one">
      <button class="btn-danger rounded">Cancel</button>
      <p>NEW EVENT</p>
      <button>Publish</button>
    </div>
    <div class="section-two my-3 py-2">
      <input type="text" name="event-name" id="" placeholder="Event name">
      <p class="pt-3">Add a Co-host</p>
      <p>Add Guests</p>
    </div>
    <div class="section-three my-4 py-3">
      <div>
        <label for="event-date">Date: &nbsp;</label>
        <input type="date" name="event-date" id="">
      </div>
      <div>
        <label for="event-time">Time: &nbsp;</label>
        <input type="time" name="event-time" id="">
      </div>
    </div>
    <div class="section-four">
      <textarea name="event-description" id="" rows="10" placeholder="Brief description of the event..."></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddEvent'
}
</script>

<style scoped>
.section-one {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
}

.section-one button:last-child {
  background-color: #8d67f8;
  /* opacity: 1; */
  color: white;
  border: none;
  border-radius: 5px;
}

.section-one button:last-child:hover {
  background-color: #b8a2f7;
  color: white;
  /* border: none; */
  border-radius: 5px;
}

.section-two {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-content: space-around;
  align-items: flex-start;
  padding: 0 5px;
  background-color: white;
  border-radius: 15px;
}

.section-two input {
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #8d67f8;
}

.section-three {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  align-content: flex-start;
  align-items: flex-start;
  background-color: white;
  padding: 0 5px;
  border-radius: 10px;
}
.section-three input {  
  border: none;
  border-bottom: 1px solid #8d67f8;
}
.section-four {
  width: 100%;
  /* border: 1px solid red; */
}
.section-four textarea {
  width: 100%;
  border: 1px solid #8d67f8;
  border-radius: 5px;
  outline: none;
}
</style>