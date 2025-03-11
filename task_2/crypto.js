const cryptop = require("crypto");

const randomnumber = cryptop.randomBytes(10).toString("hex");
// console.log(randomnumber);

const hasValue = cryptop.createHash("sha256").update("Suraiya").digest("hex");
console.log(hasValue);
