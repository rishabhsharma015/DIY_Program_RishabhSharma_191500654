// Q1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
import fetch from 'node-fetch';
fetch('https://restcountries.com/v2/')
.then((apidata) => {
    console.log(apidata);
    return apidata.json();
})
.then((newdata)=>{
    // console.log(newdata);
    console.log(newdata);
})



// Q2: Print out all the cat names in to catNames variable.
// fetch('https://api.thecatapi.com/v1/breeds')
// .then((apidata) => {
//     console.log(apidata);
//     return apidata.json();
// })
// .then((newdata)=>{
//     // console.log(newdata);
//     console.log(newdata);
// })

