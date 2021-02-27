<template>
  <div>
    <Navbar />
    <div class="body-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped></style>
