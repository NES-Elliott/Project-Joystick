$(document).ready(function(){
	console.log("ready")
	console.log(sessionStorage.getItem("ID"));
	$.ajax({
		url: "https://rcb-igdb.herokuapp.com/" + JSON.stringify(sessionStorage.getItem("ID")),
		method: "GET",
	}).done(function(response){
		console.log(response);

	})
});