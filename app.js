
// Dependencies
const config = require('./public/js/config');
const Twit = require('twit');
const axios = require('axios');
const PORT = process.env.PORT || 5000
const express = require('express')
const path = require('path')
const app = express()


// a simple express server
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'public/index.html')))
.get('/', (req,res) => res.sendFile(path.join(__dirname, './app.js')))
.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, () => console.log(`ChuckBot is listening on port ${PORT}`));


// the Chucck Norris API random quote generator
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

// getChuckQuote();

// automating the tweeting, one tweet every 12 hours
setInterval(getChuckQuote, 1000*60*60);