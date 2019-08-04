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

1.node liri.js concert-this <artist/band name here>
![GitHub concert-search](/output info/concert search.PNG)
Format: ![Alt Text](url)
