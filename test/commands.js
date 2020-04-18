const assert = require("chai").assert;
const commands = require("../src/commands");

describe("Commands", function () {
	describe("each command", function () {
		it("should have properties included in ['aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', 'win32']", function () {
			// ['aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', and 'win32'] collection is from
			// https://nodejs.org/api/os.html#os_os_platform

			for (let command in commands) {
				for (let property in commands[command]) {
					assert.include(
						[
							"aix",
							"darwin",
							"freebsd",
							"linux",
							"openbsd",
							"sunos",
							"win32",
						],
						property
					);
				}
			}
		});
		it("should have properties whose values are non-empty strings", function () {
			for (let command in commands) {
				for (let property in commands[command]) {
					const value = commands[command][property];
					assert.typeOf(value, "string");
					assert.isAbove(value.length, 0);
				}
			}
		});
	});
});
