/**
 * Created by Arianna on 7/18/14.
 */
var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];
var output;
var highScore = 0;
for (i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
        highScore = scores[i];
        //why not return highScore? only function has "return"
    }
}
console.log("Bubble tests: " + scores.length);
console.log("Highest bubble score: " + highScore);
//console.log("Solutions with highest score: #"+i);  i=36... only function has local variable, here i is a global variable; 循环的终点其实是scores.length

//empty Array
var bestSolutions = [];
for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions.push(i)
    }
}
console.log("Solutions with the highest score: " + bestSolutions);

//if push does not exist?
var bestSolutions = [];
for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions[bestSolutions.length] = i;
        //why not bestSolutions[bestSolutions.length-1] = i？this means the last item in array, but new item in array should bebestSolutions[bestSolutions.length]...
    }
}
console.log("Solutions with the highest score: " + bestSolutions);

//=====================Rewrite with function========================
var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

function printAndGetHighScore(scores) {
    var output;
    var highScore = 0;
    for (i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

var highScore = printAndGetHighScore(scores);
// the highScore here is a new global variable...has nothing to do with the upper highScore.

console.log("Bubble tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

function getResults(scores, score) {
    var solutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == score) {
            solutions.push(i);
        }
    }
    return solutions;
}
var bestSolutions = getResults(scores, highScore); //this highScore is the result of printAndGetHighScore(scores);
console.log("Solutions with the highest score: " + bestSolutions);