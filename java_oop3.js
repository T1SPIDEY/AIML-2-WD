class employee
{
    constructor(name, id, salary)
    {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    display()
    {
        console.log("Name: " + this.name);
        console.log("ID: " + this.id);
        console.log("Salary: " + this.salary);
    }
}
let e1 = new employee("John", 101, 50000);
e1.display();
class manager extends employee
{
     constructor(name, id, salary)
     {
        super(name, id, salary);
       {
        this.incentive = 10000;
        salary+=this.incentive;
       }
     }
     display()
     {
        console.log("Name: " + this.name);
        console.log("ID: " + this.id);
        console.log("Salary: " + this.salary);
        console.log("Incentive: " + this.incentive);
     }
}
let m1 = new manager("Alice", 102, 60000);
m1.display();