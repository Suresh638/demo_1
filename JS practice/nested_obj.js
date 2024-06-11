let human = {
    name:'suresh',
    situation:"very bad",
    confidence:'low',
    age:21,
    greet: function(){
        console.log("hi guys this is a method inside human obj")
    },
    dimensions:{
        height:6.2,
        width:20,
        weight:"64kg"
    },
    characters:["good human","humble one","ready to learn"]
}
console.log(human.characters);
console.log(human.dimensions.height);
human.greet();