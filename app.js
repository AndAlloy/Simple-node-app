const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const findPath = require('./helpers/find-path');
const { db: db } = require('./settings/settigns');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to DB'))
  .catch((error) => console.log(error));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get('/', (req, res) => {
  const title = 'Home';
  res.render(findPath('index'), { title });
});