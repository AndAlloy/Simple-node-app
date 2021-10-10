const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
  });