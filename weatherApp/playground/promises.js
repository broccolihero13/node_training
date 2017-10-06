let promiseWork = true;
let somePromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(promiseWork){
            resolve('Hey, it worked!');
        } else {
            reject('Could not fulfill promise!');
        }
    }, 2000);
});

somePromise.then((message)=>{
    console.log(`Success: ${message}`);
}).catch((errorMessage)=>{
    console.log(`Error: ${errorMessage}`);
});