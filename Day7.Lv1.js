// Q1: Declare a function fullName and it print out your full name.
function fullName(){
    const firstName = 'Rishabh';
    const lstName = 'Sharma';
    const space = ' ';
    console.log(firstName+space+lstName);
}
fullName();

// Q2: Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName){
    return (firstName+' '+lastName);
}
console.log(fullName());

// Q3: Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2){
    return num1+num2;
}
console.log(addNumbers(2,4));

// Q4: An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width){
    return length*width;
}
console.log(areaOfRectangle(5,9));

// Q5: A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width){
    return 2*(length+width);
}
console.log(perimeterOfRectangle(5,9));

// Q6: A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height){
    return length*width*height;
}
console.log(volumeOfRectPrism(5,9,3));

// Q7: Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r){
    const pi = 3.14;
    return pi*r*r;
}
console.log(areaOfCircle(5));

// Q8: Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumference(r){
    const pi = 3.14;
    return 2*pi*r;
}
console.log(circumference(5));

// Q9: Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume){
    return mass/volume;
}
console.log(density(45, 30));

// Q10: Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function calculateSpeed(dist, time){
    return dist/time;
}
console.log(calculateSpeed(200, 2));

// Q11: Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity){
    return mass*gravity;
}
console.log(weight(200,9.81));

// Q12: Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function defTofar(cel){
    return (cel*(9/5)) + 32;
}
console.log(degTofar(40));

// Q13: Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function BMI(weight, height){
    const bmi = weight/(height*height);
    if(bmi<18.5){
        return 'Underweight';
    }
    else if(bmi>=18.5 && bmi<=24.9){
        return 'Normal';
    }
    else if(bmi>=25 && bmi<30){
        return 'Overweight';
    }
    else if(bmi>=30){
        return 'obese';
    }
}
console.log(BMI(51,167));

// Q14: Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
var myMonth = prompt("Enter the valid month name");
myMonth = myMonth.toLowerCase();

switch(myMonth){
    case "january":
        console.log("Winter");
        break;

    case "december":
        console.log("Winter");
        break;

    case "february":
        console.log("Winter");
        break;

    case "march":
        console.log("Spring");
        break;
    
    case "april":
        console.log("Spring");
        break;
    
    case "may":
        console.log("Spring");
        break;

    case "june":
        console.log("Summer");
        break;
    
    case "july":
        console.log("Summer");
        break;
    
    case "august":
        console.log("Summer");
        break;

    case "september":
        console.log("Autumn");
        break;
    
    case "october":
        console.log("Autumn");
        break;
    
    case "november":
        console.log("Autumn");
        break;

    default:
        console.log("Invalid month");
    
}


// Q15: Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function tellMax(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num3 && num2>num1){
        return num2;
    }
    else{
        return num3;
    }
    // Math.max(num1,num2,num3);
}
console.log(tellMax(4,6,2));