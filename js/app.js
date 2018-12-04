
// Dependencies
const Twit = require('twit');
const config = require('./config');
const https = require('https');
const axios = require('axios');


// the Chucck Norris API random qupte generator
const chuckAPI = 'https://api.chucknorris.io/jokes/random';

// creating the Twit object
var T = new Twit(config);

// Start up message
console.log('Chuck-bot is online, Human');



// 1. get the random Chuck Norris quote using Axios


const getData = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data.value;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData(chuckAPI);

// 2. turn callback into a separate function





// 3. get the returned quote as a string and log it to the console





// 4. use that string as an argument to post a tweet with twit package


// T.post('statuses/update', tweet, tweetTweet);