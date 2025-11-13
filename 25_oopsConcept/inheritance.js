class calculator {
    constructor(val1, val2) {
        this.val1 = val1;
        this.val2 = val2
    }
    add() {
        console.log('This function can be used to find addition')
    }
    minus() {
        console.log('This function can be used to find subtraction')
    }
    division() {
        console.log('This function can be used to find division')
    }
    multiplication() {
        console.log('This function can be used to find multiplication')
    }
}

class scientificCalculator extends calculator {
    Perc() {
        console.log('This function can be used to find Percentage ')
    }
}

let cal = new calculator();
let sciCal = new scientificCalculator();
cal.add();
cal.minus();
sciCal.multiplication();
sciCal.Perc();
// cal.Perc(); //This will throw the error