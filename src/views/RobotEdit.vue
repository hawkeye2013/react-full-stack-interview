<template>
  <div class="RobotEdit p-5">
    <h2 class="is-size-2 has-text-left">Edit Robot {{ this.$route.params.robotID }}</h2>
    {{ robot }}
  </div>
</template>

<script>
import getRobotByID from '@/mixins/getRobotByID';

export default {
  mixins: [getRobotByID],
  components: {},
};
</script>

<style lang="scss" scoped></style>
