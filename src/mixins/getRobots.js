import axios from 'axios';

export default {
  created() {
    axios
      .get('http://localhost:3001/robots')
      .then((res) => {
        if (res.status === 200) {
          this.robots = res.data;
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
      robots: [],
      errors: [],
    };
  },
};
