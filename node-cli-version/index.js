const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to my node.js version of Jokenpo!");
console.log("Type which option you want to select");
var playAgain = () => {
    rl.question('Play again? (y/n) ', answer => {
        const options = {
            y: 1,
            n: 2,
        };
        const userChoice = options[answer];
        if(userChoice === 1) {
            recursiveQuestion();
        } else {
            console.log("Bye!");
            rl.close();
        }
    })
}

var recursiveQuestion = () => {
    rl.question('Select your option: rock, paper or scissor? ', answer => {
    const options = {
        rock: 1,
        paper: 2,
        scissor: 3
    };
    const userChoice = options[answer];
    const aiChoice = Math.round(Math.random() * 2) + 1;
    
    console.log("AI's choice: ", Object.keys(options).find(key => options[key] === aiChoice));
    if(userChoice) {
        if (userChoice === 1 && aiChoice === 3) {
            console.log('You win!');
        } else if (userChoice === 1 && aiChoice === 2) {
            console.log('You lose!');
        } else if (userChoice === 1 && aiChoice === 1) {
            console.log('It\'s a tie!');
        }

        if (userChoice === 2 && aiChoice === 1) {
            console.log('You win!');
        } else if (userChoice === 2 && aiChoice === 3) {
            console.log('You lose!');
        } else if (userChoice === 2 && aiChoice === 2) {
            console.log('It\'s a tie!');
        }

        if (userChoice === 3 && aiChoice === 2) {
            console.log('You win!');
        } else if (userChoice === 3 && aiChoice === 1) {
            console.log('You lose!');
        } else if (userChoice === 3 && aiChoice === 3) {
            console.log('It\'s a tie!');
        }
        playAgain();
    } else {
        console.log("Please type a valid option");
        recursiveQuestion();
    }
});
}
recursiveQuestion();

exports.recursiveQuestion = recursiveQuestion();