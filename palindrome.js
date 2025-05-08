// Code by Eric

let continueChecking = false;

document.getElementById('startButton').addEventListener('click', function() {
    continueChecking = true; // Start the loop when the button is clicked

    while (continueChecking) {
        let input = prompt("Enter a string to check if it's a palindrome:");
        let strippedInput = input.replace(/\s/g, ''); // Remove spaces

        let isPalindrome = strippedInput.toLowerCase() === strippedInput.split('').reverse().join('').toLowerCase();

        if (isPalindrome) {
            alert("The string is a palindrome!");
        } else {
            alert("The string is not a palindrome.");
        }

        let choice = confirm("Do you want to enter another word?");
        if (!choice) {
            continueChecking = false; // Exit the loop if user chooses not to continue
        }
    }
});