//Anonymous function with parameter
var number = 131;
var number1=function (number){
    var rev = 0;
    var rem =0;
    while(number!=0){
        rem = number%10;
        rev = rev*10 +rem;
        number = parseInt(number/10);
    }
    return rev;    
}

if(number1(number) == number ){
    console.log("Palindrome")
}
else{
    console.log("Not palindrome")
}

//Anonymous function with parameter
const showMessage = function () {
    let y;
    y = 'Anonymous Function!'
    console.log(y);
    return y;            
}
showMessage();