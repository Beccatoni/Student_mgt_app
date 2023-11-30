// Importing
const { studentsData } = require('../Database/students.js')

// Here are the functions that add, list, update and delete students


// Adding a new student
const add = (item) => {
  studentsData.push(item);
  console.log("New list of students: ", studentsData);
}

// updating
const updateByAge = (id, newAge) => {
const index = studentsData.findIndex(student => student.id === id);

    if (index !== -1){
        studentsData[index].age = newAge;
        console.log(`Age updated for ${studentsData[index].names} to ${newAge} years old`)
  
    }else {
       console.log(`Person with ID ${id} not found.`)
    }
}


module.exports = {
    add,
    updateByAge,
}