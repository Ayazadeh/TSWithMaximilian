abstract class Department {
    static fiscalYear = 2020; // static property
	// private id: string;
	// private name: string;

	// we use private modifier to make sure that we can't access this property from outside the class
	// private employees: string[] = [];

	// we use protected modifier to make sure that we can't access this property from outside the class but we can access it from child classes
	protected employees: string[] = [];

	constructor(protected readonly id: string, private name: string) {
		console.log(this.name);
		
		// Shorthand Initialization
		// using just this syntax in ts instead of writing the properties in the constructor or defining them in the class
		// this.id = id;
		// this.name = n;

        // console.log(this.fiscalYear); // error because fiscalYear is a static property
        console.log('fiscalYear: ', Department.fiscalYear); 
	}

    // static method    
    static createEmployee(name: string) {
        return { name: name };
    }

	abstract describe(this: Department): void;

	addEmployee(employee: string) {
		// this.id = 'id2'; // error because id is readonly
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log("employees length: ", this.employees.length);
		console.log("employees: ", this.employees);
	}
}

// ITDepartment
class ITDepartment extends Department {
	constructor(id: string, public admins: string[]) {
		super(id, "IT");
	}

	describe() {
		console.log('IT Department - ID: ' + this.id);
	}
}

// AccountingDepartment
class AccountingDepartment extends Department {
	private lastReport: string;
	private static instance: AccountingDepartment;

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

	private constructor(id: string, private reports: string[]) {
		super(id, "Accounting");
		this.lastReport = reports[0];
	}

	static getInstance() {
		// in static methods 'this' is refering to the class itself
		// AccountingDepartment.instance = this.instance;
		if (this.instance) {
			return this.instance;
		}
		this.instance = new AccountingDepartment("id3", []);
		return this.instance;
	}
	
	describe() {
		console.log('Accounting Department - ID: ' + this.id);
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

// we call static method directly on the class
const employee1 = Department.createEmployee("Ali");
console.log('static method: ', employee1, Department.fiscalYear );

// instances of classes

// const baseDepartment = new Department("id1", "baseDepartment"); // error because we can't create an instance of an abstract class
const itDep = new ITDepartment("id2", ["Mohammad"]);
// const accountingDep = new AccountingDepartment("id3", []); // error because of private constructor
// so because of private constructor we must get access to the class through a static method 'getInstance()'
// Singleton pattern: we can't create more than one instance of a class
const accountingDep = AccountingDepartment.getInstance();
const accountingDep2 = AccountingDepartment.getInstance();
// both of them are pointing to the same instance
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

// call setter
// accountingDep.mostRecentReport = ""; // error 
accountingDep.mostRecentReport = "Year End Report"; 

// call getter
console.log('mostRecentReport: ', accountingDep.mostRecentReport);

