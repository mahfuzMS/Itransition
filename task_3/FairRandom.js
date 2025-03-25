// FairRandom.js
const crypto = require("crypto");

class FairRandom {
    static generateRandomNumber(range) {
        return crypto.randomInt(range);
    }

    static generateHMAC(secret, number) {
        return crypto.createHmac("sha3-256", secret).update(number.toString()).digest("hex");
    }

    static fairGenerate(range) {
        const secretKey = crypto.randomBytes(32).toString("hex");
        const randomNumber = this.generateRandomNumber(range);
        const hmac = this.generateHMAC(secretKey, randomNumber);
        return { randomNumber, hmac, secretKey };
    }
}

module.exports = FairRandom;
