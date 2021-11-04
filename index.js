const fetchBreedDescription = require('./breedFetcher');
const search = process.argv[2];

fetchBreedDescription(search, (err, desc) => {
  if (err) {
    console.log('Error fetch details:', err);
  } else {
    console.log(desc);
  }
});