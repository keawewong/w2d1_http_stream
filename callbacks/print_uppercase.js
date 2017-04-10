var getHTML = require('../http-functions.js');

function printHTML(html) {
  console.log(html);
}

function print_uppercase(html) {
  console.log(html.toUpperCase());
}

getHTML('sytantris.github.io', '/http-examples/step6/uppercase.html', print_uppercase);
