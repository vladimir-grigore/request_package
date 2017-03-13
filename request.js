var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', (err) => {
        throw err;
       })
       .on('response', (response) => {
        console.log('Response Status Code: ', response.statusCode);
        console.log('Response Status Message:', response.statusMessage);
        console.log('Response Content Type:', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));
