function findLCS(strings) {
    if (strings.length === 0) return "";
    if (strings.length === 1) return strings[0];

    let shortest = strings.reduce((a, b) => (a.length <= b.length ? a : b)); // Find the shortest string
    let lcs = "";
    // console.log(shortest);

    for (let i = 0; i < shortest.length; i++) {
        for (let j = i + 1; j <= shortest.length; j++) {
            let substr = shortest.substring(i, j);
            if (
                strings.every((str) => str.includes(substr)) &&
                substr.length > lcs.length
            ) {
                lcs = substr;
            }
        }
    }

    return lcs;
}

// Get input from cozzzmmand-line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
    console.log(args.length === 1 ? args[0] : ""); // If one string is given, return it; if none, return empty
} else {
    console.log(findLCS(args));
}
