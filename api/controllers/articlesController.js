var macaddress = require('macaddress');

module.exports.sites = function (req, res, next) {
  var element = {
    all: ''
  };
  macaddress.one(function (err, mac) {
  //  console.log("Mac address for this host: %s", mac);
  });

  macaddress.one('awdl0', function (err, mac) {
  //  console.log("Mac address for awdl0: %s", mac);
  });

  macaddress.all(function (err, all) {
    element.all = all;
    return res.send(element.all);
  });
    };
