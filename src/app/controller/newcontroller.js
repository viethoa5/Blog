const Course = require('../models/course');
const {multipleMoongoseToObject} = require('../../util/moongose');
class newcontroller {
    index(req, res, next) {
       // res.render('home');
       Course.find({})
             .then(course => {
                 res.render('home',{ 
                     course : multipleMoongoseToObject(course)});
             })
             .catch(next);
    }
    search(req,res) {
        res.render('search')
    }
}
module.exports = new newcontroller;
