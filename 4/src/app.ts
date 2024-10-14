class Department {
    name: string; // public modifier that is default, makes this property accessible from outside the class
    private employees: string[] = []; // we use private modifier to make sure that we can't access this property from outside the class

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) {
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
accounting.name = "IT"
accounting.describe()

accounting.addEmployee('Mohammad');
accounting.addEmployee('Max');
accounting.printEmployeeInformation();

// accounting.employees[2] = 'Ayaz'; // this is a bug, we want to make sure that here we can add employee just by using addEmployee method

// const accountingCopy = { name: "Dummy", describe: accounting.describe }; // has error
// accountingCopy.describe();
