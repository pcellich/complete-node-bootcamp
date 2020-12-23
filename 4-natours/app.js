const { fail } = require('assert');
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  // count = tours.length++
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/starter/dev-data/data/tours-simple.json`)
);

const toursHome = (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the Server side!', app: 'Natours' });
};

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

const createTours = (req, res) => {
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

// app.get('/', toursHome);
// app.get('/api/V1/tours', getAllTours);
// app.get('/api/V1/tours/:id', getOneTour);
// app.post('/api/V1/tours', createTours);
// app.patch('/api/V1/tours/:id', UpdateTour);
// app.delete('/api/V1/tours/:id', deleteTour);
app.route('/', toursHome);
app.route('/api/V1/tours').get(getAllTours).post(createTours);
app
  .route('/api/V1/tours/:id')
  .get(getOneTour)
  .patch(UpdateTour)
  .delete(deleteTour);

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the Server side!', app: 'Natours' });
// });
// app.get('/api/V1/tours', (req, res) => {
//   res.status(200).json({
//     status: 'Success',
//     result: tours.length,
//     data: {
//       tours,
//     },
//   });
// });
// app.get('/api/V1/tours/:id', (req, res) => {
//   console.log(req.params);
//   const id = Number(req.params.id);
//   const tour = tours.find((el) => el.id === id);
//   // if (id > tours.length) {
//   if (!tour) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   }
//   // const tour = tours.find((el) => el.id === id);
//   res.status(200).json({
//     status: 'Success',
//     data: {
//       tour,
//     },
//   });
// });
// app.post('/api/V1/tours', (req, res) => {
//   const newId = tours[tours.length - 1].id + 1;
//   newTour = Object.assign({ id: newId }, req.body);
//   tours.push(newTour);

//   fs.writeFile(
//     `${__dirname}/starter/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     (err) => {
//       res.status(201).json({
//         status: 'Success',
//         data: {
//           tour: newTour,
//         },
//       });
//     }
//   );
// console.log(req.body);
// res.status(201).send('Your post was successful!');
// });

// app.patch('/api/V1/tours/:id', (req, res) => {
//   if (Number(req.params.id) > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   }

//   return res.status(200).json({
//     status: 'Success',
//     data: {
//       tour: '<Updated tour here>',
//     },
//   });
// });

// app.delete('/api/V1/tours/:id', (req, res) => {
//   if (Number(req.params.id) > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   }

//   return res.status(204).json({
//     status: 'Success',
//     data: null,
//   });
// });

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the Server side!', app: 'Natours' });
// });

// app.post('/send', (req, res) => {
//   res.status(201).send('Your post was successful!');
// });
// app.post('/send', (req, res) => {
//     res.status(201).send('Your post was successful!');
//   });

const port = 5005;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

// 127.0.0.1:5005
