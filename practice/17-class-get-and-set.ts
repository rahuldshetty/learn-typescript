class Person{
    private _age:number;
    private _name:string;

    constructor(age: number, name: string){
        this._age = age;
        this._name = name;
    }

    public get age(){
        return this._age
    }

    public set age(newAge: number){
        if(newAge <= 0 || newAge >= 200){
            throw new Error("Either you are not born yet or you are an immortal.")
        }
        this._age = newAge;
    }

    whoami(): void {
        console.log(`${this._name} (Age: ${this.age})`)
    }
}

let person = new Person(133, "Rahul");
person.whoami()
person.age = 26
person.whoami()


