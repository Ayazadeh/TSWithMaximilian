import _ from 'lodash';
import { Product } from './product.model';
import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

console.log(_.shuffle([1, 2, 3]))

// I have a GLOBAL variable in html file and I want to access it in ts file for that i must use 'declare' keyword
declare var GLOBAL: any;
console.log(GLOBAL);

// sample of data that comes from backend
const products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 10.99 }
]
// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price);
// })

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}

const newProd = new Product('', -5);
validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log('VALIDATION ERRORS!');
        console.log(errors);
    } else {
        console.log(newProd.getInformation());
    }
});