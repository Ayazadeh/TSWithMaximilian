class Department {
    static fiscalYear = 2020; // static property
	// private id: string;
	// private name: string;

	// we use private modifier to make sure that we can't access this property from outside the class
	// private employees: string[] = [];

	// we use protected modifier to make sure that we can't access this property from outside the class but we can access it from child classes
	protected employees: string[] = [];

	constructor(private readonly id: string, private name: string) {
		// Shorthand Initialization
		// using just this syntax in ts instead of writing the properties in the constructor or defining them in the class
		// this.id = id;
		// this.name = n;

        // console.log(this.fiscalYear); // error because fiscalYear is a static property
        console.log(Department.fiscalYear); 
	}

    // static method    
    static createEmployee(name: string) {
        return { name: name };
    }

	describe(this: Department) {
		console.log(`Department (${this.id}): ${this.name}`);
	}

	addEmployee(employee: string) {
		// this.id = 'id2'; // error because id is readonly
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log("employees length: ", this.employees.length);
		console.log("employees: ", this.employees);
	}
}

// we call static method directly on the class
const employee1 = Department.createEmployee("Ali");
console.log('static method: ', employee1, Department.fiscalYear );

const baseDepartment = new Department("id1", "baseDepartment");

console.log(baseDepartment);
baseDepartment.describe();
// accounting.name = "IT" // error because name is private

baseDepartment.addEmployee("Mohammad");
baseDepartment.addEmployee("Max");
baseDepartment.printEmployeeInformation();

// baseDepartment.employees[2] = 'Ayaz'; // this is a bug, we want to make sure that here we can add employee just by using addEmployee method

// const baseCopy = { name: "Dummy", describe: baseDepartment.describe }; // has error
// baseCopy.describe();

// inheritance

// ITDepartment
class ITDepartment extends Department {
	constructor(id: string, public admins: string[]) {
		super(id, "IT");
	}
}

const itDep = new ITDepartment("id2", ["Mohammad"]);
itDep.describe();
console.log(itDep);
itDep.addEmployee("Ayaz");

// AccountingDepartment
class AccountingDepartment extends Department {
	private lastReport: string;

    // getter for getting access to private property
	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport;
		}
        throw new Error("No report found.");
	}

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    } 

	constructor(id: string, private reports: string[]) {
		super(id, "Accounting");
		this.lastReport = reports[0];
	}

	// override method of Base class
	addEmployee(name: string) {
		if (name === "Max") {
			return;
		}
		this.employees.push(name);
	}

	addReport(text: string) {
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

// call getter
// console.log(accountingDep.mostRecentReport); // error because lastReport is empty

// call setter
// accountingDep.mostRecentReport = ""; // error 
accountingDep.mostRecentReport = "Year End Report"; 

accountingDep.addReport("Something went wrong...");
// call getter
console.log('mostRecentReport: ', accountingDep.mostRecentReport);
accountingDep.printReports();
accountingDep.addEmployee("Max");
accountingDep.addEmployee("Mohammad");
accountingDep.printEmployeeInformation();
