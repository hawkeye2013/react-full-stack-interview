import axios from 'axios';

export default {
  created() {
    const targetURL = `http://localhost:3001/robots/${this.$route.params.robotID}`;

    axios
      .get(targetURL)
      .then((res) => {
        if (res.status === 200) {
          this.robot = res.data;
        } else {
          this.errors.push({
            name: 'getRobots',
            err: 'CouldNotGetRobot',
          });
        }
      })
      .catch(() => {
        // TODO(TUCKER) - Handle this error
      });
  },
  data() {
    return {
      robot: [],
      errors: [],
    };
  },
};
