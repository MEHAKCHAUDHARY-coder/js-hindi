const marvel_heros = ["thor", "Ironman","spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)                    // on pushing array in another array give like this 
                                 // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] treat array as element
console.log(marvel_heros); 
// for access any element from under array  we need to to synatx like this 
// console.log(marvel_heros[3][1]);                // to fetch flash 



// ANOTHER METHOD AS IT IS BIT COMPLEX


const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);


// 3rd method -  spread method

const all_new_heros = [...marvel_heros, ...dc_heros]                    // spread method join by ... and result will be spread array
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// wantn to give the subarrays to represent as single array like this  
//  [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("mehak"));       // isArray check whether it is array or not
console.log(Array.from("mehak"));         // make array from mehak 
console.log(Array.from({name:"mehak"}));         // interesting   (give empty array)


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));       // make array of these scores  