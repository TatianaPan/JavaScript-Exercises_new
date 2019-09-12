//7. Cat and Mouse

// You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump three characters.


function isCaught(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'C' && 
        (str[i + 3] === 'm' || str[i + 2] === 'm' || str[i + 1] === 'm')) {
            return true;
        }
    }
    return false;
}

//ES6

const isCaughtES6 = str => str.indexOf('C') + 3 >= str.indexOf('m') ? true : false;

console.log(isCaught('C.....m')); // => false
console.log(isCaught('C..m'));// => true
console.log(isCaughtES6('..C..m')); // => true