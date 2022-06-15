const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ];

const countries2 = [
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


// // Q1: Copy countries array(Avoid mutation)
// const c2 = countries2;    // You can use slice() or concat() method to copy the array by value.
// console.log(c2);

// // Q2: Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// const c = countries2.slice(0);
// console.log(c);
// var sortedCountries = c.sort();
// console.log(sortedCountries);

// //  now you can modify c but the changes will not reflect in the orignal array.


// // Q3: Sort the webTechs array and mernStack array
// const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
// const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// console.log(webTechs.sort());
// console.log(mernStack.sort());

// // Q4: Extract all the countries contain the word 'land' from the countries array and print it as array
// var varr = []
// for (let i = 0; i < countries.length; i++) {
//     if(countries[i].includes('land')){
//         varr.push(countries[i]);
//     }
// }
// console.log(varr);

// // Q5: Find the country containing the hightest number of characters in the countries array
// var max = 0;
// var st;
// for(let i=0;i<countries.length;i++){
//     if(countries[i].length>max){
//         max = countries[i].length;
//         st = countries[i];
//     }
// }
// console.log(st);

// // Q7: Extract all the countries containing only four characters from the countries array and print it as array
// var arr = [];
// for (let i = 0; i < countries.length; i++) {
//     if(countries[i].length==4){
//         arr.push(countries[i]);
//     }
// }
// console.log(arr);

// // Q8: Extract all the countries containing two or more words from the countries array and print it as array
// var ar = [];
// for (let i = 0; i < countries.length; i++) {
//     let l = countries[i].split(' ');
//     if(l.length>=2){
//         ar.push(countries[i]);
//     }
// }
// console.log(ar);

// Q9: Reverse the countries array and capitalize each country and stored it as an array

var i=0,j=countries.length-1;
while(i<j){
    var s = countries[i].toUpperCase();
    countries[i] = countries[j].toUpperCase();
    countries[j] = s;
    i++;
    j--;
}
console.log(countries);