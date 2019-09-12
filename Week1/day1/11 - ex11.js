// 11. Search and Replace
/*You will create a program that takes a sentence, then search for a word in it*/ 


function myReplace(str, word1, word2) {
    if (str.includes(word1)) {
        if (word1[0] === word1[0].toUpperCase()) {
            word2 = word2[0].toUpperCase() + word2.substring(1);
           
        } 
        let newStr = str.replace(word1, word2)
        
        return newStr;   
    }
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // "He is Sitting on the couch"