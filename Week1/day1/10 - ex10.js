// 10. Pig Latin

function translatePigLatin(str) {
    let arr = str.split('');
    let vowels = ['a', 'o', 'i', 'u', 'e'];
    for (let i = 0; i < arr.length; i++) {
        if (!vowels.includes(arr[i])) {
            arr.push(arr[i]);
            arr.shift();
        } else {
            arr.push('a', 'y');
        }
    }
    return arr.join('');
}


console.log(translatePigLatin("glove")); // oveglay
translatePigLatin("pig"); // igpay