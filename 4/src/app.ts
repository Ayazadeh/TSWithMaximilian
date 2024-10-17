// interface describe a structure of an object
// recommendation: use capitalize first letter for interface name

interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Mohammad',
    age: 26,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

user1.greet('Hi there - I am');