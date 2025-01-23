const process = require('process');

const validOptions = ['help', 'length'];
const arguments = process.argv.slice(2);
const userChoice = arguments[0];
const lengthChoice = arguments[1]

if (!validOptions.includes(userChoice)) {
    console.log('--help for usage instructions');
    return
}
function makePassword(length) { // Creates the password based on length input
    const letters ='qwertyuiopalskdjfhgmznxbcv'
    let password = ''
    for (let i = 0; i < length; i++) {
        password += letters[Math.floor(Math.random() * letters.length)]
    } 
    return password
}


function determineInput(userChoice) { // Determines the users input and produces the proper response
    
    if (userChoice === 'help') {
        console.log(`To use application type either of these inputs:
        --length <number> choose the length of the password
        --help   show help message`)
    }
    if (userChoice === 'length') {

        const length = (!lengthChoice || isNaN(parseInt(lengthChoice)) || parseInt(lengthChoice) <= 0)
            ? 8 // Default to 8 if no valid length is provided
            : parseInt(lengthChoice);
        
        const password = makePassword(length)
        console.log(`password: ${password}`)
    }
}

determineInput(userChoice)