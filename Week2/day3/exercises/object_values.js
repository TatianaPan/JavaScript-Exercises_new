function objectValues(obj){
    let values = [];
    for (let value in obj) {
        values.push(obj[value]);
    }
    return values;
}

const obj = {
    'keyCode': 'JS',
    2: 'Program Paradigm',
    Target: 'Browser',
};
  
//console.log(objectValues(obj)); // ['Program Paradigm', 'JS', 'Browser']