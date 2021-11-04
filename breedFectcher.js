const search = process.argv;

const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${search[2]}`, function(error, response, body) {
  if (error) {
    console.error('error:', error);
  } else {
    const data = JSON.parse(body);

    if (data.length > 1) {
      console.log(data[0].description);
    } else {
      console.log('Breed not found :(');
    }

  }
 
 
});