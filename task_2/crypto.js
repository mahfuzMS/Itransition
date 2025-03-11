const fs = require("fs");
const path = require("path");
const { createHash } = require("crypto");
const AdmZip = require("adm-zip");

// Define your email (in lowercase)
const email = "mahfuzhasan6233@gmail.com".toLowerCase();

// Step 1: Extract ZIP File
const zipPath = "task2.zip";
const extractPath = "extracted_files";

const zip = new AdmZip(zipPath);
zip.extractAllTo(extractPath, true);

// Step 2: Read all files in the extracted folder
const files = fs.readdirSync(extractPath);

// Step 3: Compute SHA3-256 for each file
const hashes = files.map((file) => {
    const filePath = path.join(extractPath, file);
    const fileBuffer = fs.readFileSync(filePath);

    const hash = createHash("sha3-256").update(fileBuffer).digest("hex");
    return hash;
});

// Step 4: Sort hashes in descending order
hashes.sort((a, b) => (a > b ? -1 : 1));

// Step 5: Concatenate sorted hashes
const concatenatedHashes = hashes.join("");

// Step 6: Append email and compute SHA3-256 of final string
const finalString = concatenatedHashes + email;
const finalHash = createHash("sha3-256").update(finalString).digest("hex");

// Step 7: Output the final hash
console.log(finalHash);
