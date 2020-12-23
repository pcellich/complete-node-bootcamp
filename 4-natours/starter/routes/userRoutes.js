const express = require('express');
const userController = require('../controllers/userController');

// const getAllUsers = (req, res) => {
//   console.log(req.requestTime);
//   res.status(500).json({
//     requestedAt: req.requestTime,
//     status: 'error',
//     message: 'this route is not defined',
//   });
// };

// const getOneUser = (req, res) => {
//   console.log(req.requestTime);
//   res.status(500).json({
//     requestedAt: req.requestTime,
//     status: 'error',
//     message: 'this route is not defined',
//   });
// };
// const createUser = (req, res) => {
//   console.log(req.requestTime);
//   res.status(500).json({
//     requestedAt: req.requestTime,
//     status: 'error',
//     message: 'this route is not defined',
//   });
// };
// const UpdateUser = (req, res) => {
//   console.log(req.requestTime);
//   res.status(500).json({
//     requestedAt: req.requestTime,
//     status: 'error',
//     message: 'this route is not defined',
//   });
// };
// const deleteUser = (req, res) => {
//   console.log(req.requestTime);
//   res.status(500).json({
//     requestedAt: req.requestTime,
//     status: 'error',
//     message: 'this route is not defined',
//   });
// };

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getOneUser)
  .patch(userController.UpdateUser)
  .delete(userController.deleteUser);
module.exports = router;
