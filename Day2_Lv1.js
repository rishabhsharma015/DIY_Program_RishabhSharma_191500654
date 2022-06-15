// Q1
const challenge = "30 Days Of JavaScript";

// Q2
console.log(challenge);

// Q3
console.log(challenge.length);

// Q4
const c = challenge.toUpperCase()
console.log(challenge);

// Q5
const c2 = challenge.toLowerCase()
console.log(c2);

// Q6
var s = challenge.substring(0,2);
console.log(s);

// Q7
var s2 = challenge.substring(3);   // or challenge.substring(3,challenge.length);
console.log(s);

// Q8
console.log(challenge.includes("Script"));

// Q9
var arr = challenge.split();

// Q10
var arr2 = challenge.split(" ");

// Q11
var str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(str.split(","));

// Q12
console.log(challenge.replace("JavaScript","Python"));

// Q13
console.log(challenge.charAt(15));

// Q14
console.log(challenge.charCodeAt('J'));

// Q15
console.log(challenge.indexOf('a'));

// Q16
console.log(challenge.lastIndexOf('a'));

// Q17
const s = 'You cannot end a sentence with because because because is a conjunction';
console.log(s.indexOf('because'));

// Q18
console.log(s.lastIndexOf('because'));

// Q19
console.log(s.search('because'));

// Q20
console.log(challenge.trim());

// Q21
console.log(challenge.startsWith('30'));

// Q22
console.log(challenge.endsWith('Script'));

// Q23
console.log(challenge.match('a'));

// Q24
console.log("30 Days of ".concat("JavaScript"));

// Q25
console.log(challenge.repeat(2));