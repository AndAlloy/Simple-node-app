const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const findPath = require('./helpers/find-path');
const postRoutes = require('./routes/post-routes');
const contactRoutes = require('./routes/contact-routes');
// const { db: db } = require('./settings/settigns');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;

// mongoose
//   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((res) => console.log('Connected to DB'))
//   .catch((error) => console.log(error));

app.use(express.static('styles'));

app.use(methodOverride('_method'));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get('/', (req, res) => {
  const title = 'Home';
  res.render(findPath('index'), { title });
});

app.use(postRoutes);
app.use(contactRoutes);

app.use((req, res) => {
  const title = 'Error Page';
  res
    .status(404)
    .render(findPath('error'), { title });
});