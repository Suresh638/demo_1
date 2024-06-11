let dog = {
    name : 'ramu',
    color : 'sandal',
    isBark : 'true',
    activites : setTimeout(function(){
        console.log("very active and a protective dog");
    },5000),
    location : {
        x : 12,
        y : 20
    }
};

//factory function

function factory(name,color,isBark){
    return{
        name,
        color,
        isBark
    }
}
let dog_2 = factory('tarzan','white',false)
console.log(dog_2);
dog_2.color = 'green';
console.log(dog_2.color);
 dog_2['color'] = 'violet';
console.log(dog_2['color']);