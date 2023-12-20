const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));                        // for fixed 

const otherNumber = 1134.56433333
console.log(otherNumber.toPrecision(3));               // for precision

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));         // GIVES VALUE IN INDIAN STANDARD USING en-IN
console.log(hundreds.toLocaleString());         // GIVES VALUE IN INDIAN STANDARD USING en-IN



//*****************************maths*********************************************************** 


console.log(Math);

console.log(Math.abs(-9));               // absolute

console.log(Math.round(7.8));             // absolute

console.log(Math.ceil(7.8));              // ceil

console.log(Math.floor(7.8));                  // floor

console.log(Math.min(2,3,4,5));

console.log(Math.max(2,3,4,5));


console.log(Math.random());                // this give value btw 0 and 1

 console.log(Math.random()*10);            // this give value btw btw 0 and 10
 console.log(Math.random()*10 + 1);        // this will give the value btw 1 and 11

 const min =10
 const max =20
 console.log(Math.floor(Math.random()*(max - min + 1) + min));    // (max-min+1) will give the value btw range of max and min +1 
                                                                // adding min to it will give value atleast above or equal to min

