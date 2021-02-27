<template>
  <div class="RobotEdit p-5" v-if="robot">
    <h2 class="is-size-2 has-text-left">Edit Robot {{ this.$route.params.robotID }}</h2>

    <h4 class="is-size-4 has-text-left"><strong>Name: </strong>{{ robot.name }}</h4>
    <h4 class="is-size-4 has-text-left"><strong>Color: </strong>{{ robot.color }}</h4>
    <h4 class="is-size-4 has-text-left"><strong>Attack: </strong>{{ robot.attack }}</h4>
    <h4 class="is-size-4 has-text-left"><strong>Defense: </strong>{{ robot.defense }}</h4>
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
