//! Content: Basic JS - Content: Basic data types, bindings, basic builtins, conditionals, 
//! control flow, loops, switch, functions

//? Comment highlighting: Name: Better Comments
//? VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

// Reading: EJS 1-4 https://eloquentjavascript.net/ 

//* Feel free to just log answers to the console - I should be able to just 
//* copy-paste your code into the console and run it to check answers 😎

// HW: 
//* 1. Cube Number Test
// Print out all cubed numbers up to the total value 1000. Meaning that if the cubed number is over 1000 break the loop.
let cubedNumber = 1;
function whileCubedNumbers(){
    while (cubedNumber ** 3 <= 1000){
        console.log(`${cubedNumber ** 3} is ${cubedNumber} cubed.`);
        cubedNumber++;
    }
    cubedNumber = 1; //cubedNumber is reset to test over and over.
    return '^ All cubed numbers up to 1000 in a while loop.';
};

function forCubedNumbers() {
        for (i = 1; i ** 3 <= 1000; i++){
        console.log(`${i} cubed is ${i ** 3}`);
    }
    return '^ All cubed numbers up to 1000 in a for loop. ^'
};

console.log(whileCubedNumbers());
console.log(forCubedNumbers());


//* 2. Prime Numbers
// Get first prime numbers up to 100

function primeTest(number){
    if (number < 2){
        return false;
    }
    let checker = 2;
    while (checker < number){
        if (number % checker == 0){
            return false;
        }
        checker++;
    }
    return true;
};

let numToCheck = 0;
let totalPrimes = 0;
while(numToCheck <= 100){
    if(primeTest(numToCheck)){
        console.log(`${numToCheck} is a prime number.`)
        totalPrimes++;
    }
    numToCheck++;
}
console.log(`There are ${totalPrimes} prime numbers between 0 and 100.`)


//* 3. Age Question
// Take in a users input for their age, if they are younger than 18 log kids, 
//if they're 18 to 65 log adults, else log seniors

let age = prompt("How old are you?");
age = parseFloat(age);

while (isNaN(age)){
    age = prompt("Please enter your age numerically.");
    age = parseFloat(age);
}

if (age < 18) {
    console.log("You're just a wee lad.");
} else if (age >= 18 && age <=65) {
    console.log("You're a bloody adult.");
} else {
    console.log("Times tickin.");
}