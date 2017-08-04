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
		}

		songloader.open("GET", "../json/music.json");
		songloader.send();

	};

	SongSpace.loadSongInfo();
}
//IIFE that contains the second song-loader function
{
	SongSpace.loadMoreSongs = () => {


	}

}

{

	let songArray = []
	// console.log( "songArray", songArray );

	SongSpace.passNewSong = (addSongObject) => {

		// console.log( "addSongObject", addSongObject );
		songArray.push(addSongObject);
		// console.log( "songArray", songArray );
		SongSpace.outputSongs(songArray);
	}

	SongSpace.passJSON1 = (songObject) => {

		for (let i = 0; i < songObject.length; i++) {
			songArray.push(songObject[i])
		};
		

		SongSpace.outputSongs(songArray);
	}

		SongSpace.outputSongs = (songArray) => {

		let songContainer = document.getElementById('song-list-div');
		songContainer.innerHTML="";


		for (let i = 0; i < songArray.length; i++) {
			// let songs = songArray;
			
			let songList =	`<section id="song--${i}">
							<p class="song-display-string">
							${songArray[i].song} by ${songArray[i].artist} from the album ${songArray[i].album}<button type="button" class="delete-song-btn" id="dltBtn--${i}">X</button></p>
							</section>`
			$(songContainer).append(songList);
		}

		let moreBtn = `<section id="more-btn-section"><button type="button" class="more-song-btn" id="more-song-btn">LOAD MOAR SONGS</button></section>`
		$(songContainer).append(moreBtn);
	}

	SongSpace.outputSongs(songArray);
}

//CODE GRAVEYARD//
///////////////////////////////////////////////////////////////////////////
// //provided code
// let songs = [];
// let correctedSongs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// //my code starts here
// songs.unshift("The Song Is You > by Frank Sinatra on the album Trilogy");
// songs.push("Mack The Knife > by Ella Fitzgerald on the album Ella In Berlin")

// // console.log( "songs", songs );

// function correctSongs() {
// 		correctedSongs.length = 0;
// 		for (let i = 0; i < songs.length; i++) {
// 		let newTitle = songs[i];
// 		newTitle = newTitle.replace(/>/gi, "-");
// 		newTitle = newTitle.replace(/@/gi, "");
// 		newTitle = newTitle.replace(/\*/gi, "");
// 		newTitle = newTitle.replace(/\(/gi, "");
// 		newTitle = newTitle.replace(/\!/gi, "");
// 		// console.log( "newTitle", newTitle );
// 		correctedSongs.push(newTitle)
// 	}

// }












