const request = require("superagent");

async function setDispatchOrder (reque, respon) {
  var url = 'http://192.168.100.59:9000/api/order/setOrderDespached/' + reque.body.id;
  
  console.log(url)
  
  request
  .get(url)
  .then(res => {

    //Response to client
    respon.json({"status": "ok"}).status(200);
  })
  .catch (err => {
    console.log(err);
  })
} 


module.exports = {
  setDispatchOrder
}