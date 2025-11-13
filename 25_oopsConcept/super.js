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

    requestWork(noOfWork) {
        super.requestWork(noOfWork);
        console.log(`Employee has granted ${noOfWork} Work`)
    }
}

let prog = new Programmer();
prog.requestWork(2);

// Output :
// Employee has requested 2 Work
// Employee has granted 2