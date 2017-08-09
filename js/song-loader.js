console.log( "songs.js");
//Define ES6 IIFE

$(document).ready(function(){


	//IIFE that contains initial song-loader function
	{

		SongSpace.loadSongInfo = () => {

			let songObject = [];

			$.ajax({
				url:"../json/music.json"
			}).done(songLoadComplete)
			  .fail(function(error) {
			  	alert("error")
			  })

			function songLoadComplete(json) {
				songObject = json;
				SongSpace.passJSON1(songObject);
			}
		};

		SongSpace.loadSongInfo();
	}
	//IIFE that contains the second song-loader function
	{
		SongSpace.loadMoreSongs = () => {

			let moreSongsObject = {};

			$.ajax({
				url:"../json/music-2.json"
			}).done(moreSongsComplete)
			  .fail(function(error) {
			  	alert("error")
			  })

			function moreSongsComplete(json) {
				let loaded = true;
				SongSpace.passLoadedBoolean(loaded)
				console.log( "More songs loaded.");
				moreSongsObject = json;
				SongSpace.passJSON2(moreSongsObject);

			}

		}

	}

})  //End DOCUMENT READY
