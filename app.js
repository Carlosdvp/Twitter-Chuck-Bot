
// Dependencies
const config = require('./js/config');
const Twit = require('twit');
const axios = require('axios');
const PORT = process.env.PORT || 5000

// the Chucck Norris API random qupte generator
const chuckAPI = 'https://api.chucknorris.io/jokes/random';

// creating the Twit object
var T = new Twit(config);

// Start up message
console.log('Chuck-bot is online, Human');


// using axios to GET the data and post it to Twitter with Twit
function getChuckQuote() {
  axios.get(chuckAPI)
  .then(function (response) {
  	const data = response.data.value;
    console.log(data);
    T.post('statuses/update', {status: data});
    return data;
  })
  .catch(function (error) {
    console.log(error);
  });
}


getChuckQuote();