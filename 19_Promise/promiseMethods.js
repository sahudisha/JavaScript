let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1')
    }, 1800000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2')
    }, 2000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3')
    }, 1500);
})

let promise = Promise.all([p1, p2, p3]) // will be resolved if all the promise are resolved. If any one fails it becomes the error and all other results are ignored.
// let promise = Promise.allSettled([p1, p2, p3]) //will be resolved once all are settled with resolved or rejected
// let promise = Promise.race([p1, p2, p3]) //will return the promise which ever is settled first either resolved or rejected and its results/error become the outcome.
// let promise = Promise.any([p1, p2, p3]) //will return the promise which is resolved first
// let promise = Promise.resolve('This is Promise') //create a new resolved promise
// let promise = Promise.reject('Promise is rejected') //Creates a new rejected promise for the provided reason
promise.then((value) => { console.log(value) })