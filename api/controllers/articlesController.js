const wol = require('wol');
const is_ip_private = require('private-ip');
const wifi = require('node-wifi');

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
