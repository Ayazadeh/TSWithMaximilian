"use strict";
// it's better to name decorators with Uppercase
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    console.log('LOGGER FACTORY (first decorator)');
    return function (constructor) {
        console.log('first decorator');
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log('TEMPLATE FACTORY (second decorator)');
    return function (constructor) {
        console.log('second decorator');
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').innerText = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
Person = __decorate([
    Logger('LOGGING - PERSON'),
    WithTemplate('<h1>My Person Object</h1>', 'app')
], Person);
const person = new Person();
console.log(person);
// ---
function Log(target, propertyName) {
    console.log('---------------------');
    console.log('Property decorator!');
    console.log(target, propertyName);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price - should be positive!');
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithText(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log // Property Decorator
], Product.prototype, "title", void 0);
