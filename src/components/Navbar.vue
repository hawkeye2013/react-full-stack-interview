<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" :to="{ name: 'Home' }" tag="a">
        <h2 class="logo">ROBOT BATTLE ARENA</h2>
      </router-link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="{ name: 'Home' }" class="navbar-item" tag="a">
          Home
        </router-link>

        <router-link :to="{ name: 'Robots' }" class="navbar-item" tag="a">
          Robots
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" scoped>
.logo {
  font-family: 'Black Ops One', cursive;
}
</style>
