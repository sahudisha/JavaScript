let a = '32';
age = Number.parseInt(a);
if (age > 18) {
    console.log('You are an adult');
}
else {
    console.log('You are not an adult');
}

//Same with Ternary Operators
if(age>18?console.log('Adult1'):console.log('Not Adult1')); //if ';' next line will gets treated as same line Hence Adult2 is skipped
(age > 18) ? console.log("Adult2") : console.log("Not Adult2")
console.log((age > 18) ? 'Adult3': 'Not Adult3')