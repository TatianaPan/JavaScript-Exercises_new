// 12. Translate to English

function toEnglish(str) {
    let arr = str.split(' ');
    let result = [];
    for (let item of arr) {
        item = parseInt(item, 2);
        item = String.fromCharCode(item);
        result.push(item);
    }
    return result.join(''); // how does it keep spaces between words?
}

console.log(
    toEnglish(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
    )
    ); // Aren't bonfires fun!?