// Q1: Write a program which tells the number of days in a month.
let month = prompt("Enter a valid month");
let m = month.toLowerCase();
if(m=="january" || m=="march" || m=="may" || m=="july" || m=="october" || m=="august" || m=="december"){
    console.log(`${month} has 31 days.`);
}
else if(m=="april" || m=="june" || m=="september" || m=="november"){
    console.log(`${month} has 30 days.`);
}
else if(m=="february"){
    console.log(`${month} has 28 days.`);
}
else{
    console.log("Invalid month");
}

// Q2: Write a program which tells the number of days in a month, now consider leap year.
let month2 = prompt("Enter a valid month");
let m1 = month2.toLowerCase();
if(m1=="january" || m1=="march" || m1=="may" || m1=="july" || m1=="october" || m1=="august" || m1=="december"){
    console.log(`${month2} has 31 days.`);
}
else if(m1=="april" || m1=="june" || m1=="september" || m1=="november"){
    console.log(`${month2} has 30 days.`);
}
else if(m1=="february"){
    console.log(`${month2} has 29 days.`);
}
else{
    console.log("Invalid month");
}