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
var highscore=0;
for(i=0;i<scores.length;i++){
    output="Bubble solution #"+i+" socore: "+scores[i];
    console.log(output);
    if(scores[i]>highscore){
        highscore=scores[i];
        //why not return highscore? 没有return,后面为什么可以直接用？
    }
}
console.log("Bubble tests: "+scores.length);
console.log("Highest bubble score: "+highscore);
//console.log("Solutions with highest score: #"+i);      36... where does it come? because i is local variable?

//empty Array
var bestSolutions=[];
for(var i=0;i<scores.length;i++){
     if(scores[i]==highscore){
         bestSolutions.push(i)
     }
    }
console.log("Solutions with the highest score: "+bestSolutions);

//if push does not exist???
var bestSolutions=[];
for(var i=0;i<scores.length;i++){
    if(scores[i]==highscore){
        console.log(bestSolutions[i]);
    }
    }

