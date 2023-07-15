const newRouter = require('./router')
const coursesRouter = require('./course')
const meRouter  = require('./me')

function newrouter(app) {
    app.use('/search', newRouter)
    app.use('/',newRouter)
    app.use('/courses',coursesRouter)
    app.use('/me',meRouter)
}

module.exports = newrouter;
