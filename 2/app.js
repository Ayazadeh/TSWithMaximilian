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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
console.log('Role', Role.ADMIN, Role.READ_ONLY, Role.AUTHOR);
var person = {
    name: "Mohammad",
    age: 25,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
