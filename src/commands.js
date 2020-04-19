// asides 'desc', properties must be included in
// ['aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', 'win32']
// gotten from // https://nodejs.org/api/os.html#os_os_platform
module.exports = [
	{
		desc: "read file",
		win32: "type",
		linux: "cat",
		darwin: "cat",
	},
	{
		desc: "make directory",
		win32: "mkdir",
		linux: "mkdir",
		darwin: "mkdir",
	},
	{
		desc: "create empty file",
		win32: "type nul >",
		linux: "touch",
		darwin: "touch",
	},
	{
		desc: "delete empty/non-empty directory",
		win32: "rmdir /q /s",
		linux: "rm -rf",
		darwin: "rm -rf",
	},
	{
		desc: "delete a file",
		win32: "del /f",
		linux: "rm -f",
		darwin: "rm -f",
	},
];
