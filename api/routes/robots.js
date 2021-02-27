const express = require('express');
const createError = require('http-errors');

const { getAllRobots, getRobotByID } = require('../controllers/resource/RobotController');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const robots = await getAllRobots();
    res.json(robots);
  } catch (err) {
    next(createError(500, 'server error'));
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const targetRobotID = parseInt(req.params.id, 10);

    const robot = await getRobotByID(targetRobotID);

    if (!robot) {
      res.status(404).send('unable to find robot');
    } else {
      res.json(robot);
    }
  } catch (err) {
    next(createError(500, 'server error'));
  }
});

module.exports = router;
