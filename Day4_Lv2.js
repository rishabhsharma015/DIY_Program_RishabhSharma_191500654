// Q1: Write a code which can give grades to students according to theirs scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let score = prompt("Enter your score");
if(score>=90 && score<=100){
    console.log("A")
}
else if(score>=70 && score<89){
    console.log("B")
}
else if(score>=60 && score<=69){
    console.log("C")
}
else if(score>=50 && score<=59){
    console.log("D")
}
else if(score>=0 && score<=49){
    console.log("F")
}
else{
    console.log("Not a valid score");
}

// Q2: Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

const uc = prompt("Enter month name");
let ucs = uc.toLowerCase();

    if(ucs=="september" || ucs=="october"  || ucs=="november"){
        console.log("Autumn"); 
    }

    else if(ucs=="december" || ucs=="january" || ucs=="february"){
        console.log("Winter"); 
    }

    else if(ucs=="march" || ucs=="april" || ucs=="may"){
        console.log("Spring"); 
    }

    else if(ucs=="june" || ucs=="july" || ucs=="august"){
        console.log("Summer"); 
    }

    else{
        console.log("Invalid month");
    }


// Q3: Check if a day is weekend day or a working day. Your script will take day as an input.
//    What is the day  today? Saturday
//    Saturday is a weekend.

//    What is the day today? saturDaY
//    Saturday is a weekend.

//    What is the day today? Friday
//    Friday is a working day.

//    What is the day today? FrIDAy
//    Friday is a working day.

let day = prompt("Enter a day");
let d = day.toLowerCase();
if(d=="monday" || d=="tuesday" || d=="wednesday" || d=="thursday" || d=="friday"){
    console.log("Working day!");
}
else if(d=="satruday" || d=="sunday"){
    console.log("Weekend!!");
}
else{
    console.log("Invalid day");
}