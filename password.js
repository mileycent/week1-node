const generator = require('generate-password');

function generatePassword() {
    let password = generator.generate ({
        length: 20,
        numbers: true,
        symbols: true,
    });
    return password
}

console.log(generatePassword());

