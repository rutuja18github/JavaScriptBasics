function multiplication(){
   let num1=10;
   let num2=4;
   return num1*num2;
}
function addition(){
    let value1=5;
    let value2=4;
    return value1+value2;
 }

var promise = new Promise(function (resolve, reject) {
    let isPerform=true;
    if (isPerform) {
        resolve("perform operation");
    } else {
        reject("rejected !");
    }
});

promise.then(function (val) {
    console.log(val); 
    let result=multiplication();
    return result + 2;
}).then(function (val) {
    console.log(val); 
    let add=addition();
    console.log(val+add);
}).catch(function errorValue(result) {
    console.log(result);
});