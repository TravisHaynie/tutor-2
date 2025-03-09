const names = ['travis', 'marcie', 'don'];

names.includes('travis')

//create a function called includes that takes in the arr and it is going to return a boolean

function includes(arr, str) {

    for (value of arr) {
      
        if (value === str) {
            return true;
        } else {
            return false;
        }
    }

   

}

console.log(includes(names, 'peter')); // false
console.log(includes(names, 'travis')); // true
console.log(includes(names, 'marcie')); // true
console.log(includes(names, 'mark')) //false