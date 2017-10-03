/*jshint esversion:6 */
console.log(`Starting App`);

setTimeout(() => {
  console.log(`waited 1 second`);
}, 1000);

setTimeout(() => {
  console.log(`waited 0 seconds`);
}, 0)

console.log(`Finishing App`);
