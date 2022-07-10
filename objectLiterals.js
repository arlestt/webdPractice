console.log('*Object Literals!*');

const person = { name:'rangam', age:20}; 

console.log(person["name"]);
console.log(person.age);

//Any key is turned into a string.

const boolString = {true: 'boolChanged', false: 'boolChanged'}
console.log(boolString["false"]);
console.log(boolString[false]);
console.log(boolString.false);
//here the keys 'true' and 'false' are strings.

console.log('*******');
const numString = {2: 'numChanged', 3: 'numChanged'}
let number = 2;
console.log(numString[2]);
console.log(numString["2"]);
console.log(numString[number]);
console.log(numString.number);

// arrays with objects or objects with arrays are far more powerful than each individual ones.

const comments = [
    {username: 'jj', text: 'helo', votes: 10},
    {username: 'sk', text: 'melbino', votes: 5}
] //to access *melbino* : comments[1].text

