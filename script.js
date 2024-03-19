function checkGuess() {
    var guessInput = document.getElementById("guessInput");
    var guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    var hint = document.getElementById("hint");
    var result = document.getElementById("result");

    if (guess < secretNumber) {
        hint.textContent = "Too low! Try again.";
    } else if (guess > secretNumber) {
        hint.textContent = "Too high! Try again.";
    } else {
        result.textContent = `Congratulations! You've guessed the number ${secretNumber} in ${attempts} attempts!`;
        hint.textContent = "";
        guessInput.disabled = true;
    }
}

var secretNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;
