const myNumber = 23;
console.log(myNumber);

const myString = "45";
console.log(typeof(Number(myString)));
//  adding the boolean data with the number will be true--> 1 and false will be--> 0.
console.log(true+myNumber);
// true only the number is without the decimal point
console.log(Number.isInteger(210.30));

//parsefloat
// what ever the value may be it will give the out put as a number
console.log(typeof Number.parseFloat(myString));
console.log(parseFloat("2541"));
//  Isint used to find whether the given value is integer is a number or not.
console.log(Number.isInteger(20.54));

// the parse int and parse float is used to give the int and float values if we give any values as an input.
console.log(typeof Number.parseFloat("645"));
console.log(Number.parseFloat("542sdf"));
console.log(Number.parseInt("54sdf544"));
// if i need only limited decimal points then we can use the to fixed method how many digits we need after the point we can specify with the help  of tofixed method and this returns a string as a result.
console.log(Number.parseFloat(253.201548.toFixed(1)));

// chaining concepts using the methods like a chain with the help of a dot operator

console.log(typeof Number.parseFloat("54sdf28").toString());

let name = "suresh krishna";
console.log(name.toUpperCase().split(' '));

// isNaN it first checks that the  result is a number or not based on it will give the results.
console.log(Number.isNaN(54/0));
console.log(isNaN(64));

