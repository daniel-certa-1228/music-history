console.log( "song-delete.js" );


let songContainer = document.getElementById("song-list-div");


songContainer.addEventListener("click", (event) => {
	let clickTarget = event.target;
	let songSelect = clickTarget.closest("section");
	let parentDiv = songSelect.parentNode;

	if (clickTarget.className === "delete-song-btn") {
		parentDiv.removeChild(songSelect);
	}

});




