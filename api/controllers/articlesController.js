const wol = require('wol');
const is_ip_private = require('private-ip');
const wifi = require('node-wifi');
var sha1 = require('sha-1');
var sha256 = require('sha256');
var sha512 = require('js-sha512');
var md5 = require('md5');
const puppeteer = require('puppeteer');
const download = require('image-downloader');
const path = require('path');
var fs = require('fs');
var config={
  username: "stockmarketpredictor",
  password: "Lantech_4422"
}



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
          var a = is_ip_private(x);
          console.log(a);
          return res.json(a);
            };



module.exports.gipc = function (req, res, next) {
                     var x = req.body.input;
                     console.log(x);
                     var y  = x + "'s profile picture";
                     console.log(y)
                     async function scrapeInstagram(profile,usernameAndPasswordConfig) {
                       const browser = await puppeteer.launch({
                         args: [
                           '--disable-setuid-sandbox',
                           '--no-sandbox',
                           '--disable-gpu',
                         ],
                         dumpio: true,
                         executablePath: '/usr/bin/chromium-browser'
                       });
                         const page = await browser.newPage();
                         await page.goto("https://www.instagram.com/accounts/login/?source=auth_switcher");
                         await page.waitFor(10000);


                         await page.type("input[name='username']",usernameAndPasswordConfig.username);
                         await page.type("input[name='password']",usernameAndPasswordConfig.password);

                         await (await page.$("button[type='submit']")).click();

                         await page.waitFor(5000);

                         await page.goto(`https://www.instagram.com/${profile}/`);

                           await page.waitFor(5000);

                           var allImages = await page.evaluate(() =>{
                             var allImagesarr = [];
                          //   var imgElement = document.querySelector('img[alt="Profile photo"]')
                            // console.log(imgElement)
                           document.querySelectorAll("img[alt='Profile photo']").forEach(img=>{
                              var link= img.getAttribute("src");
                             allImagesarr.push({
                               link: link
                             })
                           })
                           return allImagesarr;
                         });
                     //    allImages.slice(-1)[0];
                     console.log(allImages);
                     var link1 = (allImages[allImages.length -1]).link;
                     uploadurl(link1);
//                     console.log(link1);
                     function uploadurl(link1){
                       //console.log(link1);
                       const options = {
  url: link1,
  dest: '/var/www/html/vue/lantech-nuxt/',               // will be saved to /path/to/dest/image.jpg
};

download.image(options)
  .then(({ filename }) => {
  //  console.log('Saved to', filename); // saved to /path/to/dest/image.jpg
    var ghgh = path.parse(filename).base;
    console.log(ghgh);
    setTimeout(() => {
      return res.json(ghgh);
}, 3000)
  })
  .catch((err) => console.error(err));
                     return res.json(err);
                     }
                     }
                     scrapeInstagram(x,config);









//                     (async () => {
//	const browser = await puppeteer.launch();
	//const page = await browser.newPage();
	//await page.goto('https://www.freecodecamp.org/');
//console.log(page)
//	await browser.close();
//})();
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
