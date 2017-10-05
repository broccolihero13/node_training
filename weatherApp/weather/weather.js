let req = require('request');

let weather = (lat, lng, cb)=>{
    let coordinates = encodeURIComponent(`${lat},${lng}`);
    req({
      url: `https://api.darksky.net/forecast/b6682158d9c69bddad9e30fe31432dd7/${coordinates}`,
      json: true
    }, (error, response, body)=>{
      if(error){
        cb(`Could not reach darksky.net servers: ${error}`)
      } else if (response.statusCode != "200") {
        cb(`Something went wrong with the API call, it returned with a ${response.statusCode} status code.`)
      } //else if(body.status.indexOf("ZERO_RESULTS") > -1){
        //cb(`Invalid search. ${addressToFind} did not turn up any results or was ill formatted.`)
      //}
      else {
        cb(undefined, {
          temperature: body.currently.temperature,
          humidity: body.currently.humidity,
          forcast: body.currently.icon.replace(/-/g, ' '),
          apparentTemperature: body.currently.apparentTemperature
        });
      }
    })
  }
  module.exports.weather = weather;