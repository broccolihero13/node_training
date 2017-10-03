/*jshint esversion:6 */
let getUser = (id, callback) => {
  let user = {
    id: id,
    name: `Brock`
  };

  setTimeout(() => {
    callback(user);
  }, 3000);

};
getUser(`12345`, (userObj) => {
  console.log(userObj);
});

let allTheSteps = (callback) => {
  console.log('Step 1');
  setTimeout(() => {
    console.log('Step 2');
    callback('Step 3');
  }, 2000);
};

allTheSteps(console.log);
