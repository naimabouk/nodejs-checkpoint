const fs = require("fs");

//Create file called wlcome.txt then writing Hello Node to it.
fs.appendFile("welcome.txt", "Hello Node");

//Reads and console.log data from hello.txt
const data = fs.readFileSync("hello.txt");
//Parsing it to string and outputting it to the conole.
console.log(data.toString());
