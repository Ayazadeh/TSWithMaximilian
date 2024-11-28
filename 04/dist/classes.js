"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(this.name);
        console.log('fiscalYear: ', Department.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log("employees length: ", this.employees.length);
        console.log("employees: ", this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
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
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("id3", []);
        return this.instance;
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
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
const employee1 = Department.createEmployee("Ali");
console.log('static method: ', employee1, Department.fiscalYear);
const itDep = new ITDepartment("id2", ["Mohammad"]);
const accountingDep = AccountingDepartment.getInstance();
const accountingDep2 = AccountingDepartment.getInstance();
console.log(accountingDep, accountingDep2);
itDep.describe();
console.log(itDep);
itDep.addEmployee("Ayaz");
accountingDep.describe();
console.log(accountingDep);
accountingDep.addReport("Something went wrong...");
accountingDep.printReports();
accountingDep.addEmployee("Max");
accountingDep.addEmployee("Mohammad");
accountingDep.printEmployeeInformation();
accountingDep.mostRecentReport = "Year End Report";
console.log('mostRecentReport: ', accountingDep.mostRecentReport);
