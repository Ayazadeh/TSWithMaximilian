// const person: {
//   name: string;
//   age: number;
//   hobbies: string[],
//   role: [number, string] // tuple
// } = {
//   name: "Mohammad",
//   age: 25,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'] // tuple
// };

// person.role[1] = 20; // error
// person.role = ['r', 2]; // error

// console.log(person.name);

// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// }

enum Role { ADMIN, READ_ONLY, AUTHOR };
console.log('Role', Role.ADMIN, Role.READ_ONLY, Role.AUTHOR);

const person = {
	name: "Mohammad",
	age: 25,
	hobbies: ["Sports", "Cooking"],
	role: Role.ADMIN 
};

if (person.role === Role.ADMIN) {
	console.log('is admin');
}
