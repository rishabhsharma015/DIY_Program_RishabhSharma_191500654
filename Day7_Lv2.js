// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number

var num = prompt("Enter the number");
var e = 0, o = 0;
for (let i = 1; i < num; i++){
    if(i%2==0){
        e++;
    }
    else{
        o++;
    }
}
console.log("even"+e);
console.log("odd"+o);

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadratic(a,b,c){
    var x1 = (-b + Math.sqrt(Math.pow(b,2) - 4*a*c))/2*a;
    var x2 = (-b - Math.sqrt(Math.pow(b,2) - 4*a*c))/2*a;
    console.log(x1);
    console.log(x2);
}

var a = prompt("Enter the value of a");
var b = prompt("Enter the value of b");
var c = prompt("Enter the value of c");
solveQuadratic(a,b,c);

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(arr){
    arr.forEach(e => {
        console.log(e);
    });
}

printArray([1,2,3,4,5,6]);


// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime(){
    var d = new Date();
    var day = d.getDay()
    if(day.length() == 1){
        day = '0'+day;
    }
    console.log(day+'/'+d.getMonth()+'/'+d.getFullYear()+" "+d.getHours()+':'+d.getMinutes());
}

showDateTime();


// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x,y){
    var temp = x;
    x = y;
    y = temp;
    console.log("x="+x, "y="+y);
}
var x=4, y=3;
console.log("x="+x, "y="+y);
swapValues(4,3);


// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(arr){
    var i=0, j=arr.length-1;
    while(i<j){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    console.log(arr);
}

reverseArray([1,2,3,4,5,6]);

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    }
    console.log(arr);
}

capitalizeArray(["my", "name", "is", "rishabh", "sharma"]);

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item){
    arr = [1,2,3,4,5];
    arr.splice(arr.length,0,item);   // argument 1-  where to insert element.
    console.log(arr);                // argument 2-  how many elements to delete.
                                     // argument 3-  element to be inserted.
}

addItem(6);

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(idx){
    var arr = [1,2,3,4,5,6,7];
    arr.splice(idx, 1);
    console.log(arr);
}

removeItem(4);


// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(num){
    var sumnum = 0;
    for (let i = 0; i <= num; i++) {
        sumnum = sumnum + i;       
    }
    console.log(sumnum);
}

sumOfNumbers(5);


// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfNumbers(num){
    var sumnum = 0;
    for (let i = 0; i <= num; i++) {
        sumnum = sumnum + i;       
    }
    console.log(sumnum);
}

sumOfNumbers(5);

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(num){
    var sumEven = 0;
    for (let i = 0; i <= num; i++) {
        if(i%2==0){
            sumEven = sumEven + i; 
        }      
    }
    console.log(sumEven);
}

sumOfEven(5);


// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function sumOfOdd(num){
    var sumOdd = 0;
    for (let i = 0; i <= num; i++) {
        if(i%2!=0){
            sumOdd = sumOdd + i; 
        }      
    }
    console.log(sumOdd);
}

sumOfOdd(5);

// Write a function which takes any number of arguments and return the sum of the arguments

function sum(...args){
    var s = 0;
    args.forEach(e=>{
        s = s + e;
    });
    console.log(s);
}

sum(1,2,3,4,5);
