const request = require('request');
const userInput = process.argv.slice(2);

request('https://api.thecatapi.com/v1/images/search?breed_ids=' + userInput[0], function(error, res, body) {
    
        
  request('response', function(data,)  {
    data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log(`The animal ${userInput[0]} is not defined please try again`);
    }
    if (error === null)  {
      console.log(data[0]);
    }
    
  });
});