const express = require('express');

const getAllUsers = (req, res) => {
  console.log(req.requestTime);
  res.status(500).json({
    requestedAt: req.requestTime,
    status: 'error',
    message: 'this route is not defined',
  });
};

const getOneUser = (req, res) => {
  console.log(req.requestTime);
  res.status(500).json({
    requestedAt: req.requestTime,
    status: 'error',
    message: 'this route is not defined',
  });
};
const createUser = (req, res) => {
  console.log(req.requestTime);
  res.status(500).json({
    requestedAt: req.requestTime,
    status: 'error',
    message: 'this route is not defined',
  });
};
const UpdateUser = (req, res) => {
  console.log(req.requestTime);
  res.status(500).json({
    requestedAt: req.requestTime,
    status: 'error',
    message: 'this route is not defined',
  });
};
const deleteUser = (req, res) => {
  console.log(req.requestTime);
  res.status(500).json({
    requestedAt: req.requestTime,
    status: 'error',
    message: 'this route is not defined',
  });
};

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getOneUser).patch(UpdateUser).delete(deleteUser);
module.exports = router;
