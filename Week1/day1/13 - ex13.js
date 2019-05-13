// 13.Confirm the Ending

function confirmEnding(str, target) {
    let num = target.length;
    let subStr = str.substr(-num);
    if (subStr === target) {
        return true;
    } else {
        return false;
    }
}

// let str = "Open sesame";
// let target = "same";
// const confirmEnding = (str, target) => {str.substr(-target.length) === target ? true : false};

console.log(confirmEnding("Open sesame", "same")); // true