<template>
  <div class="robots">
    <div v-if="errors.length > 0">
      <h2>Oh No! An Error Occured!</h2>
    </div>
    <div v-else>
      <RobotTable @rowClick="navigateToRobotURL" :robots="robots" />
    </div>
  </div>
</template>

<script>
import getRobots from '@/mixins/getRobots';
import RobotTable from '@/components/RoboTable.vue';

export default {
  mixins: [getRobots],
  components: {
    RobotTable,
  },
  methods: {
    navigateToRobotURL(robotID) {
      this.$router.push({ name: 'RobotEdit', params: { robotID } });
    },
  },
};
</script>

<style lang="scss" scoped></style>
