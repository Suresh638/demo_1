
// automatically executes without calling the function
(function sayHello(){
    console.log("hi guys hello");
})()
 
// traditional way of calling  a function

function repeat(statement){
    console.log(statement)
}
repeat("vanakkam da mapla");

// expression function
  function isEven (num){
    return num%2==0;
}
console.log(isEven(4));

// anonymous function

let anonymous = function(value){
    return value%2==0;
}

console.log(anonymous(3));

 // arrow functions
let dummy = 4;
 let arrow = (val)=>{
    return val*val;
 }
 console.log( "square of ",dummy,"is", arrow(dummy));

 // multiple arguments arrow functions

 let sum = (x,y) =>  x + y;
 console.log(sum(9,3));

 // arrow functions in objects

 let user = {
    fname : "suresh",
    lname : "krishna",
    // fulln:()=>{
    //     return user.fname+user.lname;
    // }

    fulln:function(){
       return user.fname+user.lname;
    }
 }

 console.log(user.fulln());

 let vls = [2,3,4,5,6];

 let squarenum = vls.map(nums=>nums*nums)
 console.log(squarenum);

 // set timeout

 setTimeout(function(){
    console.log("need to improve");
 },5000);


 // call backs

 function callback(){
    console.log("this is call back")
 }

 function normal (input){
    console.log("this is normal function");
    input();
 }
normal(callback);

