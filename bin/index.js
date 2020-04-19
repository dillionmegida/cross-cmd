#!/usr/bin/env node

const {
	execCommand,
	generateCommandsFile,
	showCommandHelp,
} = require("../src/utils");

const [, , command, ...options] = process.argv;

if (command === undefined) throw new Error("Please provide a command");
// a command called 'generateCommandsFile' will be passed in package.json
// to generate the command Files
else if (command === "generateCommandsFile") generateCommandsFile();
else if (options[0] === "--help") showCommandHelp(command);
else execCommand(command, options);
