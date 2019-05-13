// 1. Am I a String?

// function isString(args) {
//     if (typeof args === 'string') {
//         return true;
//     } else {
//         return false;
//     }
    
// }

const isString = args => typeof args === 'string' ? true : false;

console.log(isString('hello')); // => true
isString(['hello']); // => false
isString('this is a long sentence'); // => true
isString({ a: 2 }); // => false