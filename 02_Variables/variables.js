//In Modern Js ES6(Ecma Script i.e. standard) and later let is preferred to declare the variables.
//var can be redeclared while let can be declared only once. NOTE : Declaration and assignment is different thing.
let decName = 'Arunesh'
// let name = 'Singh'; //This will give error
{
    let decName = 'Singh' //name can be redeclared as it block is different but redelcartion is not allowed with var as let is already used
}
console.log(decName)

//var is considered as global scope variable while let is block scoped variable
var b = "Arunesh";
{
    //Here b can be decalred again as var or let
    var b = "Singh"
    console.log(b) //Singh
}
console.log('b', b) //Arunesh

let b2 = "Arunesh";
{
    //Here b cannot be decalred again as var but let can be used
    let b2 = "Singh"
    console.log(b2) //Singh
}
console.log(b2) //Singh

const b3 = "Disha Sahu";
{
    let b3 = "Disha"; //Here it can be modified as re-declared using let(blocked scoped) but not var(global Scoped) 
    console.log(b3)
}
// b3 = "Sahu"; //Reassignment will give the error as it is const
console.log(b3)

{
    var b4 = "SAM";
}
console.log(b4) //var can be accesssed here as global scoped but not in case let