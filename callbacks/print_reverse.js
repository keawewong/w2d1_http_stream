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

function print_reverse(html) {
  console.log(html.split('').reverse().join(''));
}

getHTML('sytantris.github.io', '/http-examples/step6/reverse.html', print_reverse);
