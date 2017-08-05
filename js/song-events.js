console.log( "song-delete.js" );

// Adds delete functionality to song-list
{

	let songContainer = document.getElementById("song-list-div");


	songContainer.addEventListener("click", (event) => {
		let clickTarget = event.target;
		let songSelect = clickTarget.closest("div");
		let parentDiv = songSelect.parentNode;

		if (clickTarget.className === "delete-song-btn") {
			parentDiv.removeChild(songSelect);
		}

		if (clickTarget.className === "more-song-btn") {
			console.log( "More Button Clicked" );
			SongSpace.loadMoreSongs();
			// console.log( "clickTarget", clickTarget );
		}

	});

}

/////////////////////////////////////////////////////////////
{

	let songArray = []
	let defaultNum = [];
	console.log( "defaultNum", defaultNum );

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

		SongSpace.passJSON2 = (songObject) => {

			for (let i = 0; i < songObject.length; i++) {
				songArray.push(songObject[i])
			};
			

			SongSpace.outputSongs(songArray);
		}

		SongSpace.passDefaultValue = (number) => {
			defaultNum.push(number);
		}


		SongSpace.outputSongs = (songArray) => {

		let songContainer = document.getElementById('song-list-div');
		songContainer.innerHTML="";


		for (let i = 0; i < songArray.length; i++) {
			// let songs = songArray;
			
			let songList =	`<div id="song--${i}">
							<p class="song-display-string">
							${songArray[i].song} by ${songArray[i].artist} from the album ${songArray[i].album}<button type="button" class="delete-song-btn" id="dltBtn--${i}">X</button></p>
							</div>`
			$(songContainer).append(songList);
		}

		let moreBtn = `<div id="more-btn-section"><button type="button" class="more-song-btn" id="more-song-btn"`

		if (songArray.length > defaultNum[0]) {
			moreBtn += `disabled`
		}

			moreBtn += `>LOAD MOAR SONGS</button></divn>`

		$(songContainer).append(moreBtn);
		
	}

	SongSpace.outputSongs(songArray);

}

/////////////////////////////////////////////////

//SUBMIT MUSIC

{

	let addBtn = document.getElementById("add-song-btn");
	let artistNameField = document.getElementById("artistNameInput");
	// console.log( "artistNameField", artistNameField );
	let songTitleField = document.getElementById("songNameInput");
	let albumTitleField= document.getElementById("albumNameInput");

	addBtn.addEventListener("click", (event) => {

		let artistName = artistNameField.value;
		// console.log( "artistName", artistName );
		let songTitle = songTitleField.value;
		// console.log( "songTitle", songTitle );
		let albumTitle = albumTitleField.value
		// console.log( "albumTitle", albumTitle );
		let genre = genreSelectAdd.value

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
			artistNameField.value = "";
			songTitleField.value = "";
			albumTitleField.value= "";
			genreSelectAdd.value = "";


		}

	});


	function addMusicReturnButton(element) {
		element.addEventListener("keypress", function(event) {
	    if (event.keyCode == 13) {
	        addBtn.click();
	    	}
		});
	}

	addMusicReturnButton(artistNameField);
	addMusicReturnButton(songTitleField);
	addMusicReturnButton(albumTitleField);
	addMusicReturnButton(genreSelectAdd);

}


/////////////////////////////////////////////////




