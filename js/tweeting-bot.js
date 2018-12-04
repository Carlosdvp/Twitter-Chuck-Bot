// Dependencies
const Twit = require('twit');
const config = require('./config');

// creating the Twit object
var T = new Twit(config);

// Start up message
console.log('Tweeting Bot is coming online, Human');



//  Posting tweets with setInterval
function tweetStorm(msg) {
	// randomizer
	var randomNum = Math.floor(Math.random() * 100);
	// payload
	var tweet = { 
		status: msg + ' ' + randomNum
	}

	// error cathcher
	function tweetTweet(err, data, res) {
	  if (err) {
	  	console.log(err);
	  } else {
	  	console.log('Its all green');
	  }
	}

	// delivering the payload
	T.post('statuses/update', tweet, tweetTweet);
}

tweetStorm(`Testing the tweeting bot bro`);

// Automatic tweeting for the bot
	

// Get random Chuck Norris Quote and post it once per hour

// function chuckTweet() {
// 	// get the quote	
// 	var chuckQuotes = T.get('https://api.chucknorris.io/jokes/random');
// 	var quote = chuckQuotes.value;
// 	console.log(quote);
// 	var tweet = { 
// 		status: quote
// 	}
// 	// delivering the payload
// 	T.post('statuses/update', tweet, chuckQuotes);
// }
	
// setInterval(chuckTweet, 1000*20);
