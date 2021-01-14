const request = require('request');

request('https://api.thecatapi.com/v1/images/search?breed_ids=sibe', function(err, res, body) {
    console.log(typeof body);
    console.log( body)

    request('response', function( data )  {
      data = JSON.parse(body);
      console.log(data);
      console.log(typeof data);


    });

  });