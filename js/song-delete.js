console.log( "song-delete.js" );


let songContainer = document.getElementById("song-list-div");
console.log( "songContainer", songContainer );

songContainer.addEventListener("click", (event) => {
	let clickTarget = event.target;
	// console.log( "event.target", event.target );
	let songSelect = clickTarget.closest("section");
	// console.log( "songSelect", songSelect );
	let parentDiv = songSelect.parentNode;
	// console.log( "parentDiv", parentDiv );

	if (clickTarget.className === "delete-song-btn") {
		parentDiv.removeChild(songSelect);
	}

});




