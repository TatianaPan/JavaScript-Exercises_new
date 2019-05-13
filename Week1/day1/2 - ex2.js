// 2. Check for Array

const isArray = args => Array.isArray(args) ? true : false;

isArray('hello'); // => false
isArray(['hello']); // => true
isArray([2, {}, 10]); // => true
console.log(isArray({ a: 2 })); // => false