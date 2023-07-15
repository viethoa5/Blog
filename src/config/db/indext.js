const mongoose = require('mongoose');

async function connect() {
     try {
         await mongoose.connect('mongodb://localhost:27017/F8_education_dev', {
             useNEWUrlParser: true,
             useUnifiedTopology: true
         });
         console.log('Connected');
     } catch (err) {
         console.log(err);
     }
}

module.exports = { connect };