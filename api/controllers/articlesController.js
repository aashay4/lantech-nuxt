const wol = require('wol');
const is_ip_private = require('private-ip');

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
