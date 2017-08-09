console.log( "event-listeners.js" );

$(document).ready(function() {
//This handles the different views////////////////////////
	let profileLink = document.getElementById("profileViewLink");
	{
		SongSpace.listView = () => {

			$("#control-panel").removeClass('hidden');
			$("#song-list-div").removeClass('hidden');
			$("#add-music").addClass("hidden");
		},

		SongSpace.addView = () => {

			$("#add-music").removeClass("hidden");
			$("#control-panel").addClass('hidden');
			$("#song-list-div").addClass('hidden');
		}

	}

	$("#addViewLink").click(function() {
		event.preventDefault();
		SongSpace.addView();
	})  

	$("#listViewLink").click(function() {
		event.preventDefault();
		SongSpace.listView();
	})

})  //END DOCUMENT READY