const wol = require('wol');
const is_ip_private = require('private-ip')
var network = require('network');

module.exports.get_public_ip = function (req, res, next) {
  network.get_public_ip(function(err, ip) {

  console.log(err || ip); // should return your public IP address
  return res.json(ip);
})
    };
    module.exports.get_private_ip = function (req, res, next) {
      network.get_private_ip(function(err, ip) {
  console.log(err || ip); // err may be 'No active network interface found'.
  return res.json(ip);
})
        };
        module.exports.get_gateway_ip = function (req, res, next) {
          network.get_gateway_ip(function(err, ip) {
  console.log(err || ip); // err may be 'No active network interface found.'
  return res.json(ip);
})
            };

            module.exports.get_interfaces_list = function (req, res, next) {
              network.get_interfaces_list(function(err, list) {
 console.log(list);
 return res.json(list);

})
                };


    module.exports.woll = function (req, res, next) {
      var x = req.body.input;
      var answer;
      wol.wake(x, function(err, res1){
                return res.json(res1);
      });
        };

        module.exports.cpi = function (req, res, next) {
          var x = req.body.input;
          console.log(x + ": from front-end")
          var answer;
          var a = is_ip_private('10.0.0.0');
          console.log(a);
          return res.json(a);
            };
