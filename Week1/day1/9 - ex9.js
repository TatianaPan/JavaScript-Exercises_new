// 9. Exponentiation


function exp(b, n) {
    if (n === 0) {
        return 1;
    } else {
        return b * exp(b, n - 1);
    }
}

//ES6

const expES6 = (base, num) => num === 0 ? 1 : base * exp(base, num - 1);

console.log(exp(5, 3)); // => 125
exp(2, 4); // => 16
exp(5, 1); // => 5
expES6(6, 0); // => 1
