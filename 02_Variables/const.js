console.log('Const must assign a value while declaration')

const b3 = "Disha Sahu"; //Const cannot be re-declared within its block
{
    // b3 = "Disha"; //Here it cannot be modified as b3 is declared as const
    let b3 = "Disha"; //Here it can be modified as re-declared using let(blocked scoped) but not var(global Scoped) 
    console.log(b3)
}
// b3 = "Sahu"; //Here it will give the error
console.log(b3)

