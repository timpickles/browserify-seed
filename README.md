# Browserify Seed

A simple project to get started quickly with [Browserify](http://browserify.org/). The project includes:

- ES6 transpiling at build time via [Babel JS](https://babeljs.io/) and the Browserify transformer Babelify
- using JQuery as an external library from [Google Hosted Libraries CDN](https://developers.google.com/speed/libraries/devguide)
- Grunt tasks for building the code and watching for changes

## Getting Started

Clone the project and run `npm install` to install the dependencies.

    git clone https://github.com/timpickles/browserify-seed.git
    npm install

## Grunt Tasks

You'll need to have `grunt-cli` installed globally to use Grunt.

The default task will build the code

    grunt

To build the code, start a webserver on port `8000` and watch for any changes use

    grunt serve

If you also want to open a browser to [http://localhost:8000/](http://localhost:8000/) use

    grunt serve --open

## Building via npm

It is also possible to build just the Javascript via `npm` with

    npm run build
