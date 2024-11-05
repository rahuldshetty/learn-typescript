// TypeScript interfaces define the contracts within your code. They also provide explicit names for type checking.
interface Product {
    readonly id: number, // only when creating assign value
    name: string,
    price: number,
    discount?: number // optional 
}

function getProduct(id: number): Product{
    return {
        id: id,
        name: `Gadget ${id}`,
        price: 99.5
    }
}

const product = getProduct(1);
console.log(`The product ${product.name} costs ${product.price}`);


// Function Type
interface StringFormat{
    (str: string, isUpper: boolean): string
}

let format: StringFormat;
format = function(str: string, isUpper: boolean) {
    return isUpper? str.toLocaleUpperCase(): str.toLocaleLowerCase()
}

console.log(format('hi', true), format('Hello', false))

// Class Type
interface Json {
    toJson(): string;
}

class Person implements Json {
    constructor(private firstName: string, private lastName: string) {}

    toJson(): string {
        return JSON.stringify(this);
    }
}

let person = new Person('John', 'Doe');
console.log(person.toJson());



// Extending Interface
interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}

interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}

class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email}. `);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}