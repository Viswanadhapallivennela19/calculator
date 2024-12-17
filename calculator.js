function appendValue(value) {
    playSound()
    document.getElementById('result').value += value;
}

function clearResult() {
    playSound()
    document.getElementById('result').value = '';
}
function deleteLast() {
    playSound()
    const resultField = document.getElementById('result');
    if (resultField.value.length > 1) {
        resultField.value = resultField.value.slice(0, -1);  // Remove last character
    } else {
        resultField.value = '';  // Reset to '0' if there's only one character left
    }
}

// Factorial function
function fact() {
    let n = eval(document.getElementById('result').value);

    if (isNaN(n) || n < 0) {
        document.getElementById('result').value = 'Error'; // Show error for invalid input
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    document.getElementById('result').value = factorial;
}
// Trigonometric Functions



function calculate() {
    try {
        playSound()
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

// Function to play sound
function playSound() {
    const clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0; // Reset to the start in case of quick clicks
    clickSound.play();
}