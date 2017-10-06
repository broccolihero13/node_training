let asyncAdd = (a,b, c=true) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(typeof a === "number" && typeof b === "number" && c){
        resolve(a + b);
      } else {
        reject('Arguments must be numbers or you altered the third argument to a falsy value.');
      }
    }, 2000);
  });
};

asyncAdd(5,7).then((res)=>{
  console.log(`Result: ${res}`);
  return asyncAdd(res,33);
}).then((res2) => {
  console.log(`Result 2: ${res2}`);
}).catch((error)=>{
  console.log(error);
});