class Person{
    private ssn: number; // private modifier - property can only be accessed within same class
    public name: string; // public modifier (default) - access property everywhere
    protected readonly dob: Date; // protected modifier - allows properties and methods of a class to be accessible within the same class and subclasses
    // readyonly - only assign once during initialization of value first

    constructor(ssn: number, name:string, dob: Date){
        this.ssn = ssn
        this.name = name
        this.dob = dob
    }

    getFullName(): string{
        return `${this.name}`
    }
}

class Employee extends Person{
    role: string;

    // Static Properties
    // Unlike an instance property, a static property is shared among all instances of a class.
    static headcount : number = 0;

    // Static method
    // Similar to the static property, a static method is also shared across instances of the class. 
    static getHeadCount():number{
        return Employee.headcount;
    } 

    constructor(ssn: number, name:string, dob: Date, role: string){
        super(ssn, name, dob)
        this.role = role;

        Employee.headcount++;
    }

    // Method Overriding
    getFullName(): string {
        return super.getFullName() + ` (Role: ${this.role}, DOB: ${this.dob.toLocaleString()})`
    }
}

let person = new Person(123, "Rahul", new Date());
console.log(person.getFullName())
console.log(person.name);

let employee = new Employee(123, "Rahul", new Date(), "Dev");
console.log(employee.getFullName())

let employee2 = new Employee(123, "Rahul2", new Date(), "Dev");

console.log("Total employees:", Employee.headcount)
console.log("Total employees:", Employee.getHeadCount())


// Abstract Class
// An abstract class is typically used to define common behaviors for derived classes to extend. Unlike a regular class, an abstract class cannot be instantiated directly.
abstract class AbstractEmployee {
    constructor(private firstName: string, private lastName: string) {}
    
    // Need to have atleast one abstract method
    abstract getSalary(): number; 

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
      return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}

class FullTimeEmployee extends AbstractEmployee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}

class Contractor extends AbstractEmployee {
    constructor(
      firstName: string,
      lastName: string,
      private rate: number,
      private hours: number
    ) {
      super(firstName, lastName);
    }
    getSalary(): number {
      return this.rate * this.hours;
    }
}

let john = new FullTimeEmployee('John', 'Doe', 12000);
let jane = new Contractor('Jane', 'Doe', 100, 160);

console.log(john.compensationStatement());
console.log(jane.compensationStatement());