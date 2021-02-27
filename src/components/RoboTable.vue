<template>
  <div class="box robo-table">
    <h2 class="is-size-3 has-text-left">Available Robots</h2>

    <table
      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth robo-table"
      v-if="robots"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Attack</th>
          <th>Defense</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="table-row"
          v-for="robot of robots"
          :key="robot.id"
          @click="handleRowClick(robot.id)"
        >
          <td>{{ robot.name }}</td>
          <td>{{ robot.color }}</td>
          <td>{{ robot.attack }}</td>
          <td>{{ robot.defense }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RoboTable',
  props: {
    robots: Array,
  },
  methods: {
    handleRowClick(robotID) {
      this.$emit('rowClick', robotID);
    },
  },
};
</script>

<style lang="scss" scoped>
.robo-table {
  margin: 10px;
}

.table-row {
  cursor: pointer;
}
</style>
