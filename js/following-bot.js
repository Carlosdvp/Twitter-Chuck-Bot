// Dependencies
const Twit = require('twit');
const config = require('./config');

// creating the Twit object
var T = new Twit(config);

// Start up message
console.log('Follow Bot is coming online, Human');


// Setting up a user stream
var stream = T.stream('user');

// If someone follows me
stream.on('follow', followeMe);

function followeMe(follower) {
	console.log('following');
	var name = follower.source.name;
	var screenName = follower.source.screen_name;
	tweetStorm(`@${screenName} thanks bruh, lift heavy!`);
}


// Twitter has made changes to it's API and the stream endpoint has been deprecated

// Find out what they replaced it with and how I can make this bot work