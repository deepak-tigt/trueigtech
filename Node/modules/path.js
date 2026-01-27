const path = require("path");

console.log("File Path:", __filename);

console.log("Directory Path:", __dirname);

const joinedPath = path.join(__dirname, "data", "users.json");
console.log("Joined Path:", joinedPath);

console.log("File Extension:", path.extname(joinedPath));