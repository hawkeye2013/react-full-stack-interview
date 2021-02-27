// const fs = require('fs');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', '..', 'data', 'db.json');

function readJSON() {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, (err, data) => {
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });
}

function writeJSON(newJSON) {
  return new Promise((resolve, reject) => {
    const formattedJSON = JSON.stringify(newJSON, null, 2);

    fs.writeFile(dbPath, formattedJSON, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
}

module.exports = {
  readJSON,
  writeJSON,
};
