console.log( "event-listeners.js" );

let addMusic = document.getElementById("add-music");
let controlPanel = document.getElementById("control-panel");
let songDiv = document.getElementById("song-list-div");	
let listLink = document.getElementById("listViewLink");
let addLink = document.getElementById("addViewLink");
let profileLink = document.getElementById("profileViewLink");
// console.log( "addMusic", addMusic );
// console.log( "ontrolPanel", controlPanel );
// console.log( "songDiv", songDiv );

function listView() {

	controlPanel.classList.remove("hidden");
	songDiv.classList.remove("hidden");
	addMusic.classList.add("hidden");

}

function addView() {

	addMusic.classList.remove("hidden");
	controlPanel.classList.add("hidden");
	songDiv.classList.add("hidden");

}

addLink.addEventListener("click", (event) => {
	event.preventDefault();
	addView();
});

listLink.addEventListener("click", (event) => {
	event.preventDefault();
	listView();
});

/////////////////////////////////////////////////

//SUBMIT MUSIC
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
	songs.push(`${songTitle} > by ${artistName} on the album ${albumTitle}`)
	// console.log( "songs", songs );
	correctSongs();
	// console.log( "correctedSongs", correctedSongs );
	outputSongs();
	listView();
	artistNameField.value = "";
	songTitleField.value = "";
	albumTitleField.value= "";


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













