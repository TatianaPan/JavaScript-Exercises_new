// 14. Diff Two Arrays

function diffArray(arr1, arr2) {
    let arr3 = [];
    for (let word of arr1) {
        if (!arr2.includes(word)) {
            arr3.push(word);
        } 
    }

    for (let item of arr2) {
        if (!arr1.includes(item)) {
            arr3.push(item);
        }
    }
    return arr3;
}

//ES6

const diffArrayES6 = (arr1, arr2) => {
    return [...arr1, ...arr2].filter(item => (!arr1.includes(item) || !arr2.includes(item)));
}

console.log(diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )); // [ 'pink wool', 'diorite' ]