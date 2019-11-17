<template>
  <div class="home">
    <HeaderLanding />
    <div class="color-split">
      <section class="section flex-centered">
        <div class="container">
          <div class="columns is-centered">
            <form>
              <img src="../assets/logotype.png" width="160" height="60" class="img-size" />
              <h1 class="title">Sign in to your account</h1>
              <div class="field">
                <label class="label">Username</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Your Username" />
                </div>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input class="input" type="password" placeholder="Your Password" />
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <router-link :to="{name: 'dashboard'}">
                    <button class="button is-link">Log in</button>
                  </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import HeaderLanding from "../components/layout/HeaderLanding.vue";

export default {
  name: "home",
  components: { HeaderLanding }
};
</script>

<style lang="scss" scoped>
.color-split {
  height: 50vh;
  background-color: #c0d0d8;
}

body {
  height: 100vh;
}

.img-size {
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10%;
}

form {
  background-color: #43484f;
  padding: 5%;
  border-radius: 10px;
  margin-top: 6%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);

  .is-link {
    background-color: #0073b6;
  }

  .is-link:hover {
    background-color: #60b1e0;
  }

  h1 {
    color: #f4f3f3;
  }

  label {
    color: #f4f3f3;
  }
}
</style>
