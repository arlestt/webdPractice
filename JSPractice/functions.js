console.log("Functions!!");

//generating a random number. 
random = Math.random();
console.log(random);
//to print between 1 to 10
random = Math.floor(Math.random()*10 + 1);
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


function robbery(){
    let heroes = ["Thor", "Loki", "Hulk"];
    function cryForHelp(){
        for(let hero of heroes){
            console.log(`Pls help ${hero.toUpperCase()}`);
        }
    }
    cryForHelp();
}
robbery();
 

// ***FUNCTION EXPRESSIONS***

// function add(x, y){
//     return (x+y);
// }

let add = function(x, y){
    return(x+y);
}
console.log(add(4, 3));



function callTwice(func){
    func();
    func();
}

function printRollDie(){
    roll = rollDie(6);
    console.log(roll)
}
callTwice(printRollDie)

// FUNCTION TO PRINT A NUMBER BETWEEN 50 AND 100
function above50(){
    while(1){
        let guess = rollDie(100);
        if(guess<50) continue;
        else{
            console.log(guess);
            break;
        }
    };
}
above50();

//       *****OR*****

console.log(Math.floor(Math.random()*51) + 50)  //range between 50 and 100 is 50, add 1 to it.\


//METHODS   
let mymath1 = {
    add: function(x,y){
        return x+y
    }, 
    sqr: function(x){
        return x*x
    },
}
console.log(mymath1.add(4,5));

let mymath2 = {
    cube(x){               //shorthand method
        return x**3
    }
}
console.log(mymath2.cube(5));

////CHECK THE VIDEO FOR THE *THIS* KEYWORD


//    ****try/catch
try{
    hello.toUpperCase()  //error
} catch{
    console.log("There was an error! But the code will continue coz of this function.")
}

function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3))
    } catch (e) {
        console.log(e);  //catches the error
        console.log("Please pass a string next line.");
    }
}
console.log(yell(4));