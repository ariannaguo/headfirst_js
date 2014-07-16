/**
 * Created by Arianna on 7/15/14.
 */
var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

//loop:
// theoretically "hits < 3" is OK here.
// but generally, which one is better for others to read?
// "hits < 3" vs. "isSunk"
// here I also use Reformat Code command to reformat your code.
while (isSunk == false) //but why not write hits<3?
{
    guess = prompt("Ready, aim, fire! (enter a number 0-6)");
    if (guess < 0 || guess > 6) {
        alert("please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("HIT!");
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        }
        else {
            alert("MISS!");
        }
    }
}

//post-game report:
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3 / guesses);
alert(stats);



