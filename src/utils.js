const os = require("os");
const commands = require("./commands");
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

// incase the commands file does not exist
let allCommandsFile = path.join(__dirname, "./allcommands.md");
if (!fs.writeFileSync(allCommandsFile)) generateCommandsFile();

const platform = os.platform();

/**
 * Generate commands file
 */
function generateCommandsFile() {
	let content = "# cross-cmd ✨\n\n## All commands";

	commands.forEach((command) => {
		content += `\n\n### ${command.desc}\n`;
		for (let key in command) {
			if (key !== "desc") content += `\n- ${key}: '${command[key]}'`;
		}
	});

	fs.writeFileSync(allCommandsFile, content);
}

/**
 * Show command properties on terminal if it exists
 * @param {String=} command
 */
function showCommandHelp(command) {
	const commandObject = commands.find((object) => {
		for (let key in object) {
			if (object[key] === command) return true;
			continue;
		}
	});

	if (commandObject === undefined)
		return console.log("Command does not exist : (");

	let message = "..............";

	for (let key in commandObject) {
		message += `\n${key}: ${commandObject[key]}`;
	}

	message += "\n..............";

	console.log(message);
}

/**
 *  Get the CLI command for the operating system this package is run on
 * @param {String=} command
 * @returns {string} command for your os if it exists
 */
function getPlatformCommand(command) {
	const commandObject = commands.find((object) => {
		for (let key in object) {
			if (object[key] === command) return true;
			continue;
		}
	});

	if (commandObject === undefined)
		throw new Error(`'${command}' command does not exist`);

	return commandObject[platform];
}

/**
 * Execute command on terminal
 * @param {String=} command
 * @param {Array=} options
 */
const execCommand = function (command, options = []) {
	let cliCommand = getPlatformCommand(command);
	let commandToBeUsed = cliCommand;

	// check if command has spaces
	if (/\s/.test(cliCommand)) {
		commandToBeUsed = cliCommand.split(" ")[0];
		// push the rest of the command to the beginning of the options array
		const remainingCommands = cliCommand.split(" ").slice(1);
		options = remainingCommands.concat(options);
	}

	spawnSync(commandToBeUsed, options, {
		stdio: "inherit",
	});

	process.exit(0);
};

module.exports = { generateCommandsFile, execCommand, showCommandHelp };
