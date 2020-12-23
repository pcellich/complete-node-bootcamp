const express = require('express');
const fs = require('fs');

// ROUTE HANDLERS
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// const toursHome = (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the Server side!', app: 'Natours' });
// };

const getAllTours = (req, res) => {
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
const getOneTour = (req, res) => {
  req.requestTime;
  // console.log(req.params);
  const id = Number(req.params.id);
  const tour = tours.find((el) => el.id === id);
  // if (id > tours.length) {
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    requestedAt: req.requestTime,
    status: 'Success',
    data: {
      tour,
    },
  });
};

const createTour = (req, res) => {
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

const UpdateTour = (req, res) => {
  if (Number(req.params.id) > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  return res.status(200).json({
    status: 'Success',
    data: {
      tour: '<Updated tour here>',
    },
  });
};

const deleteTour = (req, res) => {
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

const router = express.Router();
// app.use('/api/V1/tours', router);
// app.use('/api/V1/users', userRouter);
// app.route('/').get(toursHome);
router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getOneTour).patch(UpdateTour).delete(deleteTour);
module.exports = router;
