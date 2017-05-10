// 台股

module.exports = function(robot){
  robot.respond(/check stock(.*)/, function(response){
    robot.http('http://www.tse.com.tw/ch/trading/exchange/STOCK_DAY/STOCK_DAYMAIN.php').get()(function(err, res, body){
      if(err){
        return response.send(err);
      }
      var json = JSON.parse(body);
      if (json.status !== 'success') {
        return response.send(body);
      }
      var buyPrice = json.data.buy_price;
      var sellPrice = json.data.sell_price;
      response.send('Buy: ' + buyPrice + ' SGD, ' + buyPrice*22.5 + ' TWD\nSell: ' + sellPrice + 'SGD, ' + sellPrice*22.5 + ' TWD');
    })
  });
}