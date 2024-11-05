// Rest Parameters
function sum(...numbers: number[]): number{
    return numbers.reduce((a, b) => a + b);
}

console.log(sum(1))
console.log(sum(1,2))
console.log(sum(1,2, 3))
console.log(sum(1,2,3, 4))
console.log(sum(1,2,3,4,5))

// function overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}

console.log("Fn Overloading")
console.log(add(1, 2))
console.log(add("1", "2"))


// Doesn't work
// function plus(a: number, b: number): number {
//     return a + b;
// };
// 
// function plus(a: string, b: string): string{
//     return a.concat(b);
// };

// Method Overloading
class Counter {
    private current = 0;
    count(): number;
    count(target: number) : number[];

    count(target?:number) : number | number[]{
        if (target){
            let values:number[] = [];
            for(let start = this.current; start <= target; start++){
                values.push(start);
            }
            this.current = target
            return values
        }
        return ++this.current;
    }
}

let counter = new Counter();
console.log(counter.count())
console.log(counter.count(5))
