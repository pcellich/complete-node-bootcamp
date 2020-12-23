const fs = require('fs');

// ROUTE HANDLERS
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkID = (req, res, next, val) => {
  //   console.log(req.requestTime);
  if (Number(req.params.id) > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};
// const toursHome = (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the Server side!', app: 'Natours' });
// };

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    requestedAt: req.requestTime,
    status: 'Success',
    result: tours.length,
    data: {
      tours,
    },
  });
};
exports.getOneTour = (req, res) => {
  req.requestTime;
  // console.log(req.params);
  const id = Number(req.params.id);
  const tour = tours.find((el) => el.id === id);
  // if (id > tours.length) {
  //   if (!tour) {
  //     return res.status(404).json({
  //       status: 'fail',
  //       message: 'Invalid ID',
  //     });
  //   }

  res.status(200).json({
    requestedAt: req.requestTime,
    status: 'Success',
    data: {
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/starter/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        'you posted at': req.requestTime,
        status: 'Success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

exports.UpdateTour = (req, res) => {
  //   if (Number(req.params.id) > tours.length) {
  //     return res.status(404).json({
  //       status: 'fail',
  //       message: 'Invalid ID',
  //     });
  //   }

  return res.status(200).json({
    status: 'Success',
    data: {
      tour: '<Updated tour here>',
    },
  });
};

exports.deleteTour = (req, res) => {
  if (Number(req.params.id) > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  return res.status(204).json({
    status: 'Success',
    data: null,
  });
};
