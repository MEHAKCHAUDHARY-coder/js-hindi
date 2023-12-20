const name = "mehak"
const repocount = 50

//console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('mehakhc-jjj-kkkk-lll')    // on using new keyword , we use objects of js and given name under its constructor 
// it gives key and values pair

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.bold());
console.log(gameName.toUpperCase());       // original value will not be changed because it is stack
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));
console.log(gameName.anchor());
console.log(gameName.big());
console.log(gameName.charCodeAt(2));
console.log(gameName.codePointAt('h'));

const newString = gameName.substring(0,4)
console.log(newString);
                                                // mehakhc
const anotherString = gameName.slice(-5, -2)    // here it start count from -5 means from last to 5th and upto 3rd pposition gives hak
console.log(anotherString);

const newStringOne = "    hiiiii   "
console.log(newStringOne);
console.log(newStringOne.trim());                // trim()  terminates the white spaces

const url = "https://mehak.com/mehak%20chaudhary"
console.log(url.replace('%20', '-'));                   // replace()

// include()      ex:- url.includes('mehaku') => will give false as it do not includes mehaku


console.log(gameName.split('-'));            // doing split base on '-'
                                             // output => [ 'mehakhc', 'jjj', 'kkkk', 'lll' ]
