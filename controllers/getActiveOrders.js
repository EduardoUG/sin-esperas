const request = require("superagent")

async function getActiveOrders (reque, respon) {
  request
  .get('http://192.168.100.59:9000/api/order/getActiveOrders')
  .then(res => {
    respon.json(res.body);
  })
  .catch (err => {
    console.log(err);
  })
} 

module.exports = {
  getActiveOrders
}