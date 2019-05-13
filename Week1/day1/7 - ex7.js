//7. Cat and Mouse

function isCaught(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'C' && str[i + 3] === 'm') {
            return true;
        } 
    }
    return false;
}

console.log(isCaught('C.....m')); // => false
console.log(isCaught('C..m'));// => true
console.log(isCaught('..C..m')); // => true