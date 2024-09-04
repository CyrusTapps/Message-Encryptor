import { charMap } from './charMap.js';

function encryptMessage() {
    const messageElement = document.getElementById('message');
    const message = messageElement.value;
    const pin = parseInt(document.getElementById('pin').value);

    
    if (isNaN(pin) || pin.toString().length < 4) {
        alert('Please enter a valid PIN. It must only contain numbers and be at least 4 digits long');
        return;
    }

    // Display the original message
    document.getElementById('messageDisplay').textContent = message;

    const encryptedValues = [];
    for (const char of message) {
        const num = charMap.get(char);
        if (num !== undefined) {
            encryptedValues.push(num * pin);
        } else {
            encryptedValues.push(0); // Default for undefined characters
        }
    }

    // Display the encrypted values
    document.getElementById('result').textContent = JSON.stringify(encryptedValues);
}

// Ensure that encryptMessage is globally accessible
window.encryptMessage = encryptMessage;

//Event listener//
document.getElementById('encryptButton').addEventListener('click', encryptMessage);

//Null the values of PIN and the original message//
function wipeOut() {
    document.getElementById('pin').value = '';
    document.getElementById('message').value = '';
    document.getElementById('messageDisplay').textContent = '';
}
document.getElementById('wipeData').addEventListener('click', wipeOut);

