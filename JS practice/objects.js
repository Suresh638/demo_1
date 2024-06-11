let suresh = {
    name : "sureshkrishna G",age : 21,city : 'kavandapadi',Ismarried:false
};
console.log(suresh);
console.log(suresh.name)
console.log(suresh.age)
console.log(suresh.city)
console.log(suresh.Ismarried)
// changing the properties of an object

// . method
suresh.name = 'Sureshkrishna G'
suresh.Ismarried = true;
console.log(suresh.Ismarried)
console.log(suresh.name)

// [] method
suresh['name'] = 'krish';
suresh["city"] = 'Erode';
console.log(suresh.name)
console.log(suresh.city)

let naam = 'name';
suresh[naam] = 'GSK';
console.log(typeof(naam))

// method 2 for creating an object in js

let item_1 = new Object();
item_1['name'] = "iphone_12";
item_1['ram'] = "4_gb";
item_1['processor'] = "apple_A_16";
item_1['color'] = "black";
item_1.size = 12;
console.log(item_1);



let person = {
    name:"Sureshkrishna G",
    age : 21,
    interest : ["swimming","coding","music","cricket"],
    city : "Erode",
    email : "sureshgopalkarattur@gmail.com",
    intro : ()=>{
        console.log(`hi my name is ${this.name} and my interests are ${this.interest}`);
    }
};

console.log(person['email']);
person.intro();

