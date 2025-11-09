print = () => {
    try {
        console.log(Arunesh)
    }
    catch (err) {
        console.error('Error Message : ', err.message);
    }
}

print()

//try Catch works synchronously means if an exception has occured in scheduled code, like in setTimeout it wont work as Js Engine has already left the try catch

try {

    setTimeout(() => {
        //For Handling Error in setTimeout we have to use try catch again 
        console.log(Arunesh)
    }, 100)
}
catch (error) {
    console.log(error)
}