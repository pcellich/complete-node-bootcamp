// const { fail } = require('assert');
const express = require('express');

const morgan = require('morgan');

const tourRouter = require('./starter/routes/tourRoutes');
const userRouter = require('./starter/routes/userRoutes');

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

// app.get('/', toursHome);
// app.get('/api/V1/tours', getAllTours);
// app.get('/api/V1/tours/:id', getOneTour);
// app.post('/api/V1/tours', createTour);
// app.patch('/api/V1/tours/:id', UpdateTour);
// app.delete('/api/V1/tours/:id', deleteTour);

// ROUTES
// MOUNTING A ROUTER
app.use('/api/V1/users', userRouter);
app.use('/api/V1/tours', tourRouter);
// app.use('/api/V1/tours', tourRouter);

// app.route('/').get(toursHome);

// const port = 5005;
// app.listen(port, () => {
//   console.log(`App running on port ${port}`);
// });

// 127.0.0.1:5005
module.exports = app;
