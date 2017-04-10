function getHTML(host, path, callback) {

  // require the https module
  var https = require('https');

  //create the object to pass the url
  var requestOptions = {
    host: host,
    path: path
  };

  //get the url and set character encoding
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    var myData = ""

    response.on('data', function(data) {
      myData += data;
    });

    response.on('end', function() {
      console.log(`Display whole data stream. Length:, ${myData.length}\n${callback(myData)}\n`);
      console.log('Response stream complete.');
    });

  });

}

function printHTML(html) {
  console.log(html);
}

getHTML('sytantris.github.io', '/http-examples/step1.html', printHTML);
