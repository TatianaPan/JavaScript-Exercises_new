function merge(...obj) {
    
    const newObj = {};

    for (let item in obj) {
        for (let key in item) {
            if ()
        }
    }
    // return newObj;
}

console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 })); // { a: 3, b: 2, c: 4 }
console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 }, { e: 8, c: 5})); // { a: 3, b: 2, c: 4, e: 8 }
