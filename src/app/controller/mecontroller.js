const Course = require('../models/course');
const {multipleMoongoseToObject} = require('../../util/moongose');
class mecontroller {
    // GET /course/:slug
    storedcourse(req, res, next) {
        Course.find({})
              .then(course => {
                res.render('me/store-course',{ 
                    course : multipleMoongoseToObject(course)});
            })
              .catch(next);
    }
}
module.exports = new mecontroller;