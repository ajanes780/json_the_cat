const request = require('request');
const userInput = process.argv.slice(2);
const userInputID = userInput[0].substring(0,4)

const breedFetcher = function (userInput){

  request('https://api.thecatapi.com/v1/images/search?breed_ids=' + userInputID, function(error, response, body) {
    if (error) {
      console.log("this is the problem ",error);
      return error;
    };
    const data = JSON.parse(body)
    if (data[0] === undefined) {
      console.log(`The animal ${userInput[0]} is not defined please try again`);
    } else {
    // request('response', function(data, )  {
      console.log(data[0].breeds[0].description);
    }
    
      });
    };
  

 breedFetcher(userInput)

module.exports = breedFetcher;