var express = require('express')
const router = express.Router()

const coursecontroller = require('../app/controller/coursecontroller');
router.get('/create', coursecontroller.create);
router.get('/:slug', coursecontroller.show);
router.post('/store',coursecontroller.store);
router.get('/:id/edit', coursecontroller.edit);
router.put('/:id',coursecontroller.update)
router.delete('/:id',coursecontroller.delete);
module.exports = router;