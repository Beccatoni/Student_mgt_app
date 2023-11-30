const {add, updateByAge} = require("./controller/running");

//  1. Adding new student
let newStudent = {
    id:1021,
    names: "Uwera Clara",
    age: 21,
    department: "IT",
    grades: "90%",
    level : 1 
}
add(newStudent);

// updating by age
updateByAge(1011, 22);

// list of students

