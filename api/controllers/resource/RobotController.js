const { readJSON, writeJSON } = require('../db/DBController');

function getAllRobots() {
  return new Promise((resolve, reject) => {
    readJSON()
      .then((data) => {
        resolve(data.robots);
      })
      .catch((err) => reject(err));
  });
}

function getRobotByID(targetID) {
  return new Promise((resolve, reject) => {
    readJSON()
      .then((data) => {
        const matchingRobots = data.robots.filter((robot) => robot.id === targetID);

        if (matchingRobots.length > 0) {
          resolve(matchingRobots[0]);
        } else {
          resolve(null);
        }
      })
      .catch((err) => reject(err));
  });
}

function setRobots(newRobots) {
  return new Promise((resolve, reject) => {
    readJSON()
      .then((data) => {
        const newData = { ...data, robots: newRobots };

        writeJSON(newData)
          .then()
          .catch((writeErr) => reject(writeErr));
      })
      .catch((readErr) => reject(readErr));
  });
}

module.exports = {
  getAllRobots,
  getRobotByID,
};
