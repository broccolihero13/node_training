/*jshint esversion:6*/
const prompt = require('prompt');
const req = require('request');
const yargs = require('yargs');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

let address = "1301%20lombard%20street%20philadelphia";

const promptForAddress = () => {
  prompt.get('enterAddress', (err, result) => {
    if (result.enterAddress.length > 0) {
      address = result.enterAddress;
      done();
    } else {
      done();
    }
  });
};

const done = () => {
  //run code you want after prompt
  console.log(address);
  req({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    json: true
  }, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2));
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}\nLongitude: ${body.results[0].geometry.location.lng}`);
  });

};

prompt.start();
promptForAddress();
