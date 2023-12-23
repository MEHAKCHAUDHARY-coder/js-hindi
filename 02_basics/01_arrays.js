// array

const myArr = [0, 1, 2, 3, 4, 5]        // arryas of js are resizable, mixed

console.log(myArr[0]);

// array-copy operations create shallow copies not deep copies
// shallow copies means change in reference just like stack (change in original)

const myHeroes = ["a", "b", "c"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2); 

myArr.push(6)                            // push function is use to add the value in array
console.log(myArr);
myArr.pop()                              // pop function is use to deleet last element
console.log(myArr);

myArr.unshift(9)                        // it shift the array right to add 9 , as it ad 9 in starting
console.log(myArr);

myArr.shift()                          // it shift the array left
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));


const newArr = myArr.join()                 // give array but without brackets

console.log(myArr);
console.log(newArr);


// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)                // slice will print slice of array , ex here print
                                               //the value from index 1 -2 do not include 3

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)                // splice will also print slice of array but here it include 3 index also (1,3)
console.log("C", myArr);                       // but it is diffeent from slice as it changes the original array
console.log(myn2);                           // HOW?????? it delete the splice values from the original array giving([0, 4, 5])
