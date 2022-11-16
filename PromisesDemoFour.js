let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello ");
    }, 1000);
})
    .then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(result + "Good Morning!");
            }, 2000);
        })
            .then((result) => {
                console.log(result);
            });
    });