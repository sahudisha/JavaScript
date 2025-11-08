let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise is resolve');
        resolve('Promise 1 is resolved');
    }, 2000)
})

p1.then((value) => {
    console.log(value)
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise 2 is resolved')
            return p2;
        }, 2000)
    })
}).then((value) => {
    console.log('Promise 2 is resolved')
    return new Promise((resolve, reject) => {
        resolve('Promise 3 is resolved');
    })
}).then((value) => {
    console.log(value)
})