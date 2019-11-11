/*
2. Show today's weather
Create a new app (with an index.html and an index.js) that uses data from the OpenWeather API.

Retrieve the current weather for your city using fetch() and create a pipeline of .then() functions that draw the data to the page.

Make sure to .catch() any errors that might occur.

Once you can retrieve the weather for a hard-coded city, try using the browser's Geolocation API to automatically find the user's location.

The Geolocation API is asynchronous, but uses the callback style. Wrap these API calls in a new Promise so that it can be incorporated into your Promise chain.

*/
//fetch("https://us-weather-by-city.p.rapidapi.com/getweather").then(response => response.json())
//.then(data => {console.log(data); return data});
// var unirest = require("unirest");
/*

var unirest = require("unirest");

var req = unirest("GET", "https://us-weather-by-city.p.rapidapi.com/getweather");

req.query({
	"city": "Houston",
	"state": "TX"
});

req.headers({
	"x-rapidapi-host": "us-weather-by-city.p.rapidapi.com",
	"x-rapidapi-key": "68e408cd6amshfffec84f47fbf81p17ec9bjsnc8d7ccd71c8d"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});*/
var book = new Promise((resolve, reject)=>{
    $.ajax({
        type:"GET",
        url: "https://us-weather-by-city.p.rapidapi.com/getweather",
        dataType:"JSON",
        success: function(response){
            response.headers({
                "x-rapidapi-host" : "us-weather-by-city.p.rapidapi.com",
	"x-rapidapi-key" : "68e408cd6amshfffec84f47fbf81p17ec9bjsnc8d7ccd71c8d"
            })
            response.query({
                "city": "Houston",
                "state": "TX"
            })
            resolve(response.query);
        },
        error: function(error){
            console.log("Hey Error!  :", error);
        }
    });
})


/*
 var req = fetch("https://us-weather-by-city.p.rapidapi.com/getweather");

 req.query({
	"city": "Houston",
 	"state": "TX"
 });

 req.headers({
	"x-rapidapi-host": "us-weather-by-city.p.rapidapi.com",
 	"x-rapidapi-key": "68e408cd6amshfffec84f47fbf81p17ec9bjsnc8d7ccd71c8d"
 });


 req.end(function (res) {
 	if (res.error) throw new Error(res.error);

 	console.log(res.body);
 });
 */
