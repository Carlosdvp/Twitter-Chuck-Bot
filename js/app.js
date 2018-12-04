
// Dependencies
const Twit = require('twit');
const config = require('./config');

// creating the Twit object
var T = new Twit(config);

// Start up message
console.log('Chuck-bot is online, Human');


// function chuckTweet() {

// 	//get the quote	
// 	var chuckQuotes = T.get('https://api.chucknorris.io/jokes/random', function(err, data, res) {
// 			var quote = data.value;
// 			// console.log(quote);
// 			return quote;
// 	});


// 	// payload
// 	var tweet = { 
// 		status: quote
// 	}
// 	//delivering the payload
// 	T.post('statuses/update', tweet, chuckQuotes);

// 	// console.log(chuckQuotes);
// }
	
// // setInterval(chuckTweet, 1000*20);

// chuckTweet();

// var chuckQuotes = T.get('https://api.chucknorris.io/jokes/random', function(err, data, res) {
// 		var quote = data.value;
// 		// console.log(quote);
// 		return quote;
// });




// //  Posting tweets with setInterval
// function chuckTweet(msg) {

// 	// payload
// 	var tweet = { 
// 		status: msg
// 	}

// 	// error cathcher
// 	function tweetTweet(err, data, res) {
// 	  if (err) {
// 	  	console.log(err);
// 	  } else {
// 	  	console.log('Go Chuck');
// 	  }
// 	}

// 	// delivering the payload
// 	T.post('statuses/update', tweet, tweetTweet);
// }

// console.log(chuckQuotes);
// console.log(quote);

// chuckTweet(chuckQuotes);

// setInterval(chuckTweet, 1000*20);







// 1. get the random Chuck Norris quote
// var chuckQuotes = T.get('https://api.chucknorris.io/jokes/random', function(err, data, res) {
// 		var quote = data.value;
// 		console.log(quote);
// 		return quote;
// });

// 2. turn callback into a separate function
function getQuote(err, data, res) {
	var quote = data.value;
	console.log(quote);
	return quote;
}

T.get('https://api.chucknorris.io/jokes/random', getQuote);

var chuckQuotes = 'https://api.chucknorris.io/jokes/random';

// 3. get the returned quote as a string and log it to the console

console.log(chuckQuotes);




// 4. use that string as an argument to post a tweet with twit package

// T.post('statuses/update', tweet, tweetTweet);