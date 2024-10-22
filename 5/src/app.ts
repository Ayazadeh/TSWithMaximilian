// intersection types: allow us to combine other types

type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // intersection type
// its like: interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
	name: 'Mohammad',
	privileges: ['create-server'],
	startDate: new Date(),
};
console.log('intersection types: ', e1);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // it'll be number

const uni: Universal = 10;
console.log('universal type: ', uni);

// End of intersection types

// type guards

// allows us to utilize the flexibility of union types gives us and still ensure that our code runs correctly at runtime
// we can use 'typeof' or 'in' or 'instanceof' for type guards
function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') { // type guard
		return a.toString() + b.toString();
	}
	return a + b;
}

type UnkknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnkknownEmployee) {
	console.log('-----------------');
	console.log('Name: ' + emp.name);
	if ('privileges' in emp) { // type guard
		console.log('Privileges: ' + emp.privileges);
	}
	if ('startDate' in emp) { // type guard
		console.log('Start Date: ' + emp.startDate);
	}
} 

printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Max', startDate: new Date() });

class Car {
	drive() {
		console.log('Driving...');
	}
}

class Truck {
	drive() {
		console.log('Driving a truck...');
	}

	loadCargo(amount: number) {
		console.log('Loading cargo ...' + amount);
	}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
	console.log('>>>>>>>>');
	
	vehicle.drive();
	if (vehicle instanceof Truck) { // type guard
		vehicle.loadCargo(1000);
	}
}

useVehicle(v1);
useVehicle(v2);

// End type guards