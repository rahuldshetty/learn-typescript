// type alias allows you to create a new name for an existing type
// Syntax: type alias = existingType;

type Name = string;

let firstName: Name = 'John';
let lastName: Name = 'Doe';

// typeof is still string
console.log(firstName, lastName, typeof firstName);

// Object
type Person = {
    name: string;
    age: number;
};

let person: Person = {
    name: 'John',
    age: 25
};

console.log(person, typeof person);

// Intersection Type
type Personal = {
    name: string;
    age: number;
};
  
type Contact = {
    email: string;
    phone: string;
};

type Candidate = Personal & Contact;

let candidate: Candidate = {
    name: "Joe",
    age: 25,
    email: "joe@example.com",
    phone: "(408)-123-4567"
};

console.log(candidate, typeof candidate);

// String Literals
let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
console.log(mouseEvent, typeof mouseEvent)

type MyMouseEvent = 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent2: MyMouseEvent;
mouseEvent2 = 'click'; // valid
mouseEvent2 = 'dblclick'; // valid
mouseEvent2 = 'mouseup'; // valid
mouseEvent2 = 'mousedown'; // valid
console.log(mouseEvent2, typeof mouseEvent2)
let anotherEvent: MyMouseEvent;