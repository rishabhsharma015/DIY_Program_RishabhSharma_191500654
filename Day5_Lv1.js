// The splice() method returns the removed item(s) in an array.
// The slice() method returns the selected elements in an array, as a new array object.
// The splice() method changes the original array and slice() method doesn’t change the original array.


// Q1: Declare an empty array;
const emarr = Array();
const emarr2 = [];

//  Q2: Declare an array with more than 5 number of elements
const arr = [1,2,3,4,5,6,7,8,9];

//  Q3: Find the length of your array
console.log(arr.length);

// Q4: Get the first item, the middle item and the last item of the array
console.log(arr[0], arr[arr.length/2], arr[arr.length-1]);

// Q5: Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 3.7, "Rishabh", true, 'R', '1511']
console.log(mixedDataTypes.length);

// Q6: Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Q7: Print the array using console.log()
console.log(itCompanies);

// Q8: Print the number of companies in the array
console.log(itCompanies.length);

// Q9: Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[itCompanies.length/2], itCompanies[itCompanies.length-1]);

// Q10: Print out each company
for (let index = 0; index < itCompanies.length; index++) {
    console.log(itCompanies[index]);
}

// Q11: Change each company name to uppercase one by one and print them out
for (let index = 0; index < itCompanies.length; index++) {
    itCompanies[index].toUpperCase();
    console.log(itCompanies[index]);
}

// Q12: Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString()+" are big IT Companies");

// Q13: Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log(itCompanies.includes("Facebook"));

// Q14: Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++) {
    if(itCompanies[i].indexOf('o')!=itCompanies[i].lastIndexOf('o')){
        console.log(itCompanies[i]);
    }
}


// Q15: Sort the array using sort() method
itCompanies.sort()

// Q16: Reverse the array using reverse() method
emarr.reverse();

// Q17: Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

// Q18: Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length));

// Q19: Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(itCompanies.length/2,(itCompanies.length/2)+1));

// Q20: Remove the first IT company from the array
console.log(itCompanies.shift());

// Q21: Remove the middle IT company or companies from the array
itCompanies.splice(itCompanies.length/2, 1);
console.log(itCompanies);

// Q22: Remove the last IT company from the array
itCompanies.pop();

// Q23: Remove all IT companies
itCompanies.splice(0,itCompanies.length);