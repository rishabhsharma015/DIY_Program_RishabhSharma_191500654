// Q1: Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let a = prompt("Enter base");
let b = prompt("Enter height");
console.log(`The area of triangle is ${0.5*a*b}`);

// Q2: Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let s1 = prompt("Enter length one");
let s2 = prompt("Enter length two");
let s3 = prompt("Enter length three");
console.log(`The perimeter of triangle is ${parseInt(s1)+parseInt(s2)+parseInt(s3)}`);

// Q3: Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let len = prompt("Enter length");
let wid = prompt("Enter width");
console.log(2*(parseInt(len)+parseInt(wid)));

// Q4: Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let rad = prompt("Enter radius");
console.log(3.14*parseFloat(rad)*parseFloat(rad));

// Q5,7,8----> To be done.

// Q6: Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let slope = (10-2)/(6-2);
console.log(slope);

// Q9: Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt("Enter no. of hours");
let rateph = prompt("Enter rate per hour");
console.log(hours*rateph);

// Q10: If the length of your name is greater than 7 say, your name is long else say your name is short.
let name2 = "Rishabh";
(name2.length>7)?console.log("Long"):console.log("Short");

// Q12: Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 20;
let yourAge = 18;
console.log(`I am ${myAge-yourAge} years older than you`); 

// Q13: Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
const d = new Date();
let birthYear = prompt("Enter your birth year");
let currYear = d.getFullYear();
let age = currYear-birthYear;
console.log(`Enter birth year: ${birthYear}`);
((currYear-birthYear) >= 18)?console.log(`You are ${age}. You are old enough to drive`):console.log(`You are ${age}. You will be allowed to drive after ${18-age} years.`);

// Q14: Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
const d1 = new Date();
let ms = d1.getTime();


// Q15: Create a human readable time format using the Date time object
function formatDate(date, sep){
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return day + sep + month + sep + year;
}


var date = new Date();
console.log(formatDate(date, '/'));
