function Employee(Name,Age,City,Salary){
    this.name = Name;
    this.age = Age;
    this.city = City;
    this.salary_base = Salary;
    let bonus = 1000;
    let finalSal = function(){
        let cal = Salary+bonus;
        console.log(`your final salary is : ${cal}`);
    }
    this.getdetails = function(){
        console.log( "your name is : " + this.name);
        console.log( "your age is : " + this.age);
        console.log( "your city name is : " + this.city);
        finalSal();
    }
}

let emp_1 = new Employee("sureshkrishna",21,"Erode",25000);
emp_1.bonus = 5454;
emp_1.getdetails();
emp_1.finalSal();
