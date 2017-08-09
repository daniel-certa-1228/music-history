console.log( "songs.js");
//Define ES6 IIFE

{
	var SongSpace = {};
}

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
				// console.log( json );
				songObject = json;
				SongSpace.passJSON1(songObject);
				let songNumber = songObject.length;
				SongSpace.passDefaultValue(songNumber)
			}
		};

		SongSpace.loadSongInfo();
	}
	//IIFE that contains the second song-loader function
	{
		SongSpace.loadMoreSongs = () => {

			$.ajax({
				url:"../json/music-2.json"
			}).done(moreSongsComplete)
			  .fail(function(error) {
			  	alert("error")
			  })

			function moreSongsComplete(json) {
				console.log( "More songs loaded.");
				moreSongsObject = json;
				SongSpace.passJSON2(moreSongsObject);

			}


		}

	}

})  //End DOCUMENT READY
