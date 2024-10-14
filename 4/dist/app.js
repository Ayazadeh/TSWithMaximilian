"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log('employees length: ', this.employees.length);
        console.log('employees: ', this.employees);
    }
}
const accounting = new Department('id1', 'Accounting');
console.log(accounting);
accounting.describe();
accounting.addEmployee('Mohammad');
accounting.addEmployee('Max');
accounting.printEmployeeInformation();
