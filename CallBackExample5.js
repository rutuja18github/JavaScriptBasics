function operations(a, b, callback1, callback2)
            {
                var result = a * b;
                var addition=a+b;
                callback1(result, addition, callback2); //callback2 is passed as parameter to callback1
            }
 
            function display(result, addition, callback)
            {
                console.log("I am in display function");
                console.log("Multiplication of the provided inputs are: " + result);
                callback(addition);
            }

            function CallBackFunction(addition) {            
                console.log("I am inside callback function");  
                console.log("Addition of the provided inputs are: " + addition);           
            } 

            // display and CallBackFunction are passed as callbacks
            operations(7, 6, display, CallBackFunction); // display is passed as callback