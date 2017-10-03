/*jshint esversion:6*/
// const url = "https://pasco.instructure.com/api/v1/";
// let path = "accounts/81/admins?per_page=100";
// let adminIds = [];
//
// $.get(url + path, function(data, response) {
//   console.log(data);
//   console.log("-------\n" + response);
//   data.forEach(function(user) {
//     if (user.role.indexOf("Lab") > -1 || user.role.indexOf("Counselor") > -1) {
//       adminIds.push(user.user.id);
//     }
//
//   });
//   if (data[99]) {
//     $.get(url + path + '&page=2', function(data, response) {
//       console.log(data);
//       console.log("-------\n" + response);
//       data.forEach(function(user) {
//         if (user.role.indexOf("Lab") > -1 || user.role.indexOf("Counselor") > -1) {
//           adminIds.push(user.user.id);
//         }
//       });
//     });
//   }
// }).then(function() {
//   adminIds = adminIds.sort();
//   console.log(adminIds);
// });
const Client = require('node-rest-client').Client;
let client = new Client();

var options = {
  host: "https://bhalladay.instructure.com/api/v1/accounts/self/admins",
  // port: 80,
  // path: '',
  method: 'GET',
  headers: {
    Authorization: "Bearer 17~CNE6Bc6iKDAB2cnmaiHYxwZ4edeGdHK2ZpwR0992yxfbbtEJLnLFJEWKidYrvlrD"
  }
};

client.get(options.host, options, (data, response) => {
  console.log(data);
});
