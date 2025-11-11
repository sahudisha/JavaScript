class MyForm {
    submit() {
        console.log(`${this.name} has submitted the form`)
    }
    cancel() {
        console.log(`${this.name} has cancelled the form`)
    }
    fill(stuName) {
        this.name = stuName
    }
}

// create a form for disha Obj
let disha = new MyForm();
// create a form for arunesh1 Obj
let arunesh1 = new MyForm();
// create a form for arunesh2 Obj
let arunesh2 = new MyForm();

//fill the details
disha.fill('Disha Sahu')
arunesh1.fill('Arunesh1 Singh')
arunesh2.fill('Arunesh2 Singh')

disha.submit()
arunesh1.submit()
arunesh2.submit()
arunesh1.cancel()