var express = require('express')
var router = express.Router()
let orders = require("../controllers/dispatchOrder");

/* GET home page. */
router.post('/', orders.setDispatchOrder);

module.exports = router;