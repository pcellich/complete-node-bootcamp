const mongoose = require('mongoose')
const dotenv = require('dotenv');
// dotenv.config({ path: "./config.env" })
const app = require('./app');
// console.log(app.get('env'));

// console.log(process.env);
// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );

// mongoose.connect("mongodb://localhost:27017/natours")
mongoose.connect("mongodb+srv://pcellich:dzidedi@cluster0.zpsot.mongodb.net/Natours?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => {
    // console.log(con.connections)
    console.log("DB connection successful")
  });
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  }


})

const Tour = mongoose.model("Tour", tourSchema)
const testTour = new Tour({
  name: "The Forest Hiker",
  rating: 4.7,
  price: 497
})
testTour.save()

const port = 5005;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
})
