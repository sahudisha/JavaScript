function hello() {
    console.log("Arunesh Singh")
}

//Modern Js Syntax widely used to declare functions
const sum = (a, b) => {
    return console.log(a + b)
};

const sumRet = (a, b) => {
    return (a + b);
}


//Calling/Invoking a function
hello();
sum(5, 7)

let no = sumRet(5, 7)
console.log(no)
