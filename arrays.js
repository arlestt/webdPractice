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



