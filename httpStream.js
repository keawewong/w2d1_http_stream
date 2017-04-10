var getHTML = require('./http-functions.js');

function printHTML(html) {
  console.log(html);
}

getHTML('sytantris.github.io', '/http-examples/step5.html', printHTML);
