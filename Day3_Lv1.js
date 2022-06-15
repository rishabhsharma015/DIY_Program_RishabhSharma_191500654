// Q1: Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstname = "Rishabh";
let lastname = "Sharma";
let country = "India";
let city = "Jhansi";
let age = 20;
let isMarried = false;
let year = 2022;

console.log(typeof(firstname),typeof(lastname),typeof(country),typeof(city),typeof(age),typeof(isMarried),typeof(year));

// Q2: Check if type of '10' is equal to 10
console.log(typeof('10')==typeof(10));

// Q3: Check if parseInt('9.8') is equal to 10
console.log(parseInt(9.8)==10);

// Q4: Boolean value is either true or false.
//      (i)  Write three JavaScript statement which provide truthy value.
//      (ii) Write three JavaScript statement which provide falsy value.
console.log(10>5);                                       // true
console.log('python'.length>'cat'.length);              // true
console.log((2**2)>2);                                 // true

console.log(10<5);                                     // false
console.log('python'.length<'cat'.length);             // false
console.log((2**2)<2);                                 // false

// Q5: Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'
// Find the length of python and jargon and make a falsy comparison statement.

// --> solutions: true, true, false, false, true, true, false, false, false, true, false

