var searchbox = document.getElementById('search');

//Uncomment line below to focus on serach on load

// $('#search').focus();
searchbox.onkeypress = function(e) {
	if (e.keyCode === 13) {
		search();
	}
}

function search() {
	var query = searchbox.value;
	window.location = 'https://google.co.uk/search?q=' + query;
}

function clear() {
	searchbox.val = null;
	searchbox.blur();
}