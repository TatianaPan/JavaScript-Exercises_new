// 5. Convert Number to Reversed Array of Digits

// function convert(numb) {
//     let arr = numb.toString().split('').sort().reverse();
//     return arr;
// }

const convert = numb => numb.toString().split('').sort().reverse();

console.log(convert(429563)) // => [9, 6, 5, 4, 3, 2]
console.log(convert(324)) // => [4, 3, 2]