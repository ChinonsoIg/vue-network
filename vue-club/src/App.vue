<template>
  <div>    
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/commons/Header.vue";
import Footer from "./components/commons/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
/* Universal styles */
#app {
  font-family: 'Roboto Slab', serif;
  border: 1px solid red;
}
button.danger {
  background-color: #f03252;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
}
button.danger:hover {
  background-color: #f16b9f;
  color: white;
  border-radius: 10px;
}
button {
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
}
button:hover {
  color: white;
  border-radius: 10x;
}

.bg-pri-colour {
  background-color: rgb(141, 103, 248);
}

.bg-pri-colour:hover {
  opacity: 0.8;
}

.font-pri-colour {
  color: rgb(141, 103, 248);
}

.link-pri-colour {
  color: rgb(141, 103, 248);
  text-decoration: none;
}

.font-pri-colour:hover, .link-pri-colour:hover {
  color: #5624dd;
}

</style>
