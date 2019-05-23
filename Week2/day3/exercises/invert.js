function invert(obj) {
    let newObj = {};
    for (let key in obj) {
        let newKey = obj[key];
        newObj[newKey] = key;
    }
    return newObj;
}

//console.log(invert({ a: 3, b: 2 })); // { 2: 'b', 3: 'a' }