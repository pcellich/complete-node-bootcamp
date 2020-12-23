exports.getAllUsers = (req, res) => {
  console.log(req.requestTime);
  res.status(500).json({
    requestedAt: req.requestTime,
    status: 'error',
    message: 'this route is not defined',
  });
};

exports.getOneUser = (req, res) => {
  console.log(req.requestTime);
  res.status(500).json({
    requestedAt: req.requestTime,
    status: 'error',
    message: 'this route is not defined',
  });
};
exports.createUser = (req, res) => {
  console.log(req.requestTime);
  res.status(500).json({
    requestedAt: req.requestTime,
    status: 'error',
    message: 'this route is not defined',
  });
};
exports.UpdateUser = (req, res) => {
  console.log(req.requestTime);
  res.status(500).json({
    requestedAt: req.requestTime,
    status: 'error',
    message: 'this route is not defined',
  });
};
exports.deleteUser = (req, res) => {
  console.log(req.requestTime);
  res.status(500).json({
    requestedAt: req.requestTime,
    status: 'error',
    message: 'this route is not defined',
  });
};
