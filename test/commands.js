const assert = require("chai").assert;
const commands = require("../src/commands");

describe("Commands", function () {
	describe("each command", function () {
		it("should have properties included in ['aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', 'win32', 'desc']", function () {
			// ['aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', and 'win32'] collection is from
			// https://nodejs.org/api/os.html#os_os_platform

			commands.forEach((command) => {
				for (let property in command) {
					assert.include(
						[
							"aix",
							"darwin",
							"freebsd",
							"linux",
							"openbsd",
							"sunos",
							"win32",
							"desc",
						],
						property
					);
				}
			});
		});
		it("should have properties whose values are non-empty strings", function () {
			commands.forEach((command) => {
				for (let property in commands[command]) {
					const value = commands[command][property];
					assert.typeOf(value, "string");
					assert.isAbove(value.length, 0);
				}
			});
		});
	});
});
