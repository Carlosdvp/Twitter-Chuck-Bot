// Dependencies
const Twit = require('twit');
const config = require('./config');

// creating the Twit object
var T = new Twit(config);

// Start up message
console.log('Tweet collector Bot is coming online, Human');

//  search twitter for all tweets containing the word 'predilectas' since June 15, 2018

function getData(err, data, response) {
	var tweets = data.statuses;
	for (let i = 0; i < tweets.length; i++) {
	  console.log(tweets[i].text);
	}
}

var params = {
	q: '#inkmaster', 
	count: 3,
	result-type: 'recent'
}

// Query Method
T.get('search/tweets', params, getData);