const chalk = require("chalk");
const log = console.log;

const moment = require("moment");
let day = moment().format("LLLL")
console.log("It is " + chalk.blue(day));

let dayOfYear = moment().format("DDDo")
console.log("It is the " + chalk.magenta(dayOfYear) + " day of year");

let seconds = moment().format("s")
console.log("It is " + chalk.whiteBright(seconds) + " seconds into the day");

let daylight = moment().isDST()
if (daylight === true){
	console.log("It " + chalk.yellowBright("is") + " daylight savings time");
}
else if (daylight === false){
	console.log(false);
}

let leap = moment().isLeapYear();
if (leap === true){
	console.log("It " + chalk.redBright("is") + " a leap year");
}
else if (leap === false){
	console.log("It " + chalk.redBright("is not") + " a leap year");
}


