const mystring = 'Mathematics';

// length property
console.log(mystring.length);

// string methods:
// indexing stars from the '0' only.
console.log(mystring.charAt(7));

// index of to find the index of a particular character that occurs first (first occurance).
console.log(mystring.lastIndexOf('at'));

// slice
// this method requres two arguments the first one is inclusive and the last one is exclusive we neeed to give the indexes of the particular piece of the string we needed.
// if we not providing the last index it will slice the remaining all  characters in the string.

console.log(mystring.slice(0,3));

// to uppercase
console.log(mystring.toUpperCase());

//to lower
console.log(mystring.toLowerCase());

//irukka illaya reutrns boolean values if the particular piece of string is available or not.
console.log(mystring.includes('suresh'));

// split
// splits the stirng with the help of a string or a character which we are using passing as an argument.
// considers all the occurances of the string and gives the output according to it. if we are passing no arguments it will split all the characters in the string.
console.log(mystring.split('at'));

// trim method
let trim_name = "                  suresh";
console.log(trim_name.length);
console.log(trim_name.trim().length);




