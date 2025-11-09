let userNum = 0;

try {
    if (userNum == 0) {
        throw new Error('Division by zero is not possible')
        // throw new ReferenceError('Division by zero is not possible') //if you want to throw the reference error
    }

} catch (error) {
    console.log(error.name)
    console.log(error.message)
}

console.log('The script is still running...!!!')