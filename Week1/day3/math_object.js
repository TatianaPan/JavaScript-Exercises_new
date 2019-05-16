const myMath = Object.create(Math);


myMath.randomInt = function(...max) {
    let randomNum = 0;
    if (max.length === 0) {
        randomNum = myMath.random();
        return (myMath.random());
    } else if (max.length === 2) {
        const minNum = myMath.min(max[0], max[1]);
        const maxNum = myMath.max(max[0], max[1]); 
        randomNum = myMath.floor(myMath.random() * (maxNum - minNum + 1)) + minNum;
    } else {
        randomNum = myMath.floor(myMath.random() * (max[0] + 1));
    } 
    return randomNum;
}



//console.log(myMath.randomInt(5)); // 3 for example
 //console.log(myMath.randomInt(10)); // 10 for example
console.log(myMath.randomInt()); // some random number between 0 and 1
// console.log(myMath.round(0.5));
// console.log(myMath.randomInt(10, -4)); // -3 for example

//console.log(Math.floor(Math.random() * 100))

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
//   }