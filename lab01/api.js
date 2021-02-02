'use strict';

const { Router } = require('express');
const router = Router();

router.post('/test', require('./controllers/test.js').post);

module.exports = router;
