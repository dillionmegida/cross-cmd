const os = require("os");
const commands = require("./commands");
const fs = require("fs");
const path = require("path");

// incase the commands file does not exist
let allCommandsFile = path.join(__dirname, "./allcommands.md");
if (!fs.writeFileSync(allCommandsFile)) generateCommandsFile();

const platform = os.platform();

// a command called 'generateCommandsFile' will be passed in package.json
// to generate the command Files
if (process.argv[2] === "generateCommandsFile") generateCommandsFile();

function generateCommandsFile() {
	let content = "# cross-cmd ✨\n\n## All commands";

	for (let command in commands) {
		content += `\n\n### '${command}'`;
		for (let platform in commands[command]) {
			content += `\n\n- ${platform}: '${commands[command][platform]}'`;
		}
	}

	fs.writeFileSync(allCommandsFile, content);
}

/**
 *  Get the CLI command for your operating system
 * @param {String=} command
 * @returns {string} command for your os
 */
module.exports = function (command) {
	if (commands[command] === undefined) return undefined;

	return commands[command][platform];
};
