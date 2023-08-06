const fs = require("fs");

const text1 = fs.readFileSync("./txt/start.txt", "utf-8");
const text2 = fs.readFileSync("./txt/second.txt", "utf-8");

console.log(text1);
console.log(text2);
