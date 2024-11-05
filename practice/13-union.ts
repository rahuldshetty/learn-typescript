let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK
// result = true; // NOT OKAY

function add(a: number | string, b: number | string) : number | string {
    if (typeof a == 'number' && typeof b == 'number'){
        return a + b;
    }
    if (typeof a == 'string' && typeof b == 'string'){
        return a.concat(b);
    }
    throw new Error("Params should be numbers or string");
}

console.log(add(1, 2))
console.log(add("1", "2"))
