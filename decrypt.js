import { charMap } from "./charMap.js";

const reversedCharMap = new Map();
for (const [key, value] of charMap) {
    reversedCharMap.set(value, key);
}

function decryptMessage() {
    const encryptedInputElement = document.getElementById('encryptedInput');
    const encryptedValues = encryptedInputElement.value.split(',').map(num => parseInt(num.trim()));
    const pin = parseInt(document.getElementById('pinDecrypt').value);

    if (isNaN(pin) || pin.toString().length < 4) {  //can't evaluate length of a number; evaluates as a string//
        alert('Please enter a valid PIN.');
        return;
    }

    // Check if the encrypted values are valid//
    if (encryptedValues.some(num => isNaN(num))) {
        alert('Please enter valid encrypted values.');
        return;
    }

    const decryptedMessage = encryptedValues.map(num => {
        const originalNum = num / pin;
        return reversedCharMap.get(originalNum) || '?'; // Default to '?' for unknown characters
    }).join('');

    // display the decrypted message//
    document.getElementById('decryptedDisplay').textContent = decryptedMessage;
}

// make the decryptMessage global; No wipeOut() on the decryption side//
window.decryptMessage = decryptMessage;

//event listener for decrypt button to run function//
document.getElementById('decryptButton').addEventListener('click', decryptMessage);