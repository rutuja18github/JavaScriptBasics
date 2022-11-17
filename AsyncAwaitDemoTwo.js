const meetCustomer = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Waiter approached customer at table #${id}...`);
            resolve({ customerId: id });
        }, 2000);
    });
}
const getOrder = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Order Received for customer at table #${id}...`);
            resolve({ customerId: id, customerOrder: "Pizza" });
        }, 2000);
    });
}
const notifyWaiter = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Order for customer at table #${id} processed....`);
            resolve({ customerId: id, customerOrder: "Pizza" });
            // reject(new Error("Error occured with waiter"));
        }, 2000);
    });
}
const serveCustomer = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Customer with order number #${id} served...`);
            resolve({ customerId: id, customerOrder: "Pizza" });
        }, 2000);
    });
}

const runRestaurant = async (customerId) => {
    const customer = await meetCustomer(customerId)
    const order = await getOrder(customer.customerId)
    await notifyWaiter(order.customerId)
    await serveCustomer(order.customerId)
    console.log(`Order of customer fulfilled...`)
}
runRestaurant(1); 

