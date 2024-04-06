/*
var arr_names = ["senthamarai","sureshkrishna","gopalsamy","nallasamy","kaladevi"];
var len = arr_names.length;
for(var i = 0;i<len;i++){
    console.log(arr_names[i]);
}
console.log(arr_names[len-1]);
var array = [1,2,3,4,5];
array.push(6);
console.log(array);
array.pop();
console.log(array);
//delete array[0];
//console.log(array);
console.log("array before splicing ");
console.log(array);
console.log("array after splicing");
//array.splice(0,2);
//console.log(array);
console.log("array after splicing  and inserting");
array.splice(0,2,1,2); 
console.log(array);
*/
var arr = [40,78,65,89,90];
var newarr = arr.filter(condition);
function condition(val){
     if(val>50)
     return val;
}
console.log(newarr);
var total = arr.reduce((total,element)=>total+element)
console.log(total);

var container = arr.reduce((pro,ele)=>pro*ele)
console.log(container);