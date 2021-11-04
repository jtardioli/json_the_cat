const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);

      if (data.length > 0) {
       
        callback(undefined ,data[0].description);
      } else {
        callback(undefined, 'Breed not found :(');
      }
    }
  });
};

module.exports = fetchBreedDescription;

