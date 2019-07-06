var express = require('express');
var router = express.Router();
let orders = require("../controllers/getActiveOrders");

/* GET users listing. */
router.get('/', orders.getActiveOrders);

module.exports = router;
