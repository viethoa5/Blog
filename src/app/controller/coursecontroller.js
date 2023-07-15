const Course = require('../models/course');
const {moongoseToObject} = require('../../util/moongose');
const { renderSync } = require('node-sass');
class coursecontroller {
    // GET /course/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
        .then(course => {
           res.render('courses/show', {
               course : moongoseToObject(course)});
        }).catch(next);
    }
    create(req, res, next) {
        res.render('courses/create');
    }
    store(req, res, next) {
        const course = new Course(req.body);
        course.save()
             .then(() => {
                 res.redirect( `/`)
             })
             .catch(error => {
                 
             });
    }
    edit(req, res, next) {
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit',{
            course : moongoseToObject(course) 
            })).catch(next);
    }

    // [PUT] /courses/:id
    update(req, res, next) {
            Course.updateOne({_id : req.params.id}, req.body)
                  .then(() => res.redirect('/me/stored/courses'))
    }
    // [DELETE] /courses/:id
    delete(req, res, next) {
        Course.deleteOne({_id : req.params.id})
              .then(() => res.redirect('/me/stored/courses'))
              .catch(next);
    }
}
module.exports = new coursecontroller();