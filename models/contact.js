const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactsSchema = new Schema({
    name: {
        type: 'string',
        required: true,
    },
    link: {
        type: 'string',
        required: true,
    },
    

});

const Contact = mongoose.model('Contact', contactsSchema);

module.exports = Contact;