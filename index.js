// Write your solution in this file!
const employee = {
    name: `Sam`,
    streetAddress: '11 Broadway',
  };

 function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
 }


 function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee[key] = value;
    return employee;
 }


 function deleteFromEmployeeByKey(obj, key) {
    const copyEmployee = {...employee}
    delete copyEmployee.name
    return copyEmployee
 }


 function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete employee.name
    return employee
 }