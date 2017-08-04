console.log( "event-listeners.js" );

//This handles the different views////////////////////////
let addMusic = document.getElementById("add-music");
let controlPanel = document.getElementById("control-panel");
let songDiv = document.getElementById("song-list-div");	
let listLink = document.getElementById("listViewLink");
let addLink = document.getElementById("addViewLink");
let profileLink = document.getElementById("profileViewLink");
// console.log( "addMusic", addMusic );
// console.log( "ontrolPanel", controlPanel );
// console.log( "songDiv", songDiv );
{
	SongSpace.listView = () => {

		controlPanel.classList.remove("hidden");
		songDiv.classList.remove("hidden");
		addMusic.classList.add("hidden");

	},

	SongSpace.addView = () => {
	
		addMusic.classList.remove("hidden");
		controlPanel.classList.add("hidden");
		songDiv.classList.add("hidden");

	}

}

addLink.addEventListener("click", (event) => {
	event.preventDefault();
	SongSpace.addView();
});

listLink.addEventListener("click", (event) => {
	event.preventDefault();
	SongSpace.listView();
});

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

			// songObject.push(addSongObject);
			// console.log( "songObject", songObject );

			console.log(addSongObject)
			// console.log( "songs", songs );
			// correctSongs();
			// console.log( "correctedSongs", correctedSongs );
			// outputSongs();
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

}















