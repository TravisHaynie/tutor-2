const names = ['travis', 'marcie', 'don', 'carl', 'marcella', 'jack', 'tim'];
const games = ['apex legends', 'raindow six seige', 'LoL', 'Elden Ring'];
const movies = ['2012', 'avengers', 'black panther', 'IT', 'scream'];



//create a function called includes that takes in the arr and it is going to return a boolean

function includes(arr, str) {
 
    for (value of arr) {
        if (value === str) {
            return true;
        } 
    }
    return false;
   
}

console.log(includes(names, 'travis')); // true
console.log(includes(names, 'pops')); // false
console.log(includes(names, 'lark')); // false
console.log(includes(names, 'marcella')); //true
console.log(includes(names, 'tim')); //true

console.log(includes(games, 'apex legends')); // true
console.log(includes(games, 'raindow six seige')); // true
console.log(includes(games, 'mario cart')); // false
console.log(includes(games, 'battlefield')); //false
console.log(includes(games, 'LoL')); //true

console.log(includes(movies, 'cars')); // false
console.log(includes(movies, 'minons')); // false
console.log(includes(movies, 'shrek')); // false
console.log(includes(movies, 'jaws')); //false
console.log(includes(movies, 'king arthur')); //false


