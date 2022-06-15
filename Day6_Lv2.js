// Q4: Using the above countries array, create the following new array.
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
  "Iceland"
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];



// for(let i=0;i<countries.length;i++){
//     countries[i] = countries[i].toUpperCase();
// }
// console.log(countries);

// Q5: Using the above countries array, create an array for countries length.
for (let i = 0; i < countries.length; i++) {
  countries[i] = countries[i].length;
}
console.log(countries);

// Q6: Use the countries array to create the following array of arrays:
let farr = [];
for (let i = 0; i < countries.length; i++) {
  farr[i] = new Array(3);
}
for(let i=0;i<farr.length;i++){
    for(let j=0;j<farr[i].length;j++){
        farr[i][0] = countries[i];
        farr[i][1] = countries[i].slice(0,3).toUpperCase();
        farr[i][2] = countries[i].length;
    }
}
console.log(farr);
for (let i = 0; i < 11; i++) {
  var myarr = [];
  myarr[0] = countries[i];
  myarr[1] = countries[i].slice(0, 3).toUpperCase();
  myarr[2] = countries[i].length;
  console.log(myarr);
}

// Q7: In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let varr = [];
for(let i=0;i<countries.length;i++){
  if(countries[i].includes('land')){
    varr.push(countries[i]);
  }
}
console.log(varr);
// Q8: In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let varr2 = [];
for(let i=0;i<countries.length;i++){
  if(countries[i].includes('ia')){
    varr2.push(countries[i]);
  }
}
console.log(varr2);

// Q9: Using the above countries array, find the country containing the biggest number of characters.
var max = 0;
var str;
for(let i=0;i<countries.length;i++){
  if(countries[i].length>max){
    max = countries[i].length;
    str = countries[i];
  }
}
console.log(str);

// Q10: Using the above countries array, find the country containing only 5 characters.
var arr = [];
for(let i=0;i<countries.length;i++){
  if(countries[i].length==5){
    arr.push(countries[i]);
  }
}
console.log(arr);

// Q11: Find the longest word in the webTechs array
var max2 = 0;
var str2;
for(let i=0;i<webTechs.length;i++){
  if(webTechs[i].length>max){
    max2 = webTechs[i].length;
    str2 = webTechs[i];
  }
}
console.log(str2);

// Q12: Use the webTechs array to create the following array of arrays:
var ml = [];
for(let i=0;i<webTechs.length;i++){
  ml.push([webTechs[i], webTechs[i].length]);
}
console.log(ml);

// Q13: An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
var st = '';
for(let i=0;i<mernStack.length;i++){
  st = st + mernStack[i].charAt(0);
}
console.log(st);

// Q14: Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const techBox = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
// for-loop
for(let i=0;i<techBox.length;i++){
  console.log(techBox[i]);
}

// for-of loop
for (const i of techBox) {
  console.log(i);
}

// for-in loop
for(const i in techBox){
  console.log(i);
}

// Q15: This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon'];
var i=0, j=fruits.length-1;
while(i<j){
  let s = fruits[i];
  fruits[i] = fruits[j];
  fruits[j] = s;
  i++;
  j--;
}
console.log(fruits);

// Q16: Print all the elements of array as shown below.
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];
for(const i of fullStack){
  for(const j of i){
    console.log(j);
  }
}