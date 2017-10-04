/*jshint esversion:6*/
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

addressToFind = encodeURIComponent(argv.a);

req({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressToFind}`,
  json: true
}, (error, response, body) => {
  if(error){
    console.log(`Could not reach Google servers: ${error}`)
  } else if (response.statusCode != "200") {
    console.log(`Something went wrong with the API call, it returned with a ${response.statusCode} status code.`)
  } else if(body.status.indexOf("ZERO_RESULTS") > -1){
    console.log(`Invalid search. ${addressToFind} did not turn up any results or was ill formatted.`)
  } else {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);  
  }
});
