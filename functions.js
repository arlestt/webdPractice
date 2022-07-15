console.log("Functions!!");

//generating a random number. 
random = Math.random();
console.log(random);
//to print between 1 to 10
random = Math.floor(Math.random()*6 + 1);
console.log(random);

//a function to roll a die
function rollDie(n){    
    return Math.floor(Math.random()*n +1);
}

let die1 = rollDie(6); 
let die2 = rollDie(12);
let die3 = rollDie(20);
console.log(`die1 -> ${die1}`);
console.log(`die2 -> ${die2}`);
console.log(`die3 -> ${die3}`);

//function to greet
let c;
function greet(c){
    console.log(`Hi ${c} :)`);
}
// greet(prompt("enter a name")); *********


//                      ****NEW MODULE (21) [scopes]****
function totaleggs(){
    let eggcount = 6;
    console.log(eggcount);
}
// console.log(eggcount); //ERROR
totaleggs();

let bird = "maca";
function shout(){
    let bird  = "peeka";  
}
shout();
console.log(bird);   //observe that the name printed is maca


let radius = 8;
if(radius>0){
    const PI = 3.14;
}
console.log(radius);
//console.log(PI);   //ERROR
 


