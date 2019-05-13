// 9. Exponentiation

// function exp(b, n) {
//     let i = 1;
//     let result = 1;
//     while (i <= n) {
//         result *= b;
//         i++;
//     }
//     return result;
// }

function exp(b, n) {
    if (n === 0) {
        return 1;
    } else {
        return b * exp(b, n - 1);
    }
}

console.log(exp(5, 3)); // => 125
exp(2, 4); // => 16
exp(5, 1); // => 5
exp(6, 0); // => 1
