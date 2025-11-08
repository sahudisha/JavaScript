let p1 = new Promise((resolve, reject) => {
    console.log('Promise 1 is pending...!!!')
    setTimeout(() => {
        console.log('I am Promise 1 and i am resolved');
        resolve(true);
    }, 3000);
})

let p2 = new Promise((resolve, reject) => {
    console.log('Promise 2 is pending...!!!');
    setTimeout(() => {
        console.log('I am Promise 2 and i am rejected');
        reject(new Error('Promise is not resolved'))
    }, 3000)
})

// console.log(p1, p2)

//To get the value as promise is fulfilled with success
p1.then((value) => {
    console.log(value)
})

//To catch the error as promise is fulfilled with rejection
// p2.catch((error) => {
//     console.log(error)
// })

//
p2.then((value) => {
    console.log(value)
}, (error) => {
    console.log(error)
})