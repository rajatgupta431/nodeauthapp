// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '286672721491401', // your App ID
		'clientSecret' 	: '451dcb3e4676d1833d746ec0f76a76f3', // your App Secret
		'callbackURL' 	: 'http://68.169.63.11:8080/auth/facebook/callback'
	},
	

	'twitterAuth' : {
		'consumerKey' 		: 'your-consumer-key-here',
		'consumerSecret' 	: 'your-client-secret-here',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	}
};
