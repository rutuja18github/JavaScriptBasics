/*
console.log(x);*/
// returns a promise
let countValue = new Promise(function (resolve, reject) {
    let min = 1;
    let max = 2;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (random == 1) {
        resolve("Promise resolved");
    } else {
        reject('Promise rejected');
    }
});

// executes when promise is resolved successfully
countValue.then(
    function successValue(result) {
        console.log(result);
    }
)
    // executes if there is an error
    .catch(
        function errorValue(result) {
            console.log(result);
        }
    );