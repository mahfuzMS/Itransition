// TableRenderer.js
const Table = require("cli-table3");

class TableRenderer {
    static render(diceList) {
        const headers = ["User Dice v", ...diceList.map(d => d.values.join(","))];
        const table = new Table({ head: headers });

        diceList.forEach((diceA, i) => {
            const row = [diceA.values.join(",")];

            diceList.forEach((diceB, j) => {
                row.push(i === j ? "-" : ProbabilityCalculator.calculateWinProbability(diceA, diceB));
            });

            table.push(row);
        });

        console.log("\nProbability of winning for each dice pair:");
        console.log(table.toString());
    }
}

module.exports = TableRenderer;
