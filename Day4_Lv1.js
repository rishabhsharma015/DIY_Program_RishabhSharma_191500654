// Q1: Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = prompt("Enter your age");
if(age>=18){
    console.log('You are old enough to drive');
}
else{
    console.log(`You are left with ${18-age} years to drive.`);
}

// Q2: Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let yourAge = 25;
let myAge = prompt("Enter your age");
if(myAge>yourAge){
    console.log(`I am ${myAge-yourAge} years older than you`);
}
else{
    console.log(`You are ${yourAge-myAge} years older than me`);
}


// Q3: If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = prompt(`Enter a`);
let b = prompt(`Enter b`);
if(a>b){
    console.log("a is greater than b")
}
else{
    console.log("a is less than b");
}


// Q4: Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num = prompt("Enter a number");
if(num%2==0){
    console.log("Number is Even");
}
else{
    console.log("Number is Odd");
}