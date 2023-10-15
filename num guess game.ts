#! /usr/bin/env node
import inquirer from "inquirer";

console.log('Game: Lets play a game of guessing a number between 1 to 10 in 4 tries');
//let rannum = Math.random()//this functionwill through a random floating number butwe need 1 to 10 for this
const rannum = Math.floor(Math.random() * 10 + 1);


let actualnumber: number = rannum;
let numTries = 4;

async function startGame() {
    while (numTries > 0) {
        const answers = await inquirer.prompt([
            {
                name: "mineGuess",
                message: "Enter your number",
                type: "number",
            },
        ]);

        if (answers.mineGuess === actualnumber) {
            console.log("Wow! You guessed it right. Game ends.");
            break;
        } else {
            console.log("You guessed it wrong.");
        }
        if (answers.mineGuess>actualnumber){
            console.log("Think lower");
            
        }
        else{
            console.log("Think higher");
            
        }
        console.log(`You have ${numTries - 1} tries left.`);


        numTries--;
    }

    const playAgainAnswer = await inquirer.prompt([
        {
            name: "playAgain",
            message: "Do you want to play again?",
            type: "confirm",
        },
    ]);

    if (playAgainAnswer.playAgain) {
        numTries = 4;
        actualnumber = Math.floor(Math.random() * 10 + 1);
        startGame();
    } else {
        console.log("Thanks for playing!");
    }
}

startGame();
