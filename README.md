# cross-cmd ✨

Cross-platform CLI commands

## The problem

I was trying to create a CLI package on my linux system, and I wanted to trigger a command that reads a file. Since it's linux, I used `cat` and it worked perfectly. **But**, for people using my package on a different operating system like windows, they'd never be able to trigger a command like `cat`.

## This Solution

This library has many keys (which illustrate what the command should do) mapped to different operating system commands.

## Usage

This library comes in handy when creating a CLI package and you want to target various platforms.

**Note that** this is a javascript library.

### Installation

```shell
npm i cross-cmd
```

### In your project

```js
const crossCommand = require("cross-cmd");
const command = crossCommand("read");
console.log(command);
// 'type' if windows
// 'cat' if linux
// and so on as much as available
```

If the command does not exist, it returns undefined. When this happens, you can do me and the community a favor by [creating a feature request issue](https://github.com/dillionmegida/cross-cmd/issues/new)

## All commands

Find all commands available [here](/src/allcommands.md)

## Issues and Contributions

Your contribution to this project would be highly appreciated. Could be a documentation issue, pull requests, feature requests, they are all welcome.

- [Create a pull request](https://github.com/dillionmegida/cross-cmd/pulls)
- [Open an issue](https://github.com/dillionmegida/cross-cmd/issues)

## LICENSE

[MIT](/LICENSE)
