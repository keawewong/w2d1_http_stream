function getAndPrintHTML() {

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

    var myData = ""

    response.on('data', function(data) {
      myData += data;
    });

    response.on('end', function() {
      console.log(`Display whole data stream. Length:, ${myData.length}\n${myData}\n`);
      console.log('Response stream complete.');
    });

  });

}

getAndPrintHTML();
