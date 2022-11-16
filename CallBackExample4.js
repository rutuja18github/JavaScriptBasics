function multiply(a, b, callback)
            {
                var result = a * b;
                callback(result);
            }
 
            function display(output)
            {
                console.log("Inside callback function");
                console.log("Multiplication of the provided inputs are: " + output);
            }

            multiply(5, 6, display); // displayFirst is passed as callback
            multiply(7, 6, function(output)
    		{ 
	    		console.log("Inside Anonymous callback function");
                console.log("Multiplication of the provided inputs are: " + output);
    		}); // Anonymous function passed as callback