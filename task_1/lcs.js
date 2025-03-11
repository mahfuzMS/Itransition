function LCS(strings) {
    if (strings.length === 0) return "";
    if (strings.length === 1) return strings[0];

    let SmallestString = strings.reduce((a, b) =>
        a.length <= b.length ? a : b
    );
    let lcs = "";

    for (let i = 0; i < SmallestString.length; i++) {
        for (let j = i + 1; j <= SmallestString.length; j++) {
            let substr = SmallestString.substring(i, j);
            if (
                strings.every((s) => s.includes(substr)) &&
                substr.length > lcs.length
            ) {
                lcs = substr;
            }
        }
    }
    return lcs;
}

const args = process.argv.slice(2);
if (args.length < 2) {
    console.log(args.length === 1 ? args[0] : "");
} else {
    console.log(LCS(args));
}
