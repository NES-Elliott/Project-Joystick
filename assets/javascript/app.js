$(document).ready(function(){
	var platform;
	$(".carousel-item .active").on("click", function(event) {
		event.preventDefault()

		platform = $(this).val()
		console.log(platform)
		window.location.href = "gamepage.html?"+ platform + "=";
		var searchCon = window.location.search;
		
		console.log(searchCon);
		//var platform = "playstation";
	
	 });

	
	var searchCon = window.location.search
	// .replace(/\?search=/g, "/search/");
	// searchCon.replace(/\?/g, "/ /");
	// searchCon.replace(/\=/g, "/ /");
	searchCon = searchCon.replace(/\?/g, "");
		
		console.log(searchCon);

	console.log(platform)
	console.log('working')
	var queryURL = "https://rcb-igdb.herokuapp.com/platform/" + searchCon;

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		console.log(response);
	})
});