const app = require('./app');

const port = 5005;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
