let helperFile = require("./commands/help");
let viewFile = require("./commands/view");
let organizerFile = require("./commands/organize");

let input = process.argv.slice(2);

let command = input[0];

switch (command) {
  case "view":
    viewFile.viewer(input[1], input[2]);
    break;
  case "organize":
    organizerFile.organizer();
    break;
  case "help":
    helperFile.helper();
    break;
  default:
    console.log("wrong command type help for all the commands");
    break;
}
