function Person(empName,empId) {
    this.name=empName;
    this.id=empId;
}

let emp1=new Person("Mowa",123)
let emp2=new Person("panda",345)

emp1.company="TCS";
console.log(emp1); //obj
console.log(emp2); //obj