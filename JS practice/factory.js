function createPerson(Name){
    return {
        name : Name,
        greeting : function(){
            let info = `hi machans and machinis my name is  ${this.name}`
            console.log(info);
        }
    };
}

let suresh = createPerson('sureshkrishna G');

suresh.name = "krishna";
console.log(suresh.name);

suresh.greeting();



