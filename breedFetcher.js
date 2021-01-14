const request = require('request');
const userInput = process.argv.slice(2)

request('https://api.thecatapi.com/v1/images/search?breed_ids='+userInput[0], function(error, res, body) {
    
        
    request('response', function( data, error  )  {
      data = JSON.parse(body);
      console.log(data[0]);
      console.log(typeof data);
      console.error('error:', error); // Print the error if one occurred
      if(error === undefined){
        console.log(`This animal ${userInput[0]} is not defined please try again`);
      }
    });
  });