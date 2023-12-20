// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


/*
 const score  = 100  
   can change its datatypes at run time
   therefore it js is dynamic language
   */
  
   

const id = Symbol('123')                        // symbol are used for unique identity, therefore both are different 
const anotherId = Symbol('123')


console.log(id === anotherId);


const bigNumber = 123243345567n


// Reference (Non primitive)

// Array, Objects, Functions


const heroes = ["x","f","g"]
let mybj = {
    name : "mehak",
    age : 22,
}

console.log(typeof mybj);

const myFunction = function(){
    console.log("hi");
}

console.log(typeof myFunction);


// datatype of null is  => object,   of string => string, undefined => undefined,  object =>function object, function => object function