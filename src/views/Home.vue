<template>
  <div class="home columns p-6">
    <div class="column">
      <img class="robots" src="../assets/robots.jpg" alt="Robot Battle" />
    </div>
    <div class="column">
      <div class="heading-block">
        <p class="welcome">Welcome to the</p>
        <p class="logo-lg">ROBOT BATTLE ARENA</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  align-items: center;
}

.robots {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.heading-block {
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  .welcome {
    font-size: 2rem;
  }

  .logo-lg {
    font-family: 'Black Ops One', cursive;
    font-size: 4rem;
  }
}
</style>
