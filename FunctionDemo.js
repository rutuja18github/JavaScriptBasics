//Nornal function call
// declaring a function named greet()
function greet() {
    console.log("Good Morning");
}
greet();

//function with parameters
const num = 6;
console.log("The factors are:");
function factorsOfNumber(value) {
    // looping through 1 to num
    for (let i = 1; i <= value; i++) {

        // check if number is a factor
        if (value % i == 0) {
            console.log(i);
        }
    }
}
factorsOfNumber(num);


//perform addition of number using function
function addAtLeastThree(a, b, ...numbers) {
      
    // Console.log(a+b+c); give  error c not defined
    // because it is as rest parameter
    var sum=a+b;
    for(var i=0; i<numbers.length; ++i) {
        sum += numbers[i];
    }
    return sum;
   }
    // Call
    console.log("Addition of numbers : "+ addAtLeastThree(10, 20, 30, 40, 80) );