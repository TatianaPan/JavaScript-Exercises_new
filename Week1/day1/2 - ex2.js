// 2. Check for Array

const isArray = args => Array.isArray(args) ? true : false;

// Array.isArray() already checks if it is an array so no need of ternary operator. You can console log Array.isArray(args)


isArray('hello'); // => false
isArray(['hello']); // => true
isArray([2, {}, 10]); // => true
console.log(isArray({ a: 2 })); // => false