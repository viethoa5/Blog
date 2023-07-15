var express = require('express')
const router = express.Router()

const newcontroller = require('../app/controller/newcontroller');

router.get('/search', newcontroller.search);
router.get('/',newcontroller.index);
module.exports = router;