console.log( "songs.js");

{
	var SongSpace = {};
}

{

	SongSpace.loadSongInfo = () => {

		let songObject = [];

		let songloader = new XMLHttpRequest();
		songloader.addEventListener("load", songLoadComplete);

		function songLoadComplete(event) {
			console.log( "songload complete" );
			songObject = JSON.parse(event.target.responseText);
			// console.log( "songObject", songObject );
			SongSpace.outputSongs(songObject);
		}

		songloader.open("GET", "../json/music.json");
		songloader.send();

	};

	SongSpace.loadSongInfo();
}

{

	SongSpace.outputSongs = (songObject) => {

		let songContainer = document.getElementById('song-list-div');
		songContainer.innerHTML="";

		console.log( "songObject", songObject );
		// console.log( "songs", songs );

		for (let i = 0; i < songObject.length; i++) {

			// console.log( "songObject[i]", songObject[i] );

			
			let songList =	`<section id="song--${i}">
							<p class="song-display-string">
							${songObject[i].song} by ${songObject[i].artist} from the album ${songObject[i].album}<button type="button" class="delete-song-btn" id="dltBtn--${i}">X</button></p>
							</section>`

			// songContainer.innerHTML += songList;
			$(songContainer).prepend(songList);
		}
	}
}


	// outputSongs();









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












