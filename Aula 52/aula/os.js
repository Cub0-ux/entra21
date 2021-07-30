const { Console } = require("console");
const os = require ("os");

console.log(os.cpus());

console.log(parseInt(os.freeman() / 1024 / 1024));
console.log(parseInt(os.totalmen() / 1024 / 1024));
console.log(os.platform());
console.log(parseInt(os.uptime() / 60 /60))
Console.log(os.EOL);

