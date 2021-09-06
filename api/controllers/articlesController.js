const wol = require('wol');

module.exports.sites = function (req, res, next) {
  var element = {
    all: ''
  };
    };
    module.exports.woll = function (req, res, next) {
      var x = req.body.input;
      var answer;
      wol.wake(x, function(err, res1){
                return res.json(res1);  
      });
        };
