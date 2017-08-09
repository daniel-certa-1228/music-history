console.log( "song-delete.js" );

{
	var SongSpace = {};
}

$(document).ready(function(){

	// Adds delete functionality to song-list
	{
		let songContainer = document.getElementById("song-list-div");

		$("#song-list-div").click(function() {
			let clickTarget = event.target;
			let songSelect = $(clickTarget).closest("div");

			if (clickTarget.className === "delete-song-btn") {
				$(songSelect).remove();
			}
			//RUNS THE ADD MORE SONGS FUNCTION
			if (clickTarget.className === "more-song-btn") {
				SongSpace.loadMoreSongs();
			}

		})
	}
/////////////////////////////////////////////////////////////
	{

		let songArray = []
		let loadedBoolean = false;
		// console.log( "loadedBoolean", loadedBoolean );

			SongSpace.passNewSong = (addSongObject) => {

				songArray.push(addSongObject);
				SongSpace.outputSongs(songArray);
			}

			SongSpace.passJSON1 = (songObject) => {

				for (let i = 0; i < songObject.length; i++) {
					songArray.push(songObject[i])
				};
				
				SongSpace.outputSongs(songArray);
			}

			SongSpace.passJSON2 = (songObject) => {

				for (let i = 0; i < songObject.length; i++) {
					songArray.push(songObject[i])
				};
				
				SongSpace.outputSongs(songArray);
			}

			SongSpace.passLoadedBoolean = (value) => {
				loadedBoolean = value;
			}


			SongSpace.outputSongs = (songArray) => {

			let songContainer = $('#song-list-div');

			$(songContainer).empty();

			for (let i = 0; i < songArray.length; i++) {

				let songList =	`<div id="song--${i}">
								<p class="song-display-string">
								${songArray[i].song} by ${songArray[i].artist} from the album ${songArray[i].album}<button type="button" class="delete-song-btn" id="dltBtn--${i}">X</button></p>
								</div>`
				$(songContainer).append(songList);
			}

			let moreBtn = `<div id="more-btn-section"><button type="button" class="more-song-btn" id="more-song-btn"`

			if (loadedBoolean) {
				moreBtn += `disabled`
			}

				moreBtn += `>LOAD MOAR SONGS</button></divn>`

			$(songContainer).append(moreBtn);
			console.log( "loadedBoolean", loadedBoolean );
			
		}

	}

/////////////////////////////////////////////////

	//SUBMIT MUSIC

	{

		$("#add-song-btn").click(function(){
			let artistName = $("#artistNameInput").val();
			let songTitle = $("#songNameInput").val()
			let albumTitle = $("#albumNameInput").val();
			let genre = $("#genreSelectAdd").val();

			console.log( artistName, songTitle, albumTitle, genre);

			if (artistName==="" ||  songTitle==="" || albumTitle==="") {

				alert("Please fill in all fields!")

			}  else  {

			let addSongObject = {
							"song": songTitle,
							"artist": artistName,
							"album": albumTitle,
							"genre": genre
						}

			SongSpace.passNewSong(addSongObject);

				SongSpace.listView();
				$("#artistNameInput").val("");
				$("#songNameInput").val("")
				$("#albumNameInput").val("");
				$("#genreSelectAdd").val("");
			}

		})
		
		$("#add-music").keyup(function(){

			if (event.keyCode == 13) {
					$("#add-song-btn").click();
		    	}
		})

	}

})//END DOCUMENT READY
/////////////////////////////////////////////////




