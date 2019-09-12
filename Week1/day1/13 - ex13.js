// 13.Confirm the Ending

function confirmEnding(str, target) {
    let targetLength = target.length;
    let newStr = str.slice(-targetLength);
    return newStr === target;
}

//ES6

const confirmEndingES6 = (str, target) => str.slice(-target.length) === target;

console.log(confirmEnding("Open sesame", "same")); // true