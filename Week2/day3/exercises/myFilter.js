function myFilter(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function greaterThanTwo(x) {
    if (x > 2) {
        return true;
    } else {
        return false;
    }
}

let array = [1, 2, 3, 4, 5, 6, 7]
//console.log(myFilter(array, greaterThanTwo));