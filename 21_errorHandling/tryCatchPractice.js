let func = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This Query is resolved');
        }, 1500)
    })
}

func().then((val) => {
    console.log(val)
}).catch((err) => {
    console.log(err)
})

mainFun = async () => {
    //if func is fulfilled as reject then we have to use try catch here to handle the error.
    let b = await func();
    console.log(b)
}

mainFun();