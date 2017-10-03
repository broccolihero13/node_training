/*jshint esversion:6*/
// console.log(global); - kind of like window
// console.log(process); - kind of like document (not really)
const simProc = () => {
  setTimeout(function() {
    console.log("Process completed!");
  }, 2000);
};

const otherProc = () => {
  console.log("Process 2 completed!");
};

simProc();
otherProc();
