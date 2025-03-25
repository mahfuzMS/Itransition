// index.js
const GameSetup = require("./GameSetup");
const Dice = require("./Dice");
const Game = require("./Game");
const TableRenderer = require("./TableRander");

async function main() {
    try {
        const args = process.argv.slice(2);
        const diceConfigs = GameSetup.parseDice(args);
        const diceList = diceConfigs.map((values) => new Dice(values));

        console.log("Starting the non-transitive dice game!");
        const game = new Game(diceList);
        await game.play();
    } catch (error) {
        console.error("Error:", error.message);
        console.log("Usage: node index.js 2,2,4,4,9,9 6,8,1,1,8,6 7,5,3,7,5,3");
    }
}

main();
