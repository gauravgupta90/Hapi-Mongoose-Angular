Hapi-Mongoose-Angular Example
========================

The purpose of this app is to show a new way to work with Hapi.js, Mongodb, Mongoose, Angular.js.


### Install an app

Run the following command in root directory of an app in command prompt.

###### *Install node packages*

server/ node install

###### *Install bower components*

client/src/ bower install

### Run an app

###### *Run Server*

Run the following command in root directory of an app in command prompt.

server/ node server.js

You can see the port number in command prompt after sucessfull run

You can change the settings in server/config/config.js file

### *API Available*

###### *Create User*

	POST: http://localhost:8000/user

	{
	"userId": "gauravgupta90",
	"username": "gaurav_bng@hotmail.com"
	}

###### *Get All Users*

	GET: http://localhost:8000/user

###### *Get User By userId*

	GET:  http://localhost:8000/user/{userId}
      
      Example : http://localhost:8000/user/gauravgupta90

###### *Update User By userId*

	PUT: http://localhost:8000/user/{userId}

     Example : http://localhost:8000/user/gauravgupta90

	{
	"username": "gaurav_bng@hotmail.com"
	}

###### *Delete User By userId*

	DELETE: http://localhost:8000/user/{userId}

			Example : http://localhost:8000/user/gauravgupta90

###### *Delete User Collection*

	DELETE: http://localhost:8000/user

			Example : http://localhost:8000/user


### Other Usefull Link

[Passport-Auth-Hapi.js-Mongoose] (https://github.com/gauravgupta90/Passport-Auth-Hapi.js-Mongoose)

[Token-Based-Auth-With-User-Roles-Hapi-Mongoose-Mongodb-with-email-verification-and-forgot-password] (https://github.com/gauravgupta90/Token-based-Auth-with-user-role-in-Hapi-Mongoose-Mongodb-with-email-verification-and-forgot-password)

