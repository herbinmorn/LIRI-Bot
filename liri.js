require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var quote = process.argv[2];

var keyword = process.argv[3];

var axios = require("axios");

var fs = require("fs");

if(quote === 'concert-this'){
    axios.get("https://rest.bandsintown.com/artists/" + keyword + "/events?app_id=codingbootcamp").then(
        function(response){
            console.log(response);
            //console.log('Name of the venue: '+ response.venue.name);
            //console.log('Venue location: '+ response.city + ", " + response.region);
            //console.log('Date of the Event: '+moment(response.name).format("L"));
        }
    );

}else if(quote === 'movie-this'){
    axios.get("http://www.omdbapi.com/?t="+ keyword +"&apikey=trilogy").then(function(response){
        console.log(response);
    })
}else if(quote === 'spotify-this-song'){
    spotify.search({ type: 'track', query: keyword }, 
    function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log(data);
    console.log(data['tracks']['items'][0]); 
  });

}else if(quote === 'do-what-it-says'){fs.readFile('random.txt', 'utf8', function(err, data){
    if(err){
        return console.log(err);
    }
    console.log(data);
    var dataArr = data.split(",");
    console.log(dataArr);
})} 