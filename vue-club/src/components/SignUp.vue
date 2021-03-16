<template>
  <div class="my-grid">
    <div class="my-subgrid">
      <h1 class="logo">Logo</h1>
    </div>
    <div class="my-subgrid">
      <h1>Welcome to {Name of site}</h1>
      <p>Please complete this form to create your account</p>
      <p>Already have an account? <router-link to="/signin">Log in</router-link></p>
      <div>
        <form class="my-5">
          <!-- <fieldset>
            <legend>Pers</legend>           -->
            <div class="row">
              <div class="col-md-6 my-3">
                <label for="firstname">First name:</label>
                <input type="text" class="form-control" placeholder="First name">
              </div>
              <div class="col-md-6 my-3">
                <label for="lastname">Last name:</label>
                <input type="text" class="form-control" placeholder="Last name">
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 my-3">
                <label for="email">E-mail:</label>
                <input type="text" class="form-control" placeholder="E-mail">
              </div>
              <div class="col-md-6 my-3">
                <label for="phonenumber">Phone number:</label>
                <input type="text" class="form-control" placeholder="Phone number">
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 my-3">
                <label for="password">Password:</label>
                <input type="text" class="form-control" placeholder="Password">
              </div>
              <div class="col-md-6 my-3">
                <label for="retype-password">Re-type password:</label>
                <input type="text" class="form-control" placeholder="Re-type password">
              </div>
            </div>

            <button type="submit" class="bg-pri-colour">Sign in</button>
          <!-- </fieldset> -->
        </form>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp'
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