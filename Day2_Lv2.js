// Q1: Using console.log() print out the following statement:
console.log('There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');

// Q2: Using console.log() print out the following quote by Mother Teresa:
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// Q3: Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof('10')==typeof(10));             // false
console.log(typeof(parseInt('10'))==typeof(10));  // true

// Q4: Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8')==(10));     // false
console.log(Math.ceil('9.8')==10);        // true

// Q5: Check if 'on' is found in both python and jargon
console.log('python'.search('on'));
console.log('jargon'.search('on'));


// Q6: 'I hope this course is not full of jargon'. Check if jargon is in the sentence.
let s = 'I hope this course is not full of jargon';
console.log(s.search('jargon')!=-1);   // true;

// Q7: Generate a random number between 0 and 100 inclusively.
console.log(Math.ceil(Math.random()*100));

// Q8: Generate a random number between 50 and 100 inclusively.
console.log(Math.ceil(Math.random()*(100-50) + 50));

// Q9: Generate a random number between 0 and 255 inclusively.
console.log(Math.ceil(Math.random()*(255-0) + 0));

// Q10: Access the 'JavaScript' string characters using a random number.
console.log('JavaScript'.charAt(Math.ceil(Math.random()*(9-0) + 0)));

// Q11: Use console.log() and escape characters to print the following pattern
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// Q12: Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let str = 'You cannot end a sentence with because because because is a conjunction';
console.log(str.substr(31,23));