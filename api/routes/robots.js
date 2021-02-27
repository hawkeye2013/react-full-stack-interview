const express = require('express');
const createError = require('http-errors');

const { getAllRobots } = require('../controllers/resource/RobotController');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const robots = await getAllRobots();
    res.json(robots);
  } catch (err) {
    console.log(err);
    createError(500);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const targetRobotID = req.params.id;

    console.log(targetRobotID);

    const robots = await getAllRobots();
    res.json(robots);
  } catch (err) {
    console.log(err);
    createError(500);
  }
});

module.exports = router;
