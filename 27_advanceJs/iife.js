//IIFE -> Immediately invoked function expression

let a = () => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve('Hi Arunesh!') }, 1000)
    })
}

//Normal Function
// let f = async () => {
//     let b = await a();
//     console.log(b)
// }

// f();

//IIFE Function can be written as 
(async () => {
    let b = await a();
    console.log(b)
})()
