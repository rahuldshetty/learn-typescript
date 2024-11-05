let skill:[string, number];
skill = ['Programming', 5];

console.log(skill, typeof skill);

let color : [number, number, number, number?] = [255, 0, 0];
console.log(color)

color = [1,1,1,1]
console.log(color)

// Cannot use push or other write operation
// readonly - mark property as immutable
let strongly_defined_tuple : readonly [number, boolean, string] = [5, true, "Hello"];
console.log(strongly_defined_tuple)


