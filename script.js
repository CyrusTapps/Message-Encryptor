import { charMap } from './charMap.js'; //changed from object to map to iterate to reverse key:value to value:key//

function encryptMessage() {
    const messageElement = document.getElementById('message');
    const message = messageElement.value;
    const pin = parseInt(document.getElementById('pin').value);

    
    if (isNaN(pin) || pin.toString().length < 4) { //can't evaluate length of a number; evaluates as a string//
        alert('Please enter a valid PIN. It must only contain numbers and be at least 4 digits long');
        return;
    }

    // display the original message//
    document.getElementById('messageDisplay').textContent = message;

    const encryptedValues = [];
    for (const char of message) {
        const num = charMap.get(char);
        if (num !== undefined) {
            encryptedValues.push(num * pin);
        } else {
            encryptedValues.push(0); // default for undefined characters//
        }
    }

    // display the encrypted values//
    document.getElementById('result').textContent = JSON.stringify(encryptedValues);
}

// make encryptMessage global scope temporarily; See wipeOut() below to clear//
window.encryptMessage = encryptMessage;

//event listener for encrypt button//
document.getElementById('encryptButton').addEventListener('click', encryptMessage);

//null the values of PIN and the original message//
function wipeOut() {
    document.getElementById('pin').value = '';
    document.getElementById('message').value = '';
    document.getElementById('messageDisplay').textContent = '';
}

//event listener for wiping the data after deriving encrypted values//
document.getElementById('wipeData').addEventListener('click', wipeOut);

