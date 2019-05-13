// 11. Search and Replace

function myReplace(sentence, word, newWord) {
    let arr = sentence.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            let item = arr[i];
            if (item[0] === item[0].toUpperCase()) {
                newWord = newWord[0].toUpperCase() + newWord.slice(1);
            }
            arr.splice(i, 1, newWord);
        }
    }
    return arr.join(' ')

}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // "He is Sitting on the couch"