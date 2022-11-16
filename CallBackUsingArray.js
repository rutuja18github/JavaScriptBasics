let numbers = [1, 2, 4, 7, 3, 5, 6];

function filter(numbers, callback) {
    let results = [];
    for (const number of numbers) {
        if (callback(number)) {
            results.push(number);
        }
    }
    return results;
}

let oddNumbers = filter(numbers, function (number) {
    return number % 2 != 0;
});

let evenNumbers = filter(numbers, function (number) {
    return number % 2 == 0;
});

console.log(oddNumbers);
console.log(evenNumbers);