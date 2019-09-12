// 5. Convert Number to Reversed Array of Digits


function convert(num) {
    const arr = num.toString().split('');
    
    const result = arr.map(function(x) {
        return parseInt(x, 10)
    }).sort().reverse();
    return result;
}

//ES6 

const convertES6 = num => num.toString().split('').map(x => parseInt(x, 10)).sort().reverse();

console.log(convert(429563)) // => [9, 6, 5, 4, 3, 2]
console.log(convertES6(324)) // => [4, 3, 2]