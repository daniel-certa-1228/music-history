console.log( "songs.js");

// Use JavaScript arrays, loops, and innerHTML to show the music you love.
// Use JavaScript to create a list of songs in the index.html file for your Music History project. Download the songs.js file, which contains an array of strings with song information.

// DONE Add one song to the beginning and the end of the array.
// DONE Loop over the array, and remove any words or characters that obviously don't belong.
// DONE Find and replace the > character in each item with a - character.
// Add each string to the DOM in index.html in the main content area.

//provided code
let songs = [];
let correctedSongs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//my code starts here
songs.unshift("The Song Is You > by Frank Sinatra on the album Trilogy");
songs.push("Mack The Knife > by Ella Fitzgerald on the album Ella In Berlin")

// console.log( "songs", songs );

function correctSongs() {
		correctedSongs.length = 0;
		for (let i = 0; i < songs.length; i++) {
		let newTitle = songs[i];
		newTitle = newTitle.replace(/>/gi, "-");
		newTitle = newTitle.replace(/@/gi, "");
		newTitle = newTitle.replace(/\*/gi, "");
		newTitle = newTitle.replace(/\(/gi, "");
		newTitle = newTitle.replace(/\!/gi, "");
		// console.log( "newTitle", newTitle );
		correctedSongs.push(newTitle)
	}

}

correctSongs();

// console.log( "correctedSongs", correctedSongs );
function outputSongs() {
	let songContainer = document.getElementById('song-list-div');
	songContainer.innerHTML="";

	for (let j = 0; j < correctedSongs.length; j++) {
		let songList = `<p class="song-display-string">${correctedSongs[j]}</p>`
		songContainer.innerHTML += songList;
	}

}

outputSongs();











