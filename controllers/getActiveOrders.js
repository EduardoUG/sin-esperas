const request = require("superagent")
const db = require("../database")

async function getActiveOrders (reque, respon) {
  request
  .get('http://192.168.100.59:9000/api/order/getActiveOrders')
  .then(res => {

    //Response to client
    respon.send(res.body);
  })
  .catch (err => {
    console.log(err);
  })
} 

async function getActiveOrdersLive (reque, respon) {
  request
  .get('http://192.168.100.59:9000/api/order/getActiveOrders')
  .then(res => {
    console.log(res.body);
    //Response to client
    respon.io.emit("sendOrders", res.body);
    respon.send({message: "Se ha recibido la orden", status: true})
  })
  .catch (err => {
    console.log(err);
  })
} 

module.exports = {
  getActiveOrders,
  getActiveOrdersLive
}