"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1;
user1 = new Person("Mohammad");
user1.greet("Hi there - I am");
console.log(user1);
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log('function interface: ', add(12, 30));