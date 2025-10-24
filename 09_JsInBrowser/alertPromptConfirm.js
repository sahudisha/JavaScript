alert('Enter the value of a!');
let val = prompt('Enter value of a', '19'); //postion 2 '19' is used to assign default value of prompt and is optional in prompt
let write = confirm('Do you want to write value of a on page');
if (write) {
    document.writeln('Entered Value of a :', val)
}
else {
    document.writeln('you have decided not to print the value of a')
}
