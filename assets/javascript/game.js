
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var guessedLetters = [];
var userGuess = document.onkeyup;
var compGuess = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function (event) {

    userGuess = event.key;
    guessedLetters.push(userGuess);

    if (compGuess == userGuess) {
        wins++;
        remainingGuesses = 10;
        guessedLetters = [];
    }

    if (compGuess != userGuess) {
        remainingGuesses--;
        console.log(remainingGuesses);

    }

    if (remainingGuesses == 0) {
        losses++;
        remainingGuesses = 10;
        guessedLetters = [];
    }
    // Changing HTML text
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
};
