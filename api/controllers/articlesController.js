const wol = require('wol');
const is_ip_private = require('private-ip');
const wifi = require('node-wifi');
var sha1 = require('sha-1');
var sha256 = require('sha256');
var sha512 = require('js-sha512');
var md5 = require('md5');


    module.exports.woll = function (req, res, next) {
      var x = req.body.input;
      var answer;
      wol.wake(x, function(err, res1){
                return res.json(res1);
      });
        };

module.exports.sha1 = function (req, res, next) {
         var x = req.body.input;
         var pp = sha1(x);
         return res.json(pp);
            };

module.exports.sha256 = function (req, res, next) {
  var x = req.body.input;
  const mainout = [];
  var pp = sha256(x);
    mainout.push(pp);
  var pq = sha256.x2(x);
    mainout.push(pq);
  var pr = sha256(x, { asBytes: true });
    mainout.push(pr);
  var ps = sha256(x, { asString: true });
    mainout.push(ps);
      //return res.json(pp);
      return res.json(mainout);
      };


      module.exports.sha512 = function (req, res, next) {
        var x = req.body.input;
        var t = sha512(x);
            return res.json(t);
            };

            module.exports.md5 = function (req, res, next) {
            var x = req.body.input;
            x = md5(x);
            return res.json(x);
            };


 module.exports.cpi = function (req, res, next) {
          var x = req.body.input;
          console.log(x + ": from front-end")
          var answer;
          var a = is_ip_private('10.0.0.0');
          console.log(a);
          return res.json(a);
            };

 module.exports.wc = function (req, res, next) {
   wifi.init({
iface: null // network interface, choose a random wifi interface if set to null
});
wifi.scan((error, networks) => {
  if (error) {
    console.log(error);
  } else {
                  return res.json(networks);
    /*
        networks = [
            {
              ssid: '...',
              bssid: '...',
              mac: '...', // equals to bssid (for retrocompatibility)
              channel: <number>,
              frequency: <number>, // in MHz
              signal_level: <number>, // in dB
              quality: <number>, // same as signal level but in %
              security: 'WPA WPA2' // format depending on locale for open networks in Windows
              security_flags: '...' // encryption protocols (format currently depending of the OS)
              mode: '...' // network mode like Infra (format currently depending of the OS)
            },
            ...
        ];
        */
  }
});
  };
