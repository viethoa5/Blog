var express = require('express')
const router = express.Router()

const mecontroller = require('../app/controller/mecontroller');
router.get('/stored/courses',mecontroller.storedcourse);

module.exports = router;