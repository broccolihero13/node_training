let req = require('request');

let geocodeAddress = (address) => {
  return new Promise((resolve, reject)=>{
    addressToFind = encodeURIComponent(address);
    
    req({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressToFind}`,
      json: true
    }, (error, response, body) => {
      if(error){
        reject(`Could not reach Google servers: ${error}`)
      } else if (response.statusCode != "200") {
        reject(`Something went wrong with the API call, it returned with a ${response.statusCode} status code.`)
      } else if(body.status.indexOf("ZERO") > -1){
        reject(`Invalid search. ${addressToFind} did not turn up any results or was ill formatted.`)
      } else {
        resolve({
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        });
      }
    });
  });
}

geocodeAddress('84601').then((location)=>{
  console.log(JSON.stringify(location,undefined,2));
}).catch((errorMessage)=>{
  console.log(errorMessage);
})