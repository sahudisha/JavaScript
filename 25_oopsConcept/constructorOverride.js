class Employee {
    constructor(name) {
        this.name = name;
        console.log(`Emplyee Constructor is called by ${name}`)
    }
}

class Programmer extends Employee {
    // If constructor is not created in child then it will creates default constructor like :
    // constructor(...args) {
    //     super(...args)
    // }

    constructor(name) {
        // super must be called here and if this is present it must be after 'this' else error will be thrown : Must call super constructor in derived class before accessing 'this' or returning from derived constructor. 
        super(name);
    }
}

//Object is created for Programmer but still Employee constructor is called as well because programmer class creates default constructor.
new Programmer('Arunesh');