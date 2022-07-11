console.log('Loops!');

//syntax is the same as c++
let i;
for(i=1; i<=10; i++){
    console.log(i)
}
console.log('**********')
// for(i=1; i>=0; i++){
//     console.log(i)         [infinite loop]
// }

let names = ['manta', 'jj', 'thor', 'loki', 'tillu', 'anulok'];

for(i=0; i<names.length-1; i++){
    console.log(i, '->', names[i]);
}

for(i=0; i<names.length-1; i++){
    console.log(`${i} -> ${names[i]}`);
}//note that here the numbers are displayed as strings. (just my assumption lol!). 
//This is because of backticks(``)

//nested loops!
let m,n;
for(m=0; m<3; m++){
    console.log(`m -> ${m}`)
    for(n=5; n<7; n++){
        console.log(`   n -> ${n}`);
    }
}

//To print all the elements in a multidimensional array.
let nums = [
    [1, 2, 3],
    [4, 5, 6, 7],
    [8, 9]
]

for(i=0; i<nums.length; i++){
    console.log(`${i} -> ${nums[i]}`);
}

for(i=0; i<nums.length; i++){
    console.log(`row #${i+1}`);
    for(j=0; j<nums[i].length; j++){
        console.log(nums[i][j]);
    }
}

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
             // **OR**
for(i=0; i<seatingChart.length; i++){
    const row = seatingChart[i];
    console.log(`row #${i+1}`);
    for(j=0; j<row[i].length; j++){
        console.log(` - ${row[j]}`);
    }
}

//*while loops*
let count = 0;
while(count<10){
    count++; 
    console.log(count);
}

let code = "jj";
do{
    guess = prompt("enter your secret code");
}while(guess != code);
