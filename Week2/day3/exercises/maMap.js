function myMap(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]));
    }
    return newArr;
}

function multiplyByThree(x) {
    return x * 3;
}

let array = [1, 2, 3, 4];
//console.log(myMap(array, multiplyByThree));