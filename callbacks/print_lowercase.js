var getHTML = require('../http-functions.js');

function printHTML(html) {
  console.log(html);
}

function print_uppercase(html) {
  console.log(html.toUpperCase());
}

function print_lowercase(html) {
  console.log(html.toLowerCase());
}

getHTML('sytantris.github.io', '/http-examples/step6/lowercase.html', print_lowercase);
