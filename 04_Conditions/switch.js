let age = 14;
switch (age) {
    case 12:
        console.log('12 Age')
        break;
    case 13:
        console.log('13 Age')
        break;
    case 14:
        console.log('14 Age')
        break;
    case 15:
        console.log('15 Age')
        break;
    default:
        console.log('Not Special')
        break;
}

/* 
If break is not used in case and age is 14 it will print all cases after matching 14 
It will execute all following cases after a match if break is not used 
Example : age=14
14 Age
15 Age
Not Special 
*/