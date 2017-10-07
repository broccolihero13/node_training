const yargs = require('yargs');
const axios = require('axios');

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

addressToFind = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressToFind}`;

axios.get(geocodeUrl).then((response)=> {
  if(response.data.status === "ZERO_RESULTS"){
    throw new Error('No results for API call, check to make sure your address is valid');
  }
    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let weatherUrl = `https://api.darksky.net/forecast/b6682158d9c69bddad9e30fe31432dd7/${lat},${lng}`;
    console.log(`Getting weather for ${response.data.results[0].formatted_address}`);
    return axios.get(weatherUrl);
}).then((response)=>{
  let temperature = response.data.currently.temperature;
  let appTemperature = response.data.currently.apparentTemperature;
  console.log(`Right now, it is currently ${temperature} degress, but it feels like ${appTemperature}`);
}).catch((e)=> {
  if(e.response.status == "404"){
    console.log("Unable to connect to API, check the URL");
  } else if(e.response.status == "500") {
    console.log("Something went wrong with the API call, unknown reason");
  }
})