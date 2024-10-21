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
