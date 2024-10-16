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
        console.log("employees length: ", this.employees.length);
        console.log("employees: ", this.employees);
    }
}
const baseDepartment = new Department("id1", "baseDepartment");
console.log(baseDepartment);
baseDepartment.describe();
baseDepartment.addEmployee("Mohammad");
baseDepartment.addEmployee("Max");
baseDepartment.printEmployeeInformation();
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
const itDep = new ITDepartment("id2", ["Mohammad"]);
itDep.describe();
console.log(itDep);
itDep.addEmployee("Ayaz");
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log("reports: ", this.reports);
    }
}
const accountingDep = new AccountingDepartment("id3", []);
accountingDep.describe();
console.log(accountingDep);
accountingDep.mostRecentReport = "Year End Report";
accountingDep.addReport("Something went wrong...");
console.log('mostRecentReport: ', accountingDep.mostRecentReport);
accountingDep.printReports();
accountingDep.addEmployee("Max");
accountingDep.addEmployee("Mohammad");
accountingDep.printEmployeeInformation();
