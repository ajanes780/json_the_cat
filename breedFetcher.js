const request = require('request');
const userInput = process.argv.slice(2)

request('https://api.thecatapi.com/v1/images/search?breed_ids='+userInput[0], function(err, res, body) {
    // console.log(typeof body);
    // console.log( body)

    request('response', function( data )  {
      data = JSON.parse(body);
      console.log(data[0]);
      console.log(typeof data);


    });

  });