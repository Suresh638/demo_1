let employee = {
    firstName : 'suresh',
    lastName : 'krishna',
    fullName : ()=>{
        return employee.firstName+employee.lastName;
    },
    set fullName(str){
        if(typeof str!="string"){
            let err = new Error("please enter a valid string");
            throw err;
        }
        let sname = str.split(' ');
        this.firstName = sname[0];
        this.lastName = sname[1] ?? "";
    }
    
};
employee.firstName = 'ramesh';
console.log(employee.firstName);
//console.log('my full name is',employee.fullName());
try{
    employee.fullName =87;
}
catch{
    console.log('exception');
}
