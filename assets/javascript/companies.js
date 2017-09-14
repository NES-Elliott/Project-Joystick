$(document).ready(function(){
	var platform = "playstation";
	var queryURL = "https://rcb-igdb.herokuapp.com/platform/" + platform;

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		for (var i = 0; i < response.body[0].games.length; i++) {
			console.log(response.body[0].games[i]);
		}
	})

	var requestObj = {
    gameIds: [1185].join() 
 	}
	$.ajax({
		url: "https://rcb-igdb.herokuapp.com/games/" + JSON.stringify(requestObj.gameIds),
		method: "GET",
	}).done(function(response){
		console.log(response)
	})

	$("#test-button").on("click", function() {
		
	})
});