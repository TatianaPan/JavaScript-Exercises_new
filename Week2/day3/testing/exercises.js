


const isString = function(str) {
    return typeof str === 'string';
}


const isArray = args => Array.isArray(args); 


// 3. Check for Types in Array

function areSameType(args) {
    if (args.length === 0) {
        return true;
    }
    for (let i = 0; i < args.length; i++) {
        if (Array.isArray(args[0])) {
            if (!Array.isArray(args[1])) {
                return false;
            } else {
                return true;
            }
        } else {
            if (typeof args[0] !== typeof args[1]) {
                return false;
            } else {
                return true;
            }
        }
    }
}

//4. Sort and Remove Duplicated Characters

function longest(a, b) {
    let c = [];
    let arr1 = a.toLowerCase().split('');
    let arr2 = b.toLowerCase().split('');
    let arr3 = (arr1.concat(arr2)).sort();
    for (let i = 0; i < arr3.length; i++) {
        if (c.includes(arr3[i]) !== true) {
            c.push(arr3[i]);
        }
    }
    return c.join('');
}

// 5. Convert Number to Reversed Array of Digits

// function convert(numb) {
//     let arr = numb.toString().split('').sort().reverse();
//     return arr;
// }

const convert = numb => numb.toString().split('').sort().reverse();

console.log(convert(429563)) // => [9, 6, 5, 4, 3, 2]
console.log(convert(324)) // => [4, 3, 2]



module.exports = {
    isString,
    isArray,
    areSameType,
    longest,
    convert,
};

