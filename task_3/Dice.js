// Dice.js
class Dice {
    constructor(values) {
        this.values = values;
        this.sides = values.length;
    }

    roll(index) {
        return this.values[index];
    }
}

module.exports = Dice;
