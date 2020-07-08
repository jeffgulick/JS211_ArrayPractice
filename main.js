'use strict'

//3
const cars = ['Ford', 'Honda', 'Dodge', 'Buick'];
console.log(cars.length);
//4
const moreCars = ['Hyunda', 'Pontiac', 'Jeep', 'Honda']
let totalCars = [];
totalCars = cars.concat(moreCars);
console.log(totalCars);
//5
console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Honda'));
//6
let stringOfCars = 0;
stringOfCars = totalCars.join();
console.log(stringOfCars);
//7
totalCars = stringOfCars.split(',');
console.log(totalCars);
//8
let carsInReverse = totalCars.reverse();
console.log(carsInReverse)
//9
console.log(carsInReverse.sort())
console.log(carsInReverse.indexOf('Buick'))
//10
const removedCars = carsInReverse.slice(2,4);
console.log(carsInReverse);
console.log(removedCars);
//11
console.log(carsInReverse.splice(1,2,'Ford','Honda'));
console.log(carsInReverse);
//12
carsInReverse.push('Dodge', 'Ford');
console.log(carsInReverse)
//13
console.log(carsInReverse.pop());
//14
console.log(carsInReverse.shift());
//15
console.log(carsInReverse.unshift('Buick'));
console.log(carsInReverse);