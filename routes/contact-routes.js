const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const createPath = require('../helpers/find-path');

router.get('/contacts', (req, res) => {
    const title = 'Contacts';
    Contact
      .find()
      .then(contacts => res.render(createPath('contacts'), { contacts, title }))
      .catch((error) => {
        console.log(error);
        res.render(findPath('error'), { title: 'Error' });
      });
  });

  module.exports = router;