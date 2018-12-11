let router = require('express').Router();
let controller = require('./walmart_controller');

router.get('/product/:search', controller.get_search_product);

module.exports = router;
