# cross-cmd ✨

Cross-platform CLI commands

## The problem

I was trying to create a CLI package using my linux system, and I wanted to trigger a command that reads a file. Being linux, I used `cat` and it worked perfectly. **But**, for people using my package on a different operating system like windows, they'd never be able to trigger a command like `cat`.

## This Solution

This CLI package has many commands with different purposes mapped to different operating system commands. You give it a command and the required options, and it runs the appropriate command for the platform is used with the options provided.

## Usage

This library comes in handy when creating a CLI package and you want to target various platforms.

**Note that** this is a javascript library.

### Installation

```shell
npm i cross-cmd
```

### In your project

Let's say you use `spawnSync` from the [child_process](https://nodejs.org/api/child_process.html) module in NodeJS (it could be any function, as long as it executes terminal commands) and you're developing your package on a linux system:

```js
const {spawnSync} = require('child_process');
spawnSync('node', ['./node_modules/cross-cmd', 'cat', 'path-to-file'], {
    stdio: "inherit"
})
```

What happens here is that `cross-cmd` checks its [list of commands](./src/commands.js), gets the one with `cat` and appropriately apply the command for the platform it is being run on. For example, your package with this command executed on linux and windows respectively would be:

```shell
# linux
cat path-to-file
# windows
type path-to-file
```

This is because 'type' is a win32 representative associated with linux's 'cat' as saved in the [list of commands](./src/commands.js).

> `cross-cmd` is not installed globally, that's why it is accessed with `node ./node_modules...` instead of `cross-cmd...`. Just as I wouldn't want the users of this package to have it installed globally against their will, the users wouldn't also want the users of their packages to do the same.

If the command does not exist, it throws an error. When this happens, you can do me and the community a favor by [creating a feature request issue](https://github.com/dillionmegida/cross-cmd/issues/new) of the command you want to be added.

#### For commands with spaces

e.g `type nul >` which creates an empty file in windows as `touch` does in linux and is saved in the command list, a windows user of this package would have to do the following:

```js
const {spawnSync} = require('child_process');
spawnSync('node', ['./node_modules/cross-cmd', 'type nul >', 'path-to-file'], {
    stdio: "inherit"
})
```

`cross-cmd` changes the command 'type nul >' depending on the os.

## All commands

It is important to **confirm that a command exists** before using it in your package. You can run the following to confirm that a command exists:

```shell
node ./node_modules cross_cmd <command-name> --help
```

Or find all commands available [here](/src/allcommands.md).

## Issues and Contributions

Your contribution to this project would be highly appreciated. Could be a documentation issue, pull request, feature request, they are all welcome.

- [Create a pull request](https://github.com/dillionmegida/cross-cmd/pulls)
- [Open an issue](https://github.com/dillionmegida/cross-cmd/issues)

## LICENSE

[MIT](/LICENSE)
