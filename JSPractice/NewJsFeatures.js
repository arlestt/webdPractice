console.log("new js features!");


//default parameters
const multiply = (a,b=1) => a*b; //here even if b is not defined, the compiler takes the default value that is b=1.
console.log(multiply(7,2));
console.log(multiply(7));

function rollDie (numSides = 6){
    return Math.floor(Math.random()*numSides+1);
}  
console.log(rollDie());


//     *******  WATCH THE FULL MODULE. SKIPPING IT *******