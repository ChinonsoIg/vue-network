<template>
  <div class="my-grid">
    <div class="my-subgrid">
      <h1 class="logo">Logo</h1>
    </div>
    <div class="my-subgrid">
      <h1>Welcome to {Name of site}</h1>
      <p>Please type your email and password.</p>
      <div>
        <form class="my-5">

            <div class="row">
              <div class="col-md-6 my-3">
                <label for="email">E-mail:</label>
                <input type="text" class="form-control" placeholder="E-mail">
              </div>
              <div class="col-md-6 my-3">
                <label for="password">Password:</label>
                <input type="text" class="form-control" placeholder="Password">
              </div>
            </div>

            <button type="submit" class="bg-pri-colour">Log in</button>
          <!-- </fieldset> -->
        </form>
        
        <p>Don't have an account? <router-link to="/signup">Sign up</router-link></p>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn'
}
</script>

<style scoped>
.logo {
  text-align: center;
}
.my-grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

.my-subgrid {
  width: 48%;
  margin: 10px 0;
  justify-self: center;
  align-self: center;
}

@media (max-width: 768px) {
  .my-grid {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
  }
  .my-subgrid {
    width: 100%;
    margin: 10px 0;
    justify-self: center;
    align-self: center;
  }
}

</style>