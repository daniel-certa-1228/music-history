console.log( "event-listeners.js" );

//This handles the different views////////////////////////
let addMusic = document.getElementById("add-music");
let controlPanel = document.getElementById("control-panel");
let songDiv = document.getElementById("song-list-div");	
let listLink = document.getElementById("listViewLink");
let addLink = document.getElementById("addViewLink");
let profileLink = document.getElementById("profileViewLink");
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

