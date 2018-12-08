
# Twitter Bot with NodeJS

## Project to pay around withe the Twitter API


1. Create github repo for the project
2. set up basic file structure
3. Connect to the Chuck Norris API to get random quotes
4. extract the data from the returned JSON object

5. Use Axios and Twit to tweet the quotes to Twitter
6. Uploading the bot to Heroku
7. Let the bot run and tweet once every 12 hrs



## Deploy to Heroku Steps

1. Initialize project with git and start tracking your app
	- git init
	- git add .
	- git commit -a -m "..."

2. Create a Heroku remote
	- heroku create 
		https://vast-lake-46383.herokuapp.com/ 
		| https://git.heroku.com/vast-lake-46383.git

3. Confirm the heroku remote has been set for the app
	- git remote -v
		heroku  https://git.heroku.com/vast-lake-46383.git (fetch)
		heroku  https://git.heroku.com/vast-lake-46383.git (push)
		origin  https://github.com/Carlosdvp/Twitter-Chuck-Bot.git (fetch)
		origin  https://github.com/Carlosdvp/Twitter-Chuck-Bot.git (push)

4. Deploying your code to Heroku
	- git push heroku master

5. Turn basic command-line Node app into an express.js app

6. Test it locally - good
	- heroku local web

7. Use setInterval to automate the tweeting

8. PUsh changes and deploy

9. visit the app at it's heroku url
	- heroku open

10. and ensure that at least one instance of the app is running (awaken the sleeping app)
	- heroku ps:scale web=1






## Next Steps


11. Find a way to keep th app running indefinietly on it's own

Deploy to AWS