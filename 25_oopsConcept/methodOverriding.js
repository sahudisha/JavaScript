class Employee {
    login() {
        console.log(`Employee Has logged In`)
    }
    logout() {
        console.log(`Employee Has logged out`)
    }
    requestWork(noOfWork) {
        console.log(`Employee has requested ${noOfWork} Work`)
    }
}

class Programmer extends Employee {
    //Parent method is ignored completely when Programmer obj called this. with help of super we can also use parent requestWork method
    requestWork(noOfWork) {
        console.log(`Employee has granted ${noOfWork}`)
    }
}

let prog = new Programmer();
prog.requestWork(2);