"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log('employees length: ', this.employees.length);
        console.log('employees: ', this.employees);
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();
accounting.name = "IT";
accounting.describe();
accounting.addEmployee('Mohammad');
accounting.addEmployee('Max');
accounting.printEmployeeInformation();
