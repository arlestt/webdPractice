console.log("Loops Continuation!!");


// **Guessing Game**
// ****Rewatch the video once again!!! Introduced the term *parseInt* and has solved it in a different way.
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

////////////////////////////////////////////////////////////

// **for....of loops** 
// used to iterate arrays in a simpler way.

let numArr = [1, 2, 3, 4]; 
c=0;
for(let element of numArr){
    console.log(`index ${c} -> ${element}`)
    c++;
}

c =0;
const seatingChart = [
    ['kristen', 'erik', 'namita'],
    ['geof', 'juan', 'antony', 'kevin'],
    ['yuma', 'sakura', 'jack', 'erika']
]
//////////////////////////////////////////////////////
for(i=0; i<seatingChart.length; i++){
    console.log(`row #${i+1}`);
    for(j=0; j<seatingChart[i].length; j++){
        console.log(` - ${seatingChart[i][j]}`);
    }
}
// for(let row of seatingChart){
//     console.log(`row #${c+1}`);
//     for(j=0; j<seatingChart[i].length; j++){
//         console.log(` - ${seatingChart[i][j]}`);
//     }
//     c++;
// }

// for(i=0; i<seatingChart.length; i++){
//     const row = seatingChart[i];
//     console.log(`row #${i+1}`);
//     for(j=0; j<row[i].length; j++){
//         console.log(` - ${row[j]}`);
//     }
// }               
for(let row of seatingChart){
    console.log(`row #${c+1}`);
    for(let students of row){
        console.log(students);
    }
    c++;
}
