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
const baseDepartment = new Department('id1', 'baseDepartment');
console.log(baseDepartment);
baseDepartment.describe();
baseDepartment.addEmployee('Mohammad');
baseDepartment.addEmployee('Max');
baseDepartment.printEmployeeInformation();
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const itDep = new ITDepartment('id2', ['Mohammad']);
itDep.describe();
console.log(itDep);
itDep.addEmployee('Ayaz');
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log('reports: ', this.reports);
    }
}
const accountingDep = new AccountingDepartment('id3', []);
accountingDep.describe();
console.log(accountingDep);
accountingDep.addReport('Something went wrong...');
accountingDep.printReports();
accountingDep.addEmployee('Max');
accountingDep.addEmployee('Mohammad');
accountingDep.printEmployeeInformation();
