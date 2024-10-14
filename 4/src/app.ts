class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = []; // we use private modifier to make sure that we can't access this property from outside the class

    constructor(private readonly id: string, private name: string) { // Shorthand Initialization
        // using just this syntax in ts instead of writing the properties in the constructor or defining them in the class
        // this.id = id;
        // this.name = n;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        // this.id = 'id2'; // error because id is readonly
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
// accounting.name = "IT" // error because name is private

accounting.addEmployee('Mohammad');
accounting.addEmployee('Max');
accounting.printEmployeeInformation();

// accounting.employees[2] = 'Ayaz'; // this is a bug, we want to make sure that here we can add employee just by using addEmployee method

// const accountingCopy = { name: "Dummy", describe: accounting.describe }; // has error
// accountingCopy.describe();
