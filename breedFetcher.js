const request = require('request');
const userInput = process.argv.slice(2);
// const userInputID = userInput[0].substring(0,4)

const fetchBreedDescription = function(breedName, callback) {
  const shortBreedName = breedName.substring(0,4);
  request('https://api.thecatapi.com/v1/images/search?breed_ids=' + shortBreedName, function(error, response, body) {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(error, data.length);
      } else {
        const description = data[0].breeds[0].description;
        // if (description ===  undefined) {
        //   console.log(`The animal ${userInput[0]} is not defined please try again`);
        callback(error, description);
      }
    }

    // });


    // };
    
    
    // };// if(error) {
    //   callback(error);
    // } else {
    //   callback(error, description);
    // }
  });
};


// breedFetcher(userInput)

module.exports = {fetchBreedDescription};


// if (error) {
//   console.log("this is the problem ",error);
//   return error;
// };
// const data = JSON.parse(body)
// if (error === null)  {
//   console.log(data[0]);
// } else {
// // request('response', function(data, )  {
//   console.log(data[0].breeds[0].description);