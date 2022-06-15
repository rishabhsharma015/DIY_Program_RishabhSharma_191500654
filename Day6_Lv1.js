const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


// Q1: Iterate 0 to 10 using for loop, do the same using while and do while loop
// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// let i = 0;
// while(i<11){
//     console.log(i);
//     i++;
// }

// let j = 0;
// do{
//     console.log(i);
//     i++
// }while(i<11)

// Q2: Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i=10;i>=0;i--){
    console.log(i);
}

let i = 10;
while(i>=0){
    console.log(i);
    i--;
}

let j = 10;
do{
    console.log(j);
    j--
}while(j>=0)

// Q3: Iterate 0 to n using for loop
const n = prompt("Enter the value of n");
for (let index = 0; index <= n; index++) {
    console.log(index);
}

// Q5: Use loop to print the following pattern:
for (let i = 0; i < 11; i++) {
    console.log(`${i} * ${i} = ${i*i}\n`);
}

// Q6: Use loop to print the following pattern
console.log(`i      i^2     i^3`);
for (let i = 0; i < 11; i++) {
    console.log(`${i}        ${i**2}      ${i**3}\n`);
}

// Q7: Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
    if(i%2==0){
        console.log(i);
    }
}

// Q8: Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
    if(i%2!=0){
        console.log(i);
    }
}

// Q9: Use for loop to iterate from 0 to 100 and print only prime numbers
var a = 2;
while(a<=100){
    for (var id = 2; id < a; id++){
        if(a%id==0){
            break;
        }
    }
    if(id==a){
        console.log(a);
    }
    a++;
}

// Q10: Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// var even = 0, odd = 0; 
// for(let idx = 0;idx<=100;idx++){
//     if(idx%2==0){
//         even = even + idx;
//     }
//     else{
//         odd = odd + idx;
//     }
// }
// console.log(`The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}.`);

// Q11: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
var even = 0, odd = 0; 
for(let idx = 0;idx<=100;idx++){
    if(idx%2==0){
        even = even + idx;
    }
    else{
        odd = odd + idx;
    }
}
const l = []
l.push(even);
l.push(odd);
console.log(l);

// Q13: Develop a small script which generate array of 5 random numbers
// const arr = Array(5);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = parseInt(Math.random()*10);
// }
// console.log(arr);

// Q14: Develop a small script which generate array of 5 random numbers and the numbers must be unique
const arr = Array(5);
for (let i = 0; i < arr.length; i++) {
    let num = parseInt(Math.random()*10);
    while(arr.indexOf(num)!=-1){
        num = parseInt(Math.random()*10);
    }
    arr[i] = num;
}
console.log(arr);

// Q15: Develop a small script which generate a six characters random id:
const str = 'abcdefghijklmnopqrstuvwxyz';
let res = '';
for(let i = 0; i<6;i++){
    res = res + str.charAt(Math.floor(Math.random()*6));
}
console.log(res);

