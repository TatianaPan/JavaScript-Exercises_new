function objectKeys(obj){
    let keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
}


const obj = {
    'keyCode': 'JS',
    2: 'Program Paradigm',
    Target: 'Browser',
};
  
//console.log(objectKeys(obj)); // ['2', 'keyCode', 'Target']
