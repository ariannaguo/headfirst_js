/**
 * Created by Arianna on 7/30/14.
 */
var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

//view.displayHit("00");
//view.displayMiss("34");
//
//view.displayMessage("Tap tap, is this thing on?")

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [
        {locations: ["06", "16", "26"], hits: ["", "", ""]},
        {locations: ["24", "34", "44"], hits: ["", "", ""]},
        {locations: ["10", "11", "12"], hits: ["", "", ""]}
    ],
    fire: function (guess) {
        for (i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
//            var locations=ship.locations;
//            var index=locations.indexOf(guess);
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");//not very clear why isSunk should be placed here.
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },
    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};

//model.fire("53");
//
//model.fire("06");
//model.fire("16");
//model.fire("26");
//
//model.fire("34");
//model.fire("24");
//model.fire("44");
//
//model.fire("12");
//model.fire("11");
//model.fire("10");

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
    } else {
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert("Oops, that's off the board!");
            //1.check if guess is entered and if guess is composed of 2 characters.
            //2.convert the first character into number.
            //3.check if both are numbers and if between 0-6.
        } else {
            return row + column;
        }
    }
    return null;
}

var controller = {
    guesses: 0,
    processGuess: function (guess) {
        var location = parseGuess(guess);
        if (location) {   //what does this mean?
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }
        }
    }
};

//controller.processGuess("A0");
//
//controller.processGuess("A6");
//controller.processGuess("B6");
//controller.processGuess("C6");
//
//controller.processGuess("C4");
//controller.processGuess("D4");
//controller.processGuess("E4");
//
//controller.processGuess("B0");
//controller.processGuess("B1");
//controller.processGuess("B2");

function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
}
//    var guessInput = document.getElementById("guessInput");
//    guessInput.onkeypress = handleKeyPress;
//}
//function handleKeyPress(e){
//    var fireButton=document.getElementById("fireButton");
//    if (e.keyCode===13){
//        fireButton.click();
//        return false;
//    }
//}
function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.processGuess(guess);

    guessInput.value = ""; //clean input
}

window.onload =init;