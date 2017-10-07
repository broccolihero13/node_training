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
  } else {
    console.log(response.data);
  }
}).catch((e)=> {
  if(e.response.status == "404"){
    console.log("Unable to connect to API, check the URL");
  } else if(e.response.status == "500") {
    console.log("Something went wrong with the API call, unknown reason");
  }
})