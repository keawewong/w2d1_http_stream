function getAndPrintHTMLChunks() {

  // require the https module
  var https = require('https');

  //create the object to pass the url
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  //get the url and set character encoding
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      console.log(`Chunk Received. Length:, ${data.length}\n`);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

getAndPrintHTMLChunks();