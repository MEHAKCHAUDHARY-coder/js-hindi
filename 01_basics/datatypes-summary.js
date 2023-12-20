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



//  *********************************************************************************************************************

// Stack (primitive), Heap (Non-primitive)

let channel = "abc.com"                            // Stack, therefore take copyied value rathere than orignal value 
let anotherchannel = channel                       // and change willl be seen only in another value not initaial value
anotherchannel = "def.com"

console.log(channel);
console.log(anotherchannel);

let userone = {                                   // Heap, it take reference of original value  and make changes in both values
    name : "mehak",                               // => userone and usertwo
    age : 22
}

let usertwo = userone

 usertwo.age = 2


console.log(userone.age);
console.log(usertwo.age);
