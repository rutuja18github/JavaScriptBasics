//1. Declaration of Array
let fruits = ["Banana", "Orange", "Apple", "Mango"];

//2.Accessing Array Element
const student = ['Rutuja', 'Rajashree', true, 'Rao', 7] 
let index = student.indexOf(true)
console.log(index);

//3.length of array
console.log(fruits.length);

//4.Array item using index position
let first=fruits[0];
console.log(first);

//4.Array item at last position
let last=fruits[fruits.length-1];
console.log(last);

//5.loop in an array
fruits.forEach((data,index) => {
    console.log(data,index);
});

//6.Add item to end of an array
fruits.push("Pomegranate");
console.log("Add fruit to array",fruits);

//7.Remove item from end of array
let lastElement=fruits.pop();
console.log("removed fruit from last",fruits);

//8.Remove element from start
let first1=fruits.shift();
console.log("Removed first fruit of array",fruits);

//9.Add element in the beginning
let NewArrayLength=fruits.unshift("Peach");
console.log("Added fruit at start of array",fruits);

//10.index of an given element
let indexOfItem=fruits.indexOf("Orange");
console.log("index of given element",indexOfItem);

//11.splice method adds new items to an array
fruits.splice(1, 0, "abc", "xyz");
console.log(fruits);
fruits.splice(2, 1, "a");
console.log(fruits);

//12.slice method slices out a piece of an array into a new array.
let number = [3, 6, 77, 32, 56];
let result = number.slice(1,3);
console.log(result);

let numbers = [2, 3, 5, 7, 11, 13, 17];
let newArray = numbers.slice(3, 6);
console.log(newArray);

let languages = ["JavaScript", "Python", "C", "C++", "Java"];

//13. slicing the array (from start to end)
let new_arr = languages.slice();
console.log(new_arr);

//14. slicing from the third element
let new_arr1 = languages.slice(2);
console.log(new_arr1);

//15. slicing from the second element to fourth element
let new_arr2 = languages.slice(1, 4);
console.log(new_arr2);

//16.The concat method returns a new array by merging two or more values/arrays.
let primeNumbers = [2, 3, 5, 7]
let evenNumbers = [2, 4, 6, 8]
//17.join two arrays 
let joinedArray = primeNumbers.concat(evenNumbers);
console.log(joinedArray);

//18.join method
let message=["Hii","Good","Morning"];
let joinedmessage=message.join(" ");
console.log(joinedmessage);
//19toString converts an array to a string
let Lang=languages.toString();
console.log(Lang);

//20.Array.foreach() function
function ArrayForEachFn(){
    const item = [2,5,7,8,4];
    const Add = [];

    item.forEach(function (item) {
        Add.push(item * 3);
    });
    console.log(Add);
}
ArrayForEachFn();

//21.Array.filter() function
const numberArray = [12,66,43,87,23]

function check(no) {
    return no > 25;
}
function ArrayFilter() {
    var filtered = numberArray.filter(check);
    console.log(filtered);
}
ArrayFilter();

//22.Array.map
var result = [3, 6, 77, 32, 56];
var arrayElement = result.map(function(num){
    return num/2;
});
console.log(arrayElement);