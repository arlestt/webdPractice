let array = [1, 2, 3];
console.log(array);
array.push(5);
console.log(array);
array.pop( );
console.log(array);

array.shift()
console.log(array)
array.unshift(3)
console.log(array)

//concat(), includes(), indexof(), reverse()
// *includes()* : gives output as true or false and tells whether the entered single element exists in the array or not.

let dogs = ['ikka', 'cuttu', 'lodu'];

console.log(dogs.includes('ikka'));

revDogs = dogs.reverse(); //NOTE: Parenthesis is important and without it the function doesnt work.

console.log(revDogs);


//*slice()* : copies a portion of an array. Passing negative numbers as argument will print the last n elements. 
//
//syntax : array.slice(?start, ?end);

console.log(dogs.slice(1));
console.log(dogs.slice(-1));

//*splice()* : changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//syntax : array.splice(?index, ?no of elements to replace, ?'element');

dogs.splice(1, 0, 'tukka');
console.log(dogs);

dogs.splice(1, 2, 'puttu', 'darkie');
console.log(dogs);

dogs.splice(1,2);
console.log(dogs);  


//*const arrays* : In a const variable we cant change its value whereas we can change the contents of an array which has been declared const. 
//We can change the number of elements from 3 to 10 or any other number, change the values etc, but the shell ('[]') will remain the same i.e the reference(memory) remains the same.



//       *******ARRAY METHODS*******

//foreach method : accepts a callback function. calls the function once per element in the array.
const nums = [1, 2, 3, 4, 5, 6, 7];

nums.forEach(function(n){
    console.log(n*n); //prints the sqr of each element.
});
nums.forEach(function(el){
    if(el%2 === 0) console.log(el);  
});


//map method : creates a new array with the results of calling a callback on every element in the array. 
const even = nums.map(function(t){
     return t*5;
})
console.log(even); 

const movies = [
    {
        title: 'amadeus',
        score: '99'
    },
    {
        title: 'thor',
        score: '78'
    },
    {
        title: 'loki',
        score: '87'
    }
]
const titles1 = movies.map(function(movie){
    return movie.title.toUpperCase();
})
console.log(titles1);


//arrow functions
const sqr = (x) => {
    return x*x;
}
console.log(sqr(4));
console.log(sqr);

const sqr2 = num => {    
    return num*num;
}  // can omit parentheses if the name is more than one letter.
console.log(sqr2);

const titles2 = movies.map((movie)=>{
    return (`${movie.title.toUpperCase()} 2`);
})
console.log(titles2);


//arrow functions implicit functions
//only works when there is only one value to return.
const sqr3 = num => (   
    num*num
) //we can omit *return* if we use parentheses instead of curly braces.
console.log(sqr3(9));

const add1 = (a,b) => a+b 
//one line implicit function.
console.log(add1(4,5));

const titles3 = movies.map((movie)=>(`${movie.title.toUpperCase()} 3`))
console.log(titles3);

const newList = movies.map((movie)=>(`${movie.title} -> ${movie.score} `))
console.log(newList);



// ***setTimeout and setInterval*** refer the videos. Not doing it blehhhh :)



//filter method : creates a new array with all elements that pass the test implemented by the provided function.  

//const nums = [1, 2, 3, 4, 5, 6, 7]; => DECLARED ABOVE
const odds = nums.filter(num => num%2 === 1)
console.log(odds)

const goodMovies = movies.filter(m => m.score > 80)
console.log(goodMovies);

//using both filter and map to print only the titles of the good movies.
const goodTitles = movies.filter(m => m.score > 80).map(m => `${m.title} -> ${m.score}`)
console.log(goodTitles)



// every method : tests whether all elements in the array pass the provided function. It retursns a boolean value.
// some method : similar to every, but returns true if ANY of the array elements pass the test function.
//        REFER TO THE VIDEOS. LAZY ASF BLEHHHH !



// reduce method : executes a reducer function on each element of the array, resulthing in a single value.
const total = nums.reduce((total, price) => total + price)

//we can also find minimum number using this method.
const min = nums.reduce((min, ele)=> {
    if(min<ele) return min;
    else return ele; 
})

const evens = [2, 4, 6, 8];
const evensSum = evens.reduce((sum, ele) => sum+ele, 100)
//anything declared in the second argurment will be taken as the initial value.


// ***ARROW FUNCTIONS AND THIS*** refer to the video. BLEHHHH !!