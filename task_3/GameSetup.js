// GameSetup.js
class GameSetup {
    static parseDice(args) {
        if (args.length < 3) {
            throw new Error("You must provide at least 3 dice configurations.");
        }
        return args.map(arg => {
            const values = arg.split(",").map(Number);
            if (values.some(isNaN)) {
                throw new Error("Invalid dice format. Use comma-separated integers.");
            }
            return values;
        });
    }
}

module.exports = GameSetup;
