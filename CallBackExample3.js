//function from which call back function is call.
function processThis(message, callback) {
    console.log("Running function first with message: "+ message);
    let number=9;
    let string="Hello";
    if (typeof callback == "function")
        callback(number, string);
}

//call back function with paramters.
function callbackFunction(num, str) {
    console.log("Running callback function next");
    console.log("number value is: " + num);
    console.log("string value is: " + str);
}

processThis("Hello World", callbackFunction);