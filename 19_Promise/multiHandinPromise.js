let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 is resoled')
    }, 2000);
})

promise.then((val) => {
    console.log(val + ' Now Todo Task 1')
})

promise.then((val) => {
    console.log(val + ' Now Todo Task 2')
})

promise.then((val) => {
    console.log(val + ' Now Todo Task 3')
})