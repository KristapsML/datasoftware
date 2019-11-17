<template>
  <div>
    <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link :to="{name: 'home'}">
            <a class="navbar-item" href="#">
              <img src="../../assets/naestved.png" width="160" height="60" />
            </a>
          </router-link>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderLanding"
};
</script>

<style lang="scss">
#app > div > div > header > nav {
  background-color: #024260;
  color: #ffffff;
}

#navbarBasicExample > div > a {
  color: #f4f3f3;
}

#navbarBasicExample > div > a:hover {
  background-color: #2a6079;
}

.navbar-brand {
  margin-top: 0.5%;
}
</style>