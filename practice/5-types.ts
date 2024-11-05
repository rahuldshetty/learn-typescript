if (false){
    const heading = document.getElementById('h1');
    heading?.accessKey;
}

// Array
let array: string[] = ['John Doe', 'Max Payne'];
console.log(array)
console.log(array.length)

// Object
let person : {
    name: string,
    age: number
} = {
    name: "Rahul",
    age: 10
}
console.log(person)

// Function
let greeting:(name: string) => string;
greeting = function (name: string) {
    return `Hello ${name}`;
}
console.log(greeting("Rahul"));

const howdy = (name:string) : string => {
    return `Howdy ${name}`
}
console.log(howdy("Rahul"));

// Mixed Types
let mixed_type_array : (string | null)[] = ['hello', 'world', null];
console.log(mixed_type_array);

// Can be used to
let vacant: {} = {};
console.log(vacant.toString())

// Unknown Type
let result: unknown;
result = 1;
console.log(result)
result = 'Hello'
console.log(result)

// One cannot use methods on unknown params
let series:unknown;
series = [1,2,3]

const total = (series as number[]).reduce((a:number, b:number) => a + b, 0)
console.log(total)

