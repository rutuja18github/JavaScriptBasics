let promise1 = new Promise((resolve, reject) => {
        resolve("Hello! ");
    });
  
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("How are you !");
        }, 1000);
    });
  
    Promise.all([promise1, promise2])
        .then((result) => console.log(result));