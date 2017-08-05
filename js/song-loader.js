console.log( "songs.js");
//Define ES6 IIFE
{
	var SongSpace = {};
}
//IIFE that contains initial song-loader function
{

	SongSpace.loadSongInfo = () => {

		let songObject = [];

		let songloader = new XMLHttpRequest();
		songloader.addEventListener("load", songLoadComplete);

		function songLoadComplete(event) {
			console.log( "songload complete" );
			songObject = JSON.parse(event.target.responseText);
			// console.log( "songObject", songObject );
			SongSpace.passJSON1(songObject);
			let songNumber = songObject.length;
			SongSpace.passDefaultValue(songNumber)
		}

		songloader.open("GET", "../json/music.json");
		songloader.send();

	};

	SongSpace.loadSongInfo();
}
//IIFE that contains the second song-loader function
{
	SongSpace.loadMoreSongs = () => {

		let moreSongsObject = [];
		let moreSongsLoader = new XMLHttpRequest();
		moreSongsLoader.addEventListener("load", moreSongsComplete);
		moreSongsLoader.open("GET", "../json/music-2.json")
		moreSongsLoader.send();

		function moreSongsComplete(event) {
			console.log( "More songs loaded.");

			moreSongsObject = JSON.parse(event.target.responseText);
			// console.log( "moreSongsObject", moreSongsObject );
			SongSpace.passJSON2(moreSongsObject);

		}


	}

}
