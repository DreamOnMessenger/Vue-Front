<template>
  <div class="Dark vh-100">
    <div class="container">
      <b-form class="text-center">
        <h4 class="w-100 Text-Dark">Login</h4>
        <div class="form-group input-group mb-3 col-md-6 mx-auto">
          <div class="login-warning-Dark text-left"></div>
          <input
            type="text"
            class="rounded-pill w-100 p-2 border-0 mt-3 text-center"
            name="login-username"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <input
            type="password"
            class="rounded-pill w-100 p-2 border-0 mt-3 text-center"
            name="login-password"
            placeholder="Password"
          />
          <button type="submit" class="btn w-100 mt-3 login-btn">
            Go in DoM
          </button>
          <div class="btn w-100 mt-3 register-btn">I don't have account</div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 20%;
}
.Dark {
  background-color: #292f4c;
  height: 500px;
}
.login-btn {
  background-color: #f85252;
  color: beige;
  border-radius: 50px;
  transition: all 0.3;
  border: 1.5px solid transparent;
}
.login-btn:hover {
  background-color: transparent;
  color: #f85252;
  border-radius: 50px;
  transition: all 0.3;
  border: 1.5px solid #f85252;
}
.Text-Dark {
  color: #fff;
}
.register-btn {
  color: #f85252;
}
.register-btn:hover {
  color: #fff;
}
.login-warning-Dark {
  border: 1.5px solid transparent;
  color: #fff;
  font-size: large;
  width: 100%;
  border-radius: 50px;
  margin-top: 1rem;
  padding: 10px;
}
</style>
