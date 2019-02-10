//creating an array 
var Letters = ["r", "u", "s"]

// this array will have  what the user guesses
var guessedLetters = [];

// this variable randomly assign on the three letters 
var letterToGuess = null;

// this is countown 
var guessesLeft = 10;


//count for the win /loss

var wins = 0;
var loss = 0;

// here we will have three function to  updateGuesses , updateGuessesLeft and updateGuessesSoFar

var updateGuessesLeft = function () {
    // selecting querySelector  from html
    document.querySelector("#guessesleft").innerHTML = guessesLeft;
}
// you will get random letter to guess from the array and assign it based on random generator we are only concnerned about the three letter that are in our array
var updateGuesses = function () {
    letterToGuess = Letters[Math.floor(Math.random() * Letters.length)]
}

// we will take the guess of the user and display it as letters  which will be seperated by commas 
var updateGuessesSoFar = function () {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(",");
}

// Function will be called when we reset everything
var reset = function () {
    guessesLeft = 10;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};
// This function will capture the keyboard clicks.
document.onkeydown = function (event) {
    // It's going to reduce the guesses by one
    guessesLeft--;

    // Lowercase the letter
    var letter = String.fromCharCode(event.which).toLowerCase();

    // Then add the guess to the guessedLetters array
    guessedLetters.push(letter);

    // Then its going to run the update functions
    updateGuessesLeft();
    updateGuessesSoFar();


    // We'll check if there's a match.
    if (letter === letterToGuess) {

        // If there is then we win and we'll update the HTML to display the win.
        wins++;
        document.querySelector("#wins").innerHTML = wins;

        // Then we'll reset the game
        reset();
    }

    // If we are out of guesses...
    if (guessesLeft === 0) {

        // Then we will loss and we'll update the HTML to display the loss.
        losses++;
        document.querySelector("#losses").innerHTML = losses;

        // Then we'll call the reset.
        reset();
    }
}