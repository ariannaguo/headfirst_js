/**
 * Created by Arianna on 7/21/14.
 */
var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25, .33, .31,
    .25, .29, .27, .22, .31, .25, .25, .33,
    .21, .25, .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25, .25, .25,
    .27, .25, .26, .29];
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

var cost = 100;
var index;
function GetMostCostEffectiveSolution(scores, costs, highSocore) {
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highSocore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    return index;
}
var mostCostEffective=GetMostCostEffectiveSolution(scores,costs,highScore);
console.log("Bubble Solution#"+mostCostEffective+" is the most effective");
