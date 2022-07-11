console.log("Loops Continuation!!");


// **Guessing Game**
// ****Rewatch the video once again!!!
const number = 9;
let count = 1;
guess = prompt("guess the correct number!");

while(guess != number){
    count++;
    if(guess < number){
        guess = prompt("Try again, too low :(");
    }
    else if(guess > number)
    guess = prompt("Try again, its too high :(");

    else if(guess = "cue"){
        break;
    }
}

if(guess != "cue"){
    console.log(`It took you ${count} guesses!`);
}
else if(guess = "cue"){
    console.log("U quit!");
}

// **Doubt**
// if(guess = "9")
//     console.log("Congratss, U got it right");
// if(guess = "cue") 
//     console.log("U have quit!"); //Doubt ?

