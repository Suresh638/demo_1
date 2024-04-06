/*
// function without expression
function disp(para){
    console.log(para);
}
disp("hii suresh");
disp(123);
// the  actual value we are passing  is called as an argument.
// the value we are giving defaultly with in a function is called as parameter.
var print = function(){
    console.log("hello");
}
print();
/*
here i have assigned a funciont to a  variable the print acts  as a 
function here and the function executed.
* here the variable name acts as a function name.
We can able to call it by using the variable name.

             // function with expression
var execute = function(para1,para2){
    console.log(para1+para2);
}
execute("suresh",1);
               
                           // returning value from a function
function add (num1,num2){
    return num1+num2;
}
console.log(add(5,8));
 
                // we can also store a particular value that is returned  from
                //another function by using below example.

var val = function(v1,v2){
   return v1*v2;
}
var name = val(4,5);
console.log(name);

function add(p1,p2){
    return p1+p2;
}
var res = add(2,5);
console.log(res);
*/
// default  values for a funcion
/*
  if we are not giving any value to the second parameter
  it will take the default value what we have given.
  if we are not giving any value and using that parameter in any operation
  we will get  definitely undefined as a result.   


function pro (v1,v2=1){
    return v1*v2;
}
console.log(pro(2,));

function sum(a,b){
    return a+b;
}
console.log(sum(2));

// rest parameter
function rest(a,...b){
    console.log(a);
    console.log(b[0]);
}
rest(1);


// arrow functions
var x = (a,b) => {
    return a+b;
}
console.log(x(4,6));
let arr = [2,3,5,6,10];
let findsum = (arr) =>{
    let sum=0;
    for(let val of arr){
        sum+=val;
    }
    return sum
}
console.log(findsum(arr));

var area = r => Math.ceil(3.14*r*r)
console.log(area(7));

// nested function (function inside a function)
function outerfun(){
    console.log("outer function executed");
    innerfun();
    function innerfun(){
        console.log("inner function executed");
    }
}
outerfun();

function dosomething(){
    var x = 1;
    var y = 2;
    var z = 3;
    console.log(x+ ","+ y+ "," +z);
    function inner(){
        var d = 20;
        console.log("inner function executed "+x);
    }
    inner();
}
dosomething();

// here both the variable  x and the function are inside the global scope
// so that there will be  no error.
var x = 10;
function russel(){
    console.log(x);
}
russel();
*/
function x(){
    var d = 10;
    function y(){
        var e = 20;
        console.log(d);
    }
    y();
}
x();