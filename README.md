![npm version](https://img.shields.io/npm/v/strings-manipulator?color=green&label=npm&style=flat-square)
![size](https://img.shields.io/bundlephobia/min/@saimulhasnain-dev/strings-manipulator)
# Strings manipulator

> Human-friendly and powerful data validator library for JavaScript

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Getting Started

These instructions will help you to install this package in your project to perform data validation.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with installation of package in your project:

```sh
$ cd PROJECT
$ npm i @saimulhasnain-dev/strings-manipulator
```

After successful installation of package you need to import package in your file:
To import complete package in once

```sh
$ import manipulator from '@saimulhasnain-dev/strings-manipulator';
```

Or if you prefer using any particular function then:

```sh
$ import { stringIncludes } from '@saimulhasnain-dev/strings-manipulator';
```

## Examples

```tsx
import manipulator from '@saimulhasnain-dev/strings-manipulator';

let res = manipulator.intoUpperCase('abc');//to convert string into capital case string
console.log(res); // it will print `ABC` 

manipulator.endsWith('Hello world','world');//to check string end with world

```
Accessing only required function

```tsx
import { stringIncludes } from '@saimulhasnain-dev/strings-manipulator';
stringIncludes('hello npm package','npm');//to test if string includes a particular word

```

## Available methods
- **intoUpperCase**: Function to convert string into capital case string
- **intoLowerCase**: Function to convert string into lower case string
- **charAt**: Function to get string at particular position
- **charCodeAt**: Function to get char code(ASCII) at a particular position in a string
- **endsWith**: To check if string end with a particular word
- **startsWith**: To check if string starts with a particular word
- **fromCharCode**: Function to get string from char code
- **stringIncludes**: Function to check if string includes a particular word or not
- **positionOf**:  Function to get position of a particular word within a string
- **lastPositionOf**: Function to get last position/index value of a particular word within a string
- **lengthOfString**: Function to get length of a string
- **stringMatches**:  Function to check if string matched a particular regex or a word in a given string
- **repeatString**: Function to repeat string n number of times 
- **replaceString**: Function to replace a word with another within a string
- **splitString**: Function to return a string between two index within a string
- **convertStringToArray**: Function to return array of words from string using a specific splitter
- **convertFirstCaps**: Function to convert first letter of string into capital order
- **convertCamelCase**: Function to convert string into camel case
- **convertPascalCase**: Function to convert string into pascal case
- **convertNormalCase**: Function to convert any other character format into normal like pascal to normal
- **convertRoman**: Function to convert normal number into roman format

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Credits
All credit goes to me:sunglasses: 

## Built With

* Love

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Saimul Hasnain** - *Initial work* - [Saimul Hasnain](https://github.com/saimulhasnain-dev)

