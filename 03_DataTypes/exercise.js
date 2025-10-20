const objName = {
    Name: "Arunesh",
    SurName: 'Singh',
    Age: 32
}

//objName = "Test" //Will give error and modification is not possible for objName
// objName = {}

//Though objName modification cannot be changed but object value can be modified
objName.Gender = "Male"
objName["Spouse"] = "Disha Sahu"
objName["Name"] = 'Arunesh Singh'
console.log(objName)

//{
//   Name: 'Arunesh Singh',
//   SurName: 'Singh',
//   Age: 32,
//   Gender: 'Male',
//   Spouse: 'Disha Sahu'
// }