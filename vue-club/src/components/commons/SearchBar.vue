<template>
  <div id="section2" class="my-4 searchbar">
    <input type="text" placeholder="Search room...">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    placeholderMsg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ------ section2 ------ */
.searchbar {
  width: 100%;
  height: 50px;
}

.searchbar input {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  border: none;
  border-radius: 15px;
  outline: none;
  background-color: rgba(141, 103, 248, 0.2);
}
</style>
