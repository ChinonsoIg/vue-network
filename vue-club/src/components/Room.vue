<template>
  <div class="my-grid my-4">
    <div class="card mx-2">
      <figure class="card-body my-subgrid">
        <img src="../assets/xps-1.jpg" alt="" class="img-fluid">
        <figcaption class="mt-2 text-center">Nelson Mandela</figcaption>
      </figure>
    </div>
    <div class="card mx-2">
      <figure class="card-body my-subgrid">
        <img src="../assets/logo.png" alt="" class="img-fluid">
        <figcaption class="mt-2 text-center">Abiy Ahmed Ali</figcaption>
      </figure>
    </div>
    <div class="card mx-2">
      <figure class="card-body my-subgrid">
        <img src="../assets/xps-1.jpg" alt="" class="img-fluid">
        <figcaption class="mt-2 text-center">Soyinka Wole</figcaption>
      </figure>
    </div>
    <div class="card mx-2">
      <figure class="card-body my-subgrid">
        <img src="../assets/logo.png" alt="" class="img-fluid">
        <figcaption class="mt-2 text-center">Sydney Brenner</figcaption>
      </figure>
    </div>
    <div class="card mx-2">
      <figure class="card-body my-subgrid">
        <img src="../assets/xps-1.jpg" alt="" class="img-fluid">
        <figcaption class="mt-2 text-center">Wangari Maathai</figcaption>
      </figure>
    </div>
    <div class="card mx-2">
      <figure class="card-body my-subgrid">
        <img src="../assets/logo.png" alt="" class="img-fluid">
        <figcaption class="mt-2 text-center">Sydney Brenner</figcaption>
      </figure>
    </div>
    <div class="card mx-2">
      <figure class="card-body my-subgrid">
        <img src="../assets/xps-2.jpg" alt="" class="img-fluid">
        <figcaption class="mt-2 text-center">Wangari Maathai</figcaption>
      </figure>
    </div>

  </div>
  
</template>

<script>
  export default {
    name: 'Room',
    // props: {
    //   msg: String
    // }
  }
</script>

<style scoped>
.my-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 10px;
  justify-items: center;
}

.my-subgrid img {
  height: 150px;
  width: 150px;
  border: 1px solid purple;
  border-radius: 20%;
}
</style>