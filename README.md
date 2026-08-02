Forked from https://github.com/desmondmorris/node-tesseract/ to support tesseract version 4 and up to version 5.

# Tesseract for node.js

A simple wrapper for the Tesseract OCR package for node.js

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/rona-dinihari/node-tesseract/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/rona-dinihari/node-tesseract/tree/main)

## Requirements

- Tesseract 3.01 or higher is needed for this to work

## Installation

There is a hard dependency on the [Tesseract project](https://github.com/tesseract-ocr/tesseract). You can find installation instructions for various platforms on the project site. For Homebrew users, the installation is quick and easy.

    brew install tesseract --with-all-languages

The above will install all of the language packages available, if you don't need them all you can remove the `--all-languages` flag and install them manually, by downloading them to your local machine and then exposing the `TESSDATA_PREFIX` variable into your path:

    export TESSDATA_PREFIX=~/Downloads/

You can then go about installing the node-module to expose the JavaScript API:

    npm install dawnsparks-node-tesseract

## Usage

```JavaScript
var tesseract = require('dawnsparks-node-tesseract');

// Recognize text of any language in any format
tesseract.process(__dirname + '/path/to/image.jpg',function(err, text) {
	if(err) {
		console.error(err);
	} else {
		console.log(text);
	}
});

// Recognize German text in a single uniform block of text and set the binary path

var options = {
	l: 'deu',
	psm: 6,
	binary: '/usr/local/bin/tesseract'
};

tesseract.process(__dirname + '/path/to/image.jpg', options, function(err, text) {
	if(err) {
		console.error(err);
	} else {
		console.log(text);
	}
});
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for the full release history.
