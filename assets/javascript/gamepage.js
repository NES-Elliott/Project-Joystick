$(document).ready(function(){
	console.log("ready")
	console.log(sessionStorage.getItem("ID"));
	$.ajax({
		url: "https://rcb-igdb.herokuapp.com/games/" + JSON.stringify(sessionStorage.getItem("ID")),
		method: "GET",
	}).done(function(response){
		console.log(response);

	})
});