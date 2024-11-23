import _ from 'lodash';

console.log(_.shuffle([1, 2, 3]))

// I have a GLOBAL variable in html file and I want to access it in ts file for that i must use 'declare' keyword
declare var GLOBAL: any;
console.log(GLOBAL);
