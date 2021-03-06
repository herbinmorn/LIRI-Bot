# LIRI-Bot
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

I used the following Node packages in my LIRI-Bot:
* Node-Spotify-API
* Axios
* Moment
* DotEnv

liri.js can take in one of the following commands:
* concert-this
* spotify-this-song
* movie-this
* do-what-it-says

See below for the examples of the commands, together with the output information:

1. node liri.js concert-this <artist/band name here>
![concert-search] ( https://github.com/herbinmorn/LIRI-Bot/raw/master/output%20info/concert%20search.PNG)


2. node liri.js spotify-this-song '<song name here>'
![song-search] (https://github.com/herbinmorn/LIRI-Bot/blob/master/output%20info/song%20search.PNG)


3. node liri.js movie-this '<movie name here>'
![movie-search](https://github.com/herbinmorn/LIRI-Bot/blob/master/output%20info/movie%20search.PNG)


4. node liri.js do-what-it-says
![do-what-it-says](https://github.com/herbinmorn/LIRI-Bot/blob/master/output%20info/doWhatItSay%20search.PNG)


Here is the deployed link: https://herbinmorn.github.io/LIRI-Bot/

I am the only contributor of this app.
