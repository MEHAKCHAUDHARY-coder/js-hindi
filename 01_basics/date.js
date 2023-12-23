let myDate = new Date()
console.log(myDate);
console.log(myDate.toLocaleString());
console.log(myDate.toString());
console.log(myDate.toDateString());

console.log(typeof myDate);               //date is object and mydate is instance

let mycreator = new Date(2023, 0, 23)
console.log(mycreator.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);                     // use it fro precision time like in quizzes

console.log(mycreator.getTime());             // get time in milliseconds

// now to convert in seconds
console.log(Date.now());                    // give date in ms
console.log(Math.floor(Date.now()/1000));   // give time in seconds


myDate.toLocaleString('default',{
    dayPeriod: "narrow",                        // shortcut key is ctrl+space
    
    
})

