// Write your solution in this file!
const employee = {name:"John", streetAddress:"2712 Parkway"}

function updateEmployeeWithKeyAndValue (obj, key, value) {
    return {
        ...employee, [key]:value
    }
}

const newObj = updateEmployeeWithKeyAndValue (
    employee, "Sam", "11 Broadway"
)

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
  
    return obj;
  }
const updateObj = destructivelyUpdateEmployeeWithKeyAndValue (employee,"name", "Sam" )


function deleteFromEmployeeByKey (obj, key) {
    const newEmployee = { ...employee };
    obj[key]
    delete newEmployee.name
    return newEmployee
}
const copyOfEmployee = deleteFromEmployeeByKey (newEmployee, "name")




function destructivelyDeleteFromEmployeeByKey (obj, key) {
    obj[key]
    delete employee.name
    return obj
}
const deadEmployee = destructivelyDeleteFromEmployeeByKey (employee, "name")