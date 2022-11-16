let firstPromise = Promise.resolve(200);
 
let secondPromise = Promise.reject("Rejected Promise");
 
let thirdPromise = new Promise((resolve, reject) =>{
    setTimeout(() => resolve(500), 100)
});
 
let result = Promise.allSettled([firstPromise, secondPromise, thirdPromise]);
result.then((value) => console.log(value));