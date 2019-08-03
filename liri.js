require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var quote = process.argv[2];

var keyword = process.argv.slice(3).join('');

var axios = require("axios");

var fs = require("fs");

var moment = require('moment');

var execute = function(quote,keyword){

if(quote === 'concert-this'){
    axios.get("https://rest.bandsintown.com/artists/" + keyword + "/events?app_id=codingbootcamp").then(
        function(res){
            var response = res['data'];
            console.log('Name of the venue: '+ response[0]['venue']['name']);
            console.log('Venue location: '+ response[0]['venue']['city'] + ", " + response[0]['venue']['region']);
            console.log('Date of the Event: '+moment(response[0]['datetime']).format("L"));
        }
    );

}else if(quote === 'movie-this'){
    axios.get("http://www.omdbapi.com/?t="+ keyword +"&apikey=trilogy").then(function(response){

      
       console.log('Title of the movie: ' + response['data']['Title']);
       console.log('Year: ' + response['data']['Year']);
       console.log('IMDB Rating: '+ response['data']['imdbRating']);
       console.log('Rotten Tomatoes Rating: '+ response['data']['imdbRating']);
       console.log('Country: ' + response['data']['Country']);
       console.log('Language: ' + response['data']['Language']);
       console.log('Plot: ' + response['data']['Plot']);
       console.log('Actors: ' + response['data']['Actors']);


    })
}else if(quote === 'spotify-this-song'){
    spotify.search({ type: 'track', query: keyword }, 
    function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  //  console.log(data);
    console.log('Artists: '+ data['album']['artists'][0][0]); 
   // console.log('Name of the Song: ' + data['']
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
  });

}else if(quote === 'do-what-it-says'){fs.readFile('random.txt', 'utf8', function(err, data){
    if(err){
        return console.log(err);
    }
    console.log(data);
    var dataArr = data.split(",");
    quote = dataArr[0];
    keyword = dataArr[1];
    execute(quote, keyword);
    //console.log(dataArr);
})} 
}

execute(quote, keyword);