const { readJSON } = require('../data/DBController');

function getAllRobots() {
  readJSON();
}

module.exports = {
  getAllRobots,
};
