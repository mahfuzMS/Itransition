// ProbabilityCalculator.js
class ProbabilityCalculator {
    static calculateWinProbability(diceA, diceB) {
        let wins = 0, ties = 0, total = diceA.sides * diceB.sides;

        for (let a of diceA.values) {
            for (let b of diceB.values) {
                if (a > b) wins++;
                if (a === b) ties++;
            }
        }

        return ((wins + 0.5 * ties) / total).toFixed(4);
    }
}

module.exports = ProbabilityCalculator;
