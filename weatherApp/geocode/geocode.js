let req = require('request');

let geocodeAddress = (address, cb) => {
    addressToFind = encodeURIComponent(address);
    
    req({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressToFind}`,
      json: true
    }, (error, response, body) => {
      if(error){
        cb(`Could not reach Google servers: ${error}`)
      } else if (response.statusCode != "200") {
        cb(`Something went wrong with the API call, it returned with a ${response.statusCode} status code.`)
      } else if(body.status.indexOf("ZERO_RESULTS") > -1){
        cb(`Invalid search. ${addressToFind} did not turn up any results or was ill formatted.`)
      } else {
        cb(undefined, {
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        });
      }
    });
    
}


//This allows the geocodeAddress to be exported and part of the app.js require statement
// module.exports = {
//     geocodeAddress
// };
module.exports.geocodeAddress = geocodeAddress;