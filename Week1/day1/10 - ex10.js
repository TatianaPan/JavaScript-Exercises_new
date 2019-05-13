// 10. Pig Latin

function translatePigLatin(str) {
    let arr = str.split('');
    let vowels = ['a', 'o', 'i', 'u', 'e'];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!vowels.includes(arr[i])) {
            arr.push(arr[i]);
            arr.shift();
            i--;
            count++;
            if (count === arr.length) {
                break;
            }
        } else {
            arr.push('a', 'y');
            break;
        }
    }
    return arr.join('');
}


console.log(translatePigLatin("glove")); // oveglay
translatePigLatin("pig"); // igpay
console.log(translatePigLatin("krk")); // krk