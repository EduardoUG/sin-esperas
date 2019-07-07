var express = require('express')
var router = express.Router()
let orders = require("../controllers/getActiveOrders");

/* GET home page. */
router.get('/', orders.getActiveOrdersLive);

module.exports = router;