// Game.js
const FairRandom = require("./FairRandom");

class Game {
    constructor(diceList) {
        this.diceList = diceList;
    }

    async determineFirstMove() {
        const { randomNumber, hmac, secretKey } = FairRandom.fairGenerate(2);
        console.log(`\nI generated a random number (0 or 1) - HMAC: ${hmac}`);
        const userChoice = await this.getUserInput("Your choice (0/1): ");

        if (parseInt(userChoice) === randomNumber) {
            console.log(`You guessed correctly! You select the dice first. (KEY: ${secretKey})`);
            return "user";
        } else {
            console.log(`I select the dice first. (KEY: ${secretKey})`);
            return "computer";
        }
    }

    async play() {
        const firstMover = await this.determineFirstMove();
        console.log("\nChoose your dice:");

        this.diceList.forEach((dice, index) => {
            console.log(`${index} - ${dice.values.join(",")}`);
        });

        const userDiceIndex = parseInt(await this.getUserInput("Your choice: "));
        const userDice = this.diceList[userDiceIndex];

        console.log("\nNow it's my turn to choose.");
        const computerDiceIndex = (userDiceIndex + 1) % this.diceList.length;
        const computerDice = this.diceList[computerDiceIndex];

        console.log(`I chose the dice: ${computerDice.values.join(",")}`);

        // Perform Rolls
        await this.performRoll(userDice, "user");
        await this.performRoll(computerDice, "computer");

        // Decide Winner
    }

    async performRoll(dice, player) {
        console.log(`\n${player === "user" ? "Your" : "My"} turn to roll.`);
        const { randomNumber, hmac, secretKey } = FairRandom.fairGenerate(dice.sides);
        console.log(`HMAC: ${hmac}`);

        const userModChoice = parseInt(await this.getUserInput("Enter your number (modulo result): "));
        const result = (randomNumber + userModChoice) % dice.sides;

        console.log(`${player === "user" ? "Your" : "My"} roll is: ${dice.roll(result)} (KEY: ${secretKey})`);
    }

    getUserInput(prompt) {
        return new Promise(resolve => {
            process.stdout.write(prompt);
            process.stdin.once("data", data => resolve(data.toString().trim()));
        });
    }
}

module.exports = Game;
