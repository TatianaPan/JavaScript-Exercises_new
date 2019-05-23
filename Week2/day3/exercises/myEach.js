function myEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

function multiplyByTwo(x) {
    return x * 2;
}

let array = [1, 2, 3, 4];
//console.log(myEach(array, multiplyByTwo))