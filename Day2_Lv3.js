// Q1: 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let s = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let exp = /love/gi;
let l1 = s.match(exp);
for(let i=0;i<l1.length;i++){
    c++;
}
console.log(c);

// Q2: Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let s3 = 'You cannot end a sentence with because because because is a conjunction';
let exp3 = /because/gi;
let l3 = s3.match(exp3);
console.log(l3);

// Q3: 

// Q4: Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let exp2 = /\d+/g
let s2 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let l = s2.match(exp2);
let total = 0;
for(let i=0;i<l.length;i++){
    total = total + parseInt(l[i]);
}
console.log(total);