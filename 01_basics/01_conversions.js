let score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abs" => NaN
// true => 1
// null => 0

let isLoggedIn = "k"
let BooleanIsLoggedIn = Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn);

// 1 => true ; 0 = > false
// "" => false
// "hi" =>true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);